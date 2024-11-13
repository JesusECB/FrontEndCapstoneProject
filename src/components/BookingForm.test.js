// BookingForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the booking form with input fields', () => {
  const mockDispatch = jest.fn();
  const mockHandleReservation = jest.fn();

  render(
    <BookingForm
      availableTimes={['17:00', '18:00', '19:00']}
      dispatch={mockDispatch}
      handleReservation={mockHandleReservation}
    />
  );

  // Verificar que los campos de entrada están presentes
  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();

  // Verificar que el botón de reserva esté presente
  const reserveButton = screen.getByRole('button', { name: /Reserve/i });
  expect(reserveButton).toBeInTheDocument();
});
