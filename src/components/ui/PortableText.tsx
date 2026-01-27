import { PortableText as PortableTextReact } from '@portabletext/react';
import SanityImage from '../shared/SanityImage';

const components = {
  types: {
    image: ({ value }: any) => (
      <figure className="my-8">
        <SanityImage
          image={value}
          alt={value.alt || ''}
          width={800}
          className="w-full"
        />
        {value.caption && (
          <figcaption className="text-sm text-text-secondary mt-2 text-center">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sea-deep underline hover:text-sea-medium transition-colors"
      >
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-serif font-medium mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-serif font-medium mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-serif font-medium mt-4 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-sea-light pl-4 italic my-6 text-text-secondary">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
};

export default function PortableText({ value }: { value: any }) {
  if (!value) return null;
  return <PortableTextReact value={value} components={components} />;
}
