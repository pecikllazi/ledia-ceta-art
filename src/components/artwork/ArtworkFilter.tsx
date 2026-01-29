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
    <div className="mb-10">
      <p className="text-sea-medium text-sm uppercase tracking-wider mb-4 font-medium">Filter by Medium</p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/works"
          className={clsx(
            'px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 border-2',
            !currentMedium
              ? 'bg-sea-medium text-white border-sea-medium shadow-sea'
              : 'bg-sea-pale/30 text-sea-dark border-sea-light/50 hover:bg-sea-light/30 hover:border-sea-light'
          )}
        >
          All Works
        </Link>
        {mediums.map((medium) => (
          <Link
            key={medium._id}
            href={`/works?medium=${medium.slug.current}`}
            className={clsx(
              'px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 border-2',
              currentMedium === medium.slug.current
                ? 'bg-sea-medium text-white border-sea-medium shadow-sea'
                : 'bg-sea-pale/30 text-sea-dark border-sea-light/50 hover:bg-sea-light/30 hover:border-sea-light'
            )}
          >
            {medium.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
