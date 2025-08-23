"use client";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          navigator.userAgent.toLowerCase()
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay blocked, retrying on canplay:", err);
        });
      }
    };

    video.addEventListener("loadedmetadata", tryPlay);
    tryPlay();

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
    };
  }, [isMobile]);

  if (hasError) {
    return (
      <section className="relative w-full h-[60vh] bg-gray-900 flex items-center justify-center">
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
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        poster="/home/videoLoading.png"
        onError={() => setHasError(true)}
      >
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
    </section>
  );
};

export default Banner;
