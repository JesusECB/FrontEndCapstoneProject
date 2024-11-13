import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Little Lemon</h1>
        <p>Experience the best dishes in Chicago</p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/icons_assets/restauranfood.jpg" alt="Restaurant Food" />
      </div>
    </section>
  );
}

export default Hero;
