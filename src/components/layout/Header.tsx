import Link from 'next/link';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Container from '../ui/Container';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-sea-deep/95 via-sea-dark/95 to-sea-deep/95 backdrop-blur-md border-b border-sea-medium/30 shadow-lg">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-serif font-medium text-white hover:text-sea-light transition-colors">
            Ledia Çeta
          </Link>
          <Navigation />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
