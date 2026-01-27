'use client';

import Link from 'next/link';
import clsx from 'clsx';

const mediums = [
  { label: 'All', value: '' },
  { label: 'Watercolours on Silk', value: 'watercolour-silk' },
  { label: 'Acrylic on Canvas', value: 'acrylic-canvas' },
  { label: 'Mixed Media', value: 'mixed-media' },
  { label: 'Installation', value: 'installation' },
  { label: 'Oil on Canvas', value: 'oil-canvas' },
  { label: 'Porcelain', value: 'porcelain' },
];

interface ArtworkFilterProps {
  currentMedium?: string;
}

export default function ArtworkFilter({ currentMedium }: ArtworkFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {mediums.map((medium) => {
        const isActive = currentMedium === medium.value;
        const href = medium.value ? `/works?medium=${medium.value}` : '/works';

        return (
          <Link
            key={medium.value}
            href={href}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              isActive
                ? 'bg-sea-deep text-white'
                : 'bg-warm-gray text-text-primary hover:bg-cool-gray'
            )}
          >
            {medium.label}
          </Link>
        );
      })}
    </div>
  );
}
