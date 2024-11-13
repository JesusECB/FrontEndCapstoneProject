export const fetchAPI = (date) => {
  console.log("Fetching available times for date:", date);
  const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  return times;
};

export const submitAPI = (formData) => {
  console.log("Submitting form data to API:", formData);
  return true; // Simulamos un envío exitoso
};

// Nueva función para guardar reservas en localStorage
export const saveReservationToLocalStorage = (reservation) => {
  console.log("Saving reservation to localStorage:", reservation);
  const existingReservations = JSON.parse(localStorage.getItem('reservations')) || [];
  existingReservations.push(reservation);
  localStorage.setItem('reservations', JSON.stringify(existingReservations));
  console.log("Reservations after saving:", JSON.parse(localStorage.getItem('reservations')));
};

// Nueva función para leer reservas desde localStorage
export const getReservationsFromLocalStorage = () => {
  const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  console.log("Fetched reservations from localStorage:", reservations);
  return reservations;
};
