import { useState, useEffect, useRef } from 'react';

export const useInView = (options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Once triggered, disconnect if we want it to animate once
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView };
};
