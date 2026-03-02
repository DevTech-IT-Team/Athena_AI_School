import React, { useEffect } from 'react';
import PathwayContent from '../components/PathwayContent';

function Pathway() {
  useEffect(() => {
    // Preload critical resources for better performance
    if (typeof window !== 'undefined') {
      // Preload above-the-fold images
      const preloadImages = [
        '/src/assets/optimized/alesia-kazantceva-VWcPlbHglYc-unsplash.webp'
      ];
      
      preloadImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Add DNS prefetch for external resources
      const dnsPrefetch = [
        '//fonts.googleapis.com',
        '//fonts.gstatic.com'
      ];
      
      dnsPrefetch.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = href;
        document.head.appendChild(link);
      });

      // Add critical performance meta tags
      const metaTags = [
        { name: 'description', content: 'British and Indian Pathway - Excellence Delivered, Consistently at WisdomAI School' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0284c7' },
        { property: 'og:title', content: 'British and Indian Pathway - WisdomAI School' },
        { property: 'og:description', content: 'Excellence Delivered, Consistently' },
        { property: 'og:type', content: 'website' }
      ];

      metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
          meta.content = tag.content;
        } else {
          meta.name = tag.name;
          meta.content = tag.content;
        }
        if (!document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`)) {
          document.head.appendChild(meta);
        }
      });
    }
  }, []);

  return <PathwayContent />;
}

export default React.memo(Pathway);
