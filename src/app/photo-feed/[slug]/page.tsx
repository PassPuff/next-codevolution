import Image from 'next/image';
import { wondersImages, WonderImage } from '../wonders';

export default async function PhotoPage({ params }: { params: WonderImage }) {
  const { slug } = await params;

  const photo = wondersImages.find(
    (wonderImage) => wonderImage.slug === slug
  ) as WonderImage;

  return (
    <div className={'container m-auto my-10'}>
      <div>
        <div className={'w-1/2 mx-auto'}>
          <h1 className={'text-center text-3xl'}>{photo.name}</h1>
        </div>
        {photo && (
          <Image
            className={'items-center object-cover aspect-square'}
            src={photo.src}
            alt={photo.name}
            width={300}
            height={300}
          />
        )}
        <p>photographer: {photo.photographer}</p>
        <p>location: {photo.location}</p>
      </div>
    </div>
  );
}
