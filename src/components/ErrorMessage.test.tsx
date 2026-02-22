import React from 'react';
import { render } from '@testing-library/react-native';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders nothing when message is null', () => {
    const { queryByText } = render(<ErrorMessage message={null} />);
    expect(queryByText(/./)).toBeNull();
  });

  it('renders error message when provided', () => {
    const { getByText } = render(
      <ErrorMessage message="Something went wrong" />,
    );
    expect(getByText('Something went wrong')).toBeTruthy();
  });
});
