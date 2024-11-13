import React, { useState, useEffect } from 'react';

export const validateForm = (formData) => {
  const { date, time, guests, occasion } = formData;

  if (!date || !time || !guests || !occasion) return false;
  if (guests < 1 || guests > 10) return false;

  return true;
};

function BookingForm({ availableTimes, handleReservation }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setIsFormValid(validateForm(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      handleReservation(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <fieldset>
        <legend>Reserve Your Table</legend>

        <div>
          <label htmlFor="date">Choose date:</label>
          <input
            type="date"
            id="date"
            name="date"
            aria-label="Select a date"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Choose time:</label>
          <select
            id="time"
            name="time"
            aria-label="Select a time"
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
        </div>

        <div>
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            aria-label="Enter number of guests"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            aria-label="Select an occasion"
            onChange={handleChange}
            required
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          aria-label="Submit reservation"
          aria-disabled={!isFormValid}
        >
          Reserve
        </button>
      </fieldset>
    </form>
  );
}

export default BookingForm;
