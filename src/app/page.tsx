import DefaultLayout from '@/layouts/DefaultLayout';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import AboutSection from '@/components/organisms/AboutSection';
import ProductsSection from '@/components/organisms/ProductsSection';
import GalleryCarousel from '@/components/organisms/GalleryCarousel';
import Footer from '@/components/organisms/Footer';
import FloatingWhatsApp from '@/components/molecules/FloatingWhatsApp';

export default function HomePage() {
    return (
        <DefaultLayout>
            <Header />
            <main>
                <Hero />
                <ProductsSection />
                <AboutSection />
                <GalleryCarousel />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </DefaultLayout>
    );
}
