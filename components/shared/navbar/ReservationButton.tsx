'use client';

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
        <DropdownMenuTrigger className="group relative overflow-hidden bg-primary border border-primary bg-primary text-white px-6 py-2 font-light text-lg capitalize hover:bg-primary hover:border-primary transition-all duration-500 flex items-center gap-2 outline-none">
          <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
            Reservieren
          </span>
          <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
          <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
          <ChevronDown className="h-3 w-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" border-border mt-2 rounded-none p-0 space-y-1.5 shadow-lg">
          {reservationItems.map((item, index) => (
            <DropdownMenuItem key={index} className="p-0 hover:bg-accent focus:bg-accent">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-primary border-b border-primary/10 last:border-b-0 text-foreground px-[33px] py-3 font-light text-base capitalize hover:bg-primary/10 transition-all duration-300 flex items-center justify-start w-full"
                >
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                    {item.label}
                  </span>
                  <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                  <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="group relative overflow-hidden bg-primary border-b border-primary/10 last:border-b-0 text-foreground px-4 py-3 font-light text-base capitalize hover:bg-primary/10 transition-all duration-300 flex items-center justify-start w-full"
                >
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                    {item.label}
                  </span>
                  <div className="absolute top-1/2 left-0 -translate-y-px bg-primary h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                  <div className="bg-primary h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
                </Link>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ReservationButton;
