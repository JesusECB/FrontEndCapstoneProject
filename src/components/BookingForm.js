import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, handleReservation }) {
  const [formData, setFormData] = useState({
    date: '',
    time: availableTimes.length > 0 ? availableTimes[0] : '',
    guests: 1,
    occasion: 'Birthday'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReservation(formData.time);
    alert('Reservation submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" aria-labelledby="reservation-form">
      <fieldset>
        <legend id="reservation-form">Make a Reservation</legend>

        <label htmlFor="res-date">Choose date:</label>
        <input 
          type="date" 
          id="res-date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          required 
          aria-required="true"
          aria-describedby="date-description"
        />
        <span id="date-description" className="sr-only">Please select a date for your reservation.</span>

        <label htmlFor="res-time">Choose time:</label>
        <select 
          id="res-time" 
          name="time" 
          value={formData.time} 
          onChange={handleChange} 
          required 
          aria-required="true"
        >
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests:</label>
        <input 
          type="number" 
          id="guests" 
          name="guests" 
          min="1" 
          max="10" 
          value={formData.guests} 
          onChange={handleChange} 
          required 
          aria-required="true" 
          aria-label="Enter number of guests"
        />

        <label htmlFor="occasion">Occasion:</label>
        <select 
          id="occasion" 
          name="occasion" 
          value={formData.occasion} 
          onChange={handleChange} 
          required 
          aria-required="true"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button 
          type="submit" 
          className="submit-button" 
          aria-label="Submit your reservation"
        >
          Make Your Reservation
        </button>
      </fieldset>
    </form>
  );
}

export default BookingForm;
