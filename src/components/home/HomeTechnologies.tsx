import { useInView } from 'react-intersection-observer';

import angular from '../../assets/tech/angular.png';
import react from '../../assets/tech/react.png';
import vue from '../../assets/tech/vue.png';
import js from '../../assets/tech/js.png';
import TechImage from '../UI/images/TechImage';

export default function HomeTechnologies() {
  const { ref, inView } = useInView({threshold: 0.3});

  return (
    <div className="home-technologies">
      <h2 className="title">Programming technologies</h2>
      <p className="text">
        By the end, you'll have the portfolio and interview skills you need to start your new career.
      </p>
      <ul className={`tech-list ${!inView ? 'hidden': ''}`}>
        <li><TechImage img={angular} name="Angular" /></li>
        <li><TechImage img={react} name="React" /></li>
        <li><TechImage img={vue} name="Vue.js" /></li>
        <li ref={ref}><TechImage img={js} name="JavaScript" /></li>
      </ul>
    </div>
  );
}