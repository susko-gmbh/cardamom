'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Share2, Facebook, Twitter, Mail, Copy } from 'lucide-react';
import { useState } from 'react';

interface ShareItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareItems: ShareItem[] = [
    {
      label: 'Facebook',
      icon: Facebook,
      action: () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
      },
    },
    {
      label: 'Twitter',
      icon: Twitter,
      action: () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Check out Cardamom Restaurant!');
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
      },
    },
    {
      label: 'Email',
      icon: Mail,
      action: () => {
        const subject = encodeURIComponent('Check out Cardamom Restaurant!');
        const body = encodeURIComponent(`I thought you might be interested in this: ${window.location.href}`);
        window.open(`mailto:?subject=${subject}&body=${body}`);
      },
    },
    {
      label: copied ? 'Copied!' : 'Copy Link',
      icon: Copy,
      action: handleCopyLink,
    },
  ];

  return (
    <div className="hidden lg:block">
      <DropdownMenu>
        <DropdownMenuTrigger className="group relative overflow-hidden bg-transparent border border-white text-white px-6 py-2 font-light text-lg capitalize hover:bg-primary hover:border-primary transition-all duration-500 flex items-center gap-2 outline-none">
          <Share2 className="h-4 w-4" />
          <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">Teilen</span>
          <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
          <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
          <ChevronDown className="h-3 w-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-card border-border mt-2 rounded-lg shadow-lg">
          {shareItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <DropdownMenuItem key={index} className="p-0 hover:bg-accent focus:bg-accent">
                <button
                  onClick={item.action}
                  className="group relative overflow-hidden bg-transparent border-b border-primary/10 last:border-b-0 text-foreground px-4 py-3 font-light text-base capitalize hover:bg-primary/10 transition-all duration-300 flex items-center justify-center w-full gap-2"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">{item.label}</span>
                  <div className="absolute top-1/2 left-0 -translate-y-px bg-primary h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                  <div className="bg-primary h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
                </button>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ShareButton;