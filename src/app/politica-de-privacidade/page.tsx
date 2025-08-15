import type { Metadata } from 'next';
import DefaultLayout from '@/layouts/DefaultLayout';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Heading from '@/components/atoms/Heading';
import Card from '@/components/atoms/Card';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: `Política de Privacidade do ${siteConfig.name}. Saiba como protegemos e utilizamos seus dados.`,
  openGraph: {
    title: `Política de Privacidade | ${siteConfig.name}`,
    description: `Política de Privacidade do ${siteConfig.name}. Saiba como protegemos e utilizamos seus dados.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadePage() {
  const lastUpdated = 'Dezembro de 2023';

  return (
    <DefaultLayout
      title="Política de Privacidade"
      description={`Política de Privacidade do ${siteConfig.name}. Saiba como protegemos e utilizamos seus dados.`}
      url={`${siteConfig.url}/politica-de-privacidade`}
    >
      <Header />
      <main className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={1} className="mb-4">
                Política de Privacidade
              </Heading>
              <p className="text-neutral-600">
                Última atualização: {lastUpdated}
              </p>
            </div>

            <Card padding="lg">
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    1. Introdução
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    O {siteConfig.name} está comprometido em proteger a privacidade e segurança
                    das informações pessoais de nossos clientes. Esta Política de Privacidade
                    descreve como coletamos, usamos, armazenamos e protegemos suas informações
                    quando você utiliza nossos serviços.
                  </p>
                </section>

                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    2. Informações que Coletamos
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Coletamos as seguintes informações quando você entra em contato conosco:
                  </p>
                  <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Informações sobre seu evento (data, local, número de convidados)</li>
                    <li>Mensagens e comunicações que você nos envia</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    3. Como Utilizamos suas Informações
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Utilizamos suas informações para:
                  </p>
                  <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                    <li>Responder às suas solicitações de orçamento</li>
                    <li>Fornecer nossos serviços de aluguel de cadeiras</li>
                    <li>Comunicar sobre seu evento e agendamentos</li>
                    <li>Melhorar nossos serviços</li>
                    <li>Enviar informações relevantes sobre nossos serviços (apenas se você concordar)</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    4. Compartilhamento de Informações
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
                    exceto quando:
                  </p>
                  <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                    <li>For necessário para fornecer nossos serviços</li>
                    <li>Tivermos seu consentimento explícito</li>
                    <li>For exigido por lei</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    5. Segurança das Informações
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Implementamos medidas de segurança adequadas para proteger suas informações
                    contra acesso não autorizado, alteração, divulgação ou destruição. Suas
                    informações são armazenadas em servidores seguros e são acessíveis apenas
                    por funcionários autorizados.
                  </p>
                </section>

                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    6. Retenção de Dados
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir
                    os propósitos descritos nesta política, a menos que um período de retenção
                    mais longo seja exigido ou permitido por lei.
                  </p>
                </section>

                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    7. Seus Direitos
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Você tem o direito de:
                  </p>
                  <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                    <li>Acessar suas informações pessoais que possuímos</li>
                    <li>Solicitar correção de informações incorretas</li>
                    <li>Solicitar exclusão de suas informações</li>
                    <li>Retirar seu consentimento a qualquer momento</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    8. Cookies e Tecnologias Similares
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Nosso site pode usar cookies para melhorar sua experiência de navegação.
                    Você pode configurar seu navegador para recusar cookies, mas isso pode
                    afetar a funcionalidade do site.
                  </p>
                </section>

                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    9. Alterações nesta Política
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos
                    sobre mudanças significativas publicando a nova política em nosso site com
                    uma nova data de &ldquo;última atualização&rdquo;.
                  </p>
                </section>

                <section className="mb-8">
                  <Heading level={2} className="mb-4">
                    10. Contato
                  </Heading>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como
                    tratamos suas informações pessoais, entre em contato conosco:
                  </p>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-700 mb-2">
                      <strong>E-mail:</strong> {siteConfig.email}
                    </p>
                    <p className="text-neutral-700 mb-2">
                      <strong>Telefone:</strong> {siteConfig.phone}
                    </p>
                    <p className="text-neutral-700">
                      <strong>Endereço:</strong> {siteConfig.address}
                    </p>
                  </div>
                </section>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </DefaultLayout>
  );
}
