import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  placeholder = 'bg-slate-200 animate-pulse',
  objectFit = 'cover',
  objectPosition = 'center',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const element = imgRef.current;

    if (!element) return;

    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Loading Placeholder */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 z-0 ${placeholder}`}
          aria-hidden="true"
        />
      )}

      {/* Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`relative z-10 w-full h-full transition-opacity duration-500 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imageClassName}`}
          style={{
            objectFit,
            objectPosition,
          }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(false)}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
    </div>
  );
};

export default React.memo(LazyImage);