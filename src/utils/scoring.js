const scoring = {
    calculate(questions, answers) {
        const correct = questions.filter(q => answers[q.id] === q.correct).length;
        const percentage = Math.round((correct / questions.length) * 100);
        const byDomain = {};
        const byCategory = {};

        questions.forEach(q => {
            const isCorrect = answers[q.id] === q.correct;

            if (!byDomain[q.domain]) {
                byDomain[q.domain] = { total: 0, correct: 0 };
            }
            byDomain[q.domain].total++;
            if (isCorrect) byDomain[q.domain].correct++;

            if (!byCategory[q.category]) {
                byCategory[q.category] = { total: 0, correct: 0 };
            }
            byCategory[q.category].total++;
            if (isCorrect) byCategory[q.category].correct++;
        });

        return { correct, percentage, byDomain, byCategory };
    }
};

export default scoring;