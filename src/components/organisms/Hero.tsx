import { MessageCircle, Phone, Star } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Button from '@/components/atoms/Button';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Star className="w-4 h-4 fill-current" />
            Atendimento de qualidade no Riacho Fundo 1
          </div>

          {/* Main title */}
          <Heading level={1} className="mb-6 animate-slide-up" gradient>
            Aluguel de Cadeiras
            <br />
            <span className="text-neutral-900">com Qualidade e Confiança</span>
          </Heading>

          {/* Subtitle */}
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Oferecemos cadeiras de qualidade para seus eventos no Riacho Fundo 1. 
            Atendimento rápido, preços justos e entrega garantida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              as="a"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Solicitar Orçamento
            </Button>
            
            <Button
              as="a"
              href={`tel:${siteConfig.phone}`}
              variant="outline"
              size="lg"
              className="group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Ligar Agora
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-neutral-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-neutral-600">Eventos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
              <div className="text-neutral-600">Atendimento Rápido</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-neutral-600">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
