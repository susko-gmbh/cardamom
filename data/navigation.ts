// data/navigation.ts
import { HeaderContact, Location, MenuItem, SubMenuItem } from '@/types/navbar';
import { Mail, MapPin, Phone } from 'lucide-react';

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Standorte',
    subItems: [
      { label: 'Hohe Bleichen', href: '/hohe-bleichen' },
      { label: 'Westfield', href: '/westfield' },
    ],
  },
  {
    label: 'Über Uns',
    href: '/about-us',
  },
  {
    label: 'Events',
    href: '/events',
  },
  {
    label: 'Catering',
    href: '/catering',
  },
  {
    label: 'Menü',
    subItems: [
      { label: 'Hohe Bleichen', href: '/hohe-bleichen-menu' },
      { label: 'Westfield', href: '/westfield-menu' },
    ],
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
  },
  {
    label: 'Gutscheine',
    subItems: [
      {
        label: 'Cardamom Hohe Bleichen',
        href: 'https://www.yovite.com/Restaurant-Gutschein-R-97917736.html?REF=REST',
        external: true,
      },
      {
        label: 'Cardamom Westfield',
        href: 'https://www.yovite.com/Restaurant-Gutschein-R-97917738.html?REF=REST',
        external: true,
      },
    ],
  },
];

export const headerContacts: HeaderContact[] = [
  {
    icon: Phone,
    label: '+49 40 80 08 04 18',
    href: 'tel:+4940800804018',
    mobileLabel: '+49 40 80 08 04 18',
  },
  {
    icon: Mail,
    label: 'kontakt@cardamom-hamburg.de',
    href: 'mailto:kontakt@cardamom-hamburg.de',
    mobileLabel: 'Email',
  },
];

export const locations: Location[] = [
  { label: 'Hohe Bleichen 10', icon: MapPin },
  { label: 'Überseeboulevard 7', icon: MapPin },
];

export const reservationItems: SubMenuItem[] = [
  { label: 'Hohe Bleichen', href: '/reservierung/hohe-bleichen' },
  { label: 'Westfield', href: '/reservierung/westfield' },
];
