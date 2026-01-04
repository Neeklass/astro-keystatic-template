# Schnellstart-Anleitung für das Agentur-Template

## ✅ Template für neuen Kunden verwenden

### 1. Repository klonen
```bash
git clone <dein-template-repo> kunde-website
cd kunde-website
npm install
```

### 2. Dev-Server starten
```bash
npm run dev
```
→ Website: http://localhost:4321
→ CMS: http://localhost:4321/keystatic

### 3. Inhalte im CMS anpassen
1. Öffne [http://localhost:4321/keystatic](http://localhost:4321/keystatic)
2. **Site Einstellungen**:
   - Site Name eingeben
   - Logo hochladen
   - Social Media Links hinzufügen
3. **Homepage**:
   - SEO Titel & Beschreibung
   - Hero-Überschrift & Text
   - Hero-Bild hochladen
4. Speichern → Änderungen werden in `src/content/` gespeichert

### 4. Branding anpassen
- **Farben**: [tailwind.config.cjs](tailwind.config.cjs) öffnen und Farbschema anpassen
- **Favicon**: `/public/favicon.svg` ersetzen
- **Fonts**: In [BaseLayout.astro](src/layouts/BaseLayout.astro) Google Fonts anpassen

### 5. Deployment
1. Neues Git Repository erstellen
2. Mit Cloudflare Pages verbinden
3. Build Settings:
   - Build command: `npm run build`
   - Build output: `dist`

## 🎯 Häufige Aufgaben

### Neue Seite hinzufügen
```astro
// src/pages/services.astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Services" description="Unsere Dienstleistungen">
  <section class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold">Unsere Services</h1>
  </section>
</BaseLayout>
```

### Neue CMS-Collection (z.B. Team)
```typescript
// keystatic.config.ts ergänzen
collections: {
  team: collection({
    label: 'Team',
    slugField: 'name',
    path: 'src/content/team/*',
    schema: {
      name: fields.text({ label: 'Name' }),
      position: fields.text({ label: 'Position' }),
      photo: fields.image({
        label: 'Foto',
        directory: 'public/uploads/team',
        publicPath: '/uploads/team/'
      }),
      bio: fields.document({ label: 'Biografie' }),
    },
  }),
}
```

### CMS-Daten in Seite einbinden
```astro
---
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);
const team = await reader.collections.team.all();
---

{team.map(member => (
  <div>
    <img src={member.entry.photo} alt={member.entry.name} />
    <h3>{member.entry.name}</h3>
    <p>{member.entry.position}</p>
  </div>
))}
```

## ⚡ Checkliste für Go-Live

- [ ] Alle Texte im CMS angepasst
- [ ] Logo und Favicon ersetzt
- [ ] Hero-Bild hochgeladen
- [ ] Social Media Links hinzugefügt
- [ ] SEO-Titel und Beschreibungen ausgefüllt
- [ ] `npm run build` erfolgreich
- [ ] Mit Cloudflare Pages verbunden
- [ ] Domain konfiguriert
- [ ] SSL aktiviert (automatisch bei Cloudflare)

## 🆘 Support

Bei Problemen siehe [TEMPLATE-GUIDE.md](TEMPLATE-GUIDE.md) → Troubleshooting
