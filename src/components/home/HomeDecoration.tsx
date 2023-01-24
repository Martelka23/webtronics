import BluredEllipse from "../UI/decoration/BluredEllipse";

import star from '../../assets/svgs/star.svg';

export default function HomeDecoration() {
  return (
    <>
      <div className="home-decoration">
        {Array(15).fill(<BluredEllipse />)}
      </div>
      <div className="home-stars">
        {Array(50).fill(<img src={star.src} />)}
      </div>
    </>
  );
}