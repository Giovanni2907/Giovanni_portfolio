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
            // Une fois visible, on arrête d'observer
            observer.disconnect();
          }
        });
      },
      { 
        threshold: 0.1, // Réduit de 0.3 à 0.1 pour déclencher plus tôt
        rootMargin: '0px 0px -100px 0px' // Déclenche avant que la section soit complètement visible
      }
    );
    
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`w-full py-12 sm:py-16 md:py-20 lg:py-24 ${className ?? ''}`}
    >
      <div
        className={`site-container w-full transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {children}
      </div>
    </section>
  );
}