import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import './BookingPage.css';

const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const handleReservation = (reservationTime) => {
    console.log('Reservation made for:', reservationTime);
  };

  return (
    <main className="booking-page">
      <header>
        <h2>Reserve Your Table</h2>
      </header>
      <section>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          handleReservation={handleReservation}
        />
      </section>
    </main>
  );
}

export default BookingPage;
