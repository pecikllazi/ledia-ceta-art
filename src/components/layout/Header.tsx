import Link from 'next/link';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Container from '../ui/Container';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warm-gray">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-serif font-medium text-text-primary hover:text-sea-deep transition-colors">
            Ledia Çeta
          </Link>
          <Navigation />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
