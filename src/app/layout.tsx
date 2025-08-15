import type { Metadata } from 'next';
import { defaultSEO } from '@/config/seo';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: "Aluguel de Cadeiras - Riacho Fundo 2",
    description: "Serviço de aluguel de cadeiras de qualidade no Riacho Fundo 2. Atendimento rápido, preço justo e entrega garantida.",
    keywords: [
        'aluguel de cadeiras',
        'Riacho Fundo 2',
        'eventos',
        'festas',
        'casamento',
        'aniversário',
        'brasília',
        'df',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: defaultSEO.title,
        description: defaultSEO.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: defaultSEO.title,
        description: defaultSEO.description,
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
