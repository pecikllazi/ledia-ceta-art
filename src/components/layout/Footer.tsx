import Link from 'next/link';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sea-deep to-sea-dark text-white mt-auto">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-4 text-white">Ledia Çeta</h3>
              <p className="text-sea-light/80 leading-relaxed">
                Visual Artist specializing in painting, mixed media, and installation art.
                Capturing the spirit of the Adriatic Sea through color and emotion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-medium mb-4 text-sea-light">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/works"
                    className="text-white/70 hover:text-sea-light transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-0.5 bg-sea-light/50"></span>
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exhibitions"
                    className="text-white/70 hover:text-sea-light transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-0.5 bg-sea-light/50"></span>
                    Exhibitions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-sea-light transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-0.5 bg-sea-light/50"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-sea-light transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-0.5 bg-sea-light/50"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif font-medium mb-4 text-sea-light">Connect</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Follow for updates on exhibitions and new works. Based in Beijing, creating art inspired by the Albanian coast.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sea-light hover:text-white transition-colors duration-300"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-sea-medium/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {currentYear} Ledia Çeta. All rights reserved.
            </p>
            <p className="text-sm text-white/50">
              Made with passion for art and the sea
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
