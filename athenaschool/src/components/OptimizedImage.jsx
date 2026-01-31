import React, { useState, useMemo } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  fetchPriority = "auto"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const generateSrcSet = useMemo(() => {
    if (!src) return '';
    
    const baseSrc = src.replace(/\.[^/.]+$/, "");
    const extension = src.split('.').pop();
    
    if (extension === 'webp') {
      return `${baseSrc}.webp ${width || 400}w, ${baseSrc}.webp ${Math.floor((width || 400) * 1.5)}w, ${baseSrc}.webp ${Math.floor((width || 400) * 2)}w`;
    }
    
    return `${src} ${width || 400}w`;
  }, [src, width]);

  const blurPlaceholder = useMemo(() => {
    return `data:image/svg+xml,%3Csvg width='${width || 400}' height='${height || 400}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E`;
  }, [width, height]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <img 
          src={blurPlaceholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}
      
      <picture>
        <source 
          srcSet={generateSrcSet}
          type="image/webp"
          sizes={sizes}
        />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : loading}
          decoding="async"
          fetchPriority={fetchPriority}
          sizes={sizes}
          srcSet={generateSrcSet}
          className={`
            transition-opacity duration-300 
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${className}
          `}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{ 
            objectFit: 'contain',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </picture>
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
