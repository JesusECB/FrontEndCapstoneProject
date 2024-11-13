// BookingPage.test.js
import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { BrowserRouter } from 'react-router-dom';

test('renders the BookingPage heading', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  // Verifica que el encabezado "Reserve Your Table" esté presente
  const headingElement = screen.getByRole('heading', { name: /Reserve Your Table/i });
  expect(headingElement).toBeInTheDocument();
});
