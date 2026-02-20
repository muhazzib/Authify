import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import inputFieldStyles from '../styles/InputField.styles';

const InputField = (props: TextInputProps) => (
  <TextInput
    placeholderTextColor="#888"
    style={inputFieldStyles.input}
    {...props}
  />
);

export default React.memo(InputField);
