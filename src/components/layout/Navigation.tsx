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
              'text-sm font-medium transition-all hover:text-sea-deep relative pb-1',
              isActive ? 'text-sea-deep' : 'text-text-primary',
              isActive && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sea-deep'
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
