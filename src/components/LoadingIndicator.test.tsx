import React from 'react';
import { render } from '@testing-library/react-native';
import LoadingIndicator from '../components/LoadingIndicator';

describe('LoadingIndicator', () => {
  it('renders ActivityIndicator inside a centered View', () => {
    const { getByTestId } = render(<LoadingIndicator />);
    const activityIndicator = getByTestId('ActivityIndicator');
    expect(activityIndicator).toBeTruthy();
  });
});
