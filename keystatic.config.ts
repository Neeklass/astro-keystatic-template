import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  singletons: {
    siteSettings: singleton({
      label: 'Site Einstellungen',
      path: 'src/content/site-settings',
      schema: {
        siteName: fields.text({ 
          label: 'Site-Titel',
          description: 'Titel Ihrer Website (erscheint in Browser-Tab und SEO)',
          validation: { isRequired: true }
        }),
        siteDescription: fields.text({ 
          label: 'Site-Beschreibung',
          description: 'Standard Meta-Description (150-160 Zeichen empfohlen)',
          multiline: true,
          validation: { isRequired: true }
        }),
        logo: fields.image({
          label: 'Logo',
          directory: 'src/assets/branding',
          publicPath: '/assets/branding/',
          description: 'Firmenlogo (PNG/SVG, transparent empfohlen)'
        }),
        favicon: fields.image({
          label: 'Favicon',
          directory: 'src/assets/branding',
          publicPath: '/assets/branding/',
          description: 'Website-Icon (32x32px, PNG oder ICO)'
        }),
        socialLinks: fields.object({
          facebook: fields.url({ label: 'Facebook' }),
          instagram: fields.url({ label: 'Instagram' }),
          twitter: fields.url({ label: 'X (Twitter)' }),
          linkedin: fields.url({ label: 'LinkedIn' }),
          github: fields.url({ label: 'GitHub' }),
        }, {
          label: 'Social Media',
          description: 'Links zu Social-Media-Profilen'
        }),
      },
    }),
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      schema: {
        seoTitle: fields.text({ 
          label: 'SEO-Titel',
          description: 'Titel für Suchmaschinen (50-60 Zeichen)',
          validation: { isRequired: true }
        }),
        seoDescription: fields.text({ 
          label: 'SEO-Beschreibung',
          multiline: true,
          description: 'Meta-Description für Suchmaschinen (150-160 Zeichen)',
          validation: { isRequired: true }
        }),
        heroHeading: fields.text({ 
          label: 'Hero-Überschrift',
          description: 'Hauptüberschrift (H1) auf der Startseite',
          validation: { isRequired: true }
        }),
        heroSubheading: fields.text({ 
          label: 'Hero-Einleitungstext',
          multiline: true,
          description: 'Text unter der Hauptüberschrift',
          validation: { isRequired: true }
        }),
        heroBackgroundImage: fields.image({
          label: 'Hero-Hintergrundbild',
          directory: 'src/assets/images',
          publicPath: '/assets/images/',
          description: 'Hintergrundbild für Hero-Section (1920x1080px empfohlen)'
        }),
        heroCtaText: fields.text({ 
          label: 'Call-to-Action Text',
          description: 'Text für den Haupt-Button',
        }),
        heroCtaLink: fields.url({ 
          label: 'Call-to-Action Link',
          description: 'Ziel-URL für den Button',
        }),
      },
    }),
  },
});