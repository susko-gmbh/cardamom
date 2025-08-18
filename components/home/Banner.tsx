'use client';

import { useEffect, useRef, useState } from 'react';

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                           window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      
      // For mobile, skip video loading entirely - just show fallback
      if (isMobileDevice) {
        setShowVideo(false);
      } else {
        // For desktop, give a short delay then show video
        const timer = setTimeout(() => {
          setShowVideo(true);
        }, 100);
        return () => clearTimeout(timer);
      }
    };
    
    checkMobile();
    
    // Re-check on window resize
    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Only try to play video on desktop after it's shown
    if (showVideo && !isMobile && videoRef.current) {
      const video = videoRef.current;
      
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Autoplay failed, fallback to poster');
          setShowVideo(false);
        }
      };

      // Small delay to ensure video is ready
      const timer = setTimeout(playVideo, 200);
      return () => clearTimeout(timer);
    }
  }, [showVideo, isMobile]);

  // Mobile: Show static background image
  if (isMobile || !showVideo) {
    return (
      <section 
        className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[60dvh] bg-gray-900 flex items-center justify-center"
        style={{
          backgroundImage: 'url(/home/traditionMeets.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
    );
  }

  // Desktop: Show video
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full overflow-hidden bg-gray-900">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        poster="/home/traditionMeets.jpg"
        onError={() => setShowVideo(false)}
      >
        <source src="/home/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Banner;
