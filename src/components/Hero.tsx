import React, { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail, MapPin, Phone, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal, heroQuote, glanceMetrics } = PORTFOLIO_DATA;
  const [leetcodeCount, setLeetcodeCount] = useState<string>('100+');

  useEffect(() => {
    // Dynamic LeetCode stats fetcher with graceful fallback
    const fetchLeetCode = async () => {
      try {
        const res = await fetch('https://leetcode-stats-api.herokuapp.com/FAIXAN', {
          signal: AbortSignal.timeout(5000),
        });
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.totalSolved === 'number' && data.totalSolved > 0) {
            const solved = data.totalSolved;
            setLeetcodeCount(solved >= 100 ? `${solved}+` : '100+');
          }
        }
      } catch {
        // Keeps verified 100+ fallback
      }
    };
    fetchLeetCode();
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    selector: string
  ) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between bg-[#F3F2EE] overflow-x-clip overflow-y-hidden"
    >
      {/* Atmospheric radial wash mirroring reference studio depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_74%,rgba(16,16,16,0.12)_0%,rgba(16,16,16,0.035)_30%,transparent_60%)]"
      />

      {/* Giant background watermark serif name */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-[14%] sm:top-[15%] lg:top-[17%] left-[-1vw] right-0 overflow-hidden"
      >
        <p className="font-serif font-bold text-[15vw] sm:text-[13vw] lg:text-[10.8vw] leading-none tracking-[-0.02em] text-[#EAE8E1] whitespace-nowrap">
          {personal.watermarkName}
        </p>
      </div>

      {/* Main Hero Canvas */}
      <div className="relative z-10 flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-12 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-6 items-center">
          {/* Left Headline & CTA Column */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 min-w-0">
            <div className="animate-hero-in">
              <h1 className="font-serif font-black text-[#101010] text-[2.15rem] min-[380px]:text-[2.5rem] sm:text-[3.75rem] xl:text-[4.35rem] leading-[1.03] tracking-[-0.025em]">
                {personal.fullName}
              </h1>
              <p className="mt-3 text-[10.5px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#64615A] leading-relaxed">
                {personal.subtitle}
              </p>
            </div>

            {/* Social & Credential Bar matching reference layout */}
            <div className="animate-hero-delay-1 flex flex-wrap items-center gap-3.5 sm:gap-4 pt-0.5 text-[#141414]">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title={`GitHub: ${personal.githubDisplay}`}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/6 transition-colors"
              >
                <Github className="w-[17px] h-[17px]" strokeWidth={2} />
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title={`LinkedIn: ${personal.linkedinDisplay}`}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/6 transition-colors"
              >
                <Linkedin className="w-[17px] h-[17px]" strokeWidth={2} />
              </a>

              <a
                href={personal.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                title={`LeetCode: ${personal.leetcodeDisplay}`}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/6 transition-colors"
              >
                <Code2 className="w-[17px] h-[17px]" strokeWidth={2} />
              </a>

              <a
                href={personal.emailHref}
                aria-label="Send email"
                title={personal.email}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/6 transition-colors"
              >
                <Mail className="w-[17px] h-[17px]" strokeWidth={2} />
              </a>

              <a
                href={personal.phoneHref}
                aria-label="Call phone number"
                title={personal.phone}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/6 transition-colors"
              >
                <Phone className="w-[17px] h-[17px]" strokeWidth={2} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                aria-label="Location"
                title={personal.location}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/6 transition-colors"
              >
                <MapPin className="w-[17px] h-[17px]" strokeWidth={2} />
              </a>

              <span className="hidden sm:inline-block h-4 w-px bg-black/15" aria-hidden="true" />

              {/* Verified Credential Marks */}
              <a
                href="#certifications"
                onClick={(e) => scrollToSection(e, '#certifications')}
                className="inline-flex items-center gap-2 text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] uppercase text-[#141414]/85 hover:text-[#101010] transition-colors"
                title="View verified certifications"
              >
                <span>RED HAT</span>
                <span className="text-black/25">·</span>
                <span>ORACLE</span>
                <span className="text-black/25">·</span>
                <span>CISCO</span>
                <span className="text-black/25">·</span>
                <span>CODECHEF</span>
              </a>
            </div>

            {/* Signature Gold Pill CTA Button */}
            <div className="animate-hero-delay-2 pt-1 flex flex-wrap items-center gap-4">
              <a
                href={personal.resumePath}
                download={personal.resumeFileName}
                className="group inline-flex items-center gap-3.5 rounded-full bg-gradient-to-r from-[#F6BE1E] via-[#EEB010] to-[#E7A609] pl-2 pr-3.5 py-2 shadow-[0_12px_28px_rgba(234,174,15,0.34)] hover:shadow-[0_16px_36px_rgba(234,174,15,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-full bg-[#121212] flex items-center justify-center text-[#F5BD1E] transition-transform duration-300 group-hover:scale-105">
                  <Download className="w-3.5 h-3.5" strokeWidth={2.2} />
                </span>
                <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.14em] uppercase text-[#101010]">
                  Download Resume
                </span>
                <span className="rounded-full bg-[#CA9105]/45 px-2.5 py-0.5 text-[9.5px] font-extrabold tracking-wider uppercase text-[#101010]">
                  PDF
                </span>
              </a>

              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-4 py-2.5 text-xs font-bold tracking-wider uppercase text-[#101010] hover:bg-white hover:border-black/30 transition-all"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Center Editorial Quote Column */}
          <div className="lg:col-span-3 lg:self-end lg:pb-6 animate-hero-delay-2">
            <div className="max-w-md lg:max-w-none">
              <span
                aria-hidden="true"
                className="block font-serif text-[2.5rem] sm:text-[2.75rem] font-black leading-none text-[#101010] mb-1 select-none"
              >
                &ldquo;
              </span>
              <p className="text-[14px] leading-[1.7] text-[#282723] font-normal">
                {heroQuote}
                <span
                  aria-hidden="true"
                  className="inline-block font-serif font-black text-base ml-1 text-[#101010]"
                >
                  &rdquo;
                </span>
              </p>
            </div>
          </div>

          {/* Right Portrait Photo Column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center animate-hero-delay-3">
            <div className="group relative animate-portrait-float">
              {/* Outer architectural offset rings */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full border border-[#101010]/10 pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-full border-t-2 border-r-2 border-[#EAAE0F]/80 border-b border-l border-transparent pointer-events-none rotate-12 transition-transform duration-700 group-hover:rotate-45"
              />

              {/* Circular Portrait Frame */}
              <div className="relative w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] xl:w-[368px] xl:h-[368px] rounded-full overflow-hidden bg-[#E9E6DF] shadow-[0_24px_60px_rgba(16,16,16,0.18)] ring-4 ring-[#F3F2EE]">
                <img
                  src={personal.photoPath}
                  alt={personal.fullName}
                  className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-700 group-hover:scale-[1.06]"
                  onError={(e) => {
                    // Fallback to photo3 if photo.jpeg fails
                    (e.target as HTMLImageElement).src = '/images/profile/photo3.jpg';
                  }}
                />
              </div>

              {/* Academic tag overlapping lower edge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 inline-flex items-center gap-2 rounded-full bg-[#101010] px-3.5 sm:px-4 py-1.5 text-[9px] sm:text-[10px] font-semibold tracking-[0.14em] uppercase text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAAE0F]" />
                <span>B.E. CSE (AI &amp; ML) · Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom "Profile at a glance" Ticker Strip */}
      <div className="relative z-20 w-full flex flex-col lg:flex-row border-t border-black/8">
        {/* Left Solid Black Title Block */}
        <div className="bg-[#050505] text-white px-5 sm:px-10 lg:px-12 py-6 lg:py-7 lg:w-[24%] xl:w-[22%] flex flex-col justify-center shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-4 h-[1.5px] bg-[#EAAE0F]" />
            <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-white/60">
              Class of 2027
            </span>
          </div>
          <h2 className="mt-1.5 font-condensed text-[1.75rem] sm:text-[1.9rem] font-bold tracking-tight leading-none text-white">
            Profile at a glance
          </h2>
        </div>

        {/* Right Metrics Strip with Two-Tone Black+Gold Vertical Bars */}
        <div className="flex-1 bg-gradient-to-r from-[#F3F2EE] via-[#F2F1ED] to-[#E5E2DA] px-5 sm:px-10 lg:px-14 py-6 lg:py-7 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 items-center">
          {glanceMetrics.map((metric) => {
            const isLeetCode = metric.label.toLowerCase().includes('leetcode');
            const displayValue = isLeetCode ? leetcodeCount : metric.value;
            return (
              <div key={metric.label} className="flex items-center gap-3 sm:gap-4 min-w-0">
                <span
                  aria-hidden="true"
                  className="accent-bar-vertical h-11 sm:h-12 shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-condensed text-[1.75rem] sm:text-[2.2rem] font-bold leading-none tracking-tight text-[#101010]">
                    {displayValue}
                    {metric.suffix}
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#64615A] leading-snug">
                    {metric.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
