// Critical inline JavaScript to prevent render-blocking
(function() {
  // Preload critical resources
  if ('requestIdleCallback' in window) {
    requestIdleCallback(function() {
      // Preload non-critical resources
      const resources = [
        '/src/components/Stats.jsx',
        '/src/components/Features.jsx'
      ];
      
      resources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = resource;
        document.head.appendChild(link);
      });
    });
  }
  
  // Optimize font loading
  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('400 1em -apple-system'),
      document.fonts.load('600 1em -apple-system'),
      document.fonts.load('800 1em -apple-system')
    ]).then(function() {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
})();
