import WebtronicsLogo from "../UI/logos/WebtronicsLogo";

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <WebtronicsLogo />
      </div>
      <ul className='navbar__links'>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Programs</a></li>
        <li><a href='/'>Steps</a></li>
        <li><a href='/'>Questions</a></li>
        <li><a href='/'>Get in touch</a></li>
      </ul>
    </nav>
  );
}