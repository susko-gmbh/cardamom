import { LucideIcon } from 'lucide-react';

export interface SubMenuItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface MenuItem {
  label: string;
  href?: string;
  subItems?: SubMenuItem[];
}

export interface HeaderContact {
  icon: LucideIcon;
  label: string;
  href: string;
  mobileLabel: string;
  branch?: string;
}

export interface Location {
  label: string;
  icon: LucideIcon;
}
