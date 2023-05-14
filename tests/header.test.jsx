import React from 'react';
import { render } from '@testing-library/react';
import Header from "../src/Header/Header";

describe('Header component', () => {
  it('renders the title', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText(/Moviez/i);
    expect(titleElement).toBeInTheDocument();
  });
});