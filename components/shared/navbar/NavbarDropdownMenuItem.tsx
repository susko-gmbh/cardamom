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

interface NavbarDropdownMenuItemProps {
  item: MenuItem;
}

const NavbarDropdownMenuItem = ({ item }: NavbarDropdownMenuItemProps) => {
  if (item.subItems) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium outline-none">
          <span>{item.label}</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-card border-border">
          {item.subItems.map((subItem, subIndex) => (
            <ShadcnDropdownMenuItem key={subIndex} className="hover:bg-accent focus:bg-accent">
              {subItem.external ? (
                <a
                  href={subItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-foreground hover:text-primary"
                >
                  {subItem.label}
                </a>
              ) : (
                <Link href={subItem.href} className="w-full text-foreground hover:text-primary">
                  {subItem.label}
                </Link>
              )}
            </ShadcnDropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link
      href={item.href!}
      className="text-foreground hover:text-primary transition-colors font-medium"
    >
      {item.label}
    </Link>
  );
};

export default NavbarDropdownMenuItem;
