// Función para obtener todas las reservas desde localStorage
export const getReservations = () => {
    const data = localStorage.getItem('reservations');
    return data ? JSON.parse(data) : [];
  };
  
  // Función para guardar una nueva reserva en localStorage
  export const saveReservation = (reservation) => {
    const existingReservations = getReservations();
    existingReservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(existingReservations));
  };
  
  // Función para verificar si un horario está disponible
  export const isReservationAvailable = (date, time) => {
    const reservations = getReservations();
    return !reservations.some(
      (reservation) => reservation.date === date && reservation.time === time
    );
  };
  