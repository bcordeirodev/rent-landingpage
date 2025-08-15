import { forwardRef, TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = true, className, rows = 4, ...props }, ref) => {
    return (
      <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={clsx(
            'input-field resize-vertical',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500 mt-1">{error}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
