import { client } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/shared/ContactForm';

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await client.fetch(siteSettingsQuery);

  return (
    <div className="min-h-screen pt-24 bg-paper">
      {/* Page Header */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-6">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-ink">
              Contact
            </h1>
            <p className="text-xl text-warm-gray leading-relaxed">
              For inquiries about artworks, commissions, or exhibitions.
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="divider"></div>
        </div>
      </div>

      {/* Contact Section */}
      <Container className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-ink">
                Contact Information
              </h2>

              <div className="space-y-6">
                {settings?.contactEmail && (
                  <div className="bg-cream border border-cloud p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border border-ocean flex items-center justify-center text-ocean flex-shrink-0">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-stone uppercase tracking-wider mb-1">Email</p>
                        <a
                          href={`mailto:${settings.contactEmail}`}
                          className="text-lg text-ink hover:text-ocean transition-colors"
                        >
                          {settings.contactEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {settings?.contactPhone && (
                  <div className="bg-cream border border-cloud p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border border-ocean flex items-center justify-center text-ocean flex-shrink-0">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-stone uppercase tracking-wider mb-1">Phone</p>
                        <a
                          href={`tel:${settings.contactPhone}`}
                          className="text-lg text-ink hover:text-ocean transition-colors"
                        >
                          {settings.contactPhone}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {settings?.location && (
                  <div className="bg-cream border border-cloud p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border border-ocean flex items-center justify-center text-ocean flex-shrink-0">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-stone uppercase tracking-wider mb-1">Location</p>
                        <p className="text-lg text-ink">{settings.location}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Info Card */}
              <div className="mt-8 bg-cream border-l-2 border-ocean p-6">
                <h3 className="text-lg font-serif font-normal mb-3 text-ink">
                  Interested in a Piece?
                </h3>
                <p className="text-warm-gray mb-4">
                  Please include the artwork title in your message. I'll respond with
                  details on availability, pricing, and shipping.
                </p>
                <p className="text-sm text-ocean">
                  Commission inquiries are also welcome.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-ink">
                Send a Message
              </h2>
              <div className="bg-cream border border-cloud p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
