import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { useForm } from 'react-hook-form';
import Card from '../components/Card';
import FormInput from '../components/FormInput';

const SignupScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
  } = useForm();

  const handleSignup = () => {
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
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

        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignup)}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.loginLink}> Login</Text>
          </TouchableOpacity>
        </View>
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#777',
  },
  loginLink: {
    color: '#4f46e5',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 12,
  },
});

export default SignupScreen;