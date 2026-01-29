'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  { href: '/exhibitions', label: 'Exhibitions' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/'));
        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'text-sm font-medium transition-all pb-1 border-b-2',
              isActive
                ? 'text-sea-light border-sea-light'
                : 'text-white/80 border-transparent hover:text-white hover:border-sea-light/50'
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
