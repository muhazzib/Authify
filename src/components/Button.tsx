import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import buttonStyles from '../styles/Button.styles';

interface ButtonProps {
  handleSubmit: () => void;
  text: string;
  loading: boolean;
}

const Button = ({ handleSubmit, text, loading }: ButtonProps) => (
  <TouchableOpacity
    style={buttonStyles.button}
    onPress={handleSubmit}
    disabled={loading}
  >
    <Text style={buttonStyles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default React.memo(Button);
