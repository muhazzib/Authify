import React from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import cardStyles from '../styles/Card.styles';

interface CardProps {
  children: React.ReactNode;
  styles?: object;
  props?: TextInputProps;
}

const Card = ({ children, styles, ...props }: CardProps) => (
  <View style={[cardStyles.card, styles]} {...props}>
    {children}
  </View>
);

export default React.memo(Card);
