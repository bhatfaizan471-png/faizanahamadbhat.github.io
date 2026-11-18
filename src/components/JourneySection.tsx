import React from 'react';
import { Award, BookOpen, Calendar, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const JourneySection: React.FC = () => {
  const { education, experience } = PORTFOLIO_DATA;

  return (
    <section
      id="journey"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F3F2EE] border-t border-black/8 overflow-hidden"
    >
      {/* Subtle section watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 right-[-2vw] font-serif font-bold text-[15vw] lg:text-[10vw] leading-none text-[#E8E6DF]"
      >
        Journey
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-2.5">
            <span className="w-4 h-[1.5px] bg-[#EAAE0F]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#5C5952]">
              01 · Education &amp; Background
            </span>
          </div>
          <h2 className="mt-3 font-serif font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-[#101010]">
            Academic Journey
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Education Contrast Card (Black Card) */}
          <Reveal className="lg:col-span-7 flex" delayMs={80}>
            <article className="w-full rounded-2xl bg-[#101010] text-white p-7 sm:p-10 shadow-[0_20px_50px_rgba(16,16,16,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-6 pb-7 border-b border-white/10">
                  <div className="space-y-2.5 max-w-lg">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EAAE0F]">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Formal Education</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-[1.75rem] font-bold leading-snug text-white">
                      {education.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/70">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#EAAE0F]" />
                        {education.institution}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#EAAE0F]" />
                        Graduation: {education.expectedGraduation}
                      </span>
                    </div>
                  </div>

                  {/* Status Callout */}
                  <div className="flex items-center gap-3.5 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
                    <span
                      aria-hidden="true"
                      className="accent-bar-vertical-light h-11 shrink-0"
                    />
                    <div>
                      <p className="font-condensed text-2xl font-bold leading-none text-white">
                        3rd Year
                      </p>
                      <p className="mt-1 text-[11px] text-white/60">
                        {education.statusNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div className="pt-7">
                  <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-white/55">
                    <BookOpen className="w-3.5 h-3.5 text-[#EAAE0F]" />
                    <span>Key Engineering Coursework</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/85 hover:border-[#EAAE0F]/60 hover:text-white transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Practical Background Cream Architectural Card */}
          <Reveal className="lg:col-span-5 flex" delayMs={160}>
            <article className="w-full rounded-2xl bg-[#FAF9F6] border border-black/10 p-7 sm:p-10 shadow-[0_12px_36px_rgba(16,16,16,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-black/10">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#101010] text-[#EAAE0F] px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{experience.context}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-2xl font-bold text-[#101010]">
                      {experience.role}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {experience.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="accent-bar-vertical h-5 shrink-0 mt-1"
                      />
                      <p className="text-sm leading-relaxed text-[#2C2A25]">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Competition Highlight */}
              <div className="mt-8 pt-5 border-t border-black/8 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#101010]">
                  <Award className="w-4 h-4 text-[#D49B0B]" />
                  <span>College Competition Winner</span>
                </div>
                <span className="text-[11px] font-medium text-[#5C5952]">
                  Admission Assistant
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
