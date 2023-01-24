import { StaticImageData } from 'next/image';

interface ReviewImageProps {
  image: StaticImageData,
  widen?: boolean
}

export default function ReviewImage({ image, widen = false }: ReviewImageProps) {
  const classes = ['review-image'];
  if (widen) {
    classes.push('widen');
  }

  return (
    <div className={classes.join(' ')}>
      <img 
        src={image.src}
        alt="image"
      />
    </div>
  );
}