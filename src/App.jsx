import { useEffect, useState } from "react";
import HomePage from "./pages/Home";
import SelectPage from "./pages/Select";
import QuizPage from "./pages/Quiz";
import ResultsPage from "./pages/Results";
import AboutPage from "./pages/About";
import Footer from "./components/Footer";
import LandingPage from "./pages/Landing";
import Navbar from "./components/Navbar";
import MapPage from "./pages/Map";
import FailedQuestionsPage from "./pages/FailedQuestionsPage";

import storage from "./utils/storage";
import buildQuiz from "./utils/buildQuiz";
import { calculate } from "./utils/scoring";

import KofiWidget from "./components/KofiWidget";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function App() {
  const [page, setPage] = useState("landing"); // landing | home | select | failed | quiz | results | about | map

  const [stats, setStats] = useState({
    totalTests: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    byDomain: {},
    byCategory: {},
    history: [],
    failed: {
      global: [],
      service: [],
      byCategory: {},
    },
  });

  const [modality, setModality] = useState(null); // global | category | failed
  const [mode, setMode] = useState(null); // study | exam
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(0);

  const [selectedExamId, setSelectedExamId] = useState(null);

  // ✅ NUEVO: recuerda si el test de fallos era global o servicios
  const [failedScope, setFailedScope] = useState(null); // "global" | "service" | null

  useEffect(() => {
    storage.getStats().then((loaded) => {
      const safe = loaded || {};
      setStats({
        totalTests: safe.totalTests || 0,
        totalQuestions: safe.totalQuestions || 0,
        correctAnswers: safe.correctAnswers || 0,
        byDomain: safe.byDomain || {},
        byCategory: safe.byCategory || {},
        history: safe.history || [],
        failed: {
          global: safe.failed?.global || [],
          service: safe.failed?.service || [],
          byCategory: safe.failed?.byCategory || {},
        },
      });
    });
  }, []);

  function navigate(nextPage, payload) {
    if (nextPage === "select") {
      setModality(payload); // global | category
      setPage("select");
      return;
    }
    setPage(nextPage);
  }

  function uniq(arr) {
    return Array.from(new Set(arr));
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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

    setModality(modality);
    setFailedScope(null);

    setQuestions(qs);
    setAnswers({});
    setTimer(0);
    setPage("quiz");
  }

  // ✅ START: modo fallos
  function handleStartFailed(scope, numQuestions) {
    setMode("study");
    setModality("failed");
    setFailedScope(scope);

    const failed = stats.failed || { global: [], service: [] };
    const ids = scope === "global" ? failed.global || [] : failed.service || [];

    const allQuestions = buildQuiz.all();
    const pool = allQuestions.filter((q) => ids.includes(q.id));
    const picked = shuffle(pool).slice(0, Math.min(numQuestions, pool.length));

    setSelectedExamId(null);
    setQuestions(picked);
    setAnswers({});
    setTimer(0);
    setPage("quiz");
  }

  async function handleFinish(finalAnswers, finalTimer) {
    setAnswers(finalAnswers);
    setTimer(finalTimer);

    const score = calculate(questions, finalAnswers);

    // ✅ detectar falladas
    const wrong = questions.filter((q) => {
      const user = finalAnswers[q.id];
      if (user === undefined) return true; // sin responder = fallo
      const correct = Array.isArray(q.correct) ? q.correct : [q.correct];
      const userArr = Array.isArray(user) ? user : [user];
      const a = [...correct].sort().join("|");
      const b = [...userArr].sort().join("|");
      return a !== b;
    });

    const wrongIds = wrong.map((q) => q.id);
    const wrongSet = new Set(wrongIds);
    const correctIds = questions
      .map((q) => q.id)
      .filter((id) => !wrongSet.has(id));

    // ✅ merge failed
    const prevFailed = stats.failed || { global: [], service: [], byCategory: {} };
    const nextFailed = {
      global: Array.isArray(prevFailed.global) ? [...prevFailed.global] : [],
      service: Array.isArray(prevFailed.service) ? [...prevFailed.service] : [],
      byCategory: { ...(prevFailed.byCategory || {}) },
    };

    // ✅ Cuando haces un test normal, añadimos fallos
    if (modality === "global") {
      nextFailed.global = uniq([...nextFailed.global, ...wrongIds]);
    }

    if (modality === "category") {
      nextFailed.service = uniq([...nextFailed.service, ...wrongIds]);

      // opcional: agrupar por categoría si existe en tu modelo
      wrong.forEach((q) => {
        const catId = q.categoryId || q.category || q.catId;
        if (!catId) return;
        const prev = Array.isArray(nextFailed.byCategory[catId])
          ? nextFailed.byCategory[catId]
          : [];
        nextFailed.byCategory[catId] = uniq([...prev, q.id]);
      });
    }

    // ✅ Si el quiz era "failed": al acertar, lo sacas del pool de fallos
    if (modality === "failed" && failedScope) {
      const correctSet = new Set(correctIds);
      if (failedScope === "global") {
        nextFailed.global = (nextFailed.global || []).filter((id) => !correctSet.has(id));
      } else if (failedScope === "service") {
        nextFailed.service = (nextFailed.service || []).filter((id) => !correctSet.has(id));
      }
    }

    const nextStats = {
      ...stats,
      totalTests: stats.totalTests + 1,
      totalQuestions: stats.totalQuestions + questions.length,
      correctAnswers: stats.correctAnswers + score.correct,
      byCategory: mergeAgg(stats.byCategory, score.byCategory),
      failed: nextFailed,
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
    setFailedScope(null);
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <FlickeringGrid
        className="pointer-events-none fixed inset-0 z-0"
        squareSize={4}
        gridGap={6}
        maxOpacity={0.35}
        flickerChance={0.12}
        color="rgb(100,116,139)"
      />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-white/60 dark:bg-slate-950/45" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <KofiWidget />

        <div className="relative z-20">
          <Navbar onNavigate={(p) => setPage(p)} currentPage={page} />
        </div>

        <main className="flex-1">
          {page === "landing" && (
            <LandingPage onGoDashboard={() => setPage("home")} />
          )}

          {page === "home" && (
            <HomePage
              stats={stats}
              onNavigate={(next, payload) => {
                if (next === "select") return navigate("select", payload);
                if (next === "failed") return setPage("failed");
              }}
            />
          )}

          {page === "failed" && (
            <FailedQuestionsPage
              stats={stats}
              onBack={() => setPage("home")}
              onStart={handleStartFailed}
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
    </div>
  );
}
