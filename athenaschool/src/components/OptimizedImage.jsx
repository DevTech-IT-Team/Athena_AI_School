import React, { useState, useMemo } from "react";

const OptimizedImage = ({
  src,
  alt = "",
  className = "",
  width,
  height,
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  fetchPriority = "auto",
  objectFit = "cover",
  rounded = "rounded-2xl",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate responsive image sources
  const generateSrcSet = useMemo(() => {
    if (!src) return undefined;

    const extension = src.split(".").pop()?.toLowerCase();

    if (extension === "webp") {
      const baseSrc = src.replace(/\.[^/.]+$/, "");

      return `${baseSrc}.webp ${width || 400}w`;
    }

    return `${src} ${width || 400}w`;
  }, [src, width]);

  // Lightweight placeholder
  const blurPlaceholder = useMemo(() => {
    return `data:image/svg+xml,%3Csvg width='${width || 400}' height='${height || 300}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23EFF4FF'/%3E%3C/svg%3E`;
  }, [width, height]);

  // Handle failed image loading
  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  // Handle successful image loading
  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{
        width: width ? `${width}px` : undefined,
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <img
          src={blurPlaceholder}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full ${rounded}`}
        />
      )}

      {/* Image */}
      {!hasError && src && (
        <picture>
          {src.toLowerCase().endsWith(".webp") && (
            <source
              srcSet={generateSrcSet}
              type="image/webp"
              sizes={sizes}
            />
          )}

          <img
            src={src}
            srcSet={generateSrcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : loading}
            decoding="async"
            fetchPriority={priority ? "high" : fetchPriority}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${rounded}`}
            style={{
              objectFit,
              display: "block",
            }}
          />
        </picture>
      )}

      {/* Error State */}
      {hasError && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-[#EFF4FF] text-[#172554] ${rounded}`}
        >
          <div className="text-3xl mb-2">✦</div>

          <span className="text-sm font-medium text-gray-500">
            Image unavailable
          </span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;