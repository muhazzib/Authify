import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import buttonStyles from '../styles/Button.styles';

interface ButtonProps {
  handleSubmit: () => void;
  text: string;
  loading: boolean;
  testID?: string;
  styles?: object;
}

const Button = ({
  handleSubmit,
  text,
  loading,
  testID,
  styles,
}: ButtonProps) => (
  <TouchableOpacity
    style={[buttonStyles.button, styles]}
    onPress={handleSubmit}
    disabled={loading}
    testID={testID}
  >
    {loading ? (
      <ActivityIndicator color="#fff" />
    ) : (
      <Text style={buttonStyles.buttonText}>{text}</Text>
    )}
  </TouchableOpacity>
);

export default React.memo(Button);
