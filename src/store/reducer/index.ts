import { Action, State } from '../../types/interfaces';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, loading: null };
    case 'SIGNUP':
      return {
        ...state,
        users: [...state.users, action.payload],
        user: action.payload,
        loading: null,
      };
    case 'LOGOUT':
      return { ...state, user: null, loading: null };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: null };
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_INITIAL_LOADING':
      return { ...state, initialLoading: action.payload };
    default:
      return state;
  }
};

export default reducer;
