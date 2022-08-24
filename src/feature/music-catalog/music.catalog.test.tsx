import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../../utils/renderWithRouter';
import MusicCatalog from './index';

// i should mock this to get data from mock as top 100 changes quite often - but again - no time
test('check if search works', async () => {
  renderWithRouter(<MusicCatalog />);
  const elvis = await screen.findByText('Elvis Presley');
  expect(elvis).toBeInTheDocument();
  const input = screen.getByLabelText(/^search/i);
  fireEvent.change(input, { target: { value: 'metallica' } });
  const rolling_stones = await screen.findByText('rolling stones');
  // screen.debug();
  expect(elvis).not.toBeInTheDocument();
  expect(rolling_stones).toBeInTheDocument();
});
