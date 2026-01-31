import { useState, useEffect, useRef } from 'react';

export const useProgressiveLoading = (threshold = 0.1) => {
  const [visibleSections, setVisibleSections] = useState(new Set(['hero']));
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = new Map();

    const observeSection = (sectionId) => {
      if (observers.has(sectionId)) return;

      const element = sectionRefs.current[sectionId];
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, sectionId]));
            observer.unobserve(element);
            observers.delete(sectionId);
          }
        },
        { threshold, rootMargin: '50px' }
      );

      observer.observe(element);
      observers.set(sectionId, observer);
    };

    // Observe all sections except hero (already visible)
    Object.keys(sectionRefs.current).forEach(sectionId => {
      if (sectionId !== 'hero') {
        observeSection(sectionId);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [threshold]);

  const registerSection = (sectionId) => (ref) => {
    if (ref) {
      sectionRefs.current[sectionId] = ref;
    }
  };

  return { visibleSections, registerSection };
};
