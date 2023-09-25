import React, {useState, useEffect} from 'react'
import './Navbar.scss'



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <navbar className={` ${scrolled ? "navbar" : "hide"}`}>
      <div className="navbar-content">
        <div className='navbar__logo'>
          <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' alt='logo' />
        </div>

        <div className='navbar__menu'>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#features'>What We Do</a></li>
            <li><a href='#'>Login</a></li>
          </ul>
        </div>    
      </div>
      </navbar>
  )
}

export default Navbar