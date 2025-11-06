'use client';

import { useEffect, useRef, useState } from 'react';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, children, className }: SectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`snap-start min-h-screen flex items-center ${className ?? ''}`}
    >
      <div
        className={`w-full transition-all duration-700 ease-out will-change-transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {children}
      </div>
    </section>
  );
}


