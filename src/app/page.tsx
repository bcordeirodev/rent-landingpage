import DefaultLayout from '@/layouts/DefaultLayout';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import AboutSection from '@/components/organisms/AboutSection';
import GalleryCarousel from '@/components/organisms/GalleryCarousel';
import Footer from '@/components/organisms/Footer';

export default function HomePage() {
    return (
        <DefaultLayout>
            <Header />
            <main>
                <Hero />
                <AboutSection />
                <GalleryCarousel />
            </main>
            <Footer />
        </DefaultLayout>
    );
}
