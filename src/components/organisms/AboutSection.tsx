import { CheckCircle, Clock, Truck, Shield } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Card from '@/components/atoms/Card';

export default function AboutSection() {
    const features = [
        {
            icon: CheckCircle,
            title: 'Eventos Únicos',
            description: 'Criamos experiências personalizadas e memoráveis para cada ocasião.',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Clock,
            title: 'Atendimento Rápido',
            description: 'Resposta ágil e planejamento eficiente para seu evento.',
            color: 'from-pink-500 to-pink-600'
        },
        {
            icon: Truck,
            title: 'Serviço Completo',
            description: 'Cuidamos de todos os detalhes do seu evento do início ao fim.',
            color: 'from-yellow-500 to-yellow-600'
        },
        {
            icon: Shield,
            title: 'Confiança Total',
            description: 'Anos de experiência trazendo alegria ao Riacho Fundo 2.',
            color: 'from-blue-500 to-blue-600'
        },
    ];

    return (
        <section id="sobre" className="py-16 sm:py-20 bg-neutral-800">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <Heading level={2} className="mb-6">
                        Por que escolher o Jr Mundo Fest?
                    </Heading>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        Somos especialistas em eventos e entretenimento no Riacho Fundo 2, oferecendo
                        experiências únicas e personalizadas para tornar seu evento inesquecível.
                        Nossa paixão e dedicação garantem a diversão e satisfação de todos os participantes.
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
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Nossa História
                            </span>
                        </Heading>
                        <div className="prose prose-lg mx-auto text-neutral-300 space-y-4 sm:space-y-6">
                            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg border border-purple-500/30">
                                <p className="text-lg leading-relaxed">
                                    Há mais de <span className="font-bold text-purple-400">5 anos</span> levando alegria e diversão para a comunidade do Riacho Fundo 2,
                                    construímos nossa reputação baseada na criatividade, inovação e
                                    excelência no entretenimento. Entendemos que cada momento é único e
                                    especial, por isso criamos experiências personalizadas para suas celebrações.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-pink-900/20 to-yellow-900/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg border border-pink-500/30">
                                <p className="text-lg leading-relaxed">
                                    Nosso compromisso vai além do simples entretenimento. Trabalhamos
                                    para que você tenha <span className="font-bold text-pink-400">momentos inesquecíveis e muita diversão</span>, sabendo que pode contar
                                    conosco para transformar qualquer ocasião em uma festa especial.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg border border-yellow-500/30">
                                <p className="text-lg leading-relaxed">
                                    Seja para festas de aniversário, casamentos, eventos corporativos ou
                                    comemorações familiares, estamos aqui para fazer a <span className="font-bold text-yellow-400">magia acontecer no seu dia especial</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
