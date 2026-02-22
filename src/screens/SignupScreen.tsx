import React, { useCallback, useContext } from 'react';
import { Text, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import UserContext from '../store/context/UserContext';
import Button from '../components/Button';
import AuthSwitch from '../components/AuthSwitch';
import { SignupScreenProps } from '../types/interfaces';
import { LOADING_TYPES } from '../constants';

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const { control, handleSubmit } = useForm();

  const { state, signup } = useContext(UserContext);

  const handleSignup = useCallback(
    (data: any) => {
      Keyboard.dismiss();
      signup(data);
    },
    [signup],
  );

  const onPressButton = useCallback(() => {
    handleSubmit(handleSignup)();
  }, [handleSubmit, handleSignup]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Card>
        <Text style={styles.title}>Create Account</Text>
        <FormInput
          name="name"
          control={control}
          rules={{ required: 'Full name is required' }}
          placeholder="Full Name"
        />

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
          text="Sign Up"
          loading={state.loading === LOADING_TYPES.SIGNUP}
        />

        <AuthSwitch
          prompt="Already have an account ?"
          actionText="Login"
          onPress={() => navigation.replace('Login')}
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
  button: {
    backgroundColor: '#4f46e5',
    padding: 15,
    borderRadius: 2,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 12,
  },
});

export default React.memo(SignupScreen);
