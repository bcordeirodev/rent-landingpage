import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function Card({
  children,
  className,
  padding = 'md',
  shadow = 'md',
  rounded = 'lg',
}: CardProps) {
  const baseClasses = 'bg-white border border-neutral-200';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };

  return (
    <div
      className={clsx(
        baseClasses,
        paddingClasses[padding],
        shadowClasses[shadow],
        roundedClasses[rounded],
        className
      )}
    >
      {children}
    </div>
  );
}
