import { useEffect, useState } from "react";
import HomePage from "./pages/Home";
import SelectPage from "./pages/Select";
import QuizPage from "./pages/Quiz";
import ResultsPage from "./pages/Results";
import AboutPage from "./pages/About";
import Footer from "./components/Footer";
import LandingPage from "./pages/Landing";
// import Navbar from "./components/Navbar";

import storage from "./utils/storage";
import buildQuiz from "./utils/buildQuiz";
import { calculate } from "./utils/scoring";

import KofiWidget from "./components/KofiWidget";

export default function App() {
  const [page, setPage] = useState("landing"); // landing | home | select | quiz | results | about | map

  const [stats, setStats] = useState({
    totalTests: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    byDomain: {},
    byCategory: {},
    history: [],
  });

  const [modality, setModality] = useState(null); // global | category
  const [mode, setMode] = useState(null); // study | exam
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(0);

  // ✅ NUEVO: para saber qué global exam se hizo
  const [selectedExamId, setSelectedExamId] = useState(null);

  useEffect(() => {
    storage.getStats().then(setStats);
  }, []);

  function navigate(nextPage, payload) {
    if (nextPage === "select") {
      setModality(payload); // global | category
      setPage("select");
      return;
    }
    setPage(nextPage);
  }

  // onStart(modality, selectedIds, mode, numQuestions)
  function handleStart(modality, selectedIds, selectedMode, numQuestions) {
    setMode(selectedMode);

    let qs = [];

    if (modality === "global") {
      setSelectedExamId(selectedIds);
      qs = buildQuiz.globalByExamId(selectedIds);
    }

    if (modality === "category") {
      setSelectedExamId(null);
      qs = buildQuiz.byCategories(selectedIds, numQuestions);
    }

    setQuestions(qs);
    setAnswers({});
    setTimer(0);
    setPage("quiz");
  }

  async function handleFinish(finalAnswers, finalTimer) {
    setAnswers(finalAnswers);
    setTimer(finalTimer);

    const score = calculate(questions, finalAnswers);

    const nextStats = {
      ...stats,
      totalTests: stats.totalTests + 1,
      totalQuestions: stats.totalQuestions + questions.length,
      correctAnswers: stats.correctAnswers + score.correct,
      byCategory: mergeAgg(stats.byCategory, score.byCategory),
      history: [
        {
          date: new Date().toISOString(),
          modality,
          mode,
          examId: modality === "global" ? selectedExamId : null,
          total: questions.length,
          correct: score.correct,
          pct: score.percentage,
        },
        ...(stats.history || []),
      ].slice(0, 50),
    };

    setStats(nextStats);
    await storage.saveStats(nextStats);

    setPage("results");
  }

  function mergeAgg(prev, add) {
    const out = { ...(prev || {}) };
    Object.entries(add || {}).forEach(([k, v]) => {
      if (!out[k]) out[k] = { total: 0, correct: 0 };
      out[k].total += v.total || 0;
      out[k].correct += v.correct || 0;
    });
    return out;
  }

  function goHome() {
    setPage("home");
    setModality(null);
    setMode(null);
    setQuestions([]);
    setAnswers({});
    setTimer(0);
    setSelectedExamId(null);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <KofiWidget />

      {/* <Navbar onNavigate={(p) => setPage(p)} /> */}

      <main className="flex-1">

        {page === "landing" && (
          <LandingPage onGoDashboard={() => setPage("home")} />
        )}

        {page === "home" && (
          <HomePage
            stats={stats}
            onNavigate={(next, payload) => {
              if (next === "select") return navigate("select", payload);
            }}
          />
        )}

        {page === "map" && <MapPage />}

        {page === "select" && (
          <SelectPage
            modality={modality}
            stats={stats}
            onBack={() => setPage("home")}
            onStart={handleStart}
          />
        )}

        {page === "quiz" && (
          <QuizPage
            questions={questions}
            mode={mode}
            onExit={() => setPage("home")}
            onFinish={handleFinish}
          />
        )}

        {page === "results" && (
          <ResultsPage
            questions={questions}
            answers={answers}
            timer={timer}
            mode={mode}
            onExit={goHome}
          />
        )}

        {page === "about" && <AboutPage onBack={() => setPage("home")} />}
      </main>

      <Footer onNavigate={(p) => setPage(p)} />
    </div>
  );

}
