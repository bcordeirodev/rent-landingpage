import { siteConfig } from "./site";

export const defaultSEO = {
    title: `${siteConfig.name} - Aluguel de Cadeiras, Mesas, Pula Pula e Piscina de Bolinhas no Riacho Fundo 2`,
    description: siteConfig.description,
    openGraph: {
        type: "website" as const,
        locale: "pt_BR",
        url: siteConfig.url,
        site_name: siteConfig.name,
        images: [
            {
                url: `${siteConfig.url}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: siteConfig.name
            }
        ]
    },
    twitter: {
        cardType: "summary_large_image" as const,
        site: "@jrmundofest_",
        creator: "@jrmundofest_"
    },
    additionalMetaTags: [
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        },
        {
            name: "robots",
            content: "index,follow"
        },
        {
            name: "googlebot",
            content: "index,follow"
        },
        {
            name: "keywords",
            content: siteConfig.seo.keywords.join(", ")
        },
        {
            name: "geo.region",
            content: "BR-DF"
        },
        {
            name: "geo.placename",
            content: "Riacho Fundo 2, Brasília, DF"
        },
        {
            name: "geo.position",
            content: "-15.863611;-47.979444"
        },
        {
            name: "ICBM",
            content: "-15.863611, -47.979444"
        },
        {
            property: "business:contact_data:locality",
            content: "Riacho Fundo 2"
        },
        {
            property: "business:contact_data:region",
            content: "Distrito Federal"
        },
        {
            property: "business:contact_data:country_name",
            content: "Brasil"
        },
        {
            name: "author",
            content: "Jr Mundo Fest"
        },
        {
            name: "classification",
            content: "Aluguel de equipamentos para festas e eventos"
        }
    ],
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon.ico"
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180"
        },
        {
            rel: "manifest",
            href: "/site.webmanifest"
        }
    ]
};

// Structured data para SEO local e negócios
export const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Riacho Fundo 2",
        "addressRegion": "DF",
        "addressCountry": "BR",
        "streetAddress": "Riacho Fundo 2"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -15.863611,
        "longitude": -47.979444
    },
    "areaServed": siteConfig.seo.localBusiness.servingArea,
    "serviceType": "Aluguel de equipamentos para festas e eventos",
    "priceRange": "$$",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "08:00",
        "closes": "18:00"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": siteConfig.phone,
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
    },
    "sameAs": [
        siteConfig.social.instagram
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Equipamentos para Festas e Eventos",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Product",
                    "name": "Aluguel de Cadeiras",
                    "description": "Cadeiras resistentes e confortáveis para todos os tipos de eventos"
                }
            },
            {
                "@type": "Offer", 
                "itemOffered": {
                    "@type": "Product",
                    "name": "Aluguel de Mesas",
                    "description": "Mesas para você e toda sua família"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Product", 
                    "name": "Pula Pula - Cama Elástica",
                    "description": "Diversão garantida para a criançada!"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Product",
                    "name": "Piscina de Bolinhas", 
                    "description": "Alegria e segurança para os pequenos"
                }
            }
        ]
    }
};
