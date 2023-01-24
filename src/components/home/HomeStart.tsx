import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import MyButton from '../UI/buttons/MyButton';

export default function HomeStart() {
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(inView)
  }, [inView])

  return (
    <div className="home-start" ref={ref}>
      <div className='start-title'>
        <h1 className={`title1 ${!inView ? 'hidden' : ''}`}>Front-End</h1>
        <h1 className={`title2 ${!inView ? 'hidden' : ''}`}>Developer</h1>
        <p className='info'>Make UIs and websites beautiful, functional, and fast.
          Cover all the topics that expensive bootcamps teach (and more). </p>
        <div className='start-button'>
          <MyButton onClick={() => { }}>Start my career change</MyButton>
        </div>
        <h3 className='courses-word'>Courses</h3>
      </div>
    </div>
  );
}