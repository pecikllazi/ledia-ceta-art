'use client';

import { useState } from 'react';
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

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 flex items-center justify-center text-ink"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={clsx(
              'w-full h-px bg-current transition-all duration-300 origin-center',
              isOpen && 'rotate-45 translate-y-[9px]'
            )}
          />
          <span
            className={clsx(
              'w-full h-px bg-current transition-all duration-300',
              isOpen && 'opacity-0 scale-0'
            )}
          />
          <span
            className={clsx(
              'w-full h-px bg-current transition-all duration-300 origin-center',
              isOpen && '-rotate-45 -translate-y-[9px]'
            )}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 transition-all duration-500',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-paper/98 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <nav className="relative z-10 flex flex-col items-center justify-center h-full">
          {links.map((link, index) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/'));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'py-4 text-3xl font-serif font-light tracking-wide transition-all duration-300',
                  isActive
                    ? 'text-ink'
                    : 'text-stone hover:text-ink'
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
