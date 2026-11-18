import React from 'react';
import { Globe2, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ProfileSection: React.FC = () => {
  const { profile, languages } = PORTFOLIO_DATA;

  return (
    <section
      id="profile"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#FAF9F6] border-t border-black/8 overflow-hidden"
    >
      {/* Subtle background watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 left-[-1vw] font-serif font-bold text-[15vw] lg:text-[10vw] leading-none text-[#EFECE4]"
      >
        Profile
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Full Profile Statement */}
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[1.5px] bg-[#EAAE0F]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#5C5952]">
                02 · Profile Overview
              </span>
            </div>
            <h2 className="mt-3 font-serif font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-[#101010]">
              About Me
            </h2>

            <div className="mt-8 relative pl-6 sm:pl-8 border-l-2 border-[#101010]">
              <span
                aria-hidden="true"
                className="font-serif text-4xl font-black text-[#EAAE0F] leading-none block mb-2"
              >
                &ldquo;
              </span>
              <p className="text-base sm:text-[1.06rem] leading-[1.85] text-[#22211E]">
                {profile.statement}
              </p>
            </div>

            {/* Target Roles */}
            <div className="mt-8">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5C5952] mb-3">
                Focus Areas &amp; Target Roles:
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {profile.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center gap-2 rounded-full bg-[#101010] px-4 py-1.5 text-xs font-semibold text-white shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EAAE0F]" />
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Locations Pill Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#5C5952]">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-black/8 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#EAAE0F]" />
                <span>Bengaluru, Karnataka</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-black/8 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#EAAE0F]" />
                <span>Anantnag, Verinag (J&amp;K)</span>
              </div>
            </div>
          </Reveal>

          {/* Spoken Languages Card */}
          <Reveal className="lg:col-span-5" delayMs={120}>
            <div className="rounded-2xl bg-[#F3F2EE] border border-black/10 p-7 sm:p-9 shadow-[0_12px_36px_rgba(16,16,16,0.04)]">
              <div className="flex items-center justify-between pb-5 border-b border-black/10">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#5C5952]">
                    Communication
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-[#101010]">
                    Languages
                  </h3>
                </div>
                <span className="w-10 h-10 rounded-full bg-[#101010] text-[#EAAE0F] flex items-center justify-center">
                  <Globe2 className="w-4 h-4" />
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {languages.map((lang) => (
                  <div key={lang.name} className="group">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-[#101010]">
                        {lang.name}
                      </span>
                      <span className="text-xs font-medium tracking-wider uppercase text-[#5C5952]">
                        {lang.level}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-black/8 overflow-hidden">
                      <div
                        style={{ width: `${lang.proficiencyPercent}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-[#101010] via-[#101010] to-[#EAAE0F] transition-all duration-700"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
