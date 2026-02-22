import React, { createContext, useReducer, ReactNode } from 'react';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import { User, UserContextType, UserPayload } from '../../types/interfaces';
import reducer from '../reducer';
import { INITIAL_STATE, REDUCER_TYPES } from '../../constants';

const UserContext = createContext<UserContextType>({
  state: INITIAL_STATE,
  login: () => {},
  signup: () => {},
  logout: () => {},
  setUsers: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { saveUser, saveUsers, getUser, getUsers, removeUser } =
    useAsyncStorage();
  const login = (user: UserPayload, initialLoad?: boolean) => {
    dispatch({ type: REDUCER_TYPES.SET_LOADING, payload: true });
    setTimeout(() => {
      const existingUser = state.users.find(u => u.email === user?.email);
      if (!existingUser || existingUser.password !== user.password) {
        if (!initialLoad) {
          dispatch({
            type: REDUCER_TYPES.SET_ERROR,
            payload: 'Please enter valid credentials.',
          });
        } else {
          dispatch({ type: REDUCER_TYPES.SET_INITIAL_LOADING, payload: false });
        }
        setTimeout(() => {
          dispatch({ type: REDUCER_TYPES.SET_ERROR, payload: null });
        }, 3000);
      } else {
        saveUser(existingUser).then(() => {
          dispatch({ type: REDUCER_TYPES.LOGIN, payload: existingUser });
          if (initialLoad) {
            dispatch({
              type: REDUCER_TYPES.SET_INITIAL_LOADING,
              payload: false,
            });
          }
        });
      }
    }, 1000);
  };

  const signup = (user: User) => {
    dispatch({ type: REDUCER_TYPES.SET_LOADING, payload: true });
    setTimeout(() => {
      const existingUser = state.users.find(u => u.email === user.email);
      if (existingUser) {
        dispatch({
          type: REDUCER_TYPES.SET_ERROR,
          payload: 'User already exists. Please try a different email.',
        });
        setTimeout(() => {
          dispatch({ type: REDUCER_TYPES.SET_ERROR, payload: null });
        }, 3000);
      } else {
        saveUsers([...state.users, user]).then(() => {
          saveUser(user).then(() => {
            dispatch({ type: REDUCER_TYPES.SIGNUP, payload: user });
          });
        });
      }
    }, 1000);
  };

  const logout = () => {
    removeUser().then(() => {
      dispatch({ type: REDUCER_TYPES.SET_LOADING, payload: true });
      setTimeout(() => {
        dispatch({ type: REDUCER_TYPES.LOGOUT });
      }, 500);
    });
  };

  const setUsers = (users: User[]) => {
    dispatch({ type: REDUCER_TYPES.SET_USERS, payload: users });
  };

  return (
    <UserContext.Provider value={{ state, login, signup, logout, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
