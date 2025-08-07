'use client';

import { useEffect, useRef, useState } from 'react';

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      // Try to play immediately when data is loaded
      video.play().catch((error) => {
        console.error('Video autoplay failed:', error);
        // Don't set error for autoplay failure, just log it
      });
    };

    const handleCanPlayThrough = () => {
      setIsLoading(false);
      video.play().catch((error) => {
        console.error('Video play failed:', error);
      });
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setHasError(true);
      setIsLoading(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);

    // Force load the video
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
    };
  }, []);

  if (hasError) {
    return (
      <section className="relative w-full h-[60dvh] bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p>Video could not be loaded. Please check the file path.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-full overflow-hidden bg-gray-900">
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/home/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Banner;
