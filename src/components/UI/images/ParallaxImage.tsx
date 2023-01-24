import { StaticImageData } from "next/image";

interface ParallaxImageProps {
  image: StaticImageData
}

export default function ParallaxImage({ image }: ParallaxImageProps) {
  return (
    <div className="parallax">
      <div className="bg-image">
        <img src={image.src} />
      </div>
    </div>
  );
}