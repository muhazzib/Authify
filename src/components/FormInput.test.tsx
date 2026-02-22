import React from 'react';
import { render } from '@testing-library/react-native';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';

const TestForm = () => {
  const { control } = useForm();
  return (
    <FormInput
      name="email"
      control={control}
      rules={{ required: 'Email is required' }}
      placeholder="Email"
      keyboardType="email-address"
    />
  );
};

describe('FormInput', () => {
  it('renders input field', () => {
    const { getByPlaceholderText } = render(<TestForm />);
    expect(getByPlaceholderText('Email')).toBeTruthy();
  });
});
