import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Button from '@/components/atoms/Button';
import ContactItem from '@/components/molecules/ContactItem';
import SocialLink from '@/components/molecules/SocialLink';
import { siteConfig } from '@/config/site';

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Heading level={2} className="mb-6">
            Entre em Contato
          </Heading>
          <p className="text-lg text-neutral-600">
            Estamos prontos para atender você! Entre em contato conosco 
            através dos canais abaixo e solicite seu orçamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <ContactItem
              icon={Phone}
              title="Telefone"
              value={siteConfig.phone}
              href={`tel:${siteConfig.phone}`}
              action={
                <Button
                  as="a"
                  href={`tel:${siteConfig.phone}`}
                  size="sm"
                  variant="outline"
                >
                  Ligar
                </Button>
              }
            />

            <ContactItem
              icon={MessageCircle}
              title="WhatsApp"
              value="Clique para conversar"
              href={siteConfig.whatsapp}
              action={
                <Button
                  as="a"
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  Abrir
                </Button>
              }
            />

            <ContactItem
              icon={Mail}
              title="E-mail"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              action={
                <Button
                  as="a"
                  href={`mailto:${siteConfig.email}`}
                  size="sm"
                  variant="outline"
                >
                  Enviar
                </Button>
              }
            />

            <ContactItem
              icon={MapPin}
              title="Localização"
              value={siteConfig.address}
            />

            {/* Social Media */}
            <div className="pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Siga-nos nas redes sociais
              </h3>
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
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-primary-600" />
              </div>
              
              <Heading level={3} className="mb-4">
                Solicite seu Orçamento
              </Heading>
              
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Precisa de cadeiras para seu evento? Entre em contato conosco 
                pelo WhatsApp e receba um orçamento personalizado rapidamente.
              </p>

              <div className="space-y-4">
                <Button
                  as="a"
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  fullWidth
                  className="group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Solicitar Orçamento via WhatsApp
                </Button>
                
                <Button
                  as="a"
                  href="/contato"
                  variant="outline"
                  size="lg"
                  fullWidth
                >
                  Formulário de Contato
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">24h</div>
                    <div className="text-sm text-neutral-600">Resposta</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">Grátis</div>
                    <div className="text-sm text-neutral-600">Orçamento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
