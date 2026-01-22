// src/utils/parser.js

export function parseQuestionsFromExamHtml(olHtml, { examId = "unknown" } = {}) {
    if (!olHtml || !olHtml.trim()) return [];

    // ✅ NUEVO: recorta todo lo que haya después del primer </ol>
    olHtml = sanitizeExamHtml(olHtml);

    const parser = new DOMParser();
    const doc = parser.parseFromString(olHtml, "text/html");

    const ol = doc.querySelector("ol");
    if (!ol) return [];

    const items = Array.from(ol.querySelectorAll(":scope > li"));
    const questions = [];

    for (const li of items) {
        const questionText = getDirectText(li).trim();
        if (!questionText) continue;

        const ul = li.querySelector(":scope > ul");
        if (!ul) continue;

        const optionLis = Array.from(ul.querySelectorAll(":scope > li"));
        const options = optionLis.map(x => x.textContent.trim()).filter(Boolean);

        const correctP = li.querySelector("details p");
        const correctLetters = extractCorrectLetters(correctP?.textContent || "");
        const correctIdx = correctLetters.map(letterToIndex).filter(i => i !== null);

        const multipleAnswers =
            /\(choose\s*(two|2|three|3|four|4)\)/i.test(questionText) ||
            correctIdx.length > 1;

        if (options.length < 2 || correctIdx.length < 1) continue;

        questions.push({
            id: `global_${examId}_${questions.length}`, // 0..49 (estable y único)
            examId,
            question: questionText,
            options,
            correct: correctIdx,
            multipleAnswers
        });
    }

    return questions;
}

// ✅ NUEVO
function sanitizeExamHtml(html) {
    const lower = html.toLowerCase();
    const endOl = lower.indexOf("</ol>");
    if (endOl === -1) return html;
    return html.slice(0, endOl + "</ol>".length);
}

function getDirectText(li) {
    let text = "";
    for (const node of li.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
    }
    return text;
}

function extractCorrectLetters(text) {
    const m = text.match(/correct\s*answer\s*:\s*([A-H](?:\s*,\s*[A-H])*)/i);
    if (!m) return [];
    return m[1].split(",").map(s => s.trim().toUpperCase()).filter(Boolean);
}

function letterToIndex(letter) {
    const map = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7 };
    return Object.prototype.hasOwnProperty.call(map, letter) ? map[letter] : null;
}
