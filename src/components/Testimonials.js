import './Testimonials.css';

function Testimonials() {
  const testimonialsData = [
    {
      name: "John Doe",
      feedback: "The food was amazing and the ambiance was perfect. Highly recommend!",
      image: "/icons_assets/restaurant chef B.jpg",
      rating: 5
    },
    {
      name: "Jane Smith",
      feedback: "A delightful dining experience with great service. Will come again!",
      image: "/icons_assets/restaurant.jpg",
      rating: 4
    },
    {
      name: "Alice Johnson",
      feedback: "The best Mediterranean food I've ever had. A must-visit!",
      image: "/icons_assets/Mario and Adrian b.jpg",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
            <div className="rating">
              {"⭐".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
