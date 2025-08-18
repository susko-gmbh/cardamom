'use client';

import { useEffect, useState, useRef } from 'react';

const Banner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Kill any video loading after 3 seconds - HARD STOP
    timeoutRef.current = setTimeout(() => {
      if (!videoLoaded) {
        setShowFallback(true);
      }
    }, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [videoLoaded]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleVideoError = () => {
    setShowFallback(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Show fallback image if video failed or took too long
  if (showFallback) {
    return (
      <section 
        className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[60dvh] bg-gray-900"
        style={{
          backgroundImage: 'url(/home/traditionMeets.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full overflow-hidden bg-gray-900">
      {/* Loading state - shows until video loads */}
      {!videoLoaded && (
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: 'url(/home/traditionMeets.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* Video - hidden until loaded */}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/home/traditionMeets.jpg"
        onLoadedData={handleVideoLoad}
        onCanPlayThrough={handleVideoLoad}
        onError={handleVideoError}
        onLoadStart={() => {
          // Try to play immediately on mobile
          const video = videoRef.current;
          if (video) {
            video.play().catch(() => {
              // If autoplay fails, that's fine - user can tap to play
            });
          }
        }}
      >
        <source src="/home/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Banner;
