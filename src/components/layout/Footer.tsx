import Link from 'next/link';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto bg-deep-sea text-cream">
      {/* Top Divider */}
      <div className="h-px bg-teal/30"></div>

      <Container className="relative z-10">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <span className="text-3xl font-serif font-light text-cream">
                  Ledia Çeta
                </span>
              </Link>
              <p className="text-cream/70 leading-relaxed mb-6 max-w-sm">
                Visual Artist specializing in painting, mixed media, and installation art.
                Capturing the spirit of the Adriatic Sea through color and emotion.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-cream/50">Based in Beijing</span>
                <span className="w-px h-3 bg-cream/30"></span>
                <span className="text-sm text-cream/50">Inspired by Albania</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="text-sm uppercase tracking-widest text-cream/50 mb-6">Navigation</h3>
              <ul className="space-y-4">
                {[
                  { href: '/works', label: 'Works' },
                  { href: '/exhibitions', label: 'Exhibitions' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/70 hover:text-cream transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h3 className="text-sm uppercase tracking-widest text-cream/50 mb-6">Get in Touch</h3>
              <p className="text-cream/70 leading-relaxed mb-6">
                Interested in a piece or have a commission in mind? I'd love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-cream hover:text-cream/70 transition-colors duration-300 group"
              >
                Contact Me
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/50">
              © {currentYear} Ledia Çeta. All rights reserved.
            </p>
            <p className="text-sm text-cream/50">
              Crafted with passion for art and the sea
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
