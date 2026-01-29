import { client } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/shared/ContactForm';

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await client.fetch(siteSettingsQuery);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-sea-dark via-sea-medium to-sea-dark py-16 md:py-24">
        <Container>
          <p className="text-sea-light text-sm uppercase tracking-[0.2em] mb-3 font-medium">
            Reach Out
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            For inquiries about artworks, commissions, or exhibitions.
          </p>
        </Container>
      </div>

      <Container className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-medium mb-6 text-sea-dark">Contact Information</h2>

              {settings?.contactEmail && (
                <div className="mb-6 p-4 bg-sea-foam/50 rounded-lg border-l-4 border-sea-medium">
                  <p className="text-sm text-sea-medium mb-1 font-medium uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="text-sea-deep hover:text-sea-bright transition-colors text-lg"
                  >
                    {settings.contactEmail}
                  </a>
                </div>
              )}

              {settings?.contactPhone && (
                <div className="mb-6 p-4 bg-sea-foam/50 rounded-lg border-l-4 border-sea-medium">
                  <p className="text-sm text-sea-medium mb-1 font-medium uppercase tracking-wider">Phone</p>
                  <a
                    href={`tel:${settings.contactPhone}`}
                    className="text-sea-deep hover:text-sea-bright transition-colors text-lg"
                  >
                    {settings.contactPhone}
                  </a>
                </div>
              )}

              {settings?.location && (
                <div className="mb-6 p-4 bg-sea-foam/50 rounded-lg border-l-4 border-sea-medium">
                  <p className="text-sm text-sea-medium mb-1 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-sea-dark text-lg">{settings.location}</p>
                </div>
              )}

              <div className="mt-8 p-6 bg-gradient-to-br from-sea-pale/30 to-sea-foam/50 rounded-lg border border-sea-light/50">
                <h3 className="text-lg font-serif font-medium mb-3 text-sea-deep">
                  Interested in a Piece?
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Please include the artwork title in your message. I'll respond with
                  details on availability, pricing, and shipping.
                </p>
                <p className="text-sm text-sea-medium font-medium">
                  Commission inquiries are also welcome.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sea border border-sea-light/30">
              <h2 className="text-2xl font-serif font-medium mb-6 text-sea-dark">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
