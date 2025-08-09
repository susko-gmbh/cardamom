'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import ImagePlaceholder from './image-placeholder';
import OptimizedImage from './optimized-image';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | string;
  placeholderClassName?: string;
  rootMargin?: string;
  threshold?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  sizes,
  quality = 85,
  aspectRatio = 'landscape',
  placeholderClassName,
  rootMargin = '50px',
  threshold = 0.1,
}) => {
  const [isInView, setIsInView] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, rootMargin, threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden', className)}>
      {/* Placeholder */}
      {!isLoaded && (
        <ImagePlaceholder
          aspectRatio={aspectRatio}
          className={cn('absolute inset-0', placeholderClassName)}
        />
      )}

      {/* Actual Image */}
      {isInView && (
        <div
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        >
          {hasError ? (
            <ImagePlaceholder
              aspectRatio={aspectRatio}
              showSkeleton={false}
              className="absolute inset-0"
            />
          ) : (
            <OptimizedImage
              src={src}
              alt={alt}
              width={width}
              height={height}
              fill={fill}
              priority={priority}
              loading={priority ? 'eager' : 'lazy'}
              sizes={sizes}
              quality={quality}
              onLoad={handleLoad}
              onError={handleError}
              className={fill ? 'object-cover' : className}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LazyImage;