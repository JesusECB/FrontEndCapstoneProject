// BookingForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm, { validateForm } from './BookingForm';

describe('validateForm function', () => {
  test('returns false if any field is missing', () => {
    const invalidData1 = { date: '', time: '18:00', guests: 4, occasion: 'Birthday' };
    const invalidData2 = { date: '2024-11-15', time: '', guests: 4, occasion: 'Birthday' };
    const invalidData3 = { date: '2024-11-15', time: '18:00', guests: '', occasion: 'Birthday' };
    const invalidData4 = { date: '2024-11-15', time: '18:00', guests: 4, occasion: '' };

    expect(validateForm(invalidData1)).toBe(false);
    expect(validateForm(invalidData2)).toBe(false);
    expect(validateForm(invalidData3)).toBe(false);
    expect(validateForm(invalidData4)).toBe(false);
  });

  test('returns false if guests are less than 1 or more than 10', () => {
    const invalidGuests1 = { date: '2024-11-15', time: '18:00', guests: 0, occasion: 'Birthday' };
    const invalidGuests2 = { date: '2024-11-15', time: '18:00', guests: 11, occasion: 'Anniversary' };

    expect(validateForm(invalidGuests1)).toBe(false);
    expect(validateForm(invalidGuests2)).toBe(false);
  });

  test('returns true for valid data', () => {
    const validData = { date: '2024-11-15', time: '18:00', guests: 4, occasion: 'Birthday' };
    expect(validateForm(validData)).toBe(true);
  });
});

describe('BookingForm Component', () => {
  const mockHandleReservation = jest.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00', '19:00']}
        handleReservation={mockHandleReservation}
      />
    );
  });

  test('button is disabled if form is invalid', () => {
    const reserveButton = screen.getByRole('button', { name: /Reserve/i });
    expect(reserveButton).toBeDisabled();
  });

  test('button is enabled if form is valid', () => {
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-11-14' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    const reserveButton = screen.getByRole('button', { name: /Reserve/i });
    expect(reserveButton).not.toBeDisabled();
  });
});
