import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { reservationItems } from '@/data/navigation';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const ReservationButton = () => {
  return (
    <div className="hidden lg:block">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2 outline-none">
          <span>Reservieren</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-card border-border">
          {reservationItems.map((item, index) => (
            <DropdownMenuItem key={index} className="hover:bg-accent focus:bg-accent">
              <Link href={item.href} className="w-full text-foreground hover:text-primary">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ReservationButton;
