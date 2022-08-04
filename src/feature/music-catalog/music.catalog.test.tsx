import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../../utils/renderWithRouter';
import MusicCatalog from './index';

test('check if search works', async () => {
  renderWithRouter(<MusicCatalog />);
  const sofia = await screen.findByText('Sofia Carson');
  expect(sofia).toBeInTheDocument();
  const input = screen.getByLabelText(/^search/i);
  fireEvent.change(input, { target: { value: 'metallica' } });
  const metallica = await screen.findByText('Metallica (Remastered)');
  // screen.debug();
  expect(sofia).not.toBeInTheDocument();
  expect(metallica).toBeInTheDocument();
});
