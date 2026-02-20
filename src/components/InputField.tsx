import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import inputFieldStyles from '../styles/InputField.styles';

const InputField = ({ style, ...props }: { style?: object } & TextInputProps) => (
  <TextInput
    placeholderTextColor="#888"
    style={[inputFieldStyles.input, style]}
    {...props}
  />
);

export default React.memo(InputField);
