import { fetchAPI } from '../api';

// Inicializa los horarios utilizando la API para la fecha actual
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Actualiza los horarios basados en la fecha seleccionada
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};
