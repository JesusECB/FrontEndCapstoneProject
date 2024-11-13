import React from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <div className="confirmation-page">
      <h2>Your booking has been confirmed!</h2>
      <p>Thank you for reserving a table at Little Lemon.</p>
      <button className="home-button" onClick={() => window.location.href = '/'}>
        Go to Home
      </button>
    </div>
  );
}

export default ConfirmedBooking;
