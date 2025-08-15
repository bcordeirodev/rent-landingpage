import Link from 'next/link';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
    const sizeClasses = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
    };

    return (
        <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-sm">AC</span>
            </div>
            <span className={`font-bold text-white ${sizeClasses[size]}`}>
                Aluguel de Cadeiras
            </span>
        </Link>
    );
}
