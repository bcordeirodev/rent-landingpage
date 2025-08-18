import { MessageCircle, Phone, Star } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Button from '@/components/atoms/Button';
import { siteConfig } from '@/config/site';

export default function Hero() {
    return (
        <section className="relative py-16 sm:py-24 lg:py-36 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-15 blur-2xl animate-bounce-slow" />
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container-custom relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-8 animate-fade-in shadow-lg border border-purple-500">
                        <Star className="w-4 h-4 fill-current text-yellow-300" />
                        Diversão e entretenimento no Riacho Fundo 2
                    </div>

                    {/* Main title */}
                    <Heading level={1} className="mb-6 animate-slide-up">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                            Jr Mundo Fest
                        </span>
                        <br />
                        <span className="text-neutral-100">Eventos e Entretenimento</span>
                    </Heading>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-neutral-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up px-4">
                        Transformamos seus momentos especiais em experiências inesquecíveis.
                        Diversão, alegria e entretenimento de qualidade para toda a família.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up px-4">
                        <Button
                            as="a"
                            href={siteConfig.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                            className="group bg-green-600 hover:bg-green-700 text-white shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 hover:-translate-y-1"
                        >
                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Falar no WhatsApp
                        </Button>

                        <Button
                            as="a"
                            href={`tel:${siteConfig.phone}`}
                            variant="outline"
                            size="lg"
                            className="group border-2 border-primary-400 text-primary-400 hover:bg-primary-500 hover:text-white shadow-xl hover:shadow-primary-500/30 transform hover:scale-105 hover:-translate-y-1"
                        >
                            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Ligar Agora
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-neutral-700 px-4">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <span className="text-2xl font-bold text-white">200+</span>
                            </div>
                            <div className="text-neutral-300 font-semibold">Eventos Realizados</div>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <span className="text-2xl font-bold text-white">24h</span>
                            </div>
                            <div className="text-neutral-300 font-semibold">Atendimento Rápido</div>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <span className="text-lg font-bold text-white">100%</span>
                            </div>
                            <div className="text-neutral-300 font-semibold">Diversão Garantida</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
