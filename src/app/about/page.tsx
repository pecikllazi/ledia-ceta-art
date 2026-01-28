import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section with Portrait */}
      <div className="relative bg-gradient-to-b from-off-white to-white">
        <Container className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 items-center">
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/aboutmepic.jpg"
                  alt="Ledia Çeta"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <p className="text-sea-medium font-medium mb-3 tracking-wide uppercase text-sm">
                  Visual Artist
                </p>
                <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 leading-tight">
                  Ledia Çeta
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                  An Albanian painter capturing the spirit of the sea through three decades
                  of artistic exploration across continents.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/works" variant="primary">
                    View Works
                  </Button>
                  <Button href="/contact" variant="outline">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Artist Statement */}
      <Container className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 text-center">
            The Sea as Spiritual Anchor
          </h2>
          <div className="prose prose-lg md:prose-xl max-w-none text-text-secondary space-y-6">
            <p className="text-center text-xl md:text-2xl font-light leading-relaxed">
              As an Albanian painter and the spouse of a diplomat, I have spent over thirty years
              accompanying my husband across numerous countries, witnessing the splendour of diverse
              civilisations and gaining firsthand insight into contemporary art.
            </p>
            <p className="text-center text-xl md:text-2xl font-light leading-relaxed">
              Amid this constant movement, <span className="text-sea-deep font-medium">the sea of Albania has remained
              my spiritual anchor.</span>
            </p>
          </div>
        </div>
      </Container>

      {/* Philosophy Cards */}
      <div className="bg-off-white py-20 md:py-32">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center">
              Artistic Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sea-deep text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-serif font-medium mb-4">Traditional Media</h3>
                <p className="text-text-secondary leading-relaxed">
                  The cornerstone of cultural subjectivity. Through painting, watercolours on silk,
                  and mixed media, I maintain connection to artistic heritage.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sea-deep text-4xl mb-4">✨</div>
                <h3 className="text-xl font-serif font-medium mb-4">Personal Experience</h3>
                <p className="text-text-secondary leading-relaxed">
                  The vital source of creativity. Great cultural visions must be grounded in
                  authentic individual expression.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sea-deep text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-serif font-medium mb-4">Self-Healing</h3>
                <p className="text-text-secondary leading-relaxed">
                  The core value of art, enabling it to transcend boundaries and foster
                  mutual understanding amongst civilisations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Quote Section */}
      <Container className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <blockquote className="relative">
            <div className="text-sea-deep text-6xl md:text-8xl absolute -top-8 -left-4 md:-left-8 opacity-20 font-serif">
              "
            </div>
            <p className="text-2xl md:text-3xl font-serif font-light text-text-primary leading-relaxed mb-8 relative z-10">
              My hometown is nestled by the Adriatic Sea, where crystal-clear waters kiss the reefs
              and fishing boats sway gently on the shimmering waves. The ocean is the very inspiration
              behind my creations.
            </p>
            <footer className="text-text-muted text-sm border-t border-warm-gray pt-4">
              Interview with Xinhua News Agency, December 2025
            </footer>
          </blockquote>
        </div>
      </Container>

      {/* Recent Highlights - Featured Exhibitions */}
      <div className="bg-gradient-to-b from-white to-off-white py-20 md:py-32">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-center">
              Recent Highlights
            </h2>
            <p className="text-center text-text-secondary mb-16 text-lg">
              Participation in 7 international exhibitions during 2025
            </p>

            <div className="space-y-12">
              {/* Beijing Biennale - Featured */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-sea-deep text-white text-xs font-medium rounded-full mb-3">
                        International Biennale
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-medium mb-2">
                        The 10th Beijing International Art Biennale
                      </h3>
                      <p className="text-sea-medium font-medium italic">"Coexistence"</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-text-muted">December 2025 – January 2026</p>
                      <p className="text-text-secondary">Beijing, China</p>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    The Beijing Biennale continuously explores innovative concepts in global artistic creation,
                    discovering and promoting outstanding new artists and exemplary artworks from five continents worldwide.
                  </p>
                  <p className="text-sm text-text-muted">
                    Participating artwork: <span className="italic">Under the Sea</span> — Acrylic on Canvas
                  </p>
                </div>
              </div>

              {/* Conference */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-sea-medium text-white text-xs font-medium rounded-full mb-3">
                        Roundtable Speaker
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif font-medium mb-2">
                        International Art Conference of BIAB
                      </h3>
                      <p className="text-sea-medium font-medium italic text-sm">
                        "Mutual Learning Among Civilizations and Artistic Innovation"
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-text-muted">December 29–30, 2025</p>
                      <p className="text-text-secondary">Beijing, China</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted">
                    Session: Fluid Contemporaneity and the Construction of Cultural Subjectivity
                  </p>
                </div>
              </div>

              {/* Other exhibitions in compact grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <p className="text-xs text-text-muted mb-2">Dec 9–10, 2025 • Guangzhou</p>
                  <h4 className="text-lg font-serif font-medium mb-2">Everything Has a Spirit</h4>
                  <p className="text-sm text-text-secondary mb-2">International Environmental Art Exhibition</p>
                  <p className="text-xs text-text-muted italic">The Sea Before the Storm</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <p className="text-xs text-text-muted mb-2">Oct 13–27, 2025 • Beijing</p>
                  <h4 className="text-lg font-serif font-medium mb-2">The Endless River</h4>
                  <p className="text-sm text-text-secondary mb-2">Contemporary Artists Invitational</p>
                  <p className="text-xs text-text-muted italic">Fire — Mixed Media</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <p className="text-xs text-text-muted mb-2">Oct 2025 – Mar 2026 • Taiyuan</p>
                  <h4 className="text-lg font-serif font-medium mb-2">Taiyuan Contemporary</h4>
                  <p className="text-sm text-text-secondary mb-2">International Contemporary Art Exhibition</p>
                  <p className="text-xs text-text-muted italic">3 works on silk</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <p className="text-xs text-text-muted mb-2">Jun 28 – Aug 17, 2025 • Shenzhen</p>
                  <h4 className="text-lg font-serif font-medium mb-2">Melody</h4>
                  <p className="text-sm text-text-secondary mb-2">Contemporary Art Exhibition</p>
                  <p className="text-xs text-text-muted italic">16 paintings</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <p className="text-xs text-text-muted mb-2">May 29 – Jun 28, 2025 • Beijing</p>
                  <h4 className="text-lg font-serif font-medium mb-2">Symphony of Civilizations</h4>
                  <p className="text-sm text-text-secondary mb-2">Chinese & Albanian Cultural Heritage</p>
                  <p className="text-xs text-text-muted italic">10 paintings</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <p className="text-xs text-text-muted mb-2">Mar 1–30, 2025 • Hebei</p>
                  <h4 className="text-lg font-serif font-medium mb-2">Dragons and Snakes</h4>
                  <p className="text-sm text-text-secondary mb-2">International Contemporary Art Exhibition</p>
                  <p className="text-xs text-text-muted italic">At the Seaside — Installation</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Artistic Journey Timeline */}
      <Container className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-16 text-center">
            Artistic Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-sea-light transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-xl font-serif font-medium text-sea-deep mb-2">2021 – Present</h3>
                  <p className="text-lg text-text-primary mb-2">Beijing, China</p>
                </div>
                <div className="md:pl-12">
                  <p className="text-text-secondary">
                    Participation at various exhibitions throughout China. Paintings on canvas and silk.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-sea-deep rounded-full transform md:-translate-x-1/2"></div>
              </div>

              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-xl font-serif font-medium text-sea-deep mb-2">2019 – 2021</h3>
                  <p className="text-lg text-text-primary mb-2">Tirana, Albania</p>
                </div>
                <div className="md:pl-12">
                  <p className="text-text-secondary">
                    Paintings on silk, porcelain and canvas. Participation in various art fairs.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-sea-medium rounded-full transform md:-translate-x-1/2"></div>
              </div>

              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-xl font-serif font-medium text-sea-deep mb-2">2016 – 2019</h3>
                  <p className="text-lg text-text-primary mb-2">Sofia, Bulgaria</p>
                </div>
                <div className="md:pl-12">
                  <p className="text-text-secondary">
                    Studio Arts and Soul. Paintings on silk and porcelain, participation in various fairs.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-sea-medium rounded-full transform md:-translate-x-1/2"></div>
              </div>

              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-xl font-serif font-medium text-sea-deep mb-2">2010 – 2016</h3>
                  <p className="text-lg text-text-primary mb-2">Tirana, Albania</p>
                </div>
                <div className="md:pl-12">
                  <p className="text-text-secondary">
                    Paintings on porcelain and canvas. Participation in various art fairs.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-sea-light rounded-full transform md:-translate-x-1/2"></div>
              </div>

              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-xl font-serif font-medium text-sea-deep mb-2">2009 – 2010</h3>
                  <p className="text-lg text-text-primary mb-2">Ankara, Turkey</p>
                </div>
                <div className="md:pl-12">
                  <p className="text-text-secondary">
                    Beginning as a full-time painter. Paintings on glazed porcelain and canvas.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-sea-light rounded-full transform md:-translate-x-1/2"></div>
              </div>

              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-xl font-serif font-medium text-sea-deep mb-2">Early Stages</h3>
                  <p className="text-lg text-text-primary mb-2">Tirana, Albania</p>
                </div>
                <div className="md:pl-12">
                  <p className="text-text-secondary">
                    Work with pencils and replicas. Still life paintings and artistic foundations.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-warm-gray rounded-full transform md:-translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Final CTA */}
      <div className="bg-sea-deep text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Let's Connect
            </h2>
            <p className="text-xl mb-8 text-sea-light">
              Interested in my work or have a commission in mind?
            </p>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-sea-deep">
              Get in Touch
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
