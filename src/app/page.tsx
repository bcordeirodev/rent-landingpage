import DefaultLayout from '@/layouts/DefaultLayout';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import AboutSection from '@/components/organisms/AboutSection';
import GalleryCarousel from '@/components/organisms/GalleryCarousel';
import ContactSection from '@/components/organisms/ContactSection';
import Footer from '@/components/organisms/Footer';

export default function HomePage() {
  return (
    <DefaultLayout>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <GalleryCarousel />
        <ContactSection />
      </main>
      <Footer />
    </DefaultLayout>
  );
}
