import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';


test('renders the Little Lemon header', () => {
  render(<App />);

  // Use getByTestId to find the header element
  const headerElement = screen.getByTestId('header-title');
  expect(headerElement).toBeInTheDocument();
});
