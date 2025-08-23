'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import MobileSheetContent from './MobileSheetContent';

const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger className="lg:hidden text-foreground hover:text-primary transition-colors">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-card border-border overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-foreground text-left">Menu</SheetTitle>
        </SheetHeader>

        <MobileSheetContent onLinkClick={handleLinkClick} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
