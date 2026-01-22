import { useEffect, useState } from "react";

const KEY = "theme"; // "dark" | "light"

export default function useTheme() {
    const [theme, setTheme] = useState(() => localStorage.getItem(KEY) || "dark");

    useEffect(() => {
        const root = document.documentElement; // <html>
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");

        localStorage.setItem(KEY, theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return { theme, toggleTheme };
}
