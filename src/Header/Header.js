import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`App-header ${scrolled ? 'shrink' : ''}`}>
      <div>
        <h1>Hallo</h1>
      </div>

      <nav className="nav">
        <Link className='App-link' to="/">Home</Link>
        <Link className='App-link' to="/Portfolio">Portfolio</Link>
        <Link className='App-link' to="/About">About</Link>
      </nav>
    </header>
  );
}

export default Header;