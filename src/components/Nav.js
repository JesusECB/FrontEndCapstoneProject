import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      {/* Contenedor para alinear logo y menú */}
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/icons_assets/Logo.svg" alt="Little Lemon Logo" />
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/">
              <img src="/icons_assets/home icon.svg" alt="Home" className="nav-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <img src="/icons_assets/Dish icon.svg" alt="Menu" className="nav-icon" />
              Menu
            </Link>
          </li>
          <li>
            <Link to="/booking">
              <img src="/icons_assets/creditcard.svg" alt="Reservations" className="nav-icon" />
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img src="/icons_assets/🦆 icon _eye_.svg" alt="About" className="nav-icon" />
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <img src="/icons_assets/🦆 icon _hamburger menu.svg" alt="Contact" className="nav-icon" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
