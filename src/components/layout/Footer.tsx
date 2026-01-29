import Link from 'next/link';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden">
      {/* Top Divider */}
      <div className="divider-glow"></div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-biolum-cyan/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-biolum-teal/5 rounded-full blur-[120px]"></div>
      </div>

      <Container className="relative z-10">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <span className="text-3xl font-display font-light text-pearl">
                  Ledia <span className="text-gradient-ocean">Çeta</span>
                </span>
              </Link>
              <p className="text-pearl-muted leading-relaxed mb-6 max-w-sm">
                Visual Artist specializing in painting, mixed media, and installation art.
                Capturing the spirit of the Adriatic Sea through color and emotion.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-pearl-subtle">Based in Beijing</span>
                <span className="w-1 h-1 rounded-full bg-biolum-cyan/50"></span>
                <span className="text-sm text-pearl-subtle">Inspired by Albania</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="text-sm uppercase tracking-widest text-biolum-cyan mb-6">Navigation</h3>
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
                      className="text-pearl-muted hover:text-pearl transition-colors duration-300 flex items-center gap-3 group"
                    >
                      <span className="w-0 h-px bg-biolum-cyan transition-all duration-300 group-hover:w-4"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h3 className="text-sm uppercase tracking-widest text-biolum-cyan mb-6">Get in Touch</h3>
              <p className="text-pearl-muted leading-relaxed mb-6">
                Interested in a piece or have a commission in mind? I'd love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-pearl hover:text-biolum-cyan transition-colors duration-300 group"
              >
                Contact Me
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-pearl-subtle/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-pearl-subtle">
              © {currentYear} Ledia Çeta. All rights reserved.
            </p>
            <p className="text-sm text-pearl-subtle flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-biolum-cyan/50 animate-pulse"></span>
              Crafted with passion for art and the sea
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
