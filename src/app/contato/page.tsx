import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import DefaultLayout from '@/layouts/DefaultLayout';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import ContactForm from '@/components/organisms/ContactForm';
import ContactItem from '@/components/molecules/ContactItem';
import Heading from '@/components/atoms/Heading';
import Card from '@/components/atoms/Card';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contato',
  description: `Entre em contato com ${siteConfig.name}. Solicite seu orçamento para aluguel de cadeiras no Riacho Fundo 1.`,
  openGraph: {
    title: `Contato | ${siteConfig.name}`,
    description: `Entre em contato com ${siteConfig.name}. Solicite seu orçamento para aluguel de cadeiras no Riacho Fundo 1.`,
  },
};

export default function ContatoPage() {
  return (
    <DefaultLayout
      title="Contato"
      description={`Entre em contato com ${siteConfig.name}. Solicite seu orçamento para aluguel de cadeiras no Riacho Fundo 1.`}
      url={`${siteConfig.url}/contato`}
    >
      <Header />
      <main className="py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <Heading level={1} className="mb-6">
                Entre em Contato
              </Heading>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Estamos aqui para tornar seu evento especial. Entre em contato conosco 
                e solicite seu orçamento personalizado.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card>
                  <Heading level={3} className="mb-6">
                    Informações de Contato
                  </Heading>
                  <div className="space-y-4">
                    <ContactItem
                      icon={Phone}
                      title="Telefone"
                      value={siteConfig.phone}
                      href={`tel:${siteConfig.phone}`}
                    />
                    <ContactItem
                      icon={Mail}
                      title="E-mail"
                      value={siteConfig.email}
                      href={`mailto:${siteConfig.email}`}
                    />
                    <ContactItem
                      icon={MapPin}
                      title="Localização"
                      value={siteConfig.address}
                    />
                    <ContactItem
                      icon={Clock}
                      title="Horário de Atendimento"
                      value="Segunda a Domingo: 8h às 18h"
                    />
                  </div>
                </Card>

                {/* Business Hours */}
                <Card>
                  <Heading level={3} className="mb-6">
                    Como Trabalhamos
                  </Heading>
                  <div className="space-y-4 text-sm text-neutral-600">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 text-xs font-bold">1</span>
                      </div>
                      <div>
                        <strong className="text-neutral-900">Solicitação:</strong> Entre em contato conosco pelo formulário, WhatsApp ou telefone.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 text-xs font-bold">2</span>
                      </div>
                      <div>
                        <strong className="text-neutral-900">Orçamento:</strong> Enviamos um orçamento personalizado em até 24 horas.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 text-xs font-bold">3</span>
                      </div>
                      <div>
                        <strong className="text-neutral-900">Entrega:</strong> Levamos as cadeiras no horário combinado e buscamos após o evento.
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Service Area */}
                <Card>
                  <Heading level={3} className="mb-4">
                    Área de Atendimento
                  </Heading>
                  <p className="text-neutral-600 text-sm mb-4">
                    Atendemos principalmente o Riacho Fundo 1 e regiões próximas:
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Riacho Fundo 1</li>
                    <li>• Riacho Fundo 2</li>
                    <li>• Candangolândia</li>
                    <li>• Park Way</li>
                    <li>• Núcleo Bandeirante</li>
                    <li>• Outras regiões (consulte disponibilidade)</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </DefaultLayout>
  );
}
