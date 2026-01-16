import { DOMAINS, QUESTION_BANK } from "../data/config";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const buildQuiz = {
    global(num = 12) {
        const questions = [];

        DOMAINS.forEach((domain) => {
            const count = Math.round(num * domain.weight);

            const qs = shuffle(
                QUESTION_BANK.filter((q) => q.domain === domain.id)
            ).slice(0, count);

            questions.push(...qs);
        });

        return shuffle(questions).slice(0, num);
    },

    byDomain(id, num = 10) {
        return shuffle(
            QUESTION_BANK.filter((q) => q.domain === id)
        ).slice(0, num);
    },

    byCategory(id, num = 10) {
        return shuffle(
            QUESTION_BANK.filter((q) => q.category === id)
        ).slice(0, num);
    },
};

export default buildQuiz;
