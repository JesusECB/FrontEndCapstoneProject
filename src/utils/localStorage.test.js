// src/utils/localStorage.test.js
import { saveReservation, getReservations, clearReservations } from './localStorage';

beforeEach(() => {
  // Limpiar localStorage antes de cada test
  clearReservations();
});

describe('localStorage Functions', () => {
  test('should save a reservation to localStorage', () => {
    const reservation = {
      date: '2024-11-15',
      time: '19:00',
      guests: 4,
      occasion: 'Birthday',
    };

    saveReservation(reservation);

    const reservations = getReservations();
    expect(reservations).toHaveLength(1);
    expect(reservations[0]).toEqual(reservation);
  });

  test('should retrieve multiple reservations from localStorage', () => {
    const reservation1 = { date: '2024-11-15', time: '18:00', guests: 2, occasion: 'Anniversary' };
    const reservation2 = { date: '2024-11-16', time: '20:00', guests: 3, occasion: 'Dinner' };

    saveReservation(reservation1);
    saveReservation(reservation2);

    const reservations = getReservations();
    expect(reservations).toHaveLength(2);
    expect(reservations[0]).toEqual(reservation1);
    expect(reservations[1]).toEqual(reservation2);
  });

  test('should return an empty array if no reservations are found', () => {
    const reservations = getReservations();
    expect(reservations).toEqual([]);
  });

  test('should clear all reservations from localStorage', () => {
    const reservation = { date: '2024-11-17', time: '19:30', guests: 5, occasion: 'Meeting' };

    saveReservation(reservation);
    clearReservations();

    const reservations = getReservations();
    expect(reservations).toHaveLength(0);
  });
});
