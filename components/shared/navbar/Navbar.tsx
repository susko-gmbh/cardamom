'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Logo from '../Logo';
import DesktopNavigation from './DesktopNavigation';
import HeaderTop from './HeaderTop';
import MobileMenu from './MobileMenu';
import ReservationButton from './ReservationButton';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use scroll position instead of element bounds for more reliable detection
      const scrollY = window.scrollY;
      // Assume header top height is around 60px, adjust navbar stickiness accordingly
      setIsSticky(scrollY > 46);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header Top Section */}
      <HeaderTop isSticky={isSticky} />

      {/* Main Navigation */}
      <motion.nav
        className={`bg-card border-b border-border z-50 ${
          isSticky ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
        animate={{
          boxShadow: isSticky
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            : '0 0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="container mx-auto py-3 md:py-0 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation - Centered */}
            <DesktopNavigation />

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <ReservationButton />
            </div>

            {/* Mobile Menu Sheet */}
            <MobileMenu />
          </div>
        </div>
      </motion.nav>

      {/* Spacer for sticky navbar */}
      {isSticky && <div className="h-[73px]" />}
    </>
  );
};

export default Navbar;
