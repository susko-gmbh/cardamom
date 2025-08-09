'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const BottomRightImage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleImageClick = () => {
    window.open('https://www.genussguide-hamburg.com/', '_blank');
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the image click event from firing
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative group cursor-pointer">
        {/* Image */}
        <div onClick={handleImageClick} className="relative">
          <Image
            src="/thumbnail.png"
            alt="Genuss Guide Hamburg"
            width={280}
            height={280}
            className=" shadow-lg hover:shadow-xl transition-shadow duration-200"
          />
        </div>

        {/* Close button */}
        <button
          onClick={handleCloseClick}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-200 shadow-md"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default BottomRightImage;
