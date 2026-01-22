import { EXAMS } from "../data/globalTests";
import { parseQuestionsFromExamHtml } from "./parser";
import { normalizeQuestions } from "./normalizeQuestions";
import { QUESTION_BANK } from "../data/questionBank";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

function buildFromExam(exam) {
    let questions = parseQuestionsFromExamHtml(exam.rawHtml, { examId: exam.id });
    questions = normalizeQuestions(questions);
    return questions;
}

// ✅ Cache simple para no parsear/normalizar cada vez
let ALL_CACHE = null;

const buildQuiz = {
    // =====================
    // GLOBAL TESTS
    // =====================
    globalByExamId(examId) {
        const exam = EXAMS.find((e) => String(e.id) === String(examId));
        if (!exam) return [];

        return shuffle(buildFromExam(exam));
    },

    // =====================
    // CATEGORY TESTS
    // =====================
    byCategories(categoryIds = [], numQuestions = 10) {
        if (!Array.isArray(categoryIds) || categoryIds.length === 0) {
            return [];
        }

        const pool = QUESTION_BANK.filter((q) => categoryIds.includes(q.category));
        if (pool.length === 0) return [];

        return shuffle(pool).slice(0, numQuestions);
    },

    // =====================
    // ✅ ALL QUESTIONS (para modo fallos)
    // =====================
    all() {
        if (ALL_CACHE) return ALL_CACHE;

        // 1) global: parsear TODOS los exams
        const globalAll = EXAMS.flatMap((exam) => buildFromExam(exam));

        // 2) categories: banco directo
        const categoryAll = Array.isArray(QUESTION_BANK) ? QUESTION_BANK : [];

        // 3) juntar + deduplicar por id (IMPORTANTÍSIMO que exista id)
        const map = new Map();
        [...globalAll, ...categoryAll].forEach((q) => {
            if (!q || q.id == null) return;
            map.set(q.id, q);
        });

        ALL_CACHE = Array.from(map.values());
        return ALL_CACHE;
    },
};

export default buildQuiz;
