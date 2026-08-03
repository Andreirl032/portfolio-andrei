"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "../data/projects";

interface PortfolioCardProps {
  project: Project;
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PrivateRepositoryLabel({ label }: { label: string }) {
  return (
    <span className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-400 sm:text-sm">
      <GitHubIcon className="h-3.5 w-3.5 shrink-0 opacity-60 sm:h-4 sm:w-4" />
      <LockIcon className="h-3 w-3 shrink-0 opacity-80 sm:h-3.5 sm:w-3.5" />
      <span className="italic">{label}</span>
    </span>
  );
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const { locale, t } = useLanguage();
  const content = project[locale];

  const isPortrait = project.imageAspect === "portrait";
  const imageFit = project.imageFit ?? "cover";

  return (
    <article className="card-hover theme-transition group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm dark:border-gray-600 dark:bg-[#1a3044]">
      {project.featured && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white sm:px-3 sm:py-1">
          {t.portfolio.featured}
        </span>
      )}

      {isPortrait ? (
        <div className="relative flex aspect-video w-full items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200/80 dark:from-gray-800 dark:to-gray-900/80">
          <div className="rounded-[1rem] border-2 border-gray-700 bg-gray-800 p-0.5 shadow-md dark:border-gray-500 sm:rounded-[1.1rem] sm:border-[2.5px] sm:p-1">
            <div className="overflow-hidden rounded-[0.75rem] bg-black sm:rounded-[0.85rem]">
              <Image
                src={project.image}
                alt={content.title}
                width={180}
                height={372}
                unoptimized
                className="block h-auto w-[96px] sm:w-[104px]"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={project.image}
            alt={content.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`transition-transform duration-300 ${
              imageFit === "contain"
                ? "object-contain p-3 group-hover:scale-100"
                : "object-cover group-hover:scale-105"
            }`}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2.5 p-4 sm:gap-3 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold leading-tight sm:text-lg">
            {content.title}
          </h3>
          <span className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-medium dark:bg-gray-700 sm:text-xs">
            {t.portfolio.categories[project.category]}
          </span>
        </div>

        <p className="flex-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
          {content.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 px-2 py-0.5 text-[10px] dark:border-gray-600 sm:px-2.5 sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-1 sm:gap-3 sm:pt-2">
          {project.privateRepository ? (
            <PrivateRepositoryLabel label={t.portfolio.privateRepository} />
          ) : (
            project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:underline dark:text-blue-400 sm:text-sm"
              >
                <GitHubIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {t.portfolio.viewGithub} →
              </a>
            )
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400 sm:text-sm"
            >
              {t.portfolio.viewWebsite} →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
