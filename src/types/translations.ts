import { ProjectsSection } from '../features/admin/sections/Projects/types'; // Adjust import path
import { ServiceItem } from '../features/admin/sections/Services/types'; // Adjust import path

// Define the overall structure for the 'en' translations object explicitly
// This provides better type safety than relying solely on 'typeof'
interface EnglishTranslations {
  generalInfo: {
    title: string;
    siteTitle: string;
    siteRole: string;
    logoUrl: string;
    // footerText is likely part of the footer now, removing from generalInfo
  };
  hero: { // Updated Hero section type
    title: string;
    title2?: string; // Make title2 optional as it might not exist in other languages
    subtitle: string;
    ctaButtonText?: string; // Make ctaButtonText optional
  };
  about: {
    title: string;
    description: string;
  };
  projects: ProjectsSection; // Use the flexible ProjectsSection type
  contact: {
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
  };
  services: {
      title: string;
      list: ServiceItem[];
  };
  footer: { // Added Footer section type
    copyright: string;
    // Add other footer fields as needed, e.g., links array, social media info
  };
}

// Define the main TranslationsType using the explicit structure
export interface TranslationsType {
  en: EnglishTranslations;
  // Add other languages here if needed in the future
}

// LanguageKey type - currently only 'en' is used
export type LanguageKey = keyof TranslationsType; // Make it dynamic based on defined languages
