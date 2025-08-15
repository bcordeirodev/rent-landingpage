import { ReactNode } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { localBusinessSchema } from '@/config/schema';
import { defaultSEO } from '@/config/seo';

interface DefaultLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function DefaultLayout({
  children,
  title,
  description,
  image,
  url,
}: DefaultLayoutProps) {
  const seoTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoImage = image || defaultSEO.openGraph.images[0].url;
  const seoUrl = url || defaultSEO.openGraph.url;

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          ...defaultSEO.openGraph,
          title: seoTitle,
          description: seoDescription,
          url: seoUrl,
          images: [
            {
              ...defaultSEO.openGraph.images[0],
              url: seoImage,
            },
          ],
        }}
        twitter={defaultSEO.twitter}
        additionalMetaTags={defaultSEO.additionalMetaTags}
        additionalLinkTags={defaultSEO.additionalLinkTags}
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>

      <div className="min-h-screen bg-neutral-50">
        <div className="container-custom">
          {children}
        </div>
      </div>
    </>
  );
}
