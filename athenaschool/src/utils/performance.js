// Performance monitoring utilities

// Core Web Vitals monitoring (simplified version)
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Use native Performance API for basic metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Report basic timing metrics
      const timing = performance.timing;

      const metrics = {
        // Navigation timing
        domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
        loadComplete: timing.loadEventEnd - timing.navigationStart,
        firstPaint: 0,
        firstContentfulPaint: 0
      };

      // Try to get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach(entry => {
        if (entry.name === 'first-paint') {
          metrics.firstPaint = entry.startTime;
        }
        if (entry.name === 'first-contentful-paint') {
          metrics.firstContentfulPaint = entry.startTime;
        }
      });

      onPerfEntry(metrics);
    }
  }
};

// Resource timing monitoring
export const monitorResourceTiming = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          console.log(`Resource loaded: ${entry.name}`, {
            duration: entry.duration,
            size: entry.transferSize,
            type: entry.initiatorType
          });
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
    return observer;
  }
  return null;
};

// Largest Contentful Paint monitoring
export const monitorLCP = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    return observer;
  }
  return null;
};

// First Input Delay monitoring
export const monitorFID = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
    return observer;
  }
  return null;
};

// Cumulative Layout Shift monitoring
export const monitorCLS = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    });

    observer.observe({ entryTypes: ['layout-shift'] });
    return observer;
  }
  return null;
};

// Performance marks and measures
export const markPerformance = (name) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(name);
  }
};

export const measurePerformance = (name, startMark, endMark) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.measure(name, startMark, endMark);
    const measure = performance.getEntriesByName(name)[0];
    console.log(`${name}: ${measure.duration}ms`);
    return measure.duration;
  }
  return 0;
};

// Memory usage monitoring (Chrome only)
export const monitorMemory = () => {
  if (typeof window !== 'undefined' && 'performance' in window && 'memory' in performance) {
    const memory = performance.memory;
    console.log('Memory usage:', {
      used: `${Math.round(memory.usedJSHeapSize / 1048576)} MB`,
      total: `${Math.round(memory.totalJSHeapSize / 1048576)} MB`,
      limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)} MB`
    });
    return memory;
  }
  return null;
};

// Network information monitoring
export const monitorNetwork = () => {
  if (typeof window !== 'undefined' && 'navigator' in window && 'connection' in navigator) {
    const connection = navigator.connection;
    console.log('Network info:', {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt
    });
    return connection;
  }
  return null;
};

// Performance timing summary
export const getPerformanceTiming = () => {
  if (typeof window !== 'undefined' && 'performance' in window && 'timing' in performance) {
    const timing = performance.timing;
    return {
      dns: timing.domainLookupEnd - timing.domainLookupStart,
      tcp: timing.connectEnd - timing.connectStart,
      request: timing.responseStart - timing.requestStart,
      response: timing.responseEnd - timing.responseStart,
      dom: timing.domContentLoadedEventEnd - timing.navigationStart,
      load: timing.loadEventEnd - timing.navigationStart,
      total: timing.loadEventEnd - timing.navigationStart
    };
  }
  return null;
};
