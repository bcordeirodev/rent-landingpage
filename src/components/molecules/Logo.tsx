import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
    const sizeClasses = {
        sm: { image: 'w-8 h-8', text: 'text-lg' },
        md: { image: 'w-10 h-10', text: 'text-xl' },
        lg: { image: 'w-12 h-12', text: 'text-2xl' },
    };

    return (
        <Link href="/" className="inline-flex items-center gap-3 group">
            <div className={`${sizeClasses[size].image} relative group-hover:scale-110 transition-transform duration-200 logo-glow`}>
                <Image
                    src="/logo.png"
                    alt="Jr Mundo Fest"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <span className={`font-bold text-white ${sizeClasses[size].text}`}>
                Jr Mundo Fest
            </span>
        </Link>
    );
}
