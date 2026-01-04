/**
 * TypeScript Interfaces für Keystatic Daten
 * Bietet Typsicherheit beim Zugriff auf CMS-Inhalte
 */

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo: string | null;
  favicon: string | null;
  socialLinks: {
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    linkedin: string | null;
    github: string | null;
  };
}

export interface Homepage {
  seoTitle: string;
  seoDescription: string;
  heroHeading: string;
  heroSubheading: string;
  heroBackgroundImage: string | null;
  heroCtaText: string;
  heroCtaLink: string | null;
}

/**
 * Utility Type: Optional Fields für Fallback-Handling
 * Verwendet, wenn Daten noch nicht im CMS vorhanden sind
 */
export type PartialSiteSettings = Partial<SiteSettings>;
export type PartialHomepage = Partial<Homepage>;
