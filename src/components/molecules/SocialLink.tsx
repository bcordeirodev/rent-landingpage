import { LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface SocialLinkProps {
    icon: LucideIcon;
    href: string;
    label: string;
    variant?: 'default' | 'large';
    className?: string;
}

export default function SocialLink({
    icon: Icon,
    href,
    label,
    variant = 'default',
    className,
}: SocialLinkProps) {
    const isLarge = variant === 'large';

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={clsx(
                'inline-flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110',
                className || 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl',
                isLarge ? 'w-12 h-12' : 'w-10 h-10'
            )}
        >
            <Icon className={isLarge ? 'w-6 h-6' : 'w-5 h-5'} />
        </a>
    );
}
