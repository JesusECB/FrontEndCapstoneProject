import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon Restaurant</h1>
        <h3>Chicago</h3>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button className="reserve-button">Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src="/icons_assets/restauranfood.jpg" alt="Restaurant Food" />
      </div>
    </section>
  );
}

export default Hero;
