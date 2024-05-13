import { myImages } from './images';
import { Photo } from './PhotoItem';

export const Photos = () => {
  return (
    <div className="hide-scrollbar flex gap-8 overflow-y-auto py-4 px-8">
      {myImages.map((travelImage, index) => (
        <Photo
          key={travelImage.img.src}
          img={travelImage.img}
          title={travelImage.title}
          alt={travelImage.alt}
          idx={index}
        />
      ))}
    </div>
  );
};
