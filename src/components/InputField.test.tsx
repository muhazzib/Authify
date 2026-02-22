import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputField from './InputField';

describe('InputField', () => {
  it('renders input field', () => {
    const { getByPlaceholderText } = render(
      <InputField placeholder="Your Name" value="" onChangeText={() => {}} />,
    );
    expect(getByPlaceholderText('Your Name')).toBeTruthy();
  });

  it('calls onChangeText when typing', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <InputField placeholder="Type" value="" onChangeText={onChangeText} />,
    );
    fireEvent.changeText(getByPlaceholderText('Type'), 'Hello');
    expect(onChangeText).toHaveBeenCalledWith('Hello');
  });
});
