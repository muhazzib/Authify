import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import SignupScreen from './SignupScreen';
import UserContext from '../store/context/UserContext';

const navigation = {
  replace: jest.fn(),
} as any;

const signupMock = jest.fn();
const stateMock = { loading: false };

const renderWithContext = () =>
  render(
    <UserContext.Provider value={{ state: stateMock, signup: signupMock }}>
      <SignupScreen navigation={navigation} />
    </UserContext.Provider>,
  );

describe('SignupScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all UI elements', () => {
    const { getByText, getByPlaceholderText } = renderWithContext();

    expect(getByText('Create Account')).toBeTruthy();
    expect(getByPlaceholderText('Full Name')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Sign Up')).toBeTruthy();
    expect(getByText('Already have an account ?')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });

  it('calls signup on button press with valid input', async () => {
    const { getByPlaceholderText, getByText } = renderWithContext();

    await act(async () => {
      fireEvent.changeText(getByPlaceholderText('Full Name'), 'Test User');
      fireEvent.changeText(getByPlaceholderText('Email'), 'test@email.com');
      fireEvent.changeText(getByPlaceholderText('Password'), '123456');
      fireEvent.press(getByText('Sign Up'));
    });

    expect(signupMock).toHaveBeenCalled();
    expect(signupMock.mock.calls[0][0]).toEqual({
      name: 'Test User',
      email: 'test@email.com',
      password: '123456',
    });
  });

  it('navigates to Login on link press', () => {
    const { getByText } = renderWithContext();
    fireEvent.press(getByText('Login'));
    expect(navigation.replace).toHaveBeenCalledWith('Login');
  });
});
