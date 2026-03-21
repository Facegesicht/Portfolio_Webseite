import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <div>
        <h1>Hallo</h1>
      </div>

      <nav className="nav">
        <Link className='App-link' to="/">Home</Link>
        <Link className='App-link' to="/About">About</Link>
      </nav>
    </header>
  );
}

export default Header;