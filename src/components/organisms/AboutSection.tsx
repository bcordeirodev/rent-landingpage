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
            title: 'Entrega e Montagem',
            description: 'Levamos cadeiras, mesas, pula pula e piscina de bolinhas até você no Riacho Fundo 2.',
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
        <section id="sobre" className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-16 left-16 w-56 h-56 rounded-full opacity-8 blur-2xl animate-pulse" style={{ background: `linear-gradient(135deg, var(--logo-magenta), var(--logo-purple))` }} />
                <div className="absolute bottom-16 right-16 w-40 h-40 rounded-full opacity-10 blur-xl animate-pulse" style={{ background: `linear-gradient(135deg, var(--logo-orange), var(--logo-yellow))`, animationDelay: '1s' }} />
            </div>

            <div className="container-custom relative">
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <Heading level={2} className="mb-6">
                        Por que escolher o Jr Mundo Fest?
                    </Heading>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        Especialistas em <strong className="text-primary-300">aluguel de cadeiras, mesas, pula pula e piscina de bolinhas</strong> no Riacho Fundo 2. 
                        Oferecemos equipamentos de qualidade para festas infantis, aniversários e eventos, 
                        com <strong className="text-secondary-300">entrega, montagem e segurança garantida</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="text-center hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-500 group hover:-translate-y-3 border-2 border-neutral-600 hover:border-primary-400/50 bg-gradient-to-br from-neutral-800 to-neutral-900 backdrop-blur-sm"
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
                    <div className="max-w-1xl mx-auto">
                        <Heading level={3} className="text-center mb-8">
                            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                Nossa História
                            </span>
                        </Heading>
                        <div className="prose prose-lg mx-auto text-neutral-300 space-y-4 sm:space-y-6">
                            <div className="bg-primary-900/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg border border-primary-500/30">
                                <p className="text-lg leading-relaxed">
                                    Há mais de <span className="font-bold text-primary-400">5 anos</span> oferecendo aluguel de cadeiras, mesas, pula pula e piscina de bolinhas 
                                    para a comunidade do Riacho Fundo 2. Construímos nossa reputação baseada na qualidade dos equipamentos,
                                    segurança das crianças e excelência no atendimento. Entendemos que cada festa infantil é única e
                                    especial, por isso oferecemos equipamentos limpos e seguros para suas celebrações.
                                </p>
                            </div>
                            <div className="bg-secondary-900/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg border border-secondary-500/30">
                                <p className="text-lg leading-relaxed">
                                    Nosso compromisso vai além do simples entretenimento. Trabalhamos
                                    para que você tenha <span className="font-bold text-secondary-400">momentos inesquecíveis e muita diversão</span>, sabendo que pode contar
                                    conosco para transformar qualquer ocasião em uma festa especial.
                                </p>
                            </div>
                            <div className="backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg border" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', borderColor: 'rgba(251, 191, 36, 0.3)' }}>
                                <p className="text-lg leading-relaxed">
                                    Seja para festas de aniversário infantil, comemorações familiares ou eventos no Riacho Fundo 2, 
                                    temos <span className="font-bold" style={{ color: 'var(--logo-yellow)' }}>cadeiras confortáveis, mesas resistentes, pula pula seguro e piscina de bolinhas limpa</span> 
                                    para fazer a magia acontecer no seu dia especial.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
