import { MessageCircle, Instagram } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Button from '@/components/atoms/Button';
import { siteConfig } from '@/config/site';
import { createWhatsAppUrl } from '@/utils/whatsapp';

export default function Hero() {
    return (
        <section className="relative py-16 sm:py-24 lg:py-36 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse" style={{ background: `linear-gradient(135deg, var(--logo-purple), var(--logo-blue))` }} />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-25 blur-3xl animate-pulse" style={{ background: `linear-gradient(135deg, var(--logo-cyan), var(--logo-magenta))`, animationDelay: '1s' }} />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-18 blur-2xl animate-bounce-slow" style={{ background: `linear-gradient(135deg, var(--logo-yellow), var(--logo-orange))` }} />
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full opacity-20 blur-2xl animate-pulse" style={{ background: `linear-gradient(135deg, var(--logo-magenta), var(--logo-purple))`, animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-15 blur-xl animate-pulse" style={{ background: `linear-gradient(135deg, var(--logo-yellow), var(--logo-cyan))`, animationDelay: '3s' }} />
            </div>

            <div className="container-custom relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-sm font-semibold mb-8 animate-fade-in shadow-lg border border-primary-400">
                        🎉 Diversão e alegria no Riacho Fundo 2!
                    </div>

                    {/* Main title */}
                    <Heading level={1} className="mb-6 animate-slide-up">
                        <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-yellow-400 bg-clip-text text-transparent">
                            Jr Mundo Fest
                        </span>
                        <br />
                        <span className="text-neutral-100">Eventos e Entretenimento</span>
                    </Heading>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-neutral-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up px-4">
                        ✨ Aluguel de <strong className="text-primary-300">cadeiras, mesas, pula pula e piscina de bolinhas</strong> no Riacho Fundo 2!
                        🎈 Transformamos suas festas em experiências inesquecíveis com equipamentos de qualidade e segurança garantida. 🎪
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up px-4">
                        <Button
                            as="a"
                            href={createWhatsAppUrl(siteConfig.phoneNumber, siteConfig.whatsappMessages.contact)}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                            className="group whatsapp-btn whatsapp-green text-white shadow-2xl hover:shadow-green-500/40 transform hover:scale-105 hover:-translate-y-1 font-semibold"
                        >
                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Chama no Zap!
                        </Button>

                        <Button
                            as="a"
                            href={siteConfig.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                            className="group instagram-gradient text-white shadow-2xl hover:shadow-pink-500/40 transform hover:scale-105 hover:-translate-y-1 font-semibold border-0"
                        >
                            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Veja nosso Instagram
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-neutral-700 px-4 sm:px-6">
                        <div className="text-center group">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300" style={{ background: `linear-gradient(135deg, var(--logo-purple), var(--logo-blue))` }}>
                                <span className="text-xl sm:text-2xl font-bold text-white">200+</span>
                            </div>
                            <div className="text-neutral-300 font-semibold text-sm sm:text-base px-2">🎉 Eventos Realizados</div>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300" style={{ background: `linear-gradient(135deg, var(--logo-cyan), var(--logo-magenta))` }}>
                                <span className="text-xl sm:text-2xl font-bold text-white">24h</span>
                            </div>
                            <div className="text-neutral-300 font-semibold text-sm sm:text-base px-2">⚡ Atendimento Rápido</div>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300" style={{ background: `linear-gradient(135deg, var(--logo-yellow), var(--logo-orange))` }}>
                                <span className="text-lg sm:text-xl font-bold text-white">100%</span>
                            </div>
                            <div className="text-neutral-300 font-semibold text-sm sm:text-base px-2">🎊 Diversão Garantida</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
