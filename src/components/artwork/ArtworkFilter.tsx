'use client';

import Link from 'next/link';
import clsx from 'clsx';

interface Medium {
  _id: string;
  name: string;
  slug: { current: string };
}

interface ArtworkFilterProps {
  currentMedium?: string;
  mediums: Medium[];
}

export default function ArtworkFilter({ currentMedium, mediums }: ArtworkFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Link
        href="/works"
        className={clsx(
          'px-4 py-2 rounded-full text-sm font-medium transition-all',
          !currentMedium
            ? 'bg-sea-deep text-white'
            : 'bg-warm-gray text-text-primary hover:bg-cool-gray'
        )}
      >
        All
      </Link>

      {mediums.map((medium) => {
        const isActive = currentMedium === medium.slug.current;
        const href = `/works?medium=${encodeURIComponent(medium.slug.current)}`;

        return (
          <Link
            key={medium._id}
            href={href}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              isActive
                ? 'bg-sea-deep text-white'
                : 'bg-warm-gray text-text-primary hover:bg-cool-gray'
            )}
          >
            {medium.name}
          </Link>
        );
      })}
    </div>
  );
}
