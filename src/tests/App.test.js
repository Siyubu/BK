import { render, screen,cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup)
test('renders Sneaker City Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sneaker city challenge/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Sneaker City Composer ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Prepared by: Bank Of Kigali/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Sneaker City Developer ', () => {
  render(<App />);
  const linkElement = screen.getByText(/done by: Solange Iyubu/);
  expect(linkElement).toBeInTheDocument();
});


