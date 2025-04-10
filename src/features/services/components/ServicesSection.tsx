import React from 'react';
import { Book, Clock, MapPin } from 'lucide-react';

// Define ServiceItem type locally (matching the one in MainSite or a shared types file if available)
interface ServiceItem {
  title: string;
  description: string;
  // icon?: string; // Optional icon property if used
}

// Define the type for the 'services' part of the translations
interface ServicesDataTranslations {
  title: string;
  list: ServiceItem[]; // This might be empty if data comes from Firestore
}

// Define the type for the 'features' array (assuming it's top-level)
type FeaturesTranslations = ServiceItem[];

// Define props for the component
interface ServicesSectionProps {
  isDarkMode: boolean;
  servicesTranslations: ServicesDataTranslations; // Contains title and the correct list (dynamic or static)
  featuresTranslations: FeaturesTranslations; // Prop for the features array (might be redundant now?)
  everythingYouNeedTranslation: string; // Prop for the specific string
  language: 'en' | 'sv' | 'ar'; // Keep language if needed for other logic, otherwise remove
  // firestoreServices prop removed
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  isDarkMode,
  servicesTranslations, // Contains the correct list already
  featuresTranslations, // Keep if used elsewhere, otherwise consider removing
  everythingYouNeedTranslation,
  language, // Keep if needed
  // firestoreServices parameter removed
}) => {
  // Directly use the list passed via props. The logic to select dynamic/static is done in MainSite.
  const servicesToDisplay = servicesTranslations.list || []; // Use the list from props, default to empty array

  return (
    <div id="services" className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* Use the title from servicesTranslations */}
          <h2 className={`text-base font-semibold tracking-wide uppercase ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{servicesTranslations.title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            {/* Use the specific everythingYouNeedTranslation prop */}
            {everythingYouNeedTranslation}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Map over the determined services list */}
            {servicesToDisplay.map((feature: ServiceItem, index: number) => (
              <div key={index} className={`relative p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <div>
                  {/* TODO: Consider making icons dynamic if needed, or pass them as props */}
                  <div className={`absolute h-12 w-12 flex items-center justify-center rounded-md ${isDarkMode ? 'bg-blue-900' : 'bg-blue-50'}`}>
                    {/* Basic icon rendering based on index, might need refinement */}
                    {index === 0 && <Book className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />}
                    {index === 1 && <Clock className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />}
                    {index === 2 && <MapPin className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />}
                    {/* Add more icons if needed or handle dynamically */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium">{feature.title}</p>
                </div>
                <div className="mt-2 ml-16 text-base">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
