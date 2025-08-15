import { ReactNode } from 'react';
import { localBusinessSchema } from '@/config/schema';

interface DefaultLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export default function DefaultLayout({
    children,
}: DefaultLayoutProps) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />

            <div className="min-h-screen bg-neutral-900">
                {children}
            </div>
        </>
    );
}
