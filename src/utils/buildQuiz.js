import { EXAMS } from "../data/globalTests";
import { parseQuestionsFromExamHtml } from "./parser";
import { normalizeQuestions } from "./normalizeQuestions";
import { QUESTION_BANK } from "../data/questionBank";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

function buildFromExam(exam) {
    let questions = parseQuestionsFromExamHtml(exam.rawHtml);
    questions = normalizeQuestions(questions);
    return questions;
}

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

        // 1️⃣ filtrar por categoría
        const pool = QUESTION_BANK.filter((q) =>
            categoryIds.includes(q.category)
        );

        if (pool.length === 0) return [];

        // 2️⃣ barajar
        const shuffled = shuffle(pool);

        // 3️⃣ limitar número
        return shuffled.slice(0, numQuestions);
    },
};

export default buildQuiz;
