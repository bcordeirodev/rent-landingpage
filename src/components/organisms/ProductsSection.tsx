import Image from 'next/image';
import { Armchair, Table, Zap, Waves } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Card from '@/components/atoms/Card';

export default function ProductsSection() {
    const products = [
        {
            icon: Armchair,
            title: 'Cadeiras',
            description: 'Aluguel de cadeiras resistentes e confortáveis para festas infantis e eventos no Riacho Fundo 2',
            image: '/products/cadeira.png',
            color: 'logo-purple-blue'
        },
        {
            icon: Table,
            title: 'Mesas',
            description: 'Aluguel de mesas resistentes e funcionais para festa infantil e eventos familiares',
            image: '/products/mesa.png',
            color: 'logo-cyan-magenta'
        },
        {
            icon: Zap,
            title: 'Pula Pula - Cama Elástica',
            description: 'Aluguel de pula pula e cama elástica com segurança garantida para festa infantil',
            image: '/products/cama_elastica.png',
            color: 'logo-yellow-orange'
        },
        {
            icon: Waves,
            title: 'Piscina de Bolinhas',
            description: 'Aluguel de piscina de bolinhas limpa e segura para diversão das crianças',
            image: '/products/piscina_bolina.png',
            color: 'logo-magenta-purple'
        },
        {
            icon: Zap,
            title: 'Pegue e Monte',
            description: 'Pegue você mesmo e monte a decoração, são mais de 30 temas variados para escolher e montar no local do seu evento (Consultar disponibilidade e nossos temas via WhatsApp).',
            image: '/products/pegue_e_monte.jpeg',
            color: 'logo-yellow-orange'
        },
    ];

    return (
        <section id="produtos" className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-2xl animate-pulse" style={{ background: `linear-gradient(135deg, var(--logo-yellow), var(--logo-orange))` }} />
                <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 blur-xl animate-pulse" style={{ background: `linear-gradient(135deg, var(--logo-cyan), var(--logo-blue))`, animationDelay: '2s' }} />
            </div>

            <div className="container-custom relative">
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <Heading level={2} className="mb-6">
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                            🎪 Nossos Produtos
                        </span>
                    </Heading>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        🎉 <strong className="text-primary-300">Aluguel de cadeiras, mesas, pula pula e piscina de bolinhas</strong> no Riacho Fundo 2!
                        Equipamentos de qualidade para festa infantil com segurança e higiene garantidas.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-500 hover:-translate-y-3 border-2 border-neutral-600 hover:border-primary-400/50 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden backdrop-blur-sm"
                        >
                            {/* Imagem do produto */}
                            <div className="relative h-48 mb-6 -mx-6 -mt-6 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>

                                {/* Ícone flutuante */}
                                <div
                                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                                    style={{
                                        background: product.color === 'logo-purple-blue' ? `linear-gradient(135deg, var(--logo-purple), var(--logo-blue))` :
                                            product.color === 'logo-cyan-magenta' ? `linear-gradient(135deg, var(--logo-cyan), var(--logo-magenta))` :
                                                product.color === 'logo-yellow-orange' ? `linear-gradient(135deg, var(--logo-yellow), var(--logo-orange))` :
                                                    `linear-gradient(135deg, var(--logo-magenta), var(--logo-purple))`
                                    }}
                                >
                                    <product.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Conteúdo */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-neutral-100 mb-3 group-hover:text-primary-400 transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Nota sobre imagens ilustrativas */}
                <div className="text-center mt-8 mb-6">
                    <p className="text-sm text-neutral-400 italic">
                        📸 <em>As imagens são meramente ilustrativas. Os produtos reais podem variar em cor, tamanho e acabamento.</em>
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-neutral-300 mb-6">
                        🤔 Não encontrou o que procura? Fale conosco!
                    </p>
                    <a
                        href="https://wa.me/5561999467972"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-green-400/30"
                    >
                        💬 Consultar Produtos
                    </a>
                </div>
            </div>
        </section>
    );
}
