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
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/'));
        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'relative text-sm tracking-wide transition-colors duration-300',
              isActive
                ? 'text-ink'
                : 'text-stone hover:text-ink'
            )}
          >
            {link.label}
            <span
              className={clsx(
                'absolute -bottom-1 left-0 h-px bg-ink transition-all duration-300',
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
