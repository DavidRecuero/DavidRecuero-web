import { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
}

export function LinkButton({ href, icon, children }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-button-background hover:bg-button-background-hovered text-quaternary text-sm font-mono rounded-lg transition-colors"
    >
        {icon && (
        <span className="w-4 h-4 flex items-center justify-center">
          {icon}
        </span>
        )}
        
        {children}
    </a>
  );
}