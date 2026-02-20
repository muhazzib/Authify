import React from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  styles?: object;
  props?: TextInputProps;
}

const Card = ({ children, styles, ...props }: CardProps) => (
  <View style={[defaultStyles.card, styles]} {...props}>
    {children}
  </View>
);

const defaultStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default React.memo(Card);
