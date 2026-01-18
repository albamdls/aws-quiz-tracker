function toSortedArray(v) {
    if (v == null) return [];
    const arr = Array.isArray(v) ? v : [v];
    return arr
        .map((x) => Number(x))
        .filter((x) => Number.isFinite(x))
        .sort((a, b) => a - b);
}

export function isCorrectAnswer(question, userAnswer) {
    const ua = toSortedArray(userAnswer);
    const ca = toSortedArray(question?.correct);
    if (ua.length === 0 || ca.length === 0) return false;
    if (ua.length !== ca.length) return false;
    for (let i = 0; i < ua.length; i++) {
        if (ua[i] !== ca[i]) return false;
    }
    return true;
}

export function isAnswered(question, userAnswer) {
    if (question?.multipleAnswers) {
        return Array.isArray(userAnswer) && userAnswer.length > 0;
    }
    return userAnswer !== undefined && userAnswer !== null;
}

export function calculate(questions = [], answers = {}) {
    const byDomain = {};
    const byCategory = {};
    let correct = 0;

    questions.forEach((q) => {
        const ok = isCorrectAnswer(q, answers[q.id]);
        if (ok) correct++;

        if (q.domain) {
            if (!byDomain[q.domain]) byDomain[q.domain] = { total: 0, correct: 0 };
            byDomain[q.domain].total++;
            if (ok) byDomain[q.domain].correct++;
        }

        if (q.category) {
            if (!byCategory[q.category]) byCategory[q.category] = { total: 0, correct: 0 };
            byCategory[q.category].total++;
            if (ok) byCategory[q.category].correct++;
        }
    });

    const percentage = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
    return { correct, percentage, byDomain, byCategory };
}
