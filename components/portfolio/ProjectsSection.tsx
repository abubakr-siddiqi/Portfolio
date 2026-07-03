"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  LAYOUT_MAX_WIDTH_CLASS,
  SECTION_EYEBROW_CLASS,
  SECTION_EYEBROW_TO_CONTENT_CLASS,
} from "./data";
import { PROJECTS } from "./projectsData";

/** Fixed crop box for every project card — same width & height ratio */
const PROJECT_CARD_IMAGE_CLASS =
  "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-white/5";

const PROJECTS_SECTION_RAIL_CLASS = `projects-section-rail impact-section-rail relative z-20 mx-auto flex w-full flex-col items-stretch ${LAYOUT_MAX_WIDTH_CLASS}`;

const PROJECTS_BLOCK_CLASS =
  "projects-section-block mx-auto w-full max-w-5xl self-stretch";

const ACCENT = "#e60000";

/** Vertical side label — one letter per row */
const SIDE_LABEL = "PROJECTS";

const sideLetterClass =
  "font-sans block text-center text-[clamp(2.4rem,7vw,5.4rem)] font-[1000] uppercase leading-[0.88] tracking-tight text-white";

/** White + red side bars share this width */
const SIDE_BAR_WIDTH_CLASS = "w-[clamp(12px,1.8vw,20px)]";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects-section relative w-full border-t border-white/10 bg-black pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-36 lg:pb-36"
    >
      <div
        className="projects-side-rail pointer-events-none absolute inset-y-0 left-2 z-20 hidden h-full w-auto md:left-3 md:flex md:flex-row md:items-stretch lg:left-4"
        role="img"
        aria-label="Projects."
      >
        <div className="projects-side-rail-inner flex h-full w-full flex-row items-stretch gap-2.5 lg:gap-3">
          <div
            className={`relative h-full shrink-0 ${SIDE_BAR_WIDTH_CLASS}`}
            aria-hidden
          >
            <div className="absolute bottom-0 left-0 right-0 h-[92%] min-[940px]:h-[70%] bg-white shadow-[2px_0_14px_rgba(255,255,255,0.35)]" />
          </div>
          <div
            className={`relative h-full shrink-0 ${SIDE_BAR_WIDTH_CLASS}`}
            aria-hidden
          >
            <div className="absolute bottom-0 left-0 right-0 h-[78%] min-[940px]:h-[50%] rounded-[2px] bg-[#e60000]" />
          </div>
          <div className="flex min-h-0 min-w-[clamp(3.25rem,7vw,5rem)] flex-col items-center justify-start gap-3 py-1 mt-8 md:mt-12 md:gap-4 md:py-2 lg:mt-16 lg:gap-5">
            {SIDE_LABEL.split("").map((ch, i) => (
              <span
                key={`projects-side-${i}`}
                className={`${sideLetterClass} w-full rotate-90 scale-x-[1.4] scale-y-[2.15]`}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={PROJECTS_SECTION_RAIL_CLASS}>
        <div className={`projects-section-head ${PROJECTS_BLOCK_CLASS} text-left`}>
          <p className={SECTION_EYEBROW_CLASS} style={{ color: ACCENT }}>
            {"// Projects"}
          </p>
          <h2
            className={`font-sans text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl ${SECTION_EYEBROW_TO_CONTENT_CLASS}`}
          >
            Selected work
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-white/60 md:text-lg">
            Case studies and builds where design systems, performance, and clear
            product goals mattered.
          </p>
        </div>

        <ul
          className={`projects-section-grid ${PROJECTS_BLOCK_CLASS} mt-14 grid w-full list-none grid-cols-1 gap-8 min-[940px]:grid-cols-2 md:mt-16 md:gap-10 lg:mt-20`}
        >
          {PROJECTS.map((project) => (
            <li key={project.slug} className="min-w-0">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition hover:border-white/20 hover:bg-white/5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e60000] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <div className={PROJECT_CARD_IMAGE_CLASS}>
                    {project.cardImage ? (
                      <Image
                        src={project.cardImage}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                        loading="lazy"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center border-b border-white/10 bg-linear-to-br from-white/6 to-white/2">
                        <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/30">
                          Image soon
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-sans text-xl font-semibold text-white md:text-2xl">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition hover:text-[#e60000]"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-white/55 md:text-[0.9375rem]">
                    {project.cardDescription}
                  </p>
                  <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label="Tech stack"
                  >
                    {project.cardTags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-wide text-white/70">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-white transition hover:text-[#ff4d4d]"
                  >
                    View project
                    <ExternalLink
                      className="size-4 opacity-70 transition group-hover:opacity-100"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
