import React, { useCallback, useContext } from 'react';
import { Text, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import UserContext from '../store/context/UserContext';
import Button from '../components/Button';
import AuthSwitch from '../components/AuthSwitch';
import { LoginScreenProps } from '../types/interfaces';
import { LOADING_TYPES } from '../constants';

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { control, handleSubmit } = useForm();

  const { state, login } = useContext(UserContext);

  const handleLogin = useCallback(
    (data: any) => {
      Keyboard.dismiss();
      login(data);
    },
    [login],
  );

  const onPressButton = useCallback(() => {
    handleSubmit(handleLogin)();
  }, [handleSubmit, handleLogin]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Card>
        <Text style={styles.title}>Login</Text>
        <FormInput
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          }}
          placeholder="Email"
          keyboardType="email-address"
        />

        <FormInput
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Minimum 6 characters',
            },
          }}
          placeholder="Password"
          secureTextEntry
        />

        <Button
          handleSubmit={onPressButton}
          text="Login"
          loading={state.loading === LOADING_TYPES.LOGIN}
          testID="login-button"
        />

        <AuthSwitch
          prompt="Don't have an account ?"
          actionText="Sign Up"
          onPress={() => navigation.replace('Signup')}
        />
      </Card>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 12,
  },
});

export default React.memo(LoginScreen);
