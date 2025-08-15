import { MessageCircle, Phone, Star } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Button from '@/components/atoms/Button';
import { siteConfig } from '@/config/site';

export default function Hero() {
    return (
        <section className="relative py-16 sm:py-24 lg:py-36 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-30 blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-20 blur-2xl animate-bounce-slow" />
            </div>

            <div className="container-custom relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-neutral-200 rounded-full text-sm font-semibold mb-8 animate-fade-in shadow-lg border border-neutral-700">
                        <Star className="w-4 h-4 fill-current text-primary-400" />
                        Atendimento de qualidade no Riacho Fundo 2
                    </div>

                    {/* Main title */}
                    <Heading level={1} className="mb-6 animate-slide-up">
                        Aluguel de Cadeiras
                        <br />
                        <span className="text-neutral-100">com Qualidade e Confiança</span>
                    </Heading>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-neutral-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up px-4">
                        Oferecemos cadeiras de qualidade para seus eventos no Riacho Fundo 2.
                        Atendimento rápido, preços justos e entrega garantida.
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
                            Solicitar Orçamento
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
                            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <span className="text-2xl font-bold text-white">500+</span>
                            </div>
                            <div className="text-neutral-300 font-semibold">Eventos Realizados</div>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <span className="text-2xl font-bold text-white">24h</span>
                            </div>
                            <div className="text-neutral-300 font-semibold">Atendimento Rápido</div>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                <span className="text-lg font-bold text-white">100%</span>
                            </div>
                            <div className="text-neutral-300 font-semibold">Satisfação Garantida</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
