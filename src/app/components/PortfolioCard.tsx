"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "../data/projects";

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const { locale, t } = useLanguage();
  const content = project[locale];

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:border-gray-600 dark:bg-[#1a3044]">
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={project.image}
          alt={content.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            {t.portfolio.featured}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold">{content.title}</h3>
          <span className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium dark:bg-gray-700">
            {t.portfolio.categories[project.category]}
          </span>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {content.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs dark:border-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            {t.portfolio.viewGithub} →
          </a>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              {t.portfolio.viewWebsite} →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
