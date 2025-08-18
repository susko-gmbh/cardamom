'use client';

import { useEffect, useState } from 'react';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent flash

  useEffect(() => {
    // Only show video on desktop, everything else gets image
    const checkDevice = () => {
      const isDesktop = window.innerWidth >= 1024 && 
                       !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
      setIsMobile(!isDesktop);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // MOBILE AND TABLET: Static image - ZERO loading, ZERO waiting
  if (isMobile) {
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

  // DESKTOP ONLY: Video with immediate fallback
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full overflow-hidden bg-gray-900">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/home/traditionMeets.jpg"
        onError={() => setIsMobile(true)}
        onLoadStart={() => {
          // If it takes more than 2 seconds, switch to image
          setTimeout(() => {
            const video = document.querySelector('video');
            if (video && video.readyState < 3) {
              setIsMobile(true);
            }
          }, 2000);
        }}
      >
        <source src="/home/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Banner;
