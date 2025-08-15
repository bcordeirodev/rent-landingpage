import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import SocialLink from '@/components/molecules/SocialLink';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '/' },
    { label: 'Contato', href: '/contato' },
    { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  ];

  const contactInfo = [
    { icon: Phone, text: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: Mail, text: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, text: siteConfig.address },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AC</span>
                </div>
                <span className="text-white font-bold text-2xl">
                  Aluguel de Cadeiras
                </span>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed max-w-md">
              Oferecemos serviço de aluguel de cadeiras de qualidade no Riacho Fundo 1. 
              Atendimento personalizado, entrega pontual e preços justos para seu evento.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink
                icon={Instagram}
                href={siteConfig.social.instagram}
                label="Instagram"
                variant="large"
              />
              <SocialLink
                icon={Facebook}
                href={siteConfig.social.facebook}
                label="Facebook"
                variant="large"
              />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-neutral-400 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} {siteConfig.name}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/politica-de-privacidade"
                className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-500 text-sm">
                Desenvolvido com ❤️ para o Riacho Fundo 1
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
