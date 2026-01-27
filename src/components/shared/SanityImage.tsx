import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface SanityImageProps {
  image: any;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function SanityImage({
  image,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
}: SanityImageProps) {
  if (!image) return null;

  const imageUrl = urlFor(image)
    .width(width || 1200)
    .quality(85)
    .auto('format')
    .url();

  // Generate blur placeholder
  const blurUrl = urlFor(image)
    .width(20)
    .quality(30)
    .blur(10)
    .url();

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        placeholder="blur"
        blurDataURL={blurUrl}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      className={className}
      placeholder="blur"
      blurDataURL={blurUrl}
      priority={priority}
    />
  );
}
