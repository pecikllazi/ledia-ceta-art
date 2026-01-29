'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  { href: '/exhibitions', label: 'Exhibitions' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1">
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/'));
        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full',
              isActive
                ? 'text-biolum-cyan'
                : 'text-pearl-muted hover:text-pearl'
            )}
          >
            {link.label}
            {isActive && (
              <span className="absolute inset-0 rounded-full bg-biolum-cyan/10 border border-biolum-cyan/30"></span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
