import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
import UserContext from '../store/context/UserContext';

const logoutMock = jest.fn();
const stateMock = {
  user: { name: 'Test User', email: 'test@email.com' },
  users: [],
  loading: false,
  error: null,
  initialLoading: false,
};

const renderWithContext = () =>
  render(
    <UserContext.Provider
      value={{
        state: stateMock,
        login: jest.fn(),
        signup: jest.fn(),
        logout: logoutMock,
        setUsers: jest.fn(),
      }}
    >
      <HomeScreen />
    </UserContext.Provider>,
  );

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders user info', () => {
    const { getByText } = renderWithContext();
    expect(getByText('Test User')).toBeTruthy();
    expect(getByText('test@email.com')).toBeTruthy();
    expect(getByText('Logout')).toBeTruthy();
  });

  it('shows avatar with first letter of name', () => {
    const { getByText } = renderWithContext();
    expect(getByText('T')).toBeTruthy();
  });

  it('calls logout when logout button is pressed', () => {
    const { getByText } = renderWithContext();
    fireEvent.press(getByText('Logout'));
    expect(logoutMock).toHaveBeenCalled();
  });
});
