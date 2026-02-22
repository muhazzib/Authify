import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';
import UserContext from '../store/context/UserContext';

const navigation = {
  replace: jest.fn(),
} as any;

const loginMock = jest.fn();
const stateMock = { loading: false };

const renderWithContext = () =>
  render(
    <UserContext.Provider value={{ state: stateMock, login: loginMock }}>
      <LoginScreen navigation={navigation} />
    </UserContext.Provider>,
  );

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all UI elements', () => {
    const { getByText, getByPlaceholderText } = renderWithContext();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText("Don't have an account ?")).toBeTruthy();
    expect(getByText('Sign Up')).toBeTruthy();
  });

  it('calls login on button press with valid input', async () => {
    const { getByPlaceholderText, getByTestId } = renderWithContext();

    await act(async () => {
      fireEvent.changeText(getByPlaceholderText('Email'), 'test@email.com');
      fireEvent.changeText(getByPlaceholderText('Password'), '123456');
      fireEvent.press(getByTestId('login-button'));
    });

    expect(loginMock).toHaveBeenCalled();
    expect(loginMock.mock.calls[0][0]).toEqual({
      email: 'test@email.com',
      password: '123456',
    });
  });

  it('navigates to Signup on link press', () => {
    const { getByText } = renderWithContext();
    fireEvent.press(getByText('Sign Up'));
    expect(navigation.replace).toHaveBeenCalledWith('Signup');
  });
});
