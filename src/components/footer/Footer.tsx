import WebtronicsLogo from '../UI/logos/WebtronicsLogo';

import fb from '../../assets/svgs/fb.svg';
import gl from '../../assets/svgs/gl.svg';
import tw from '../../assets/svgs/tw.svg';
import li from '../../assets/svgs/li.svg';

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <WebtronicsLogo />
        <address>
          Wisconsin Ave, Suite 700
          Chevy Chase, Maryland 20815
        </address>
        <span className='company-word'>Company</span>
        <ul className='links1'>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Steps</a></li>
          <li><a href="/">FAQs</a></li>
        </ul>
        <ul className='links2'>
          <li><a href="/">Review</a></li>
          <li><a href="/">Gallery</a></li>
        </ul>
        <span className='social-media-word'>Social media</span>
        <ul className='social-icons'>
          <li><a href="/"><img src={fb.src} /></a></li>
          <li><a href="/"><img src={gl.src} /></a></li>
          <li><a href="/"><img src={tw.src} /></a></li>
          <li><a href="/"><img src={li.src} /></a></li>
        </ul>
      </div>
    </footer>
  );
}