'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  loading = 'lazy',
  sizes,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Generate WebP source if original is JPG/PNG
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.endsWith('.jpg') || originalSrc.endsWith('.jpeg') || originalSrc.endsWith('.png')) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return originalSrc;
  };

  const handleError = () => {
    if (!hasError) {
      // Fallback to original format if WebP fails
      setImgSrc(src);
      setHasError(true);
    }
    onError?.();
  };

  const handleLoad = () => {
    onLoad?.();
  };

  // Try WebP first, fallback to original on error
  const imageSrc = hasError ? src : getWebPSrc(imgSrc);

  const imageProps = {
    src: imageSrc,
    alt,
    className,
    priority,
    loading: priority ? 'eager' as const : loading,
    quality,
    placeholder,
    blurDataURL,
    onLoad: handleLoad,
    onError: handleError,
    sizes: sizes || (fill ? '100vw' : undefined),
  };

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
      />
    );
  }

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
    />
  );
};

export default OptimizedImage;