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
    'relative inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300';

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variants = {
    primary: `
      bg-ink text-paper
      hover:bg-charcoal
      active:bg-stone
    `,
    secondary: `
      bg-cream text-ink border border-cloud
      hover:bg-cloud hover:border-silver
      active:bg-silver
    `,
    outline: `
      bg-transparent text-ink border border-ink
      hover:bg-ink hover:text-paper
      active:bg-charcoal
    `,
    ghost: `
      bg-transparent text-stone
      hover:text-ink hover:bg-cream
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
