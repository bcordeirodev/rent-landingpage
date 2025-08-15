import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import Logo from '@/components/molecules/Logo';
import SocialLink from '@/components/molecules/SocialLink';
import Button from '@/components/atoms/Button';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SocialLink
                icon={Instagram}
                href={siteConfig.social.instagram}
                label="Instagram"
              />
              <SocialLink
                icon={Facebook}
                href={siteConfig.social.facebook}
                label="Facebook"
              />
            </div>
            <Button
              as="a"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-2">
                  <SocialLink
                    icon={Instagram}
                    href={siteConfig.social.instagram}
                    label="Instagram"
                  />
                  <SocialLink
                    icon={Facebook}
                    href={siteConfig.social.facebook}
                    label="Facebook"
                  />
                </div>
                <Button
                  as="a"
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  fullWidth
                >
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
