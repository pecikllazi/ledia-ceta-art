# Setup Guide for Ledia Çeta Artist Portfolio

## Project Status

✅ **Project structure created successfully!**

The website is fully built with all pages, components, and Sanity CMS integration. You just need to connect it to a Sanity project to make it fully functional.

## Next Steps

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and create a free account
2. Create a new project:
   - Click "Create new project"
   - Choose a name (e.g., "Ledia Çeta Art Portfolio")
   - Select "production" as the dataset name
   - Copy your Project ID

### 2. Update Environment Variables

Edit the `.env.local` file in the project root and replace the placeholder values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Run the Development Server

```bash
npm run dev
```

The website will be available at:
- **Website**: [http://localhost:3000](http://localhost:3000)
- **Sanity Studio**: [http://localhost:3000/studio](http://localhost:3000/studio)

### 4. Set up CORS in Sanity

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to API → CORS Origins
4. Add `http://localhost:3000` with credentials allowed

### 5. Add Content via Sanity Studio

Visit [http://localhost:3000/studio](http://localhost:3000/studio) to start adding content:

1. **Site Settings**: Configure site-wide settings (contact info, featured exhibition)
2. **Artist Profile**: Add biography, CV, and artist statement
3. **Artworks**: Upload artwork images with metadata
4. **Exhibitions**: Add exhibition history
5. **News**: Add press releases and updates

## Project Structure

```
ledia-ceta-art/
├── src/
│   ├── app/                      # Next.js pages
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── exhibitions/         # Exhibitions
│   │   ├── news/                # News & press
│   │   ├── works/               # Artwork gallery
│   │   ├── studio/              # Sanity Studio (CMS)
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/              # React components
│   └── sanity/                  # Sanity CMS configuration
│       ├── schemas/             # Content schemas
│       └── lib/                 # Client & queries
├── public/                      # Static assets
├── .env.local                   # Environment variables
└── README.md                    # Documentation
```

## Available Pages

Once you add content, the following pages will be functional:

- **Home** (`/`): Hero section, featured works, current exhibition, artist intro
- **Works** (`/works`): Complete artwork gallery with filtering by medium
- **Artwork Detail** (`/works/[slug]`): Individual artwork pages with full details
- **Exhibitions** (`/exhibitions`): Exhibition history grouped by year
- **Exhibition Detail** (`/exhibitions/[slug]`): Full exhibition info with artworks
- **About** (`/about`): Artist biography, statement, and CV
- **News** (`/news`): Press releases and updates
- **News Detail** (`/news/[slug]`): Full news articles
- **Contact** (`/contact`): Contact form and information
- **Studio** (`/studio`): Sanity CMS for content management

## Features

- ✨ Refined gallery-style minimalist design
- 🎨 Comprehensive artwork management with metadata
- 🏛️ Exhibition history tracking
- 📰 News and press section
- 👤 Artist biography and CV
- 📧 Contact form
- 🎛️ Easy content management via Sanity Studio
- 📱 Fully responsive design
- ⚡ Optimized images with blur placeholders
- 🔍 SEO-friendly

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Sanity CMS** for content management
- **Framer Motion** for animations
- **Next.js Image** for optimized images

## Color Palette

The design uses a refined color palette inspired by the Albanian Adriatic Sea:

- **Primary**: Sea Deep (#1E3A5F), Sea Medium (#3D5A80), Sea Light (#98C1D9)
- **Neutrals**: Off-white (#F5F5F5), Warm Gray (#E8E4E1), Cool Gray (#D1D5DB)
- **Text**: Charcoal (#1A1A1A), Secondary (#6B7280), Muted (#9CA3AF)

## Typography

- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Libre Franklin (clean sans-serif)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Support

If you encounter any issues:

1. Make sure you've set up a Sanity project and updated the environment variables
2. Run `npm install` to ensure all dependencies are installed
3. Clear the `.next` folder and rebuild: `rm -rf .next && npm run dev`

## What's Built

✅ Complete website structure
✅ All pages (Home, Works, Exhibitions, About, News, Contact)
✅ Sanity CMS integration
✅ All Sanity schemas (Artwork, Exhibition, News, Artist, Site Settings)
✅ Responsive design
✅ Image optimization
✅ Custom components
✅ TypeScript configuration
✅ Tailwind CSS setup

**You're ready to add content and launch!** 🚀
