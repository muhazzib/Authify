import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_KEY, USERS_KEY } from '../constants';

type User = {
    name: string;
    email: string;
};

export const saveUserToAsyncStorage = async (user: User) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.log('Error saving user:', error);
  }
};

export const saveUsersToAsyncStorage = async (users: User[]) => {
  try {
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.log('Error saving users:', error);
  }
};

export const getUserFromAsyncStorage = async () => {
  try {
    const user = await AsyncStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.log('Error getting user:', error);
    return null;
  }
};

export const getUsersFromAsyncStorage = async () => {
  try {
    const users = await AsyncStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.log('Error getting users:', error);
    return [];
  }
};

export const removeUserFromAsyncStorage = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.log('Error removing user:', error);
  }
};
