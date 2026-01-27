# Ledia Çeta - Artist Portfolio Website

A professional artist portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

## Features

- ✨ Modern, gallery-style minimalist design
- 🎨 Showcase artworks with detailed metadata
- 🏛️ Exhibition history and details
- 📰 News and press section
- 👤 Artist biography and CV
- 📧 Contact form
- 🎛️ Sanity CMS for content management
- 📱 Fully responsive design
- ⚡ Optimized with Next.js 14 App Router
- 🖼️ Image optimization with blur placeholders

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity CMS
- **Image Handling**: Next.js Image + Sanity Image URL Builder
- **Animations**: Framer Motion
- **UI Components**: Headless UI

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Sanity account (free at sanity.io)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ledia-ceta-art
```

2. Install dependencies
```bash
npm install
```

3. Set up Sanity

First, create a new Sanity project at [sanity.io](https://www.sanity.io/). Then update your environment variables:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

4. Run the development server
```bash
npm run dev
```

5. Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio)

6. Access the website at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ledia-ceta-art/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── exhibitions/         # Exhibitions pages
│   │   ├── news/                # News pages
│   │   ├── studio/              # Sanity Studio route
│   │   ├── works/               # Artworks pages
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── artwork/             # Artwork-related components
│       ├── exhibition/          # Exhibition components
│       ├── home/                # Home page components
│       ├── layout/              # Layout components (Header, Footer)
│       ├── news/                # News components
│       ├── shared/              # Shared components
│       └── ui/                  # UI components
├── sanity/
│   ├── schemas/                 # Sanity schema definitions
│   │   ├── artwork.ts
│   │   ├── exhibition.ts
│   │   ├── news.ts
│   │   ├── artist.ts
│   │   ├── siteSettings.ts
│   │   ├── blockContent.ts
│   │   └── index.ts
│   └── lib/
│       ├── client.ts            # Sanity client
│       ├── queries.ts           # GROQ queries
│       └── image.ts             # Image URL builder
├── sanity.config.ts             # Sanity configuration
├── sanity.cli.ts                # Sanity CLI config
├── tailwind.config.ts           # Tailwind configuration
├── next.config.ts               # Next.js configuration
└── tsconfig.json                # TypeScript configuration
```

## Sanity Schemas

The project includes the following Sanity schemas:

- **Artwork**: Paintings, installations, and mixed media with metadata
- **Exhibition**: Shows, biennales, and events
- **News**: Press releases, interviews, and updates
- **Artist**: Biography, statement, and CV
- **Site Settings**: Global site configuration

## Content Management

1. Navigate to `/studio` in your browser
2. Sign in with your Sanity account
3. Start adding content:
   - Site Settings: Configure site-wide settings
   - Artist Profile: Add biography and CV
   - Artworks: Upload artwork images and metadata
   - Exhibitions: Document exhibitions and events
   - News: Add press releases and updates

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  'sea-deep': '#1E3A5F',
  'sea-medium': '#3D5A80',
  // ... more colors
}
```

### Fonts

The project uses Google Fonts:
- **Serif**: Cormorant Garamond (headings)
- **Sans-serif**: Libre Franklin (body text)

To change fonts, edit `src/app/globals.css`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your deployment platform:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Sanity CORS Configuration

In your Sanity dashboard (manage.sanity.io):
1. Go to API > CORS Origins
2. Add your production domain
3. Enable credentials if needed

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is private and proprietary.

## Support

For issues or questions, please contact the development team.

---

Built with ❤️ for Ledia Çeta
