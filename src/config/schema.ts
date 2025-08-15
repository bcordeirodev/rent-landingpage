import { siteConfig } from "./site";

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.url}/og-image.jpg`,
    address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressLocality: "Riacho Fundo 2",
        addressRegion: "DF",
        addressCountry: "BR"
    },
    telephone: siteConfig.phone,
    url: siteConfig.url,
    email: siteConfig.email,
    openingHours: "Mo-Su 08:00-18:00",
    priceRange: "$$",
    serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: -15.8631,
            longitude: -48.0178
        },
        geoRadius: "50000"
    }
};
