import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

interface SignupScreenNavigationProp
  extends NativeStackNavigationProp<ParamListBase, 'Signup'> {}
interface LoginScreenNavigationProp
  extends NativeStackNavigationProp<ParamListBase, 'Login'> {}

export interface SignupScreenProps {
  navigation: SignupScreenNavigationProp;
}

export interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserPayload {
  email: string;
  password: string;
}

export interface State {
  user: User | null;
  loading: string | null;
  users: User[];
  error: string | null;
  initialLoading: boolean;
}

export type Action =
  | { type: 'LOGIN'; payload: User; initialLoad?: boolean }
  | { type: 'SIGNUP'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: string | null }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_USERS'; payload: User[] }
  | { type: 'SET_INITIAL_LOADING'; payload: boolean };

export interface UserContextType {
  state: State;
  login: (user: UserPayload, initialLoad?: boolean) => void;
  signup: (user: User) => void;
  logout: () => void;
  setUsers: (users: User[]) => void;
}
