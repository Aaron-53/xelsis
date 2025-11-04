// Structured data helpers for Xelsis Events

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Xelsis Events Management",
  alternateName: "Xelsis Events",
  url: "https://xelsisevents.com",
  logo: "https://xelsisevents.com/images/logo.png",
  description:
    "Premier event management company in UAE with over two decades of experience and 250+ successful events",
  foundingDate: "2000",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressRegion: "Dubai",
    addressLocality: "Dubai",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-50-901-8392",
    contactType: "customer service",
    availableLanguage: ["en", "ar"],
  },
  sameAs: [
    "https://www.instagram.com/xelsisevents",
    "https://www.linkedin.com/company/xelsis-events",
  ],
  serviceArea: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Management Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Events",
          description: "Professional corporate event planning and management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Live Entertainment",
          description: "Live entertainment event production and management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cultural Events",
          description: "Cultural event planning and execution",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sports Events",
          description: "Sports event management and coordination",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exhibitions",
          description: "Exhibition planning and management services",
        },
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Xelsis Events Management",
  url: "https://xelsisevents.com",
  description:
    "Premier event management company in UAE specializing in corporate events, live entertainment, cultural events, sports events, and exhibitions",
  publisher: {
    "@type": "Organization",
    name: "Xelsis Events Management",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://xelsisevents.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://xelsisevents.com${item.url}`,
  })),
});

export const eventSchema = (eventData) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: eventData.name || "Xelsis Events 2025",
  description:
    eventData.description ||
    "Premier event management services by Xelsis Events",
  startDate: eventData.startDate || "2025-12-01T19:00:00+04:00",
  endDate: eventData.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: eventData.locationName || "UAE",
    address: {
      "@type": "PostalAddress",
      streetAddress: eventData.streetAddress,
      addressLocality: eventData.city || "Dubai",
      addressRegion: eventData.region || "Dubai",
      addressCountry: "AE",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Xelsis Events Management",
    url: "https://xelsisevents.com",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: eventData.price || "0",
    priceCurrency: "AED",
    url: "https://xelsisevents.com/contact",
  },
});

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Event Management Services",
  description:
    "Comprehensive event management services including corporate events, live entertainment, cultural events, sports events, and exhibitions",
  provider: {
    "@type": "Organization",
    name: "Xelsis Events Management",
    url: "https://xelsisevents.com",
  },
  serviceType: "Event Management",
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Events",
          description:
            "Professional corporate event planning including conferences, seminars, product launches, and company celebrations",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Live Entertainment",
          description:
            "Live entertainment event production including concerts, shows, and performance events",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cultural Events",
          description:
            "Cultural event planning and execution including festivals, cultural celebrations, and community events",
        },
      },
    ],
  },
};
