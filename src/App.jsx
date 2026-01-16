import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import SelectPage from "./pages/Select";
import QuizPage from "./pages/Quiz";
import ResultsPage from "./pages/Results";

import buildQuiz from "./utils/buildQuiz";
import scoring from "./utils/scoring";
import storage from "./utils/storage";

export default function App() {
  const [view, setView] = useState("home");
  const [modality, setModality] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [mode, setMode] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(0);
  const [stats, setStats] = useState({
    totalTests: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    byDomain: {},
    byCategory: {},
    history: [],
  });

  // ✅ Cargar stats desde "sistema externo" (storage)
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const loadedStats = await storage.getStats();
      if (!cancelled) setStats(loadedStats);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleNavigate = (newView, modalityType = null) => {
    setView(newView);
    if (modalityType) setModality(modalityType);
  };

  const handleStartQuiz = (modalityType, itemId, quizMode) => {
    let quizQuestions = [];

    if (modalityType === "global") {
      quizQuestions = buildQuiz.global(12);
    } else if (modalityType === "domain") {
      quizQuestions = buildQuiz.byDomain(itemId, 10);
    } else if (modalityType === "category") {
      quizQuestions = buildQuiz.byCategory(itemId, 10);
    }

    setQuestions(quizQuestions);
    setMode(quizMode);
    setAnswers({});
    setTimer(0);
    setView("quiz");
  };

  const handleFinishQuiz = async (finalAnswers, finalTimer) => {
    const score = scoring.calculate(questions, finalAnswers);

    const newStats = {
      totalTests: stats.totalTests + 1,
      totalQuestions: stats.totalQuestions + questions.length,
      correctAnswers: stats.correctAnswers + score.correct,
      byDomain: { ...stats.byDomain },
      byCategory: { ...stats.byCategory },
      history: [
        ...stats.history,
        {
          date: new Date().toISOString(),
          modality,
          mode,
          score: score.percentage,
          questions: questions.length,
        },
      ],
    };

    Object.entries(score.byDomain).forEach(([domainId, data]) => {
      if (!newStats.byDomain[domainId]) {
        newStats.byDomain[domainId] = { total: 0, correct: 0 };
      }
      newStats.byDomain[domainId].total += data.total;
      newStats.byDomain[domainId].correct += data.correct;
    });

    Object.entries(score.byCategory).forEach(([categoryId, data]) => {
      if (!newStats.byCategory[categoryId]) {
        newStats.byCategory[categoryId] = { total: 0, correct: 0 };
      }
      newStats.byCategory[categoryId].total += data.total;
      newStats.byCategory[categoryId].correct += data.correct;
    });

    await storage.saveStats(newStats);

    setStats(newStats);
    setAnswers(finalAnswers);
    setTimer(finalTimer);
    setView("results");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">

      <Navbar currentView={view} onNavigate={handleNavigate} />

      {view === "home" && <HomePage stats={stats} onNavigate={handleNavigate} />}

      {view === "select" && (
        <SelectPage modality={modality} onBack={() => setView("home")} onStart={handleStartQuiz} />
      )}

      {view === "quiz" && (
        <QuizPage questions={questions} mode={mode} onFinish={handleFinishQuiz} onExit={() => setView("home")} />
      )}

      {view === "results" && (
        <ResultsPage
          questions={questions}
          answers={answers}
          timer={timer}
          mode={mode}
          onExit={() => setView("home")}
        />
      )}
    </div>
  );
}
