import { client } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/shared/ContactForm';

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await client.fetch(siteSettingsQuery);

  return (
    <Container className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
            Get in Touch
          </h1>
          <p className="text-text-secondary">
            For inquiries about artworks, commissions, or exhibitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif font-medium mb-6">Contact Information</h2>

            {settings?.contactEmail && (
              <div className="mb-6">
                <p className="text-sm text-text-muted mb-1">Email</p>
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="text-sea-deep hover:text-sea-medium transition-colors"
                >
                  {settings.contactEmail}
                </a>
              </div>
            )}

            {settings?.contactPhone && (
              <div className="mb-6">
                <p className="text-sm text-text-muted mb-1">Phone</p>
                <a
                  href={`tel:${settings.contactPhone}`}
                  className="text-sea-deep hover:text-sea-medium transition-colors"
                >
                  {settings.contactPhone}
                </a>
              </div>
            )}

            {settings?.location && (
              <div className="mb-6">
                <p className="text-sm text-text-muted mb-1">Location</p>
                <p className="text-text-secondary">{settings.location}</p>
              </div>
            )}

            <div className="mt-8 p-6 bg-off-white rounded-lg">
              <h3 className="text-lg font-serif font-medium mb-3">
                Interested in a Piece?
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Please include the artwork title in your message. I'll respond with
                details on availability, pricing, and shipping.
              </p>
              <p className="text-sm text-text-secondary">
                Commission inquiries are also welcome.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-medium mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
