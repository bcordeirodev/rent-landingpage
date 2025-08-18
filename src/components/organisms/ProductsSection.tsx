import Image from 'next/image';
import { Armchair, Table, Zap, Waves } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Card from '@/components/atoms/Card';

export default function ProductsSection() {
    const products = [
        {
            icon: Armchair,
            title: 'Cadeiras',
            description: 'Cadeiras confortáveis para todos os tipos de eventos',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
            color: 'logo-purple-blue'
        },
        {
            icon: Table,
            title: 'Mesas',
            description: 'Mesas de diversos tamanhos para suas necessidades',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80',
            color: 'logo-cyan-magenta'
        },
        {
            icon: Zap,
            title: 'Cama Elástica',
            description: 'Diversão garantida para a criançada!',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80',
            color: 'logo-yellow-orange'
        },
        {
            icon: Waves,
            title: 'Piscina de Bolinhas',
            description: 'Alegria e segurança para os pequenos',
            image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&q=80',
            color: 'logo-magenta-purple'
        }
    ];

    return (
        <section id="produtos" className="py-16 sm:py-20 bg-neutral-800">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <Heading level={2} className="mb-6">
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                            🎪 Nossos Produtos
                        </span>
                    </Heading>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        🎉 Tudo que você precisa para tornar seu evento inesquecível! 
                        Produtos de qualidade com segurança garantida.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 hover:-translate-y-2 border border-neutral-700 bg-neutral-900 overflow-hidden"
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

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-neutral-300 mb-6">
                        🤔 Não encontrou o que procura? Fale conosco!
                    </p>
                    <a
                        href="https://wa.me/5561999467972"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
                    >
                        💬 Consultar Produtos
                    </a>
                </div>
            </div>
        </section>
    );
}
