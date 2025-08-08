'use client';

// components/navbar/DropdownMenuItem.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem as ShadcnDropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { MenuItem } from '@/types/navbar';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavbarDropdownMenuItemProps {
  item: MenuItem;
}

const NavbarDropdownMenuItem = ({ item }: NavbarDropdownMenuItemProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Check if current item or any of its subitems is active
  const isActive =
    item.href === pathname ||
    (item.subItems && item.subItems.some((subItem) => subItem.href === pathname));

  if (item.subItems) {
    return (
      <div
        className="relative h-full py-8"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger
            className={`flex items-center space-x-1 transition-colors font-medium outline-none ${
              isActive ? 'text-primary' : 'text-foreground hover:text-primary'
            }`}
          >
            <span>{item.label}</span>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-card  mt-8 border border-t-0 border-primary rounded-none shadow-lg"
            sideOffset={0}
            align="start"
          >
            {item.subItems.map((subItem, subIndex) => {
              const isSubItemActive = subItem.href === pathname;
              return (
                <ShadcnDropdownMenuItem
                  key={subIndex}
                  className="hover:bg-accent focus:bg-accent !p-0 "
                >
                  {subItem.external ? (
                    <a
                      href={subItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full px-6 border-t border-t-primary hover:bg-primary hover:text-white  text-lg py-2.5 block transition-colors ${
                        isSubItemActive ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {subItem.label}
                    </a>
                  ) : (
                    <Link
                      href={subItem.href}
                      className={`w-full px-6 border-t border-t-primary hover:bg-primary hover:text-white  text-lg py-2.5 block transition-colors ${
                        isSubItemActive ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  )}
                </ShadcnDropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <Link
      href={item.href!}
      className={` transition-colors font-medium ${
        isActive ? 'text-primary' : 'text-foreground hover:text-primary'
      }`}
    >
      {item.label}
    </Link>
  );
};

export default NavbarDropdownMenuItem;
