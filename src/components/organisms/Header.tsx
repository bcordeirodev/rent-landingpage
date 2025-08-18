'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import Logo from '@/components/molecules/Logo';
import SocialLink from '@/components/molecules/SocialLink';
import Button from '@/components/atoms/Button';
import { siteConfig } from '@/config/site';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Início', href: '/' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Galeria', href: '#galeria' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-neutral-800/95 backdrop-blur-md border-b border-neutral-700 shadow-xl">
            <div className="container-custom">
                <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative text-neutral-200 hover:text-white font-medium px-3 py-2 rounded-lg hover:bg-neutral-700/50 transition-all duration-200 group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <SocialLink
                            icon={Instagram}
                            href={siteConfig.social.instagram}
                            label="Instagram"
                            isInstagram={true}
                        />
                        <Button
                            as="a"
                            href={siteConfig.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                            className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all font-medium"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Fale Conosco
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-neutral-200 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-neutral-700 py-6 bg-neutral-800 animate-fade-in">
                        <nav className="flex flex-col gap-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-neutral-200 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-neutral-700/50 transition-all duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 pt-6 border-t border-neutral-700 mt-4">
                                <div className="flex items-center justify-center">
                                    <SocialLink
                                        icon={Instagram}
                                        href={siteConfig.social.instagram}
                                        label="Instagram"
                                        isInstagram={true}
                                    />
                                </div>
                                <Button
                                    as="a"
                                    href={siteConfig.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="sm"
                                    fullWidth
                                    className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/50 font-medium"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Fale Conosco
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
