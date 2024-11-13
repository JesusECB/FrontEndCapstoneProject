import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Little Lemon</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. 
          We are dedicated to serving traditional Mediterranean recipes with a modern twist. 
          Our chefs use only the freshest ingredients to bring you flavors that are rich, vibrant, and unforgettable.
        </p>
      </div>
      <div className="about-image">
        <img src="/icons_assets/restaurant.jpg" alt="Little Lemon Restaurant" />
      </div>
    </section>
  );
}

export default About;


