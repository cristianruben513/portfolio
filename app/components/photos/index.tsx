import { myImages } from './images';
import { Photo } from './PhotoItem';

export const Photos = () => {
  return (
    <div className="hide-scrollbar flex gap-6 lg:gap-8 overflow-y-auto py-2 lg:py-4 px-8">
      {myImages.map((travelImage) => (
        <Photo
          key={travelImage.img.src}
          img={travelImage.img}
          title={travelImage.title}
          alt={travelImage.alt}
        />
      ))}
    </div>
  );
};
