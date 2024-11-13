// bookingReducer.test.js
import { initializeTimes, updateTimes } from './bookingReducer';
import { fetchAPI } from '../api';

jest.mock('../api'); // Mockeamos la API para los tests

describe('Booking Reducer Functions', () => {
  test('initializeTimes returns the correct initial value', () => {
    // Simulamos que la función fetchAPI devuelve un conjunto de horarios
    const mockTimes = ['17:00', '18:00', '19:00', '20:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes returns updated times based on the selected date', () => {
    const mockTimes = ['18:00', '19:00', '20:00'];
    const selectedDate = '2024-11-14';
    
    // Mockeamos la respuesta de fetchAPI para la fecha seleccionada
    fetchAPI.mockReturnValue(mockTimes);

    const currentState = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', payload: selectedDate };
    const newState = updateTimes(currentState, action);

    // Verificamos que updateTimes haya devuelto los horarios actualizados correctamente
    expect(newState).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
  });
});
