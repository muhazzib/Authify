import React, { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';
import errorStyles from '../styles/ErrorMessage.styles';

interface ErrorMessageProps {
  message?: string | null;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  const slideAnim = useRef(new Animated.Value(-80)).current;

  useEffect(() => {
    if (message) {
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(2500),
        Animated.timing(slideAnim, {
          toValue: -80,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [message, slideAnim]);

  if (!message) return null;

  return (
    <Animated.View
      style={[
        errorStyles.snackbar,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
      pointerEvents="none"
    >
      <Text style={errorStyles.text}>{message}</Text>
    </Animated.View>
  );
};

export default React.memo(ErrorMessage);
