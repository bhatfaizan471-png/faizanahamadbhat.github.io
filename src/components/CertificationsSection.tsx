import React, { useEffect, useState } from 'react';
import { Award, ExternalLink, Eye, ShieldCheck, X } from 'lucide-react';
import { Certification, PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

const ISSUER_FILTERS = [
  'All',
  'Red Hat',
  'Oracle',
  'Cisco',
  'CodeChef',
  'IBM',
] as const;

export const CertificationsSection: React.FC = () => {
  const [selectedIssuer, setSelectedIssuer] = useState<string>('All');
  const [previewCert, setPreviewCert] = useState<Certification | null>(null);
  const { certifications } = PORTFOLIO_DATA;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewCert(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filtered =
    selectedIssuer === 'All'
      ? certifications
      : certifications.filter((c) => c.issuerGroup === selectedIssuer);

  return (
    <section
      id="certifications"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F3F2EE] border-t border-black/8 overflow-hidden"
    >
      {/* Subtle section watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 right-[-2vw] font-serif font-bold text-[14vw] lg:text-[9.5vw] leading-none text-[#E8E6DF]"
      >
        Credentials
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-[1.5px] bg-[#EAAE0F]" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#5C5952]">
                  06 · Credentials &amp; Achievements
                </span>
              </div>
              <h2 className="mt-3 font-serif font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-[#101010]">
                Verified Certificates
              </h2>
              <p className="mt-2 text-sm text-[#5C5952] max-w-xl">
                Verified industry credentials and completion awards demonstrating practical knowledge across AI, Java, Python, C, and Databases.
              </p>
            </div>

            {/* Filter by Issuer */}
            <div
              role="tablist"
              aria-label="Filter certifications by issuer"
              className="flex flex-wrap gap-2"
            >
              {ISSUER_FILTERS.map((issuer) => {
                const isActive = selectedIssuer === issuer;
                return (
                  <button
                    key={issuer}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedIssuer(issuer)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#101010] text-white shadow-md'
                        : 'bg-white/85 text-[#3E3C37] border border-black/10 hover:bg-white'
                    }`}
                  >
                    {issuer}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* 8 Certificates Grid matching reference design */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((cert, idx) => {
            const isPdf = cert.imagePath.endsWith('.pdf');
            return (
              <Reveal key={cert.id} delayMs={idx * 50}>
                <article
                  onClick={() => setPreviewCert(cert)}
                  className="group h-full rounded-2xl bg-[#FAF9F6] border border-black/10 p-6 hover:border-[#101010]/30 hover:shadow-[0_16px_40px_rgba(16,16,16,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101010] px-3 py-1 text-[10px] font-bold tracking-[0.16em] uppercase text-white shadow-xs">
                        <ShieldCheck className="w-3 h-3 text-[#EAAE0F]" />
                        <span>{cert.issuerGroup}</span>
                      </span>
                      {cert.year && (
                        <span className="font-condensed text-base font-bold text-[#B58206]">
                          {cert.year}
                        </span>
                      )}
                    </div>

                    {/* Thumbnail Preview with hover overlay */}
                    <div className="mt-4 relative w-full h-36 rounded-xl overflow-hidden bg-[#ECE9E2] border border-black/8 flex items-center justify-center">
                      {!isPdf ? (
                        <img
                          src={cert.imagePath}
                          alt={cert.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            // Render fallback if image fails to load
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="p-4 text-center">
                          <span className="font-serif text-lg font-bold text-[#101010]">
                            {cert.issuer}
                          </span>
                          <p className="text-[11px] text-[#5C5952] mt-1 font-medium">
                            Official Verified Certificate
                          </p>
                          <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-[#B58206]">
                            <Award className="w-3 h-3" />
                            PDF Document
                          </span>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#101010]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                        <Eye className="w-4 h-4 text-[#EAAE0F]" />
                        <span>Click to Preview</span>
                      </div>
                    </div>

                    <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-[#101010] group-hover:text-[#B58206] transition-colors">
                      {cert.title}
                    </h3>

                    <p className="mt-1.5 text-xs text-[#5C5952] line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-black/8 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        aria-hidden="true"
                        className="accent-bar-vertical h-5 shrink-0"
                      />
                      <span className="text-xs font-semibold text-[#5C5952] truncate">
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#101010] group-hover:text-[#B58206] inline-flex items-center gap-1 shrink-0">
                      <span>View</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Interactive Certificate Preview Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setPreviewCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] rounded-2xl bg-[#FAF9F6] text-[#101010] border border-black/10 p-6 sm:p-8 shadow-2xl flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/10 shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101010] px-3 py-1 text-[10px] font-bold tracking-[0.16em] uppercase text-white">
                    <ShieldCheck className="w-3 h-3 text-[#EAAE0F]" />
                    <span>{previewCert.issuerGroup}</span>
                  </span>
                  {previewCert.year && (
                    <span className="font-condensed text-sm font-bold text-[#B58206]">
                      {previewCert.year}
                    </span>
                  )}
                </div>
                <h3
                  id="cert-modal-title"
                  className="mt-2 font-serif text-2xl sm:text-3xl font-black text-[#101010]"
                >
                  {previewCert.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5C5952]">
                  {previewCert.issuer} · {previewCert.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                aria-label="Close certificate preview"
                className="w-10 h-10 rounded-full bg-black/6 hover:bg-black/12 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Media Display */}
            <div className="mt-6 flex-1 flex flex-col items-center justify-center">
              {!previewCert.imagePath.endsWith('.pdf') ? (
                <div className="w-full rounded-xl overflow-hidden border border-black/10 bg-white shadow-inner flex items-center justify-center">
                  <img
                    src={previewCert.imagePath}
                    alt={previewCert.title}
                    className="w-full max-h-[60vh] object-contain"
                  />
                </div>
              ) : (
                <div className="w-full rounded-xl border border-black/10 bg-white p-6 shadow-inner flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#101010] text-[#EAAE0F] flex items-center justify-center shadow-md">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-[#101010]">
                      {previewCert.title}
                    </h4>
                    <p className="text-sm text-[#5C5952] mt-1 max-w-md">
                      Verified credential issued by {previewCert.issuer}. Available as an official verification document.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-3 justify-center">
                    <a
                      href={previewCert.pdfPath || previewCert.imagePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#101010] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#EAAE0F] hover:text-[#101010] transition-colors"
                    >
                      <span>Open Document in New Tab</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C5952] shrink-0">
              <span className="font-medium">
                Recipient: <strong>Faizan Ahamad Bhat</strong>
              </span>
              <a
                href={previewCert.pdfPath || previewCert.imagePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#101010] hover:text-[#B58206] transition-colors"
              >
                <span>View Full Size Asset</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
