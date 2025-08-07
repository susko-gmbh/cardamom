// components/navbar/MobileSheetContent.tsx
'use client';

import { Instagram } from 'lucide-react';
import Link from 'next/link';

import { headerContacts, locations, menuItems, reservationItems } from '@/data/navigation';
import { MenuItem } from '@/types/navbar';

interface MobileSheetContentProps {
  onLinkClick: () => void;
}

const MobileSheetContent = ({ onLinkClick }: MobileSheetContentProps) => {
  const renderMobileMenuItem = (item: MenuItem, index: number) => {
    if (item.subItems) {
      return (
        <div key={index} className="space-y-2">
          <div className="text-foreground font-medium py-2 border-b border-border">
            {item.label}
          </div>
          <div className="pl-4 space-y-2">
            {item.subItems.map((subItem, subIndex) => (
              <div key={subIndex}>
                {subItem.external ? (
                  <a
                    href={subItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={onLinkClick}
                  >
                    {subItem.label}
                  </a>
                ) : (
                  <Link
                    href={subItem.href}
                    className="block text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={onLinkClick}
                  >
                    {subItem.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={index}
        href={item.href!}
        className="block text-foreground hover:text-primary transition-colors font-medium py-3"
        onClick={onLinkClick}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      {/* Navigation Items - Centered in sheet */}
      <div className="flex-1 flex flex-col justify-center py-8">
        <div className="space-y-4">
          {menuItems.map((item, index) => renderMobileMenuItem(item, index))}

          {/* Mobile Reservation Button */}
          <div className="pt-4 border-t border-border">
            <div className="space-y-2">
              <div className="text-foreground font-medium py-2 border-b border-border">
                Reservieren
              </div>
              <div className="pl-4 space-y-2">
                {reservationItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={onLinkClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Contact Info - Bottom of Sheet */}
      <div className="border-t border-border pt-6 mt-auto">
        <div className="space-y-4">
          {headerContacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Link
                key={index}
                href={contact.href}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                onClick={onLinkClick}
              >
                <IconComponent className="h-4 w-4" />
                <span className="text-sm">{contact.label}</span>
              </Link>
            );
          })}

          {locations.map((location, index) => {
            const IconComponent = location.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-3 text-muted-foreground text-sm"
              >
                <IconComponent className="h-4 w-4" />
                <span>{location.label}</span>
              </div>
            );
          })}

          <Link
            href="#"
            className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
            onClick={onLinkClick}
          >
            <Instagram className="h-4 w-4" />
            <span className="text-sm">Instagram</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileSheetContent;
