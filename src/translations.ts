const currentYear = new Date().getFullYear();

const translations = {
  en: {
    // --- UI Strings ---
    home: "Home",
    getStarted: "Get Started",
    everythingYouNeed: "Everything you need to succeed",
    digitalStrategy: "Digital Strategy", // Also used in features array
    support: "24/7 Support", // Also used in features array
    globalReach: "Global Reach", // Also used in features array
    links: "Links",
    contactDescription: "Get in touch with our team to learn more about how we can help you succeed.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    phone: "+1 (555) 123-4567",
    address: "123 Business St, Suite 100",
    features: [
      { title: "Digital Strategy", description: "Build a roadmap for your digital success with our comprehensive strategy services." },
      { title: "24/7 Support", description: "Round-the-clock support to ensure your business never misses a beat." },
      { title: "Global Reach", description: "Connect with customers worldwide..." }
    ],
    // --- Data Sections ---
    generalInfo: {
      title: "General Information",
      siteTitle: "OS Design v1",
      siteRole: "Creative Web Design",
      logoUrl: "/placeholder-logo.png",
    },
    hero: {
      title: "Transform Your",
      title2: "Digital Presence",
      subtitle: "We help businesses grow by creating exceptional digital experiences...",
    },
    about: {
      title: "About Us",
      description: "We are a creative web design company specializing...",
    },
    projects: {
      title: "Projects",
      items: []
    },
    contact: {
      title: "Contact Us",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      messageLabel: "Message",
      messagePlaceholder: "Enter your message",
      submitButton: "Send Message",
    },
    services: {
        title: "Our Services",
        list: []
    },
    footer: {
      copyright: `© ${currentYear} OS Design v1 — All rights reserved...`,
    },
  },
  sv: { // Restructured sv
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
      items: []
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
        list: []
    },
    footer: { // Added structure
      copyright: `© ${currentYear} OS Design v1 — Alla rättigheter förbehållna...`, // Moved from footer
    },
  },
  ar: { // Restructured ar
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
      items: []
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
        list: []
    },
    footer: { // Added structure
      copyright: `© ${currentYear} تصميم OS الإصدار 1 — جميع الحقوق محفوظة...`, // Moved from footer
    },
  }
};

export default translations;
