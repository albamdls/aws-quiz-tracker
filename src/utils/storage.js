const KEY = "aws-stats";

const defaultStats = {
    totalTests: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    byDomain: {},
    byCategory: {},
    history: [],
};

const storage = {
    async getStats() {
        try {
            const raw = localStorage.getItem(KEY);
            return raw ? JSON.parse(raw) : defaultStats;
        } catch {
            return defaultStats;
        }
    },

    async saveStats(stats) {
        try {
            localStorage.setItem(KEY, JSON.stringify(stats));
        } catch (e) {
            console.error("Error saving:", e);
        }
    },
};

export default storage;
