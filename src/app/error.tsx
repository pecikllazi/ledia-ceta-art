'use client';

import Container from '@/components/ui/Container';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen pt-24 bg-paper flex items-center">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-stone mb-4">
            Error
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-ink">
            Something Went Wrong
          </h1>
          <p className="text-lg text-warm-gray mb-10 leading-relaxed">
            We encountered an unexpected error. Please try again.
          </p>
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-ink text-paper text-sm tracking-wider uppercase hover:bg-charcoal transition-colors"
          >
            Try Again
          </button>
        </div>
      </Container>
    </div>
  );
}
