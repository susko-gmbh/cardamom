import type { Metadata } from 'next';
import { Josefin_Sans, Miniver } from 'next/font/google';
import './globals.css';

const josefinSans = Josefin_Sans({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

const miniver = Miniver({
  variable: '--font-secondary',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cardamom Restaurant - Authentic Indian Cuisine & Fine Dining',
  description:
    'Experience the finest Indian cuisine at Cardamom Restaurant. Authentic flavors, fresh ingredients, and exceptional service. Book your table today for an unforgettable dining experience.',
  keywords:
    'Indian restaurant, authentic Indian food, fine dining, curry, tandoor, vegetarian, vegan options, restaurant reservation, Indian cuisine, spices, cardamom',
  authors: [{ name: 'Cardamom Restaurant' }],
  creator: 'Cardamom Restaurant',
  publisher: 'Cardamom Restaurant',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cardamom-restaurant.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cardamom Restaurant - Authentic Indian Cuisine & Fine Dining',
    description:
      'Experience the finest Indian cuisine at Cardamom Restaurant. Authentic flavors, fresh ingredients, and exceptional service.',
    url: 'https://cardamom-restaurant.com',
    siteName: 'Cardamom Restaurant',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cardamom Restaurant - Authentic Indian Cuisine',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardamom Restaurant - Authentic Indian Cuisine & Fine Dining',
    description:
      'Experience the finest Indian cuisine at Cardamom Restaurant. Authentic flavors, fresh ingredients, and exceptional service.',
    images: ['/og-image.jpg'],
    creator: '@cardamomrestaurant',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${josefinSans.variable} ${miniver.variable} antialiased`}>{children}</body>
    </html>
  );
}
