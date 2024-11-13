import './Specials.css';

function Specials() {
  return (
    <section className="specials">
      <h2>Our Specials</h2>
      <div className="specials-grid">
        <div className="card">
          <img src="/icons_assets/greek salad.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>A delicious Greek salad with fresh ingredients.</p>
          <span>$12.99</span>
          <button>Order a Delivery</button>
        </div>
        <div className="card">
          <img src="/icons_assets/bruchetta.svg" alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>Grilled bread with garlic, topped with fresh tomatoes.</p>
          <span>$5.99</span>
          <button>Order a Delivery</button>
        </div>
        <div className="card">
          <img src="/icons_assets/lemon dessert.jpg" alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>A refreshing lemon dessert, perfect for summer.</p>
          <span>$5.00</span>
          <button>Order a Delivery</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
