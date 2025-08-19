'use client';

import { useEffect, useRef, useState } from 'react';

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [needsUserInteraction, setNeedsUserInteraction] = useState(false);

  const isMobile =
    typeof window !== 'undefined' &&
    (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent.toLowerCase(),
    ) ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth <= 768);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('[v0] Setting up video, isMobile:', isMobile);
    console.log('[v0] User agent:', navigator.userAgent);
    console.log('[v0] Window width:', window.innerWidth);

    const handleCanPlay = () => {
      console.log('[v0] Video can play');
      setIsLoading(false);

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('[v0] Autoplay successful');
            setNeedsUserInteraction(false);
          })
          .catch((error) => {
            console.log('[v0] Autoplay failed:', error);
            setNeedsUserInteraction(true);
          });
      }
    };

    const handleError = (e: Event) => {
      console.error('[v0] Video error:', e);
      setHasError(true);
      setIsLoading(false);
    };

    const handleLoadStart = () => {
      console.log('[v0] Video load started');
    };

    const handleLoadedMetadata = () => {
      console.log('[v0] Video metadata loaded');
    };

    const loadTimeout = setTimeout(() => {
      console.log('[v0] Video load timeout, showing play button');
      setIsLoading(false);
      setNeedsUserInteraction(true);
    }, 5000);

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const clearTimeoutOnLoad = () => {
      clearTimeout(loadTimeout);
    };
    video.addEventListener('canplay', clearTimeoutOnLoad);

    return () => {
      clearTimeout(loadTimeout);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', clearTimeoutOnLoad);
    };
  }, [isMobile]);

  const handleManualPlay = () => {
    console.log('[v0] Play button clicked'); // Added debug log for play button clicks
    const video = videoRef.current;
    if (video) {
      console.log('[v0] Manual play triggered');
      video
        .play()
        .then(() => {
          console.log('[v0] Manual play successful');
          setNeedsUserInteraction(false);
        })
        .catch((error) => {
          console.error('[v0] Manual play failed:', error);
          setHasError(true);
        });
    }
  };

  if (hasError) {
    return (
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[60dvh] bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <p className="text-sm sm:text-base">
            Video could not be loaded. Please check the file path.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full overflow-hidden bg-gray-900">
      {/* Loading indicator */}
      {isLoading && !needsUserInteraction && (
        <div className="h-[60vh]">
          <div className="absolute inset-0 z-10">
            <img
              src="/home/videoLoading.png"
              alt="Loading video..."
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {needsUserInteraction && (
        <div className="h-[60vh]">
          <div
            className="absolute inset-0 bg-black/50 flex items-center justify-center z-20"
            style={{ background: "url('/home/videoLoading.png') center center no-repeat" }}
          >
            <button
              onClick={handleManualPlay}
              className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors"
              aria-label="Play video"
            >
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload={isMobile ? 'metadata' : 'auto'}
        poster="/home/hero-poster.jpg"
        {...(isMobile && { 'webkit-playsinline': true })}
      >
        <source src="/home/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Banner;
