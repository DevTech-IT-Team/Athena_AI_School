import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof PerformanceObserver === "undefined"
    ) {
      return;
    }

    const isDevelopment =
      typeof import.meta !== "undefined" &&
      import.meta.env?.DEV;

    const observers = [];

    let clsValue = 0;
    let lcpValue = 0;
    let inpValue = 0;

    const logPerformance = (metric, value, unit = "ms") => {
      if (!isDevelopment) return;

      console.info(
        `[Edulectual K12 Performance] ${metric}: ${value.toFixed(2)} ${unit}`
      );
    };

    // Safely create Performance Observers
    const observeMetric = (type, callback) => {
      try {
        if (
          !PerformanceObserver.supportedEntryTypes?.includes(type)
        ) {
          return;
        }

        const observer = new PerformanceObserver((list) => {
          callback(list.getEntries());
        });

        observer.observe({
          type,
          buffered: true,
        });

        observers.push(observer);
      } catch (error) {
        if (isDevelopment) {
          console.warn(`${type} monitoring is not supported.`);
        }
      }
    };

    // 1. First Contentful Paint (FCP)
    observeMetric("paint", (entries) => {
      entries.forEach((entry) => {
        if (entry.name === "first-contentful-paint") {
          logPerformance("FCP", entry.startTime);
        }
      });
    });

    // 2. Largest Contentful Paint (LCP)
    observeMetric("largest-contentful-paint", (entries) => {
      const lastEntry = entries[entries.length - 1];

      if (lastEntry) {
        lcpValue = lastEntry.startTime;
      }
    });

    // 3. Cumulative Layout Shift (CLS)
    observeMetric("layout-shift", (entries) => {
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
    });

    // 4. Interaction to Next Paint (INP)
    observeMetric("event", (entries) => {
      entries.forEach((entry) => {
        if (entry.interactionId && entry.duration) {
          inpValue = Math.max(inpValue, entry.duration);
        }
      });
    });

    // Report metrics when the page becomes hidden
    const reportMetrics = () => {
      if (document.visibilityState !== "hidden") return;

      logPerformance("LCP", lcpValue);
      logPerformance("CLS", clsValue, "");
      logPerformance("INP", inpValue);
    };

    document.addEventListener(
      "visibilitychange",
      reportMetrics
    );

    // Cleanup observers and listeners
    return () => {
      observers.forEach((observer) => observer.disconnect());

      document.removeEventListener(
        "visibilitychange",
        reportMetrics
      );
    };
  }, []);

  return null;
};

export default PerformanceMonitor;