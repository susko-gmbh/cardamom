'use client';

import { useEffect, useState, useRef } from 'react';

const Banner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
  }, []);

  useEffect(() => {
    // Give video 5 seconds to load and start playing
    timeoutRef.current = setTimeout(() => {
      if (!videoLoaded || !isPlaying) {
        setShowFallback(true);
      }
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [videoLoaded, isPlaying]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    // Try to play the video immediately when it's loaded
    const video = videoRef.current;
    if (video) {
      // For mobile, we need to be more aggressive about playing
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }).catch((error) => {
          // On mobile, autoplay might fail but video is still loaded
          // Show video with controls so user can tap to play
          console.log('Autoplay blocked, but video is ready');
          setIsPlaying(true); // Show the video anyway
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        });
      }
    }
  };

  const handleVideoError = () => {
    setShowFallback(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
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
      {/* Show image while video loads */}
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

      {/* Video - loads in background */}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="auto"
        poster="/home/traditionMeets.jpg"
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        onError={handleVideoError}
        autoPlay
        controls={isMobile} // Show controls on mobile so user can tap to play
        onClick={() => {
          // Handle click to play on mobile
          if (isMobile && videoRef.current) {
            videoRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {
              // If still fails, at least we tried
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
