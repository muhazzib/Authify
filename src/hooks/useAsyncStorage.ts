import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_KEY, USERS_KEY } from '../constants';
import { User } from '../types/interfaces';

export const useAsyncStorage = () => {
  const saveUser = async (user: User) => {
    try {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch (error) {
      console.log('Error saving user:', error);
    }
  };

  const saveUsers = async (users: User[]) => {
    try {
      await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (error) {
      console.log('Error saving users:', error);
    }
  };

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem(USER_KEY);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.log('Error getting user:', error);
      return null;
    }
  };

  const getUsers = async () => {
    try {
      const users = await AsyncStorage.getItem(USERS_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.log('Error getting users:', error);
      return [];
    }
  };

  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
    } catch (error) {
      console.log('Error removing user:', error);
    }
  };

  return {
    saveUser,
    saveUsers,
    getUser,
    getUsers,
    removeUser,
  };
};
