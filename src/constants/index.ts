import { State } from '../types/interfaces';

export const USER_KEY = 'loggedInUser';
export const USERS_KEY = 'usersList';

export const INITIAL_STATE: State = {
  user: null,
  users: [],
  loading: false,
  error: null,
  initialLoading: true,
};

export const REDUCER_TYPES = {
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
  LOGOUT: 'LOGOUT',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_USERS: 'SET_USERS',
  SET_INITIAL_LOADING: 'SET_INITIAL_LOADING',
} as const;
