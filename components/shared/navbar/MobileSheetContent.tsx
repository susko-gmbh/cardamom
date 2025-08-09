// components/navbar/MobileSheetContent.tsx
'use client';

import { ChevronDown, ChevronRight, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { headerContacts, locations, menuItems, reservationItems } from '@/data/navigation';
import { MenuItem } from '@/types/navbar';

interface MobileSheetContentProps {
  onLinkClick: () => void;
}

const MobileSheetContent = ({ onLinkClick }: MobileSheetContentProps) => {
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: number]: boolean }>({});
  const [reservationOpen, setReservationOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderMobileMenuItem = (item: MenuItem, index: number) => {
    if (item.subItems) {
      const isOpen = openDropdowns[index] || false;

      return (
        <div key={index} className="border-b border-border/50">
          <button
            onClick={() => toggleDropdown(index)}
            className="w-full flex items-center justify-between text-foreground font-medium py-3 hover:text-primary transition-colors"
          >
            <span>{item.label}</span>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 transition-transform" />
            ) : (
              <ChevronRight className="h-4 w-4 transition-transform" />
            )}
          </button>

          {isOpen && (
            <div className="pb-3 pl-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex}>
                  {subItem.external ? (
                    <a
                      href={subItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-muted-foreground hover:text-primary transition-colors py-2 text-sm cursor-pointer"
                      onClick={onLinkClick}
                    >
                      {subItem.label}
                    </a>
                  ) : (
                    <Link
                      href={subItem.href}
                      className="block text-muted-foreground hover:text-primary transition-colors py-2 text-sm cursor-pointer"
                      onClick={onLinkClick}
                    >
                      {subItem.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={index}
        href={item.href!}
        className="block text-foreground hover:text-primary transition-colors font-medium py-3 border-b border-border/50 cursor-pointer"
        onClick={onLinkClick}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      {/* Navigation Items - Centered in sheet */}
      <div className="flex-1 flex flex-col justify-center py-4 px-6">
        <div className="space-y-1">
          {menuItems.map((item, index) => renderMobileMenuItem(item, index))}

          {/* Mobile Reservation Button */}
          <div className="border-b border-border/50">
            <button
              onClick={() => setReservationOpen(!reservationOpen)}
              className="w-full flex items-center justify-between text-foreground font-medium py-3 hover:text-primary transition-colors"
            >
              <span>Reservieren</span>
              {reservationOpen ? (
                <ChevronDown className="h-4 w-4 transition-transform" />
              ) : (
                <ChevronRight className="h-4 w-4 transition-transform" />
              )}
            </button>

            {reservationOpen && (
              <div className="pb-3 pl-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                {reservationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors py-2 text-sm cursor-pointer"
                    onClick={onLinkClick}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Header Contact Info - Bottom of Sheet */}
      <div className="border-t border-border mt-auto px-6 pt-4 pb-10">
        <div className="space-y-3">
          {headerContacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Link
                key={index}
                href={contact.href}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer min-w-0"
                onClick={onLinkClick}
              >
                <IconComponent className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm truncate">
                  <span className="hidden xs:inline">{contact.label}</span>
                  <span className="xs:hidden">{contact.mobileLabel}</span>
                </span>
              </Link>
            );
          })}

          {locations.map((location, index) => {
            const IconComponent = location.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-3 text-muted-foreground text-sm min-w-0"
              >
                <IconComponent className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{location.label}</span>
              </div>
            );
          })}

          <Link
            href="https://www.instagram.com/cardamom.hamburg/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            onClick={onLinkClick}
          >
            <Instagram className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">Instagram</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileSheetContent;
