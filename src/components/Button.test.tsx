import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  it('renders with given text', () => {
    const { getByText } = render(
      <Button handleSubmit={jest.fn()} text="Submit" loading={false} />,
    );
    expect(getByText('Submit')).toBeTruthy();
  });

  it('calls handleSubmit when pressed', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(
      <Button handleSubmit={handleSubmit} text="Click Me" loading={false} />,
    );
    fireEvent.press(getByText('Click Me'));
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('disables button when loading is true', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(
      <Button handleSubmit={handleSubmit} text="Loading" loading={true} />,
    );

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('sets testID prop', () => {
    const { getByTestId } = render(
      <Button
        handleSubmit={jest.fn()}
        text="Test"
        loading={false}
        testID="button-test"
      />,
    );
    expect(getByTestId('button-test')).toBeTruthy();
  });
});
