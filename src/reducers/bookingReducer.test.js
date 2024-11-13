// bookingReducer.test.js
import { initializeTimes, updateTimes } from './bookingReducer';

describe('Booking Reducer Functions', () => {
  test('initializeTimes returns the correct initial value', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  test('updateTimes returns the provided state unchanged', () => {
    const currentState = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2024-11-12' };
    const newState = updateTimes(currentState, action);
    expect(newState).toEqual(currentState);
  });
});
