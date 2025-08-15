import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  action?: ReactNode;
}

export default function ContactItem({
  icon: Icon,
  title,
  value,
  href,
  action,
}: ContactItemProps) {
  const content = (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-neutral-600">{title}</h3>
        <p className="text-lg font-semibold text-neutral-900 truncate">{value}</p>
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block hover:scale-105 transition-transform duration-200"
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
}
