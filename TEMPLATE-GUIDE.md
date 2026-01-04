# Astro + Keystatic + Tailwind Template

Ein Zero-Maintenance Template für schnelle Website-Erstellung mit CMS.

## 🚀 Features

- **Astro 5+** - Modernes Static Site Generation Framework
- **Keystatic CMS** - Git-basiertes Headless CMS
- **Tailwind CSS** - Utility-First CSS Framework
- **TypeScript** - Vollständige Typsicherheit
- **Cloudflare Pages** - Optimiert für Edge-Deployment
- **SEO-optimiert** - Meta-Tags, OpenGraph, strukturierte Daten

## 📁 Projekt-Struktur

```
/
├── public/
│   └── uploads/           # CMS-Uploads (Logo, Hero-Bilder)
├── src/
│   ├── content/           # Keystatic Content (Git-versioniert)
│   │   ├── homepage/      # Homepage-Inhalte
│   │   └── site-settings/ # Globale Einstellungen
│   ├── components/        # Wiederverwendbare Komponenten
│   ├── layouts/           # Layout-Komponenten
│   │   └── BaseLayout.astro
│   ├── pages/             # Routen
│   │   └── index.astro
│   └── types/             # TypeScript Definitionen
│       └── keystatic.ts
├── astro.config.mjs       # Astro Konfiguration
├── keystatic.config.ts    # CMS Konfiguration
├── tailwind.config.cjs    # Tailwind Konfiguration
└── package.json
```

## 🛠️ Installation

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev

# CMS öffnen (läuft parallel zum Dev-Server)
# Navigiere zu: http://localhost:4321/keystatic
```

## 📝 Keystatic CMS nutzen

### 1. CMS öffnen
Während der Dev-Server läuft, öffne [http://localhost:4321/keystatic](http://localhost:4321/keystatic)

### 2. Verfügbare Bereiche

#### Site Einstellungen (`/keystatic`)
- **Site Name**: Wird in SEO und Navigation verwendet
- **Site Beschreibung**: Standard-Meta-Description
- **Logo**: Upload (PNG empfohlen)
- **Social Links**: Facebook, Instagram, Twitter/X, LinkedIn

#### Homepage (`/keystatic`)
- **SEO Titel**: Optimiert für Suchmaschinen (50-60 Zeichen)
- **SEO Beschreibung**: Meta-Description (150-160 Zeichen)
- **Hero Überschrift**: Hauptüberschrift
- **Hero Unterüberschrift**: Einleitungstext
- **Hero Bild**: Upload (empfohlen: 1920x1080px)
- **Hero Bild Alt-Text**: Für Barrierefreiheit und SEO

### 3. Inhalte speichern
Keystatic speichert Änderungen automatisch als Markdown/YAML in `src/content/`. Diese Dateien werden in Git versioniert.

## 🎨 Daten in Astro verwenden

### Beispiel: Homepage-Daten laden

```astro
---
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import type { Homepage, SiteSettings } from '../types/keystatic';

// Reader initialisieren
const reader = createReader(process.cwd(), keystaticConfig);

// Daten laden
const siteSettings = await reader.singletons.siteSettings.read() as SiteSettings | null;
const homepage = await reader.singletons.homepage.read() as Homepage | null;

// Mit Fallback-Werten arbeiten
const siteName = siteSettings?.siteName || 'Meine Website';
const heroHeading = homepage?.heroHeading || 'Willkommen';
---

<h1>{heroHeading}</h1>
<p>{homepage?.heroSubheading}</p>
```

### BaseLayout nutzen

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Seitentitel"
  description="Seitenbeschreibung für SEO"
  image="/uploads/hero/mein-bild.jpg"
  siteName="Meine Website"
>
  <!-- Seiteninhalt -->
</BaseLayout>
```

## 🚢 Deployment (Cloudflare Pages)

### Automatisches Deployment via Git

1. Repository mit Cloudflare Pages verbinden
2. Build-Einstellungen:
   - **Framework**: Astro
   - **Build command**: `npm run build`
   - **Build output**: `dist`
3. Bei jedem Push wird automatisch deployed

### Umgebungsvariablen (optional)

Für Keystatic in Produktion (GitHub-Modus):
```env
GITHUB_TOKEN=dein_github_token
```

## 🎯 Best Practices für Agenturen

### Template klonen für neue Projekte

```bash
# Repository klonen
git clone dein-template-repo neues-projekt
cd neues-projekt

# Dependencies installieren
npm install

# Altes Git entfernen und neu initialisieren
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

### Branding anpassen

1. **Logo & Favicon**: In `/public/` ersetzen
2. **Site Settings**: Im CMS unter `/keystatic` anpassen
3. **Farben**: In `tailwind.config.cjs` Farbschema anpassen
4. **Fonts**: In [BaseLayout.astro](src/layouts/BaseLayout.astro) Google Fonts Link anpassen

### Weitere Seiten hinzufügen

1. Neue `.astro` Datei in `src/pages/` erstellen
2. Optional: Keystatic Singleton oder Collection hinzufügen
3. BaseLayout für konsistente SEO nutzen

```astro
---
// src/pages/about.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Über uns" description="Erfahren Sie mehr über unser Team">
  <h1>Über uns</h1>
</BaseLayout>
```

### Collections hinzufügen (Blog, Team, etc.)

```typescript
// keystatic.config.ts
import { collection } from '@keystatic/core';

export default config({
  // ... existing config
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      schema: {
        title: fields.text({ label: 'Titel' }),
        publishDate: fields.date({ label: 'Veröffentlichungsdatum' }),
        content: fields.document({ label: 'Inhalt' }),
      },
    }),
  },
});
```

## 📚 Weiterführende Ressourcen

- [Astro Dokumentation](https://docs.astro.build)
- [Keystatic Dokumentation](https://keystatic.com/docs)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [Cloudflare Pages Dokumentation](https://developers.cloudflare.com/pages)

## 🆘 Troubleshooting

### CMS zeigt leere Felder
→ Normal beim ersten Start. Inhalte über `/keystatic` hinzufügen und speichern.

### Bilder werden nicht angezeigt
→ Prüfen ob Bilder in `public/uploads/` gespeichert wurden.
→ Pfade in Keystatic Config prüfen (`publicPath` muss mit `/` beginnen).

### Build-Fehler
→ `npm run build` lokal testen
→ TypeScript-Fehler mit `npm run astro check` prüfen

## 📄 Lizenz

MIT - Frei verwendbar für kommerzielle Projekte.
