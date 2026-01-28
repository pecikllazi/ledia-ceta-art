import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <Container className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
            Ledia Çeta
          </h1>
          <p className="text-xl text-text-secondary mb-6">
            Visual Artist (Painting, Mixed Media, Installation)
          </p>
          <p className="text-text-secondary">
            Albania
          </p>
        </div>

        {/* Artist Statement */}
        <div className="mb-16 bg-off-white p-8 md:p-12">
          <h2 className="text-3xl font-serif font-light mb-6">Artist Statement</h2>
          <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
            <p>
              As an Albanian Painter and the spouse of a diplomat, I have spent over thirty years
              accompanying my husband across numerous countries, witnessing the splendour of diverse
              civilisations and gaining firsthand insight into contemporary art. Amid this constant
              movement, the sea of Albania has remained my spiritual anchor.
            </p>
            <p>
              I depict the sea with the stroke of the spatula – a practice that brings me profound
              emotional healing. I believe the "fluidity" of contemporary art manifests in multiple
              dimensions, and "cultural subjectivity" lies in a clear understanding of one's own identity.
            </p>
            <p>
              I am convinced that artistic innovation stems from sincere expression, and that
              "contemporaneity" resides in how art responds to individual experience and cultural identity.
            </p>
            <p className="font-medium text-text-primary">
              Three core reflections guide my work:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Traditional media serves as the "cornerstone" of cultural subjectivity.</strong>
                Through painting, watercolours on silk, and mixed media, I maintain connection to artistic heritage.
              </li>
              <li>
                <strong>Personal experience is the "vital source" of creativity.</strong>
                Great cultural visions must be grounded in authentic individual expression.
              </li>
              <li>
                <strong>Self-healing constitutes the "core value" of art,</strong>
                enabling it to transcend boundaries and foster mutual understanding amongst civilisations.
              </li>
            </ul>
          </div>
        </div>

        {/* Selected Exhibitions 2025 */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-light mb-8">Selected Exhibitions (2025)</h2>

          <div className="space-y-12">
            {/* Beijing Biennale */}
            <div>
              <div className="grid md:grid-cols-[180px,1fr] gap-4 mb-3">
                <div className="text-sea-deep font-medium">Dec 28, 2025 – Jan 28, 2026</div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">
                    The 10th Beijing International Art Biennale (BIAB)
                  </h3>
                  <p className="text-text-secondary italic mb-2">"Coexistence"</p>
                  <p className="text-text-secondary">Beijing, China</p>
                  <p className="text-sm text-text-muted mt-2">
                    Participating artwork: <span className="italic">Under the Sea</span>, Acrylic on Canvas
                  </p>
                </div>
              </div>
            </div>

            {/* International Art Conference */}
            <div>
              <div className="grid md:grid-cols-[180px,1fr] gap-4 mb-3">
                <div className="text-sea-deep font-medium">Dec 29–30, 2025</div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">
                    The 1st International Art Conference of BIAB
                  </h3>
                  <p className="text-text-secondary italic mb-2">
                    "Mutual Learning Among Civilizations and Artistic Innovation"
                  </p>
                  <p className="text-text-secondary">Beijing, China</p>
                  <p className="text-sm text-text-muted mt-2">
                    Participating Artist & Roundtable Speaker<br />
                    Session: Fluid Contemporaneity and the Construction of Cultural Subjectivity
                  </p>
                </div>
              </div>
            </div>

            {/* Everything Has a Spirit */}
            <div>
              <div className="grid md:grid-cols-[180px,1fr] gap-4 mb-3">
                <div className="text-sea-deep font-medium">Dec 9–10, 2025</div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">
                    Everything Has a Spirit
                  </h3>
                  <p className="text-text-secondary italic mb-2">
                    International Environmental Art Exhibition
                  </p>
                  <p className="text-text-secondary">Guangzhou, China</p>
                  <p className="text-sm text-text-muted mt-2">
                    Participating artwork: <span className="italic">The Sea Before the Storm</span>, Watercolours on Silk
                  </p>
                </div>
              </div>
            </div>

            {/* The Endless River */}
            <div>
              <div className="grid md:grid-cols-[180px,1fr] gap-4 mb-3">
                <div className="text-sea-deep font-medium">Oct 13–27, 2025</div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">
                    The Endless River
                  </h3>
                  <p className="text-text-secondary italic mb-2">
                    Invitational Exhibition of Contemporary Artists
                  </p>
                  <p className="text-text-secondary">Beijing, China</p>
                  <p className="text-sm text-text-muted mt-2">
                    Exhibited artwork: <span className="italic">Fire</span>, Mixed Media / Watercolours on Silk
                  </p>
                </div>
              </div>
            </div>

            {/* Taiyuan Contemporary */}
            <div>
              <div className="grid md:grid-cols-[180px,1fr] gap-4 mb-3">
                <div className="text-sea-deep font-medium">Oct 2, 2025 – Mar 25, 2026</div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">
                    Taiyuan Contemporary
                  </h3>
                  <p className="text-text-secondary italic mb-2">
                    International Contemporary Art Invitational Exhibition
                  </p>
                  <p className="text-text-secondary">Taiyuan, China</p>
                  <p className="text-sm text-text-muted mt-2">
                    Participating works: <span className="italic">Cosmic Reflection</span>;
                    <span className="italic"> The Sunken Star</span>;
                    <span className="italic"> The Eye of the Cosmos</span>, Watercolours on Silk
                  </p>
                </div>
              </div>
            </div>

            {/* Melody */}
            <div>
              <div className="grid md:grid-cols-[180px,1fr] gap-4 mb-3">
                <div className="text-sea-deep font-medium">Jun 28 – Aug 17, 2025</div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">
                    Melody
                  </h3>
                  <p className="text-text-secondary italic mb-2">
                    Contemporary Art Exhibition
                  </p>
                  <p className="text-text-secondary">Shenzhen, China</p>
                  <p className="text-sm text-text-muted mt-2">
                    Exhibited artwork: 16 paintings
                  </p>
                </div>
              </div>
            </div>

            {/* Symphony of Civilizations */}
            <div>
              <div className="grid md:grid-cols-[180px,1fr] gap-4 mb-3">
                <div className="text-sea-deep font-medium">May 29 – Jun 28, 2025</div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">
                    Symphony of Civilizations
                  </h3>
                  <p className="text-text-secondary italic mb-2">
                    An Artistic Journey through Chinese and Albanian Cultural Heritage
                  </p>
                  <p className="text-text-secondary">Beijing, China</p>
                  <p className="text-sm text-text-muted mt-2">
                    Participating works: 10 paintings
                  </p>
                </div>
              </div>
            </div>

            {/* Dragons and Snakes */}
            <div>
              <div className="grid md:grid-cols-[180px,1fr] gap-4 mb-3">
                <div className="text-sea-deep font-medium">Mar 1–30, 2025</div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">
                    The Transformation of Dragons and Snakes
                  </h3>
                  <p className="text-text-secondary italic mb-2">
                    2025 International Contemporary Art Invitational Exhibition
                  </p>
                  <p className="text-text-secondary">Hebei Normal University, China</p>
                  <p className="text-sm text-text-muted mt-2">
                    Participating artwork: <span className="italic">At the Seaside</span>, Installation Art, Watercolours on Silk
                  </p>
                </div>
              </div>
            </div>

            {/* Women's Art Forum */}
            <div>
              <div className="grid md:grid-cols-[180px,1fr] gap-4 mb-3">
                <div className="text-sea-deep font-medium">Mar 9, 2025</div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">
                    The Transformation of Dragons and Snakes
                  </h3>
                  <p className="text-text-secondary italic mb-2">
                    2025 Women's Art Forum
                  </p>
                  <p className="text-text-secondary">Hebei Normal University, China</p>
                  <p className="text-sm text-text-muted mt-2">
                    Invited Participating Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artistic Life Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-light mb-8">Artistic Life</h2>

          <div className="space-y-8">
            <div className="grid md:grid-cols-[180px,1fr] gap-4">
              <div className="text-sea-deep font-medium">2021 – ongoing</div>
              <div className="text-text-secondary">
                <p className="font-medium text-text-primary mb-2">Beijing, China</p>
                <p>Participation at various exhibitions in China</p>
                <p className="text-sm text-text-muted mt-1">Paintings on canvas and silk</p>
              </div>
            </div>

            <div className="grid md:grid-cols-[180px,1fr] gap-4">
              <div className="text-sea-deep font-medium">2019 – 2021</div>
              <div className="text-text-secondary">
                <p className="font-medium text-text-primary mb-2">Tirana, Albania</p>
                <p>Paintings on silk, porcelain and canvas</p>
                <p className="text-sm text-text-muted mt-1">Participation on various fairs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-[180px,1fr] gap-4">
              <div className="text-sea-deep font-medium">2016 – 2019</div>
              <div className="text-text-secondary">
                <p className="font-medium text-text-primary mb-2">Sofia, Bulgaria</p>
                <p>Paintings on silk / Studio Arts and Soul</p>
                <p className="text-sm text-text-muted mt-1">Porcelain Paintings / Participation in various fairs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-[180px,1fr] gap-4">
              <div className="text-sea-deep font-medium">2010 – 2016</div>
              <div className="text-text-secondary">
                <p className="font-medium text-text-primary mb-2">Tirana, Albania</p>
                <p>Paintings on porcelain and canvas</p>
                <p className="text-sm text-text-muted mt-1">Participation on various fairs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-[180px,1fr] gap-4">
              <div className="text-sea-deep font-medium">2009 – 2010</div>
              <div className="text-text-secondary">
                <p className="font-medium text-text-primary mb-2">Ankara, Turkey</p>
                <p>Starting as a full-time painter</p>
                <p className="text-sm text-text-muted mt-1">
                  Paintings on Glazed Porcelain<br />
                  Paintings on canvas
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[180px,1fr] gap-4">
              <div className="text-sea-deep font-medium">Early stages</div>
              <div className="text-text-secondary">
                <p className="font-medium text-text-primary mb-2">Tirana, Albania</p>
                <p>Work with pencils and replicas</p>
                <p className="text-sm text-text-muted mt-1">Replicas and still life paintings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Biography Quote */}
        <div className="mb-16 border-l-4 border-sea-deep pl-6 py-4">
          <p className="text-lg text-text-secondary italic">
            "My hometown is nestled by the Adriatic Sea, where crystal-clear waters kiss the reefs
            and fishing boats sway gently on the shimmering waves. The ocean is the very inspiration
            behind my creations. When I witnessed plastic waste defiling the blue waves and oil slicks
            corroding the corals, I realized deeply that the ocean is not an inexhaustible treasure,
            but a living being that demands our protection. Every one of my marine paintings captures
            its grandeur while voicing its fragility."
          </p>
          <p className="text-sm text-text-muted mt-4">
            — From interview with Xinhua News Agency, December 2025
          </p>
        </div>

        {/* Contact CTA */}
        <div className="text-center pt-8 border-t border-warm-gray">
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </div>
    </Container>
  );
}
