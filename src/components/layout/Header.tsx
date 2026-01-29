'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Container from '../ui/Container';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-sm border-b border-cloud py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="text-2xl md:text-3xl font-serif font-normal tracking-wide text-ink transition-colors duration-300 group-hover:text-ocean">
              Ledia Çeta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
