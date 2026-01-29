import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full overflow-hidden';

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-biolum-cyan to-biolum-teal text-ocean-abyss
      hover:shadow-glow-cyan hover:scale-[1.02]
      active:scale-[0.98]
    `,
    secondary: `
      bg-ocean-twilight/50 text-pearl border border-pearl-subtle
      hover:bg-ocean-twilight hover:border-pearl-muted
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-biolum-cyan border border-biolum-cyan/50
      hover:bg-biolum-cyan/10 hover:border-biolum-cyan
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-pearl-muted
      hover:text-pearl hover:bg-pearl-subtle/10
    `,
  };

  const classes = clsx(baseStyles, sizes[size], variants[variant], className);

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
