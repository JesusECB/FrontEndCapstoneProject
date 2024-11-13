// bookingReducer.js

// Inicializa los horarios disponibles
export const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  // Actualiza los horarios disponibles basado en la acción (por ahora solo retorna el estado actual)
  export const updateTimes = (state, action) => {
    return state;
  };
