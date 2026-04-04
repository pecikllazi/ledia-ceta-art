import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 bg-paper flex items-center">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-4">
            404
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-ink">
            Page Not Found
          </h1>
          <p className="text-lg text-warm-gray mb-10 leading-relaxed">
            The page you are looking for may have been moved or no longer exists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 bg-ink text-paper text-sm tracking-wider uppercase hover:bg-charcoal transition-colors"
            >
              Return Home
            </Link>
            <Link
              href="/works"
              className="px-8 py-3 border border-ink text-ink text-sm tracking-wider uppercase hover:bg-ink hover:text-paper transition-colors"
            >
              View Works
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
