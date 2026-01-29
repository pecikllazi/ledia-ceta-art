import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-md';

  const variants = {
    primary: 'bg-sea-bright text-white hover:bg-sea-light',
    secondary: 'bg-sea-dark text-sea-pale hover:bg-sea-medium',
    outline:
      'border-2 border-sea-light text-sea-light hover:bg-sea-light hover:text-sea-deep',
  };

  const classes = clsx(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
