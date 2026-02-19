import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const InputField = (props: TextInputProps) => (
    <TextInput
      placeholderTextColor="#888"
      style={styles.input}
      {...props}
    />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f1f3f6',
    borderRadius: 2,
    padding: 12,
    fontSize: 16,
  },
});

export default InputField;