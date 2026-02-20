import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserContext from '../store/context/UserContext';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ErrorMessage from '../components/ErrorMessage';
import {
  getUserFromAsyncStorage,
  getUsersFromAsyncStorage,
} from '../utils/authStorage';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { state, login, setUsers } = useContext(UserContext);

  const setInitialUsers = async () => {
    const usersList = await getUsersFromAsyncStorage();
    setUsers(usersList);
  };

  const checkUser = async () => {
    const loggedInUser = await getUserFromAsyncStorage();
    login(loggedInUser, true);
  };

  useEffect(() => {
    setInitialUsers();
  }, []);

  useEffect(() => {
    if (state.users.length > 0) {
      checkUser();
    }
  }, [state.users]);

  if (state.initialLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.user ? (
            <Stack.Screen
              name="Welcome"
              component={HomeScreen}
              options={{ headerShown: true }}
            />
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>

      <ErrorMessage message={state.error} />
    </>
  );
};

export default AppNavigator;
