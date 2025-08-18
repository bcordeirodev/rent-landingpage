import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import SocialLink from '@/components/molecules/SocialLink';
import { siteConfig } from '@/config/site';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Início', href: '/' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Galeria', href: '#galeria' },
        { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
    ];

    const contactInfo = [
        { icon: Phone, text: siteConfig.phone, href: `tel:${siteConfig.phone}` },
        { icon: Mail, text: siteConfig.email, href: `mailto:${siteConfig.email}` },
        { icon: MapPin, text: siteConfig.address },
    ];

    return (
        <footer className="bg-neutral-950 text-neutral-300 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500 rounded-full opacity-5 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-500 rounded-full opacity-5 blur-3xl" />
            </div>
            <div className="container-custom relative">
                {/* Main footer content */}
                <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Company info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 relative">
                                    <Image
                                        src="/logo.png"
                                        alt="Jr Mundo Fest"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-white font-bold text-2xl">
                                    Jr Mundo Fest
                                </span>
                            </div>
                        </div>
                        <p className="text-neutral-400 mb-6 leading-relaxed max-w-md">
                            Jr Mundo Fest oferece eventos e entretenimento de qualidade no Riacho Fundo 2.
                            Diversão garantida para toda a família com atendimento personalizado.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink
                                icon={Instagram}
                                href={siteConfig.social.instagram}
                                label="Instagram"
                                variant="large"
                                className="bg-neutral-800 text-neutral-300 hover:bg-pink-600 hover:text-white transition-all"
                            />
                            <SocialLink
                                icon={Facebook}
                                href={siteConfig.social.facebook}
                                label="Facebook"
                                variant="large"
                                className="bg-neutral-800 text-neutral-300 hover:bg-blue-600 hover:text-white transition-all"
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
                <div className="py-6 sm:py-8 border-t border-neutral-900">
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
                            {/* <span className="text-neutral-500 text-sm">
                                Desenvolvido com  para o Riacho Fundo 2
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
