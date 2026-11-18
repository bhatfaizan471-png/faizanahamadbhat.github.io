import React from 'react';
import { ArrowUpRight, CheckCircle2, Download, Github, Send, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const WorkTogetherSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="work-together"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#FAF9F6] border-t border-black/8 overflow-hidden"
    >
      {/* Background watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 right-[-1vw] font-serif font-bold text-[14vw] lg:text-[9.5vw] leading-none text-[#ECE9E0]"
      >
        Collaborate
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="rounded-3xl bg-[#101010] text-white p-8 sm:p-12 lg:p-16 shadow-[0_24px_64px_rgba(16,16,16,0.18)] border border-black relative overflow-hidden">
            {/* Atmospheric subtle radial glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(234,174,15,0.18)_0%,transparent_70%)]"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-[#EAAE0F]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Open for Opportunities &amp; Freelance</span>
                </div>

                <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-white leading-[1.1]">
                  Have a project in mind?<br />
                  <span className="text-[#EAAE0F]">Let&rsquo;s work together.</span>
                </h2>

                <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
                  I&rsquo;m actively open to software engineering internships, AI prototypes, Python automation tasks, and custom web development. We can start with a clear scope, fast delivery, and a practical next step.
                </p>

                {/* Scope highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-white/85">
                    <CheckCircle2 className="w-4 h-4 text-[#EAAE0F] shrink-0" />
                    <span>Clear &amp; Realistic Scope</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/85">
                    <CheckCircle2 className="w-4 h-4 text-[#EAAE0F] shrink-0" />
                    <span>Fast Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/85">
                    <CheckCircle2 className="w-4 h-4 text-[#EAAE0F] shrink-0" />
                    <span>Clean Documented Code</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact CTAs */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F6BE1E] via-[#EEB010] to-[#E7A609] px-7 py-3.5 text-xs sm:text-sm font-extrabold tracking-[0.12em] uppercase text-[#101010] hover:brightness-105 transition-all shadow-[0_12px_28px_rgba(234,174,15,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </a>

                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  <span>Explore GitHub Code</span>
                  <ArrowUpRight className="w-4 h-4 text-white/50" />
                </a>

                <a
                  href={personal.resumePath}
                  download={personal.resumeFileName}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase text-white/60 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#EAAE0F]" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
