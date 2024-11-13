import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI, saveReservationToLocalStorage } from '../api';
import { useNavigate } from 'react-router-dom';
import './BookingPage.css';

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    console.log('Submitting form data:', formData);
    const isSuccess = submitAPI(formData);

    if (isSuccess) {
      // Guardar la reserva en localStorage
      saveReservationToLocalStorage(formData);
      console.log('Reservation saved to localStorage:', formData);
      
      // Redirigir a la página de confirmación
      navigate('/confirmation');
    } else {
      alert('Error: Unable to confirm the booking.');
    }
  };

  return (
    <main className="booking-page">
      <header>
        <h1>Reserve Your Table</h1>
      </header>
      <section className="booking-form-container">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          handleReservation={submitForm}
        />
      </section>
    </main>
  );
}

export default BookingPage;
