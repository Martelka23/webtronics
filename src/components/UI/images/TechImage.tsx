import { StaticImageData } from "next/image";

interface TechImageProps {
  img: StaticImageData,
  name: string
}

export default function TechImage({ img, name }: TechImageProps) {
  return (
    <div className="tech-image">
      <div className="bg">
        <div className="content">
          <img src={img.src} />
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}