import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {

  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
