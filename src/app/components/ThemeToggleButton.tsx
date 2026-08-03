"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SunIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.464A1 1 0 106.465 13.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414-8.486l-.707-.707a1 1 0 00-1.414 1.414L5.05 6.464a1 1 0 101.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-7 w-14 shrink-0 rounded-full bg-gray-200 dark:bg-gray-700" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-7 w-14 shrink-0 rounded-full bg-gray-200 p-0.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-gray-700"
    >
      <SunIcon className="pointer-events-none absolute left-1.5 top-1.5 h-4 w-4 text-amber-500" />
      <MoonIcon className="pointer-events-none absolute right-1.5 top-1.5 h-4 w-4 text-slate-400" />
      <span
        className={`block h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
}
