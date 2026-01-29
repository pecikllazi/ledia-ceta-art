import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-biolum-cyan/5 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-biolum-teal/5 rounded-full blur-[150px]"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-card">
                <Image
                  src="/aboutmevisual.jpg"
                  alt="Ledia Çeta - Visual Artist"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss/60 via-transparent to-transparent"></div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl glass-card flex items-center justify-center">
                <span className="text-4xl font-display text-biolum-cyan">30+</span>
                <span className="text-xs text-pearl-muted ml-2">Years of<br/>Art</span>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-biolum-cyan/80 border border-biolum-cyan/20 rounded-full backdrop-blur-sm mb-6">
                About the Artist
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6">
                <span className="text-pearl">Ledia </span>
                <span className="text-gradient-ocean">Çeta</span>
              </h1>
              <p className="text-xl text-pearl-muted leading-relaxed mb-8">
                An Albanian painter capturing the spirit of the sea through three decades
                of artistic exploration across continents.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/works" variant="primary">
                  View Collection
                </Button>
                <Button href="/contact" variant="outline">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Artist Statement */}
      <section className="relative section-padding">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-12">
              <span className="text-pearl">The Sea as </span>
              <span className="text-gradient-ocean">Spiritual Anchor</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-pearl-muted leading-relaxed">
                As an Albanian painter and the spouse of a diplomat, I have spent over thirty years
                accompanying my husband across numerous countries, witnessing the splendour of diverse
                civilisations and gaining firsthand insight into contemporary art.
              </p>
              <p className="text-lg md:text-xl text-pearl-muted leading-relaxed">
                Amid this constant movement, <span className="text-biolum-cyan">the sea of Albania has remained
                my spiritual anchor.</span> I depict the sea with the stroke of the spatula — a practice
                that brings me profound emotional healing.
              </p>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="divider-glow"></div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light">
              <span className="text-pearl">Artistic </span>
              <span className="text-gradient-ocean">Philosophy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Traditional Media',
                description: 'The cornerstone of cultural subjectivity. Through painting, watercolours on silk, and mixed media, I maintain connection to artistic heritage.',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
              },
              {
                title: 'Personal Experience',
                description: 'The vital source of creativity. Great cultural visions must be grounded in authentic individual expression.',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
              {
                title: 'Self-Healing',
                description: 'The core value of art, enabling it to transcend boundaries and foster mutual understanding amongst civilisations.',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-biolum-cyan/10 flex items-center justify-center text-biolum-cyan mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-medium text-pearl mb-4">{item.title}</h3>
                <p className="text-pearl-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-biolum-cyan/5 rounded-full blur-[200px]"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="relative">
              <div className="text-biolum-cyan/20 text-9xl absolute -top-16 left-1/2 -translate-x-1/2 font-display">"</div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-pearl leading-relaxed mb-8 relative z-10">
                My hometown is nestled by the Adriatic Sea, where crystal-clear waters kiss the reefs
                and fishing boats sway gently on the shimmering waves. The ocean is the very inspiration
                behind my creations.
              </p>
              <footer className="text-pearl-muted text-sm">
                Interview with Xinhua News Agency, December 2025
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light">
              <span className="text-pearl">Artistic </span>
              <span className="text-gradient-ocean">Journey</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { period: '2021 – Present', location: 'Beijing, China', description: 'Participation at various exhibitions throughout China. Paintings on canvas and silk.' },
              { period: '2019 – 2021', location: 'Tirana, Albania', description: 'Paintings on silk, porcelain and canvas. Participation in various art fairs.' },
              { period: '2016 – 2019', location: 'Sofia, Bulgaria', description: 'Studio Arts and Soul. Paintings on silk and porcelain, participation in various fairs.' },
              { period: '2010 – 2016', location: 'Tirana, Albania', description: 'Paintings on porcelain and canvas. Participation in various art fairs.' },
              { period: '2009 – 2010', location: 'Ankara, Turkey', description: 'Beginning as a full-time painter. Paintings on glazed porcelain and canvas.' },
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-biolum-cyan via-biolum-teal to-transparent"></div>
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-biolum-cyan"></div>

                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-display font-medium text-biolum-cyan">{item.period}</h3>
                    <span className="text-sm text-pearl-muted">{item.location}</span>
                  </div>
                  <p className="text-pearl-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <Container>
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-biolum-cyan/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-light mb-6 text-pearl">
                Let's Connect
              </h2>
              <p className="text-xl text-pearl-muted mb-8 max-w-xl mx-auto">
                Interested in my work or have a commission in mind?
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
