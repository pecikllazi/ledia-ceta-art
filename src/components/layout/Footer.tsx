import Link from 'next/link';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-off-white border-t border-warm-gray mt-auto">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-serif font-medium mb-4">Ledia Çeta</h3>
              <p className="text-sm text-text-secondary">
                Visual Artist specializing in painting, mixed media, and installation art.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/works"
                    className="text-sm text-text-secondary hover:text-sea-deep transition-colors"
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exhibitions"
                    className="text-sm text-text-secondary hover:text-sea-deep transition-colors"
                  >
                    Exhibitions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-text-secondary hover:text-sea-deep transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-text-secondary hover:text-sea-deep transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif font-medium mb-4">Connect</h3>
              <p className="text-sm text-text-secondary mb-2">
                Follow for updates on exhibitions and new works.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-warm-gray text-center">
            <p className="text-sm text-text-muted">
              © {currentYear} Ledia Çeta. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
