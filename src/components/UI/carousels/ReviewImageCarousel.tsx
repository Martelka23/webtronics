import { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import ArrowButton from "../buttons/ArrowButton";
import ReviewImage from "../images/ReviewImage";

interface ReviewImageCarouselProps {
  data: { img: StaticImageData, title: string, text: string }[],
  screenWidth: number
}

export default function ReviewImageCarousel({ data, screenWidth }: ReviewImageCarouselProps) {
  const [index, setIndex] = useState(1);
  const templates = Array<string>(data.length * 2 + 1);
  let targetWidth: string;
  if (screenWidth > 1160) {
    templates.fill('25%');
    targetWidth = '50%';
  } else if (screenWidth > 970) {
    templates.fill('40%');
    targetWidth = '60%';
  } else {
    templates.fill('100%');
    targetWidth = '100%';
  }
  
  const imagesRef = useRef<HTMLDivElement>(null);

  const changeIndexHandler = (value: -1 | 1) => {
    setIndex(prev => prev + value);
  };

  useEffect(() => {
    if (index === data.length + 1) {
      setTimeout(() => {
        if (imagesRef.current) {
          imagesRef.current.classList.remove('animated');
          setIndex(1);
          setTimeout(() => {
            if (imagesRef.current)
              imagesRef.current.classList.add('animated');
          }, 50);
        }
      }, 300)
    }
    if (index === 0) {
      setTimeout(() => {
        if (imagesRef.current) {
          imagesRef.current.classList.remove('animated');
          setIndex(3);
          setTimeout(() => {
            if (imagesRef.current)
              imagesRef.current.classList.add('animated');
          }, 50);
        }
      }, 300)
    }
  }, [index]);

  return (
    <div className="review-image-carousel">
      <h2>Review</h2>
      <div className="review-image-carousel__navigation">
        <div className="image-counter">
          {index} / {data.length}
        </div>
        <div className="buttons">
          <ArrowButton direction="left" onClick={() => changeIndexHandler(-1)} />
          <ArrowButton direction="right" onClick={() => changeIndexHandler(1)} />
        </div>
      </div>
      <div className="review-image-carousel__content">
        <div className="info">
          {data.map((el, i) => (
            <div className={`info__content ${i + 1 !== index ? 'hidden' : ''}`}>
              <h3>{el.title}</h3>
              <p>{el.text}</p>
            </div>
          ))}
        </div>
        <div className="image-wrapper">
          <div className="images animated" ref={imagesRef} style={{
            gridTemplateColumns: templates.map((t, i) => i === index ? targetWidth : t).join(' '),
            transform: `translateX(${-1 * Number(templates[0].slice(0, templates[0].length - 1)) * index}%)`
          }}>
            {[data[data.length - 1]].concat(data, data).map((el, i) =>
              <ReviewImage image={el.img} widen={i === index}
              />)}
          </div>
        </div>
      </div>
    </div>
  );
}