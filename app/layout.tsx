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
    'Erleben Sie feinste indische Küche im Cardamom Restaurant. Authentische Aromen, frische Zutaten und außergewöhnlicher Service. Reservieren Sie noch heute Ihren Tisch für ein unvergessliches kulinarisches Erlebnis.',
  keywords:
    'Indian restaurant, authentic Indian food, fine dining, curry, tandoor, vegetarian, vegan options, restaurant reservation, Indian cuisine, spices, cardamom, restaurant, cardamom, hamburg',
  authors: [{ name: 'Cardamom Restaurant', url: 'https://www.cardamom-hamburg.de' }],
  creator: 'Cardamom Restaurant',
  publisher: 'Cardamom Restaurant',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.cardamom-hamburg.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cardamom Restaurant - Authentic Indian Cuisine & Fine Dining',
    description:
      'Experience the finest Indian cuisine at Cardamom Restaurant. Authentic flavors, fresh ingredients, and exceptional service.',
    url: 'https://www.cardamom-hamburg.de',
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
    creator: '@cardamom_hamburg',
    site: '@cardamom_hamburg',
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
      <head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/home/westfield.webp" type="image/webp" />
        <link rel="preload" as="image" href="/home/westfield.jpg" type="image/jpeg" />
        <link rel="preload" as="image" href="/logo.webp" type="image/webp" />
        <link rel="preload" as="image" href="/logo.png" type="image/png" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Cardamom Restaurant',
              description: 'Authentic Indian cuisine and fine dining experience in Hamburg',
              url: 'https://www.cardamom-hamburg.de',
              telephone: '+49-40-123456789',
              priceRange: '$$',
              servesCuisine: 'Indian',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hohe Bleichen 10',
                addressLocality: 'Hamburg',
                postalCode: '20354',
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 53.5511,
                longitude: 9.9937,
              },
              openingHours: ['Mo-Su 11:00-23:00'],
              acceptsReservations: true,
              hasMenu: 'https://www.cardamom-hamburg.de/menu',
              image: 'https://www.cardamom-hamburg.de/og-image.jpg',
            }),
          }}
        />
      </head>
      <body className={` ${josefinSans.variable} ${miniver.variable} antialiased`}>{children}</body>
    </html>
  );
}
