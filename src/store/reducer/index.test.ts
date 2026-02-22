import reducer from './index';
import { State, Action, User } from '../../types/interfaces';

const initialState: State = {
  user: null,
  users: [],
  loading: null,
  error: null,
  initialLoading: false,
};

const testUser: User = {
  name: 'Test',
  email: 'test@email.com',
  password: '123456',
};

describe('reducer', () => {
  it('handles LOGIN', () => {
    const action: Action = { type: 'LOGIN', payload: testUser };
    const state = reducer(initialState, action);
    expect(state.user).toEqual(testUser);
    expect(state.loading).toBe(null);
  });

  it('handles SIGNUP', () => {
    const action: Action = { type: 'SIGNUP', payload: testUser };
    const state = reducer(initialState, action);
    expect(state.user).toEqual(testUser);
    expect(state.users).toContainEqual(testUser);
    expect(state.loading).toBe(null);
  });

  it('handles LOGOUT', () => {
    const action: Action = { type: 'LOGOUT' };
    const state = reducer({ ...initialState, user: testUser }, action);
    expect(state.user).toBeNull();
    expect(state.loading).toBe(null);
  });

  it('handles SET_LOADING', () => {
    const action: Action = { type: 'SET_LOADING', payload: 'true' };
    const state = reducer(initialState, action);
    expect(state.loading).toBe('true');
  });

  it('handles SET_ERROR', () => {
    const action: Action = { type: 'SET_ERROR', payload: 'Error!' };
    const state = reducer(initialState, action);
    expect(state.error).toBe('Error!');
  });

  it('handles SET_USERS', () => {
    const users = [testUser];
    const action: Action = { type: 'SET_USERS', payload: users };
    const state = reducer(initialState, action);
    expect(state.users).toEqual(users);
  });

  it('handles SET_INITIAL_LOADING', () => {
    const action: Action = { type: 'SET_INITIAL_LOADING', payload: true };
    const state = reducer(initialState, action);
    expect(state.initialLoading).toBe(true);
  });

  it('returns state for unknown action', () => {
    const action: Action = { type: 'UNKNOWN' } as any;
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
