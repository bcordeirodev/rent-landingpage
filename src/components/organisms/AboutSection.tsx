import { CheckCircle, Clock, Truck, Shield } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Card from '@/components/atoms/Card';

export default function AboutSection() {
    const features = [
        {
            icon: CheckCircle,
            title: 'Qualidade Garantida',
            description: 'Cadeiras higienizadas e em perfeito estado de conservação.',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Clock,
            title: 'Entrega Rápida',
            description: 'Atendimento ágil e pontual para seu evento.',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Truck,
            title: 'Entrega e Retirada',
            description: 'Levamos e buscamos as cadeiras no local do seu evento.',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Shield,
            title: 'Confiança',
            description: 'Anos de experiência servindo o Riacho Fundo 2.',
            color: 'from-orange-500 to-orange-600'
        },
    ];

    return (
        <section id="sobre" className="py-16 sm:py-20 bg-neutral-800">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <Heading level={2} className="mb-6">
                        Por que escolher nosso serviço?
                    </Heading>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        Somos especialistas em aluguel de cadeiras no Riacho Fundo 2, oferecendo
                        um serviço completo e personalizado para tornar seu evento um sucesso.
                        Nossa experiência e comprometimento garantem a satisfação dos nossos clientes.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="text-center hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 group hover:-translate-y-2 border border-neutral-700 bg-neutral-900"
                        >
                            <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                <feature.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-100 mb-3 group-hover:text-primary-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="bg-neutral-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-neutral-700">
                    <div className="max-w-4xl mx-auto">
                        <Heading level={3} className="text-center mb-8">
                            Nossa História
                        </Heading>
                        <div className="prose prose-lg mx-auto text-neutral-300 space-y-4 sm:space-y-6">
                            <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg border border-neutral-700/50">
                                <p className="text-lg leading-relaxed">
                                    Há mais de <span className="font-bold text-primary-400">10 anos</span> atendendo a comunidade do Riacho Fundo 2,
                                    construímos nossa reputação baseada na qualidade, pontualidade e
                                    excelência no atendimento. Entendemos que cada evento é único e
                                    especial, por isso oferecemos soluções personalizadas para suas necessidades.
                                </p>
                            </div>
                            <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg border border-neutral-700/50">
                                <p className="text-lg leading-relaxed">
                                    Nosso compromisso vai além do simples aluguel de cadeiras. Trabalhamos
                                    para que você tenha <span className="font-bold text-secondary-400">tranquilidade e segurança</span>, sabendo que pode contar
                                    conosco em todos os momentos do seu evento.
                                </p>
                            </div>
                            <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg border border-neutral-700/50">
                                <p className="text-lg leading-relaxed">
                                    Seja para festas de aniversário, casamentos, eventos corporativos ou
                                    comemorações familiares, estamos aqui para fazer a <span className="font-bold text-green-400">diferença no seu dia especial</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
