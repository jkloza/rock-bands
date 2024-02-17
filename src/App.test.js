import { render, screen } from '@testing-library/react';
import App from './App';

// TODO - Add more tests
test('renders initial select header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Select a band to purchase tickets!/i);
  expect(linkElement).toBeInTheDocument();
});
