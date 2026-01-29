import { client } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/shared/ContactForm';

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await client.fetch(siteSettingsQuery);

  return (
    <div className="min-h-screen pt-24 bg-paper">
      {/* Page Header - Two column layout */}
      <div className="relative py-12 md:py-16 overflow-hidden border-b border-ink/10">
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Title */}
            <div>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-ink">
                Contact
              </h1>
              <p className="text-lg text-warm-gray leading-relaxed">
                For inquiries about artworks, commissions, or exhibitions.
              </p>
            </div>

            {/* Right - Quick info */}
            <div className="flex flex-col md:items-end gap-4 text-right">
              <div className="inline-block text-sm text-stone border-l-2 border-ocean pl-4 text-left">
                <p className="font-serif text-ink mb-1">Response Time</p>
                <p>Usually within 24-48 hours</p>
              </div>
              <div className="inline-block text-sm text-stone border-l-2 border-ocean pl-4 text-left">
                <p className="font-serif text-ink mb-1">Currently Based</p>
                <p>Beijing, China</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-light mb-6 text-ink">
                Contact Information
              </h2>

              <div className="space-y-4">
                {settings?.contactEmail && (
                  <div className="flex items-center gap-4 p-4 bg-cream border border-ink/10">
                    <div className="w-10 h-10 border border-ink/30 flex items-center justify-center text-ink flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-stone uppercase tracking-wider">Email</p>
                      <a
                        href={`mailto:${settings.contactEmail}`}
                        className="text-ink hover:text-ocean transition-colors"
                      >
                        {settings.contactEmail}
                      </a>
                    </div>
                  </div>
                )}

                {settings?.contactPhone && (
                  <div className="flex items-center gap-4 p-4 bg-cream border border-ink/10">
                    <div className="w-10 h-10 border border-ink/30 flex items-center justify-center text-ink flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-stone uppercase tracking-wider">Phone</p>
                      <a
                        href={`tel:${settings.contactPhone}`}
                        className="text-ink hover:text-ocean transition-colors"
                      >
                        {settings.contactPhone}
                      </a>
                    </div>
                  </div>
                )}

                {settings?.location && (
                  <div className="flex items-center gap-4 p-4 bg-cream border border-ink/10">
                    <div className="w-10 h-10 border border-ink/30 flex items-center justify-center text-ink flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-stone uppercase tracking-wider">Location</p>
                      <p className="text-ink">{settings.location}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Info Card */}
              <div className="mt-6 bg-ink/5 border-l-2 border-ink p-5">
                <h3 className="text-base font-serif font-normal mb-2 text-ink">
                  Interested in a Piece?
                </h3>
                <p className="text-sm text-stone mb-3">
                  Please include the artwork title in your message. I'll respond with
                  details on availability, pricing, and shipping.
                </p>
                <p className="text-xs text-ocean font-medium">
                  Commission inquiries are also welcome.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-light mb-6 text-ink">
                Send a Message
              </h2>
              <div className="bg-cream border border-ink/10 p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
