import img1 from '../../assets/gallery/developer1.png';
import img2 from '../../assets/gallery/developer2.png';
import img3 from '../../assets/gallery/developer3.png';
import img4 from '../../assets/gallery/developer4.png';

export default function HomeGallery() {
  return (
    <div className="home-gallery">
      <h2>Gallery</h2>
      <div className='content'>
        <p className="info1">
          By the end of this course, you will be able to
          develop and publish your very own Google Chrome
          extension! In this course we will focus on coding
          exercises and projects.
        </p>
        <img src={img1.src} className="img1" />
        <img src={img2.src} className="img2" />
        <img src={img3.src} className="img3" />
        <img src={img4.src} className="img4" />
        <p className='info2'>
          If you would like to learn web development and get a
          job in the tech industry, you are going to LOVE this
          course! Learn HTML, CSS, JavaScript, Bootstrap and
          more with over 15 hours of HD video tutorials! This
          course was designed to be extremely beginner friendly.
          We will begin with the very basics of HTML and build
          a simple web page.
        </p>
      </div>
    </div>
  );
}