import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pick Your Gender title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pick Your Gender/i);
  expect(linkElement).toBeInTheDocument();
});
