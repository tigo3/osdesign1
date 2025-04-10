const currentYear = new Date().getFullYear(); // Keep this for dynamic year in other languages

export const translations = {
  // English section from the existing src/config/translations.ts
  en: {
    generalInfo: {
      title: "General Information", // Corresponds to the type definition
      siteTitle: "OS Design v1", // Corresponds to the type definition
      siteRole: "Creative Web Design", // Corresponds to the type definition
      logoUrl: "https://raw.githubusercontent.com/tiger3homs/home/refs/heads/main/public/logo.png", // Corresponds to the type definition
      // Removed keys not in the type: home, links, quickLinks, contactInfo, phone, address
    },
    hero: { // Added Hero section
      title: "Transform Your",
      title2: "Digital Presence",
      subtitle: "We help businesses grow by creating exceptional digital experiences that connect with their audience.",
      ctaButtonText: "Get Started."
    },
    about: { // Existing About section
      title: "About Us",
      description: "We are a creative web design company specializing in crafting custom, user-friendly websites. From responsive design and e-commerce solutions to SEO and graphic design, we help your business stand out online and deliver an exceptional user experience."
    },
    projects: { // Existing Projects section (Object structure)
      title: "Featured Projects",
      project1: {
        title: "OS Design v1",
        description: "The website offers a sleek, intuitive design with straightforward navigation and professional fonts. It highlights the company's services and expertise, making it easy for visitors to get in touch. Simple visuals and effective calls-to-action ensure a smooth and engaging experience. For more information, explore the site.",
        tags: ["Modern", "User-friendly", "Professional"],
        link: "" // Add link field
      },
      project2: {
        title: "Project 2",
        description: "Coming soon.",
        tags: ["Wait", "For", "It"],
        link: "" // Add link field
      },
      project3: {
        title: "New Project",
        description: "This is a new project description.",
        tags: ["New", "Exciting", "Innovative"],
        link: "" // Add link field
      }
    },
    contact: { // Structure matching admin needs
      title: "Contact Me",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      messageLabel: "Message",
      messagePlaceholder: "Enter your message",
      submitButton: "Send Message",
    },
    footer: { // Added Footer section
       copyright: "© 2025 OS Design v1 — All rights reserved. Powered by GitHub. Styled with Tailwind CSS. Created by Tiger3homs." // Changed footerText to copyright
    },
    services: { // Existing Services section (Array structure)
      title: "Services",
      list: [
        { title: "Digital Strategy", description: "Build a roadmap for your digital success with our comprehensive strategy services." },
        { title: "24/7 Support", description: "Round-the-clock support to ensure your business never misses a beat." },
        { title: "Global Reach", description: "Improving your website's visibility on search engines." },
      ],
    },
  },
  // Swedish section from src/translations.ts
  sv: {
    // --- UI Strings ---
    home: "Hem",
    getStarted: "Kom igång",
    everythingYouNeed: "Allt du behöver för att lyckas",
    digitalStrategy: "Digital strategi",
    support: "24/7 Support",
    globalReach: "Global räckvidd",
    links: "Länkar",
    contactDescription: "Kontakta vårt team för att lära dig mer...",
    quickLinks: "Snabblänkar",
    contactInfo: "Kontaktinformation",
    phone: "+1 (555) 123-4567", // Keep example phone
    address: "123 Business St, Suite 100", // Keep example address
    features: [
      { title: "Digital strategi", description: "Bygg en färdplan för din digitala framgång..." },
      { title: "24/7 Support", description: "Support dygnet runt..." },
      { title: "Global räckvidd", description: "Anslut med kunder över hela världen..." }
    ],
    // --- Data Sections ---
    generalInfo: { // Added structure
      title: "Allmän information", // Example translation
      siteTitle: "OS Design v1",
      siteRole: "Kreativ Webbdesign", // Example translation
      logoUrl: "/placeholder-logo.png",
    },
    hero: { // Added structure
      title: "Förvandla din Digitala närvaro", // Combined from parts
      subtitle: "Vi hjälper företag att växa genom att skapa exceptionella digitala upplevelser...", // Moved from heroDescription
    },
    about: { // Added structure
      title: "Om oss", // Moved from aboutUs
      description: "Vi är ett kreativt webbdesignföretag som specialiserar sig...", // Moved from aboutDescription
    },
    projects: { // Added structure
      title: "Projekt", // Example translation
      items: [] // Note: Different structure than 'en'
    },
    contact: { // Added structure
      title: "Kontakta oss", // Moved from contactUs
      nameLabel: "Namn", // Moved from name
      namePlaceholder: "Ange ditt namn", // Example translation
      emailLabel: "E-post", // Moved from email
      emailPlaceholder: "Ange din e-post", // Example translation
      messageLabel: "Meddelande", // Moved from message
      messagePlaceholder: "Skriv ditt meddelande", // Example translation
      submitButton: "Skicka meddelande", // Moved from sendMessage
    },
    services: { // Added structure
        title: "Våra tjänster", // Moved from ourServices
        list: [] // Note: Different structure than 'en'
    },
    footer: { // Added structure
      copyright: `© ${currentYear} OS Design v1 — Alla rättigheter förbehållna...`, // Note: Different key than 'en'
    },
  },
  // Arabic section from src/translations.ts
  ar: {
    // --- UI Strings ---
    home: "الرئيسية",
    getStarted: "ابدأ الآن",
    everythingYouNeed: "كل ما تحتاجه للنجاح",
    digitalStrategy: "استراتيجية رقمية",
    support: "دعم 24/7",
    globalReach: "الوصول العالمي",
    links: "روابط",
    contactDescription: "تواصل مع فريقنا لمعرفة المزيد...",
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات الاتصال",
    phone: "+1 (555) 123-4567", // Keep example phone
    address: "123 Business St, Suite 100", // Keep example address
    features: [
      { title: "استراتيجية رقمية", description: "قم ببناء خارطة طريق لنجاحك الرقمي..." },
      { title: "دعم 24/7", description: "دعم على مدار الساعة..." },
      { title: "الوصول العالمي", description: "تواصل مع العملاء في جميع أنحاء العالم..." }
    ],
    // --- Data Sections ---
    generalInfo: { // Added structure
      title: "معلومات عامة", // Example translation
      siteTitle: "OS Design v1",
      siteRole: "تصميم ويب إبداعي", // Example translation
      logoUrl: "/placeholder-logo.png",
    },
    hero: { // Added structure
      title: "حول وجودك الرقمي", // Combined from parts
      subtitle: "نساعد الشركات على النمو من خلال إنشاء تجارب رقمية استثنائية...", // Moved from heroDescription
    },
    about: { // Added structure
      title: "معلومات عنا", // Moved from aboutUs
      description: "نحن شركة تصميم ويب إبداعية متخصصة...", // Moved from aboutDescription
    },
    projects: { // Added structure
      title: "المشاريع", // Example translation
      items: [] // Note: Different structure than 'en'
    },
    contact: { // Added structure
      title: "اتصل بنا", // Moved from contactUs
      nameLabel: "الاسم", // Moved from name
      namePlaceholder: "أدخل اسمك", // Example translation
      emailLabel: "البريد الإلكتروني", // Moved from email
      emailPlaceholder: "أدخل بريدك الإلكتروني", // Example translation
      messageLabel: "الرسالة", // Moved from message
      messagePlaceholder: "أدخل رسالتك", // Example translation
      submitButton: "إرسال الرسالة", // Moved from sendMessage
    },
    services: { // Added structure
        title: "خدماتنا", // Moved from ourServices
        list: [] // Note: Different structure than 'en'
    },
    footer: { // Added structure
      copyright: `© ${currentYear} تصميم OS الإصدار 1 — جميع الحقوق محفوظة...`, // Note: Different key than 'en'
    },
  }
};
