import vectorLeft from '../../assets/vectors/VectorLeft.svg';
import vectorCenter from '../../assets/vectors/VectorCenter.svg';
import vectorRight from '../../assets/vectors/VectorRight.svg';

import woman from '../../assets/mentors/woman.png';
import man1 from '../../assets/mentors/man1.png';
import man2 from '../../assets/mentors/man2.png';

import MentorImage from '../UI/images/MentorImage';

export default function HomeAbout() {
  return (
    <div className="home-about">
      <h2 className="about-title">About</h2>
      <div className='content'>
        <div className="mentors">
          <h3>Mentors</h3>
          <div className='vectors'>
            <img src={vectorLeft.src} className="left" />
            <img src={vectorCenter.src} className="center" />
            <img src={vectorRight.src} className="right" />
          </div>
          <div className='mentors__images'>
            <MentorImage 
              image={man2}
              name="Wade Warren"
              text="Front-end engineers work closely with designers"
            />
            <MentorImage 
              image={woman}
              name="Kristin Watson"
              text="Front-end engineers work closely with designers"
            />
            <MentorImage 
              image={man1}
              name="Robert Fox"
              text="Front-end engineers work closely with designers"
            />
          </div>
        </div>
        <p className="about-info">
          Front-end engineers work closely with designers to make websites beautiful,
          functional, and fast. This Career Path will teach you not only the necessary
          languages and technologies, but how to think like a front-end engineer, too.
        </p>
      </div>
    </div>
  );
}