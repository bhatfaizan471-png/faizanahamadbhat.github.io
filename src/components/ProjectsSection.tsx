import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  Github,
  Hammer,
  Trophy,
  X,
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ProjectsSection: React.FC = () => {
  const { projects, currentlyBuilding } = PORTFOLIO_DATA;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#FAF9F6] border-t border-black/8 overflow-hidden"
    >
      {/* Subtle section watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 left-[-1vw] font-serif font-bold text-[15vw] lg:text-[10vw] leading-none text-[#EFECE4]"
      >
        Projects
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-[1.5px] bg-[#EAAE0F]" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#5C5952]">
                  04 · Selected Work
                </span>
              </div>
              <h2 className="mt-3 font-serif font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-[#101010]">
                Built Projects
              </h2>
            </div>
            <p className="text-sm text-[#5C5952] max-w-md">
              Completed systems with live demos, full source code, and measurable engineering learning.
            </p>
          </div>
        </Reveal>

        {/* 4 Main Projects Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-7">
          {projects.map((project, idx) => {
            const isDark = idx % 2 === 0;
            return (
              <Reveal key={project.id} delayMs={idx * 80}>
                <article
                  className={`group h-full rounded-2xl p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between border ${
                    isDark
                      ? 'bg-[#101010] text-white border-[#101010] shadow-[0_22px_52px_rgba(16,16,16,0.14)] hover:-translate-y-1'
                      : 'bg-[#F3F2EE] text-[#101010] border-black/10 shadow-[0_12px_34px_rgba(16,16,16,0.05)] hover:border-black/25 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <span
                          aria-hidden="true"
                          className={`h-10 shrink-0 ${
                            isDark
                              ? 'accent-bar-vertical-light'
                              : 'accent-bar-vertical'
                          }`}
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-condensed text-sm font-bold tracking-[0.18em] uppercase text-[#EAAE0F]">
                              Project {project.index}
                            </span>
                            {project.isPrizeWinner && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#EAAE0F]/20 text-[#EAAE0F] border border-[#EAAE0F]/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                                <Trophy className="w-3 h-3" />
                                <span>Prize Winner</span>
                              </span>
                            )}
                          </div>
                          <p
                            className={`text-xs font-medium mt-0.5 ${
                              isDark ? 'text-white/60' : 'text-[#5C5952]'
                            }`}
                          >
                            {project.category}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                          isDark
                            ? 'bg-white/10 text-[#EAAE0F]'
                            : 'bg-[#101010] text-[#EAAE0F]'
                        }`}
                      >
                        <FolderGit2 className="w-4 h-4" />
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-bold leading-tight">
                      {project.title}
                    </h3>

                    <p
                      className={`mt-4 text-sm sm:text-[15px] leading-[1.75] ${
                        isDark ? 'text-white/80' : 'text-[#2D2B27]'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-current/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full px-3.5 py-1 text-xs font-semibold ${
                            isDark
                              ? 'bg-white/10 text-white'
                              : 'bg-white text-[#101010] border border-black/10'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live demo for ${project.title}`}
                          className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.12em] uppercase transition-colors ${
                            isDark
                              ? 'text-[#EAAE0F] hover:text-white'
                              : 'text-[#101010] hover:text-[#B58206]'
                          }`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open GitHub repository for ${project.title}`}
                          className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.12em] uppercase transition-colors ${
                            isDark
                              ? 'text-white/75 hover:text-white'
                              : 'text-[#5C5952] hover:text-[#101010]'
                          }`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className={`inline-flex items-center gap-1 text-xs font-bold tracking-[0.12em] uppercase transition-colors cursor-pointer ${
                          isDark
                            ? 'text-white/60 hover:text-[#EAAE0F]'
                            : 'text-[#5C5952] hover:text-[#101010]'
                        }`}
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Currently Building / Active Development Card */}
        <div className="mt-12">
          <Reveal delayMs={100}>
            <article className="rounded-2xl bg-gradient-to-r from-[#101010] via-[#1a1917] to-[#121212] text-white p-7 sm:p-9 border border-white/10 shadow-[0_16px_44px_rgba(0,0,0,0.18)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAAE0F]/20 text-[#EAAE0F] border border-[#EAAE0F]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                      <Hammer className="w-3.5 h-3.5" />
                      <span>Currently Building</span>
                    </span>
                    <span className="text-xs font-medium text-white/50">
                      {currentlyBuilding.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {currentlyBuilding.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-white/75">
                    {currentlyBuilding.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {currentlyBuilding.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:border-l lg:border-white/10 lg:pl-8 flex flex-col justify-between space-y-4 shrink-0">
                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">
                      Key Highlights:
                    </p>
                    {currentlyBuilding.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EAAE0F] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#EAAE0F]">
                    <span>In Active Prototyping</span>
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>

      {/* Interactive Project Summary Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[#FAF9F6] text-[#101010] border border-black/10 p-7 sm:p-9 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-black/10">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5C5952]">
                  <span className="w-3.5 h-[1.5px] bg-[#EAAE0F]" />
                  <span>Project {activeProject.index}</span>
                  {activeProject.isPrizeWinner && (
                    <span className="text-[#B58206] font-bold">· Competition Winner</span>
                  )}
                </div>
                <h3
                  id="project-modal-title"
                  className="mt-2 font-serif text-2xl sm:text-3xl font-black text-[#101010]"
                >
                  {activeProject.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#5C5952]">
                  {activeProject.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="w-9 h-9 rounded-full bg-black/6 hover:bg-black/12 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <p className="text-sm sm:text-base leading-relaxed text-[#242320]">
                {activeProject.description}
              </p>

              <div className="space-y-3">
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5C5952]">
                  Key Technical Scope &amp; Outcomes
                </p>
                {activeProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#D49B0B] shrink-0 mt-0.5" />
                    <span className="text-[#242320]">{item}</span>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5C5952] mb-2.5">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#101010] text-white px-3.5 py-1 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-black/10 flex flex-wrap items-center gap-3">
                {activeProject.liveDemoUrl && (
                  <a
                    href={activeProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#101010] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#EAAE0F] hover:text-[#101010] transition-colors"
                  >
                    <span>Open Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#101010] hover:bg-black/5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
