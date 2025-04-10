import React, { useState, useEffect, useMemo } from 'react';
import { Home, Mail, Menu, X, ArrowRight, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Moon, Sun } from 'lucide-react';
import translationsData from '../translations'; // Static data for SV/AR
import { translations as defaultTranslations } from '../config/translations'; // Default EN data
import { TranslationsType } from '../types/translations'; // Import the main type
import { useNotifications } from '../contexts/NotificationContext';
import { db } from '../config/firebaseConfig';
import { doc, onSnapshot } from "firebase/firestore";
import ServicesSection from '../features/services/components/ServicesSection';
import ContactSection from '../features/contact/components/ContactSection';
import HeroImage from '../features/hero/components/HeroImage'; // Import the new component

type Language = 'en' | 'sv' | 'ar';

// Define ServiceItem type locally if not imported or defined globally
// interface ServiceItem {
//   title: string;
//   description: string;
// }

function MainSite() {
  useNotifications();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true); // Loading state for Firestore data
  // State to hold the dynamic English data from Firestore, initialized with defaults
  const [siteData, setSiteData] = useState<TranslationsType['en']>(defaultTranslations.en);

  // Effect to fetch the entire 'translations/en' document from Firestore
  useEffect(() => {
    // Only fetch if language is 'en' and db is available
    if (language === 'en' && db) {
      setIsLoading(true); // Start loading when fetching for 'en'
      const docRef = doc(db, 'translations/en');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data() as TranslationsType['en']; // Assert type
          setSiteData(data); // Update state with Firestore data
        } else {
          console.log("No 'translations/en' document found in Firestore. Using default English data.");
          setSiteData(defaultTranslations.en); // Fallback to defaults if doc doesn't exist
        }
        setIsLoading(false); // Stop loading after fetch attempt
      }, (error) => {
        console.error("Error fetching 'translations/en' from Firestore:", error);
        setSiteData(defaultTranslations.en); // Fallback to defaults on error
        setIsLoading(false); // Stop loading on error
      });

      // Cleanup listener on component unmount or language change
      return () => unsubscribe();
    } else {
      // If language is not 'en', ensure loading is false and reset siteData (optional, defaults are fine)
      setIsLoading(false);
      // setSiteData(defaultTranslations.en); // Reset to defaults if needed when switching away from 'en'
    }
  }, [language]); // Re-run effect if language changes

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  // Static translations for SV/AR or as fallback
  const staticT = useMemo(() => translationsData[language], [language]);

  // Determine which data source to use based on language and loading state
  // Use dynamic siteData for 'en' if not loading, otherwise use static translations
  const displayData = language === 'en' && !isLoading ? siteData : staticT;
  // Specific check for services list for 'en' as it might be nested differently in static vs dynamic
  const servicesList = language === 'en' ? siteData.services?.list || [] : staticT.services?.list || [];
  // Use static UI strings like 'getStarted' from staticT always
  const uiStrings = staticT;
  // Extract hero data for cleaner access in JSX
  const heroData = displayData.hero;

  // Loading indicator specifically for English content
  if (language === 'en' && isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading site content...</div>;
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} ${language === 'ar' ? 'rtl' : ''}`}>
      {/* Navigation */}
      <nav className={`shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Home className={`h-8 w-8 ${isDarkMode ? 'text-white' : 'text-blue-600'}`} />
              <span className="ml-2 text-xl font-semibold">OS Design</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Use uiStrings for static labels like 'Home' */}
              <a href="#home" className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{uiStrings.home}</a>
              {/* Use displayData for dynamic section titles */}
              <a href="#services" className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{displayData.services?.title}</a>
              <a href="#about" className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{displayData.about?.title}</a>
              <a href="#contact" className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{displayData.contact?.title}</a>
            </div>

            {/* Language Selector */}
            <select
              onChange={handleLanguageChange}
              value={language}
              className={`text-gray-700 hover:text-blue-600 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
            >
              <option value="en">English</option>
              <option value="sv">Svenska</option>
              <option value="ar">العربية</option>
            </select>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               {/* Use uiStrings for static labels like 'Home' */}
              <a href="#home" className={`block px-3 py-2 hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{uiStrings.home}</a>
              {/* Use displayData for dynamic section titles */}
              <a href="#services" className={`block px-3 py-2 hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{displayData.services?.title}</a>
              <a href="#about" className={`block px-3 py-2 hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{displayData.about?.title}</a>
              <a href="#contact" className={`block px-3 py-2 hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{displayData.contact?.title}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                {/* Use heroData for dynamic hero content */}
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  {/* Example: Display full title or split if needed */}
                  <span className="block">{heroData?.title}</span>
                  {/* Conditionally render title2 using 'in' operator for better type narrowing */}
                  {heroData && 'title2' in heroData && heroData.title2 && <span className="block">{heroData.title2}</span>}
                  {/* <span className={`block ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{heroData?.title.split(' ').slice(-2).join(' ')}</span> */}
                </h1>
                <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {heroData?.subtitle}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    {/* Use uiStrings for static button text */}
                    <a href="#contact" className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} md:py-4 md:text-lg md:px-10`}>
                      {uiStrings.getStarted}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <HeroImage /> {/* Use the new component here */}
      </div>

      {/* Services Section (using the new component) */}
      <ServicesSection
        isDarkMode={isDarkMode}
        // Pass dynamic title and static features/strings
        servicesTranslations={{ title: displayData.services?.title || '', list: servicesList }}
        featuresTranslations={uiStrings.features} // Assuming features are static UI elements
        everythingYouNeedTranslation={uiStrings.everythingYouNeed}
        language={language}
        // firestoreServices prop is removed as data comes from siteData now
      />

      {/* About Section */}
      <div id="about" className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            {/* Use displayData for dynamic about content */}
            <h2 className={`text-base font-semibold tracking-wide uppercase ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{displayData.about?.title}</h2>
          </div>
          <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {displayData.about?.description}
          </p>
        </div>

        {/* Social Links Section (Keep using static UI strings) */}
        <div className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className={`text-base font-semibold tracking-wide uppercase h-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{uiStrings.links}</h2>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://x.com/" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Twitter size={24} />
              </a>
              <a href="https://youtube.com/" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Youtube size={24} />
              </a>
              <a href="https://facebook.com/" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/" className={`hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section (using the new component) */}
      <ContactSection
        isDarkMode={isDarkMode}
        // Pass dynamic contact data and static description string
        contactTranslations={displayData.contact}
        contactDescriptionTranslation={uiStrings.contactDescription}
      />

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-800'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <Home className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-semibold text-white">OS Design</span>
              </div>
              <p className="mt-4 text-gray-400">
                Building better digital experiences for forward-thinking businesses.
              </p>
            </div>
            <div>
              {/* Use uiStrings for static labels */}
              <h3 className="text-white font-semibold mb-4">{uiStrings.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">{uiStrings.home}</a></li>
                 {/* Use displayData for dynamic section titles */}
                <li><a href="#services" className="text-gray-400 hover:text-white">{displayData.services?.title}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">{displayData.about?.title}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">{displayData.contact?.title}</a></li>
                <li><a href="/login" className="text-gray-400 hover:text-white">Login</a></li>
              </ul>
            </div>
            <div>
               {/* Use uiStrings for static labels and contact details */}
              <h3 className="text-white font-semibold mb-4">{uiStrings.contactInfo}</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>{uiStrings.phone}</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2" /><a href="mailto:tiger3homs@gmail.com" className="hover:text-blue-400 transition-colors">
                    <span>tiger3homs@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{uiStrings.address}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            {/* Use displayData for dynamic footer copyright */}
            <p className="text-gray-400">{displayData.footer?.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainSite; // Export the new component
