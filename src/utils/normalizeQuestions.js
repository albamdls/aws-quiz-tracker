// src/utils/normalizeQuestions.js

// Fisher–Yates (mejor que sort(() => Math.random()-0.5))
function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Baraja options SIN cambiar la respuesta correcta real:
 * - Guarda el índice original de cada opción
 * - Baraja
 * - Recalcula correct con el nuevo índice
 */
export function shuffleOptionsKeepCorrect(questionObj) {
    const options = questionObj?.options ?? [];
    const correct = questionObj?.correct ?? [];

    if (!Array.isArray(options) || options.length < 2) return questionObj;
    if (!Array.isArray(correct) || correct.length < 1) return questionObj;

    // Guardamos (texto, índice original)
    const tagged = options.map((text, oldIndex) => ({ text, oldIndex }));

    // Barajamos
    shuffleInPlace(tagged);

    // Nuevo array de opciones
    const newOptions = tagged.map(x => x.text);

    // Mapa oldIndex -> newIndex
    const oldToNew = new Map();
    tagged.forEach((x, newIndex) => oldToNew.set(x.oldIndex, newIndex));

    // Recalcular correct
    const newCorrect = correct
        .map(oldIdx => oldToNew.get(oldIdx))
        .filter((v) => typeof v === "number")
        .sort((a, b) => a - b);

    return {
        ...questionObj,
        options: newOptions,
        correct: newCorrect,
        multipleAnswers: (newCorrect.length > 1),
    };
}

/**
 * Aplica shuffleOptionsKeepCorrect a todas las preguntas
 */
export function normalizeQuestions(questions) {
    return (questions ?? []).map(shuffleOptionsKeepCorrect);
}

/**
 * (Opcional) Evita que “muchas” acaben con correct en 0/1.
 * Importante:
 * - NO cambia qué opción es correcta, solo vuelve a barajar hasta
 *   que la/s correctas no caigan en posiciones “demasiado frecuentes”.
 *
 * target: posiciones que quieres “evitar” (por defecto 0 y 1)
 * maxTries: reintentos para recolocar una pregunta
 */
export function rebalanceCorrectPositions(
    questions,
    { avoidPositions = [0, 1], maxTries = 6 } = {}
) {
    const out = [];

    for (const q of (questions ?? [])) {
        let candidate = q;

        // Si ya no cae en posiciones evitadas, ok
        const isBad = candidate.correct?.some(i => avoidPositions.includes(i));

        if (!isBad) {
            out.push(candidate);
            continue;
        }

        // Si cae en posiciones evitadas, reintenta barajar unas veces
        let tries = 0;
        while (tries < maxTries) {
            const next = shuffleOptionsKeepCorrect(q);
            const stillBad = next.correct?.some(i => avoidPositions.includes(i));
            candidate = next;

            if (!stillBad) break;
            tries++;
        }

        out.push(candidate);
    }

    return out;
}
