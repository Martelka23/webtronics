import { StaticImageData } from "next/image";

interface MentorImageProps {
  image: StaticImageData,
  name: string,
  text: string
}

export default function MentorImage({ image, name, text }: MentorImageProps) {
  return (
    <div className="mentor-image">
      <div className="bg">
        <img src={image.src} />
      </div>
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  );
}