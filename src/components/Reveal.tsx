import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delayMs = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const checkInView = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 160) {
        setVisible(true);
        return true;
      }
      return false;
    };

    if (checkInView()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight + 160) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.02, rootMargin: '160px 0px 160px 0px' }
    );

    observer.observe(node);

    const onScrollOrHash = () => {
      if (checkInView()) {
        observer.unobserve(node);
      }
    };

    window.addEventListener('scroll', onScrollOrHash, { passive: true });
    window.addEventListener('hashchange', onScrollOrHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollOrHash);
      window.removeEventListener('hashchange', onScrollOrHash);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : '0ms' }}
      className={`transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
};
