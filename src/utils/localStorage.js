// src/utils/localStorage.js

// Guardar reservas en localStorage
export const saveReservation = (reservation) => {
  const existingReservations = getReservations();
  const updatedReservations = [...existingReservations, reservation];
  localStorage.setItem('reservations', JSON.stringify(updatedReservations));
};

// Leer reservas desde localStorage
export const getReservations = () => {
  const storedReservations = localStorage.getItem('reservations');
  return storedReservations ? JSON.parse(storedReservations) : [];
};

// Limpiar todas las reservas (opcional, para propósitos de testing)
export const clearReservations = () => {
  localStorage.removeItem('reservations');
};
