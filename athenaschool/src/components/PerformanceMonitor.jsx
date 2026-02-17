import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measurePerformance = () => {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log(`FCP: ${entry.startTime.toFixed(2)}ms`);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['paint'] });
      } catch (_e) {
        console.log('Performance monitoring not supported');
      }

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log(`LCP: ${lastEntry.startTime.toFixed(2)}ms`);
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (_e) {
        console.log('LCP monitoring not supported');
      }

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log(`CLS: ${clsValue.toFixed(3)}`);
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (_e) {
        console.log('CLS monitoring not supported');
      }
    };

    measurePerformance();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
