import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, handleReservation }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Si el campo que cambia es la fecha, despachamos la acción para actualizar los horarios
    if (name === 'date') {
      const selectedDate = new Date(value);
      dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    handleReservation(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Choose time:</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
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
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Reserve</button>
    </form>
  );
}

export default BookingForm;
