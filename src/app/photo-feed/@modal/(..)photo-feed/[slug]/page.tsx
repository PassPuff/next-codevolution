import Image from 'next/image';
import { WonderImage, wondersImages } from '@/app/photo-feed/wonders';
import Modal from '@/components/Modal/Modal';

export default async function PhotoModal({ params }: { params: WonderImage }) {
  const { slug } = await params;

  const photo = wondersImages.find(
    (wonderImage) => wonderImage.slug === slug
  ) as WonderImage;
  return (
    <Modal>
      <Image
        src={photo.src}
        alt={photo.name}
        className="w-full object-cover aspect-square"
      ></Image>

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
