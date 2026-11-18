import React from 'react';
import {
  Bot,
  Cog,
  Database,
  Filter,
  Laptop,
  LineChart,
  Presentation,
  Send,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Laptop,
  Cog,
  Database,
  Bot,
  LineChart,
  Filter,
  Presentation,
};

export const ServicesSection: React.FC = () => {
  const { services } = PORTFOLIO_DATA;

  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F3F2EE] border-t border-black/8 overflow-hidden"
    >
      {/* Subtle section watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 right-[-2vw] font-serif font-bold text-[15vw] lg:text-[10vw] leading-none text-[#E8E6DF]"
      >
        Services
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-[1.5px] bg-[#EAAE0F]" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#5C5952]">
                  05 · Student Freelancer
                </span>
              </div>
              <h2 className="mt-3 font-serif font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-[#101010]">
                What I Can Help With
              </h2>
            </div>
            <p className="text-sm text-[#5C5952] max-w-lg leading-relaxed">
              Need help with a small project, automation script, or prototype? I turn ideas into clean, practical solutions with a clear and realistic scope.
            </p>
          </div>
        </Reveal>

        {/* 7 Services Grid matching reference styling */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.iconName] || Laptop;
            return (
              <Reveal key={service.id} delayMs={idx * 55}>
                <article className="h-full rounded-2xl bg-[#FAF9F6] border border-black/10 p-7 hover:border-[#101010]/30 hover:shadow-[0_14px_38px_rgba(16,16,16,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 pb-5 border-b border-black/8">
                      <div className="flex items-center gap-3.5">
                        <span
                          aria-hidden="true"
                          className="accent-bar-vertical h-9 shrink-0"
                        />
                        <div>
                          <span className="font-condensed text-xs font-bold tracking-widest uppercase text-[#B58206]">
                            0{idx + 1}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-[#101010]">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <span className="w-9 h-9 rounded-full bg-[#101010] text-[#EAAE0F] flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="w-4 h-4" />
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-[#38352F]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#5C5952]">
                      {service.category}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#101010] hover:text-[#B58206] transition-colors"
                    >
                      <span>Inquire</span>
                      <Send className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
