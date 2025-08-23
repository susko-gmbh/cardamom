'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [needsUserInteraction, setNeedsUserInteraction] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          navigator.userAgent.toLowerCase(),
        ) ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('Setting up video, isMobile:', isMobile);
    console.log('User agent:', navigator.userAgent);
    console.log('Window width:', window.innerWidth);

    const handleCanPlay = () => {
      console.log('Video can play, attempting autoplay');
      setIsLoading(false);

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Autoplay successful');
            setNeedsUserInteraction(false);
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Autoplay failed:', error);
            setNeedsUserInteraction(true);
          });
      }
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setHasError(true);
      setIsLoading(false);
      setNeedsUserInteraction(true);
    };

    const handleLoadStart = () => {
      console.log('Video load started');
    };

    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded');
    };

    // Longer timeout for mobile due to larger file size, shorter for desktop
    const timeoutDuration = isMobile ? 8000 : 5000;
    const loadTimeout = setTimeout(() => {
      console.log('Video load timeout, showing play button');
      setIsLoading(false);
      setNeedsUserInteraction(true);
    }, timeoutDuration);

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

  const handleManualPlay = async (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Visual feedback that button was clicked
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 200);

    console.log('Play button clicked/tapped');
    console.log('Event type:', e.type);
    console.log('Is mobile:', isMobile);

    const video = videoRef.current;
    if (video) {
      console.log('Manual play triggered');
      console.log('Video readyState:', video.readyState);
      console.log('Video networkState:', video.networkState);

      try {
        // For mobile, force load the video first
        if (isMobile && video.networkState === 0) {
          console.log('Loading video for mobile...');
          setIsLoading(true);
          video.load();

          // Wait for video to be ready
          const waitForReady = new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
              reject(new Error('Video loading timeout'));
            }, 15000); // 15 second timeout

            const onCanPlay = () => {
              clearTimeout(timeout);
              video.removeEventListener('canplay', onCanPlay);
              video.removeEventListener('error', onError);
              resolve(true);
            };

            const onError = (e: Event) => {
              clearTimeout(timeout);
              video.removeEventListener('canplay', onCanPlay);
              video.removeEventListener('error', onError);
              reject(new Error('Video loading failed'));
            };

            video.addEventListener('canplay', onCanPlay);
            video.addEventListener('error', onError);
          });

          await waitForReady;
          setIsLoading(false);
        }

        // Now try to play
        console.log('Attempting to play video');
        await video.play();
        console.log('Video play successful');
        setNeedsUserInteraction(false);
        setIsPlaying(true);
      } catch (error) {
        console.error('Video play failed:', error);
        setIsLoading(false);

        // Show user-friendly error message
        if (error instanceof Error && error.message.includes('timeout')) {
          alert(
            'Video is taking too long to load. Please check your internet connection and try again.',
          );
        } else {
          alert(
            'Unable to play video. This might be due to your browser settings or network connection.',
          );
        }
      }
    } else {
      console.error('Video element not found');
      alert('Video player not available');
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
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* Video - Always present as base layer */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload={isMobile ? 'none' : 'metadata'}
        poster="/home/videoLoading.png"
        {...(isMobile && { 'webkit-playsinline': 'true' })}
      >
        {/* Use smaller video for mobile if available, otherwise fallback to main video */}
        {isMobile ? (
          <>
            <source src="/home/hero-mobile.mp4" type="video/mp4" />
            <source src="/home/hero.mp4" type="video/mp4" />
          </>
        ) : (
          <source src="/home/hero.mp4" type="video/mp4" />
        )}
        Your browser does not support the video tag.
      </video>

      {/* Loading overlay */}
      {isLoading && !needsUserInteraction && (
        <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
          <img
            src="/home/videoLoading.png"
            alt="Loading video..."
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Play button overlay */}
      {needsUserInteraction && (
        <div className="absolute hidden inset-0 z-20 fle items-center justify-center">
          <div className="absolute inset-0 bg-black/30" />
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleManualPlay}
            onTouchStart={handleManualPlay}
            className={`${
              buttonClicked ? 'bg-red-500/50' : 'bg-white/20'
            } backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors touch-manipulation relative z-30`}
            aria-label="Play video"
            style={{ touchAction: 'manipulation' }}
          >
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>

          {/* Debug info */}
          {/* <div className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded text-xs z-30">
            <div>Mobile: {isMobile ? 'Yes' : 'No'}</div>
            <div>Loading: {isLoading ? 'Yes' : 'No'}</div>
            <div>Playing: {isPlaying ? 'Yes' : 'No'}</div>
            <div>Needs Interaction: {needsUserInteraction ? 'Yes' : 'No'}</div>
            <div>Button Clicked: {buttonClicked ? 'Yes' : 'No'}</div>
          </div> */}
        </div>
      )}
    </section>
  );
};

export default Banner;
