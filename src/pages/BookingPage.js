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
  // eslint-disable-next-line no-unused-vars
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      saveReservationToLocalStorage(formData);
      navigate('/confirmation');
    }
  };

  return (
    <main className="booking-page">
      <header>
        <h1>Reserve Your Table</h1>
      </header>
      <section className="booking-form-container" aria-labelledby="booking-form-heading">
        <h2 id="booking-form-heading">Fill out the form below to reserve your table</h2>
        <BookingForm
          availableTimes={availableTimes}
          handleReservation={submitForm}
        />
      </section>
    </main>
  );
}

export default BookingPage;
