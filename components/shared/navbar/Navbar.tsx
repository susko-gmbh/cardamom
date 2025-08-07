'use client';

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
      const offset = window.scrollY;
      setIsSticky(offset > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header Top Section */}
      <HeaderTop isSticky={isSticky} />

      {/* Main Navigation */}
      <nav
        className={`bg-card border-b border-border transition-all duration-300 z-50 ${
          isSticky ? 'fixed top-0 left-0 right-0 shadow-xl' : 'relative'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation - Centered */}
            <DesktopNavigation />

            {/* Reservation Button */}
            <ReservationButton />

            {/* Mobile Menu Sheet */}
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Spacer for sticky navbar */}
      {isSticky && <div className="h-[73px]"></div>}
    </>
  );
};

export default Navbar;
