import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  gradient?: boolean;
}

export default function Heading({ 
  children, 
  level, 
  className,
  gradient = false 
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseClasses = 'font-bold leading-tight';
  
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl',
  };

  return (
    <Tag
      className={clsx(
        baseClasses,
        sizeClasses[level],
        gradient ? 'text-gradient' : 'text-neutral-900',
        className
      )}
    >
      {children}
    </Tag>
  );
}
