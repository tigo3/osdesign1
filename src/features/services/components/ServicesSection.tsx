import React from 'react';
import { Loader2, AlertTriangle, Tag } from 'lucide-react'; // Updated icons
import { useFetchServices, ServiceItem } from '../hooks/useFetchServices'; // Import hook and type

// Define props for the component - simplified
interface ServicesSectionProps {
  isDarkMode: boolean;
  // Removed props related to static/translated data:
  // servicesTranslations, featuresTranslations, everythingYouNeedTranslation, language
  // Add back any needed props like titles if they aren't fetched
  sectionTitle?: string; // Example: Optional title prop
  sectionSubtitle?: string; // Example: Optional subtitle prop
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  isDarkMode,
  sectionTitle = "Our Services", // Default title
  sectionSubtitle = "Everything you need", // Default subtitle
}) => {
  const { services, isLoading, error } = useFetchServices(); // Use the hook

  // Handle Loading State
  if (isLoading) {
    return (
      <div className={`py-12 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
          Loading services...
        </div>
      </div>
    );
  }

  // Handle Error State
  if (error) {
    return (
      <div className={`py-12 ${isDarkMode ? 'bg-gray-800 text-red-400' : 'bg-red-50 text-red-700'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-red-500" />
          Error loading services: {error}
        </div>
      </div>
    );
  }

  // Use fetched services
  const servicesToDisplay = services || [];

  return (
    <div id="services" className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* Use optional props for titles or hardcode defaults */}
          <h2 className={`text-base font-semibold tracking-wide uppercase ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{sectionTitle}</h2>
          <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            {sectionSubtitle}
          </p>
        </div>

        <div className="mt-10">
          {servicesToDisplay.length === 0 ? (
            <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No services available at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Map over the fetched services list */}
              {servicesToDisplay.map((service: ServiceItem) => { // Use curly braces for explicit return
                return ( // Explicit return statement
                  // Use service.id as the key
                  <div key={service.id} className={`relative p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-600'}`}>
                    <div>
                      {/* Render icon dynamically */}
                      <div className={`absolute h-12 w-12 flex items-center justify-center rounded-md ${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                        {/* Basic icon rendering: Display icon string or a default icon */}
                        {service.icon ? (
                          <span className="text-xs truncate px-1" title={service.icon}>{service.icon}</span> // Display string, maybe truncate
                        ) : (
                          <Tag className="h-6 w-6" /> // Default icon if none provided
                        )}
                      </div>
                      <p className={`ml-16 text-lg leading-6 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.title}</p>
                    </div>
                    <div className="mt-2 ml-16 text-base">
                      {service.description}
                    </div>
                  </div>
                ); // Close explicit return
              })} {/* Close map function */}
            </div>
          ) // Correctly closed ternary operator
        } {/* Close the JSX expression block */}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
