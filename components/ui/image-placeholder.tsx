'use client';

import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | string;
  showSkeleton?: boolean;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  className,
  aspectRatio = 'landscape',
  showSkeleton = true,
}) => {
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-video';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'landscape':
        return 'aspect-[4/3]';
      default:
        return aspectRatio;
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-muted',
        getAspectRatioClass(),
        className
      )}
    >
      {showSkeleton && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-muted-foreground/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ImagePlaceholder;