import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface BaseButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    loading?: boolean;
}

interface ButtonAsButtonProps extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'button';
}

interface ButtonAsLinkProps extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    as: 'a';
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent',
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const combinedClassName = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      )}
      {children}
    </>
  );

  if ('as' in props && props.as === 'a') {
    const { as, ...anchorProps } = props as ButtonAsLinkProps;
    return (
      <a className={combinedClassName} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { as, disabled, ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
