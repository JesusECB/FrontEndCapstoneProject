import React from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <section className="confirmation-page" aria-live="polite">
      <h2>Your booking has been confirmed!</h2>
      <p>Thank you for reserving a table at Little Lemon.</p>
      <button
        className="home-button"
        onClick={() => window.location.href = '/'}
        aria-label="Return to Home Page"
      >
        Go to Home
      </button>
    </section>
  );
}

export default ConfirmedBooking;
