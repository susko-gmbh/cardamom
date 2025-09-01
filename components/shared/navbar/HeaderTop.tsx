import { headerContacts, locations, instagramUrl } from '@/data/navigation';
import { Instagram, Phone } from 'lucide-react';
import Link from 'next/link';

interface HeaderTopProps {
  isSticky: boolean;
}

const HeaderTop = ({ isSticky }: HeaderTopProps) => {
  return (
    <div
      data-header-top
      className={`bg-background border-b border-border transition-all duration-300 ${
        isSticky ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-6 lg:space-x-8">
            {/* Phone Numbers - Group together */}
            <div className="flex items-center space-x-1 text-muted-foreground text-xs lg:text-sm">
              <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
              <div className="flex items-center space-x-2">
                {headerContacts
                  .filter(contact => contact.icon === Phone)
                  .map((contact, index) => (
                    <Link
                      key={index}
                      href={contact.href}
                      className="hover:text-primary transition-colors"
                    >
                      <span className="hidden sm:inline">{contact.label}</span>
                      <span className="sm:hidden">{contact.mobileLabel}</span>
                    </Link>
                  ))
                  .reduce((prev, curr, index) => [
                    ...prev,
                    index > 0 && <span key={`sep-${index}`} className="text-muted-foreground/50">|</span>,
                    curr
                  ].filter(Boolean), [] as React.ReactNode[])
                }
              </div>
            </div>
            
            {/* Email */}
            {headerContacts
              .filter(contact => contact.icon !== Phone)
              .map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Link
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-xs lg:text-sm"
                  >
                    <IconComponent className="h-3 w-3 lg:h-4 lg:w-4" />
                    <span className="hidden sm:inline">{contact.label}</span>
                    <span className="sm:hidden">{contact.mobileLabel}</span>
                  </Link>
                );
              })}

            <div className="hidden md:flex items-center space-x-6">
              {locations.map((location, index) => {
                const IconComponent = location.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-muted-foreground text-xs lg:text-sm"
                  >
                    <IconComponent className="h-3 w-3 lg:h-4 lg:w-4" />
                    <span>{location.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <Link 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
