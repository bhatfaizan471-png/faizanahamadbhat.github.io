import React, { useState } from 'react';
import {
  ArrowUp,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Code2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ContactSection: React.FC = () => {
  const { personal, profile } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(
    null
  );
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');
  const [composeNotice, setComposeNotice] = useState<string | null>(null);

  const copyText = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback
    }
  };

  const handleComposeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !messageText.trim()) {
      setComposeNotice('Please enter your name and message.');
      return;
    }

    const emailSubject = encodeURIComponent(
      subject.trim() || `Portfolio Inquiry from ${senderName.trim()}`
    );
    const bodyLines = [
      `Name: ${senderName.trim()}`,
      senderEmail.trim() ? `Email: ${senderEmail.trim()}` : '',
      '',
      messageText.trim(),
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${personal.email}?subject=${emailSubject}&body=${body}`;
    setComposeNotice('Opening your email client with the drafted message.');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#080808] text-white pt-20 sm:pt-24 pb-10 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Left Direct Contact Info */}
          <Reveal className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-[1.5px] bg-[#EAAE0F]" />
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/60">
                  07 · Contact &amp; Inquiry
                </span>
              </div>
              <h2 className="mt-3 font-serif font-black text-4xl sm:text-5xl tracking-[-0.02em] text-white">
                Let&rsquo;s connect.
              </h2>
              <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-white/70">
                Open to internships, junior developer roles, and practical projects across{' '}
                {profile.targetRoles.slice(0, -1).join(', ')}, and{' '}
                {profile.targetRoles[profile.targetRoles.length - 1]}. Feel free to reach out directly.
              </p>
            </div>

            {/* Direct Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EAAE0F]">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </div>
                  <a
                    href={personal.emailHref}
                    className="mt-1.5 block text-sm font-medium text-white hover:text-[#EAAE0F] transition-colors truncate"
                  >
                    {personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyText(personal.email, 'email')}
                  aria-label="Copy email address"
                  className="w-8 h-8 rounded-lg bg-white/6 hover:bg-white/12 flex items-center justify-center transition-colors text-white/70 hover:text-white shrink-0 cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EAAE0F]">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone</span>
                  </div>
                  <a
                    href={personal.phoneHref}
                    className="mt-1.5 block text-sm font-medium text-white hover:text-[#EAAE0F] transition-colors truncate"
                  >
                    {personal.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyText(personal.phone, 'phone')}
                  aria-label="Copy phone number"
                  className="w-8 h-8 rounded-lg bg-white/6 hover:bg-white/12 flex items-center justify-center transition-colors text-white/70 hover:text-white shrink-0 cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 sm:col-span-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/6 text-[#EAAE0F] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/50">
                      Locations
                    </span>
                    <p className="text-sm font-medium text-white">
                      Bengaluru, Karnataka &amp; Anantnag, Verinag, Jammu &amp; Kashmir
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Pills */}
            <div className="space-y-3">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">
                Profiles &amp; Coding Portals
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-[#101010] hover:text-[#EAAE0F] hover:border-[#EAAE0F]/40 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-[#101010] hover:text-[#EAAE0F] hover:border-[#EAAE0F]/40 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-[#101010] hover:text-[#EAAE0F] hover:border-[#EAAE0F]/40 transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Direct Message Form */}
          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-7 sm:p-9 shadow-xl">
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#EAAE0F]">
                    Direct Inquiry
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-white">
                    Send a Message
                  </h3>
                </div>
                <Send className="w-5 h-5 text-[#EAAE0F]" />
              </div>

              <form onSubmit={handleComposeSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl bg-white/[0.05] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#EAAE0F] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full rounded-xl bg-white/[0.05] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#EAAE0F] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Internship / project / collaboration"
                    className="w-full rounded-xl bg-white/[0.05] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#EAAE0F] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Tell me about your project, role opening, or requirements..."
                    className="w-full rounded-xl bg-white/[0.05] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#EAAE0F] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {composeNotice && (
                  <p className="text-xs text-[#EAAE0F] font-medium animate-fadeIn">
                    {composeNotice}
                  </p>
                )}

                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#F6BE1E] to-[#E7A609] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#101010] hover:brightness-105 transition-all shadow-md cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Email</span>
                  </button>

                  <a
                    href={personal.resumePath}
                    download={personal.resumeFileName}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Resume PDF</span>
                  </a>
                </div>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#EAAE0F] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
