import React, { useEffect, useState } from 'react';
import { Award, ExternalLink, Eye, FileText, ShieldCheck, Sparkles, X } from 'lucide-react';
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
                  06 · Verified Credentials &amp; Certifications
                </span>
              </div>
              <h2 className="mt-3 font-serif font-black text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-[#101010]">
                Interactive Certificates
              </h2>
              <p className="mt-2 text-sm text-[#5C5952] max-w-xl">
                Tap or click any certificate card to open its full credential view, course completion record, and verified badges.
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
                        : 'bg-white/85 text-[#3E3C37] border border-black/10 hover:bg-white active:scale-95'
                    }`}
                  >
                    {issuer}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Responsive Multi-Column Grid (1 col on mobile, 2 col on tablet, 4 col on desktop) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((cert, idx) => {
            const isPdf = cert.imagePath.endsWith('.pdf');
            return (
              <Reveal key={cert.id} delayMs={idx * 45}>
                <article
                  role="button"
                  tabIndex={0}
                  onClick={() => setPreviewCert(cert)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setPreviewCert(cert);
                    }
                  }}
                  aria-label={`Open certificate card for ${cert.title}`}
                  className="cert-card-interactive group h-full rounded-2xl bg-[#FAF9F6] border border-black/10 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle top gold accent trim */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EAAE0F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101010] px-3 py-1 text-[10px] font-bold tracking-[0.14em] uppercase text-white shadow-xs">
                        <ShieldCheck className="w-3 h-3 text-[#EAAE0F]" />
                        <span>{cert.issuerGroup}</span>
                      </span>
                      {cert.year && (
                        <span className="font-condensed text-sm sm:text-base font-bold text-[#B58206]">
                          {cert.year}
                        </span>
                      )}
                    </div>

                    {/* Interactive 3D Card Thumbnail with Peek Effect */}
                    <div className="mt-4 relative w-full h-40 sm:h-36 rounded-xl overflow-hidden bg-[#ECE9E2] border border-black/8 flex items-center justify-center shadow-inner">
                      {!isPdf ? (
                        <img
                          src={cert.imagePath}
                          alt={cert.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108 group-hover:-translate-y-1"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="p-4 text-center flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
                          <span className="w-10 h-10 rounded-full bg-[#101010] text-[#EAAE0F] flex items-center justify-center mb-2 shadow-xs">
                            <FileText className="w-5 h-5" />
                          </span>
                          <span className="font-serif text-base font-bold text-[#101010] leading-tight">
                            {cert.issuer}
                          </span>
                          <p className="text-[10.5px] text-[#5C5952] mt-0.5 font-medium">
                            Official Verified Certificate
                          </p>
                        </div>
                      )}

                      {/* Card Open Overlay Pill */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end pb-3 gap-1">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAAE0F] text-[#101010] px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-wider shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Tap to Open Card</span>
                        </span>
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

                    <span className="text-xs font-bold text-[#101010] group-hover:text-[#B58206] inline-flex items-center gap-1.5 shrink-0 transition-transform group-hover:translate-x-0.5">
                      <span>Open</span>
                      <Eye className="w-3.5 h-3.5 text-[#EAAE0F]" />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* 3D Certificate Folio / Card Opening Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 animate-card-backdrop"
          onClick={() => setPreviewCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="animate-card-open w-full max-w-3xl max-h-[92vh] rounded-3xl bg-[#FAF9F6] text-[#101010] border-2 border-black/15 shadow-[0_32px_80px_rgba(0,0,0,0.45)] p-5 sm:p-8 flex flex-col overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Folio Ribbon Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/10 shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101010] px-3 py-1 text-[10px] font-bold tracking-[0.16em] uppercase text-white shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#EAAE0F]" />
                    <span>{previewCert.issuerGroup}</span>
                  </span>
                  {previewCert.year && (
                    <span className="font-condensed text-sm sm:text-base font-bold text-[#B58206]">
                      {previewCert.year}
                    </span>
                  )}
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10.5px] font-bold text-[#5C5952] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#EAAE0F]" />
                    <span>Verified Credential</span>
                  </span>
                </div>
                <h3
                  id="cert-modal-title"
                  className="mt-2.5 font-serif text-2xl sm:text-3xl font-black text-[#101010] leading-tight"
                >
                  {previewCert.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5C5952] leading-relaxed">
                  {previewCert.issuer} · {previewCert.description}
                </p>
              </div>

              {/* Large Touch-Friendly Close Button */}
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                aria-label="Close certificate card"
                className="w-11 h-11 rounded-full bg-black/6 hover:bg-black/15 active:scale-90 flex items-center justify-center transition-all cursor-pointer shrink-0 text-[#101010]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Display (Framed like a physical certificate card) */}
            <div className="mt-5 flex-1 flex flex-col items-center justify-center">
              {!previewCert.imagePath.endsWith('.pdf') ? (
                <div className="w-full rounded-2xl overflow-hidden border border-black/15 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex items-center justify-center p-2 sm:p-3 relative group">
                  <img
                    src={previewCert.imagePath}
                    alt={previewCert.title}
                    className="w-full max-h-[58vh] sm:max-h-[62vh] object-contain rounded-xl"
                  />
                </div>
              ) : (
                <div className="w-full rounded-2xl border border-black/15 bg-white p-7 sm:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-[#101010] text-[#EAAE0F] flex items-center justify-center shadow-lg">
                    <Award className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#101010]">
                      {previewCert.title}
                    </h4>
                    <p className="text-sm text-[#5C5952] mt-1.5 max-w-md mx-auto leading-relaxed">
                      Official verified certificate issued to <strong>Faizan Ahamad Bhat</strong> by <strong>{previewCert.issuer}</strong>.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-3 justify-center">
                    <a
                      href={previewCert.pdfPath || previewCert.imagePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#101010] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#EAAE0F] hover:text-[#101010] active:scale-95 transition-all shadow-md"
                    >
                      <span>Open Full PDF in New Tab</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Bar with Recipient Seal & Actions */}
            <div className="mt-5 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5C5952] shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EAAE0F]" />
                <span>
                  Awarded to: <strong className="text-[#101010]">Faizan Ahamad Bhat</strong>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={previewCert.pdfPath || previewCert.imagePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#101010] hover:text-[#B58206] transition-colors"
                >
                  <span>Open Full Asset</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setPreviewCert(null)}
                  className="sm:hidden text-xs font-bold uppercase text-[#101010] bg-black/10 px-3 py-1 rounded-full"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
