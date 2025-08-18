'use client';

import { useEffect, useState, useRef } from 'react';

const Banner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      video.play().then(() => {
        setIsPlaying(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }).catch((error) => {
        console.log('Autoplay failed, showing fallback');
        setShowFallback(true);
      });
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
      >
        <source src="/home/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Banner;
