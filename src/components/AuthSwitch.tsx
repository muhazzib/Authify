import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AuthSwitchProps {
  prompt: string;
  actionText: string;
  onPress: () => void;
}

const AuthSwitch = ({ prompt, actionText, onPress }: AuthSwitchProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>{prompt}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{actionText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: '#777',
  },
  link: {
    color: '#4f46e5',
    fontWeight: 'bold',
  },
});

export default AuthSwitch;
