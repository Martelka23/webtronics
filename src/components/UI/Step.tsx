import { useInView } from 'react-intersection-observer';

import line from '../../assets/vectors/Line.svg';

interface StepProps {
  step: number,
  title: string,
  text: string,
  direction: 'left' | 'right'
}

export default function Step({ step, title, text, direction }: StepProps) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div className={`step ${direction} ${!inView ? 'hidden' : ''}`} ref={ref}>

      <div className="grad">
        <div className="grad__bg">
          <img src={line.src} />
          <div className='dot'></div>
        </div>
      </div>

      <div className='content-grad'>
        <div className="bg">
          <div className="content">
            <h4>Step {step}</h4>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>

    </div>
  );
}