# Cardamom Restaurant Website

> **Developed by [Susko](https://susko.de)**

A modern, responsive website for Cardamom Restaurant Hamburg featuring authentic Indian cuisine across two premium locations. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🏢 About

Cardamom Restaurant offers progressive Indian dining experiences in Hamburg with two locations:
- **Hohe Bleichen 10** - Elegant atmosphere in the heart of Hamburg
- **Westfield Hamburg-Überseequartier** - Modern dining in HafenCity

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cardamom

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server with Turbopack
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 📱 Routes & Features

### Main Routes

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Homepage | Hero banner, locations overview, restaurant showcase, testimonials, FAQ |
| `/hohe-bleichen` | Hohe Bleichen Location | Location details, opening hours, reservation system |
| `/westfield` | Westfield Location | Location showcase, hours, contact information |
| `/hohe-bleichen-menu` | Hohe Bleichen Menu | Interactive menu, PDF download, menu preview |
| `/westfield-menu` | Westfield Menu | Digital menu, downloadable PDF |
| `/events` | Events & Private Dining | Event showcase, booking information, gallery |
| `/catering` | Catering Services | Catering menu, process, service details |
| `/about-us` | About Us | Restaurant story, philosophy |
| `/kontakt` | Contact | Contact forms, location details |

### External Integrations

- **Reservations**: Integration with Dish reservation system
- **Gift Vouchers**: Yovite integration for both locations
- **Social Media**: Instagram integration (@cardamom.hamburg)

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components & Styling
- **Radix UI** - Accessible component primitives
  - `@radix-ui/react-accordion`
  - `@radix-ui/react-dialog` 
  - `@radix-ui/react-dropdown-menu`
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Tailwind class merging utility
- **CLSX** - Conditional class names

### Animation & Interactions
- **Framer Motion 12.23.12** - Animation library
- **Lenis 1.3.8** - Smooth scrolling
- **TW Animate CSS** - Additional Tailwind animations

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler (dev mode)

## 🎨 Key Features

### SEO Optimization
- Comprehensive meta tags and Open Graph data
- Structured data (JSON-LD) for search engines
- Optimized robots.txt and sitemap.xml
- Multi-language support (German/English)
- Social media integration (Twitter Cards, Open Graph)

### Performance
- Next.js Image Optimization
- Lazy loading components
- Optimized fonts and assets
- Fast refresh with Turbopack

### User Experience
- Responsive design for all devices
- Smooth scrolling and animations
- Interactive menu components
- Accessible UI components
- Progressive Web App features

### Business Features
- **Dual Location Support** - Separate pages and menus for each location
- **Online Reservations** - Direct integration with booking systems
- **Digital Menus** - Interactive and downloadable PDF menus
- **Event Management** - Showcase and booking for private events
- **Catering Services** - Dedicated catering information and booking
- **Gift Vouchers** - External voucher system integration

## 📁 Project Structure

```
cardamom/
├── app/                    # Next.js App Router
│   ├── (root)/            # Main route group
│   │   ├── about-us/      # About page
│   │   ├── catering/      # Catering services
│   │   ├── events/        # Events & private dining
│   │   ├── hohe-bleichen/ # Hohe Bleichen location
│   │   ├── hohe-bleichen-menu/ # HB menu
│   │   ├── kontakt/       # Contact page
│   │   ├── westfield/     # Westfield location
│   │   ├── westfield-menu/ # Westfield menu
│   │   └── page.tsx       # Homepage
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── home/             # Homepage components
│   ├── shared/           # Shared components
│   └── ui/               # UI primitives
├── data/                 # Static data
│   └── navigation.ts     # Navigation configuration
├── lib/                  # Utilities
├── public/               # Static assets
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
└── types/                # TypeScript definitions
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - Shadcn/ui configuration

## 📊 SEO & Analytics

- **Structured Data**: Restaurant schema markup
- **Meta Tags**: Comprehensive SEO meta tags
- **Social Media**: Open Graph and Twitter Card support
- **Sitemaps**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Optimized Core Web Vitals

## 🌐 Deployment

The application is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## 📞 Contact & Support

- **Restaurant**: [kontakt@cardamom-hamburg.de](mailto:kontakt@cardamom-hamburg.de)
- **Phone**: +49 40 80 08 04 18
- **Developer**: [Susko](https://susko.de)
- **Instagram**: [@cardamom.hamburg](https://www.instagram.com/cardamom.hamburg/)

## 📄 License

This project is proprietary software developed by Susko for Cardamom Restaurant Hamburg.

---

**Built with ❤️ by [Susko](https://susko.de)**
