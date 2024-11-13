import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookingForm from './BookingForm';
import { act } from 'react';


// Mock functions for dispatch and handleReservation
const mockDispatch = jest.fn();
const mockHandleReservation = jest.fn();

// Cleanup after each test to avoid memory leaks and open handles
afterEach(() => {
  jest.clearAllMocks();
  cleanup(); // Clean up the DOM after each test
});

test('renders the BookingForm heading', () => {
  render(
    <BookingForm
      availableTimes={['17:00', '18:00', '19:00']}
      dispatch={mockDispatch}
      handleReservation={mockHandleReservation}
    />
  );

  // Check if the heading "Make a Reservation" is present
  const headingElement = screen.getByText(/make a reservation/i);
  expect(headingElement).toBeInTheDocument();
});

test('updates time options when date changes', () => {
  render(
    <BookingForm
      availableTimes={['17:00', '18:00', '19:00']}
      dispatch={mockDispatch}
      handleReservation={mockHandleReservation}
    />
  );

  // Simulate a date change
  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2024-11-12' } });

  // Verify that the dispatch function was called
  expect(mockDispatch).toHaveBeenCalled();
});
