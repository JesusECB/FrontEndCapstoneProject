function Specials() {
  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-grid">
        <div className="card">
          <h3>Greek Salad</h3>
          <p>A delicious salad with feta cheese.</p>
          <span>$12.99</span>
          <button>Order a delivery</button>
        </div>
        <div className="card">
          <h3>Bruschetta</h3>
          <p>Grilled bread with garlic and olive oil.</p>
          <span>$5.99</span>
          <button>Order a delivery</button>
        </div>
        <div className="card">
          <h3>Lemon Dessert</h3>
          <p>Grandma's special lemon dessert.</p>
          <span>$5.00</span>
          <button>Order a delivery</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
