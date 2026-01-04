# Astro + Keystatic + Tailwind Agency Template

A production-ready, zero-maintenance template for building fast client websites with an intuitive CMS.

## 🚀 Features

- **Astro 5+** - Modern static site generation framework
- **Keystatic CMS** - Git-based headless CMS (no database required)
- **Tailwind CSS v3** - Utility-first CSS framework
- **React** - For Keystatic UI components
- **TypeScript** - Full type safety
- **Cloudflare Pages** - Optimized for edge deployment
- **SEO-ready** - Meta tags, OpenGraph, Twitter Cards

## 📋 Prerequisites

- Node.js 18+ 
- npm or pnpm
- Git

## 🛠️ Installation

### 1. Clone this template

```bash
git clone <your-template-repo> client-website
cd client-website
npm install
```

### 2. Start development server

```bash
npm run dev
```

**Your site is now running at:**
- 🌐 Website: http://localhost:4321
- ⚙️ Keystatic CMS: http://localhost:4321/keystatic

## 📝 Configuration

### Update Site URL

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://your-client-domain.com', // Change this!
  // ...
});
```

### Tailwind Configuration

Customize colors, fonts, and more in `tailwind.config.cjs`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your brand colors
      }
    }
  }
}
```

## 🎨 Content Management

### Access Keystatic CMS

1. Navigate to http://localhost:4321/keystatic
2. Edit content in two sections:
   - **Site Settings**: Logo, favicon, site title, social links
   - **Homepage**: SEO meta tags, hero section, CTA button

### Content is stored in:
- `src/content/site-settings/` - Global site settings
- `src/content/homepage/` - Homepage content
- `src/assets/branding/` - Logo and favicon uploads
- `src/assets/images/` - Hero background images

**Important:** All content is Git-tracked. Commit your changes!

## 📂 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images managed by Keystatic
│   │   ├── branding/   # Logo, favicon
│   │   └── images/     # Hero backgrounds
│   ├── components/     # Reusable Astro/React components
│   ├── content/        # Keystatic content (Git-versioned)
│   ├── layouts/        # Layout components
│   │   └── BaseLayout.astro  # SEO-optimized base layout
│   ├── pages/          # Routes
│   │   └── index.astro
│   └── types/          # TypeScript definitions
│       └── keystatic.ts
├── astro.config.mjs    # Astro configuration
├── keystatic.config.ts # CMS configuration
├── tailwind.config.cjs # Tailwind configuration
└── package.json
```

## 🚢 Deployment

### Deploy to Cloudflare Pages

1. Push your repository to GitHub/GitLab
2. Connect to Cloudflare Pages
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output**: `dist`
   - **Node version**: 18+

4. Environment variables (if needed):
   ```
   NODE_VERSION=18
   ```

### Before Deployment Checklist

- [ ] Update `site` URL in `astro.config.mjs`
- [ ] Replace placeholder content in Keystatic CMS
- [ ] Upload logo and favicon
- [ ] Test build locally: `npm run build`
- [ ] Verify SEO meta tags are correct

## 🔧 Common Tasks

### Adding a New Page

Create a new file in `src/pages/`:

```astro
---
// src/pages/about.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="About Us" 
  description="Learn more about our company"
  siteName="Your Site"
>
  <section class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold">About Us</h1>
  </section>
</BaseLayout>
```

### Adding a Blog Collection

Extend `keystatic.config.ts`:

```typescript
import { collection } from '@keystatic/core';

export default config({
  // ... existing config
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      schema: {
        title: fields.text({ label: 'Title' }),
        publishDate: fields.date({ label: 'Publish Date' }),
        content: fields.document({ label: 'Content' }),
      },
    }),
  },
});
```

### Reading CMS Data in Components

```astro
---
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);
const siteSettings = await reader.singletons.siteSettings.read();
---

<h1>{siteSettings?.siteName}</h1>
```

## ⚠️ Important Notes

### Dependencies

This template uses:
- **Tailwind v3** (not v4) for compatibility with `@astrojs/tailwind`
- **React 19+** for Keystatic UI
- Install with: `npm install --legacy-peer-deps` if you encounter peer dependency warnings

### Keystatic Storage

Currently configured for `local` storage (Git-based). For production with GitHub:

1. Change `keystatic.config.ts`:
```typescript
storage: { 
  kind: 'github',
  repo: 'your-username/your-repo'
}
```

2. Add GitHub token to environment variables

### Asset Management

- **DO NOT** put images in `public/` for Keystatic
- Use `src/assets/` directories as configured in `keystatic.config.ts`
- Astro will optimize these images during build

## 📚 Documentation

For detailed guides, see:
- [QUICKSTART.md](QUICKSTART.md) - Quick start for new projects
- [TEMPLATE-GUIDE.md](TEMPLATE-GUIDE.md) - Comprehensive guide

## 🐛 Troubleshooting

### CMS shows empty fields
**Solution:** Normal on first run. Add content via `/keystatic` and save.

### Images not showing
**Solution:** Check that images are in `src/assets/` not `public/uploads/`.

### Build errors
**Solution:** Run `npm run build` locally to debug. Check TypeScript errors with `astro check`.

### Port 4321 already in use
**Solution:** Astro will automatically use the next available port (4322, etc.)

## 📄 License

MIT - Free for commercial use

---

**Built with ❤️ for fast, maintainable client websites**
