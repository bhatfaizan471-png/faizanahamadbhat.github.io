import React, { useState } from 'react';
import { Brain, Code2, Database, Layers, Lightbulb } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

const CATEGORY_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  programming: Code2,
  'ai-ml': Brain,
  databases: Database,
  tools: Layers,
  'problem-solving': Lightbulb,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { skills } = PORTFOLIO_DATA;

  const filteredCategories =
    selectedCategory === 'all'
      ? skills
      : skills.filter((cat) => cat.id === selectedCategory);

  const totalSkillCount = skills.reduce((sum, s) => sum + s.items.length, 0);

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F3F2EE] border-t border-black/8 overflow-hidden"
    >
      {/* Subtle background watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 right-[-1vw] font-serif font-bold text-[15vw] lg:text-[10vw] leading-none text-[#E8E6DF]"
      >
        Skills
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-[1.5px] bg-[#EAAE0F]" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#5C5952]">
                  03 · Technical Capabilities
                </span>
              </div>
              <h2 className="mt-3 font-serif font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-[#101010]">
                Technical Skills
              </h2>
              <p className="mt-2 text-sm text-[#5C5952] max-w-xl">
                Tools, programming languages, and real-time experience applied to practical software and AI engineering.
              </p>
            </div>

            {/* Interactive Category Filter Pills */}
            <div
              role="tablist"
              aria-label="Filter skills by category"
              className="flex flex-wrap gap-2"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'all'}
                onClick={() => setSelectedCategory('all')}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#101010] text-white shadow-md'
                    : 'bg-white/80 text-[#3E3C37] border border-black/10 hover:bg-white'
                }`}
              >
                All ({totalSkillCount})
              </button>
              {skills.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#101010] text-white shadow-md'
                        : 'bg-white/80 text-[#3E3C37] border border-black/10 hover:bg-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Compact Responsive Multi-Column Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;
            const originalIndex = skills.findIndex((s) => s.id === category.id) + 1;
            return (
              <Reveal key={category.id} delayMs={index * 60}>
                <article className="h-full rounded-2xl bg-[#FAF9F6] border border-black/10 p-7 hover:border-[#101010]/30 hover:shadow-[0_14px_38px_rgba(16,16,16,0.06)] transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 pb-5 border-b border-black/8">
                      <div className="flex items-center gap-3.5">
                        <span
                          aria-hidden="true"
                          className="accent-bar-vertical h-9 shrink-0"
                        />
                        <div>
                          <span className="font-condensed text-xs font-bold tracking-widest uppercase text-[#B58206]">
                            0{originalIndex}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-[#101010]">
                            {category.label}
                          </h3>
                        </div>
                      </div>
                      <span className="w-9 h-9 rounded-full bg-[#101010] text-[#EAAE0F] flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-[#F3F2EE] border border-black/8 px-3 py-1.5 text-xs font-medium text-[#181715] hover:bg-[#101010] hover:text-white hover:border-[#101010] transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
