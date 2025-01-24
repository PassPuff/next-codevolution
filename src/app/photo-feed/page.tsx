import { wondersImages } from '@/app/photo-feed/wonders';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={'container mx-auto'}>
      <h1>Photo Feed</h1>
      <div className={'grid grid-cols-1 md:grid-cols-4 gap-4'}>
        {wondersImages.map((wonderImage) => (
          <Link key={wonderImage.id} href={`/photo-feed/${wonderImage.slug}`}>
            <Image
              className={'h-full'}
              src={wonderImage.src}
              alt={wonderImage.name}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
