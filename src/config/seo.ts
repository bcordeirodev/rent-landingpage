import { siteConfig } from "./site";

export const defaultSEO = {
    title: siteConfig.name,
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
        site: "@alugueldecadeirasrf1",
        creator: "@alugueldecadeirasrf1"
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
