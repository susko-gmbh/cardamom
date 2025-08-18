'use client';

import { useEffect, useRef, useState } from 'react';

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleLoadedData = () => {
      setIsLoading(false);
      // For mobile, don't attempt autoplay due to restrictions
      if (!isMobile) {
        video.play().catch((error) => {
          console.error('Video autoplay failed:', error);
          setIsLoading(false);
        });
      } else {
        // On mobile, just show the poster/first frame
        setIsLoading(false);
      }
    };

    const handleCanPlay = () => {
      if (!isMobile) {
        video.play().catch((error) => {
          console.error('Video autoplay failed:', error);
        });
      }
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setHasError(true);
      setIsLoading(false);
    };

    const handleLoadedMetadata = () => {
      // This fires earlier than loadeddata, good for mobile
      if (isMobile) {
        setIsLoading(false);
      }
    };

    // Add event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Start loading the video
    video.load();

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [isMobile]);

  if (hasError) {
    return (
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[60dvh] bg-gray-900 flex items-center justify-center"
        style={{
          backgroundImage: 'url(/home/traditionMeets.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4 z-10">
          <p className="text-sm sm:text-base">
            Welcome to Cardamom Restaurant
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full overflow-hidden bg-gray-900">
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 bg-background flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary/20 border-t-primary"></div>
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload={isMobile ? "metadata" : "auto"}
        poster="/home/traditionMeets.jpg"
        controls={isMobile}
        autoPlay={!isMobile}
      >
        <source src="/home/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Banner;
