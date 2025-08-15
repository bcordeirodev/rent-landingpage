import { CheckCircle, Clock, Truck, Shield } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Card from '@/components/atoms/Card';

export default function AboutSection() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Qualidade Garantida',
      description: 'Cadeiras higienizadas e em perfeito estado de conservação.',
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Atendimento ágil e pontual para seu evento.',
    },
    {
      icon: Truck,
      title: 'Entrega e Retirada',
      description: 'Levamos e buscamos as cadeiras no local do seu evento.',
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Anos de experiência servindo o Riacho Fundo 1.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Heading level={2} className="mb-6">
            Por que escolher nosso serviço?
          </Heading>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Somos especialistas em aluguel de cadeiras no Riacho Fundo 1, oferecendo 
            um serviço completo e personalizado para tornar seu evento um sucesso. 
            Nossa experiência e comprometimento garantem a satisfação dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-neutral-50 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <Heading level={3} className="text-center mb-8">
              Nossa História
            </Heading>
            <div className="prose prose-lg mx-auto text-neutral-700">
              <p className="mb-6">
                Há mais de 10 anos atendendo a comunidade do Riacho Fundo 1, 
                construímos nossa reputação baseada na qualidade, pontualidade e 
                excelência no atendimento. Entendemos que cada evento é único e 
                especial, por isso oferecemos soluções personalizadas para suas necessidades.
              </p>
              <p className="mb-6">
                Nosso compromisso vai além do simples aluguel de cadeiras. Trabalhamos 
                para que você tenha tranquilidade e segurança, sabendo que pode contar 
                conosco em todos os momentos do seu evento.
              </p>
              <p>
                Seja para festas de aniversário, casamentos, eventos corporativos ou 
                comemorações familiares, estamos aqui para fazer a diferença no seu dia especial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
