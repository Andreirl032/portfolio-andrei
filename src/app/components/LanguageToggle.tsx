"use client";

import { useLanguage } from "./LanguageProvider";
import type { Locale } from "../data/translations";

function BrazilFlag() {
  return (
    <svg
      viewBox="0 0 24 16"
      className="h-3.5 w-5 shrink-0 rounded-[2px]"
      aria-hidden="true"
    >
      <rect width="24" height="16" fill="#009B3A" />
      <polygon points="12,2 21,8 12,14 3,8" fill="#FFDF00" />
      <circle cx="12" cy="8" r="3.2" fill="#002776" />
    </svg>
  );
}

function UsaFlag() {
  return (
    <svg
      viewBox="0 0 24 16"
      className="h-3.5 w-5 shrink-0 rounded-[2px]"
      aria-hidden="true"
    >
      <rect width="24" height="16" fill="#B22234" />
      <rect y="1.23" width="24" height="1.23" fill="#FFF" />
      <rect y="3.69" width="24" height="1.23" fill="#FFF" />
      <rect y="6.15" width="24" height="1.23" fill="#FFF" />
      <rect y="8.62" width="24" height="1.23" fill="#FFF" />
      <rect y="11.08" width="24" height="1.23" fill="#FFF" />
      <rect y="13.54" width="24" height="1.23" fill="#FFF" />
      <rect width="10" height="8.6" fill="#3C3B6E" />
    </svg>
  );
}

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    const next: Locale = locale === "pt" ? "en" : "pt";
    setLocale(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        locale === "pt"
          ? "Idioma atual: Português"
          : "Current language: English"
      }
      className="flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-gray-300 bg-white px-2.5 text-xs font-semibold tracking-wide transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {locale === "pt" ? <BrazilFlag /> : <UsaFlag />}
      <span>{locale === "pt" ? "PT" : "EN"}</span>
    </button>
  );
}
