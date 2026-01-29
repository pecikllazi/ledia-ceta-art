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
    <div className="mb-12">
      <p className="text-sm text-pearl-muted uppercase tracking-widest mb-4">Filter by Medium</p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/works"
          className={clsx(
            'px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 border',
            !currentMedium
              ? 'bg-biolum-cyan/20 text-biolum-cyan border-biolum-cyan/50'
              : 'bg-transparent text-pearl-muted border-pearl-subtle/30 hover:text-pearl hover:border-pearl-muted'
          )}
        >
          All Works
        </Link>
        {mediums.map((medium) => (
          <Link
            key={medium._id}
            href={`/works?medium=${medium.slug.current}`}
            className={clsx(
              'px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 border',
              currentMedium === medium.slug.current
                ? 'bg-biolum-cyan/20 text-biolum-cyan border-biolum-cyan/50'
                : 'bg-transparent text-pearl-muted border-pearl-subtle/30 hover:text-pearl hover:border-pearl-muted'
            )}
          >
            {medium.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
