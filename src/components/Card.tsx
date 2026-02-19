import React from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';

const Card = ({ children, ...props }: TextInputProps) => (
    <View style={styles.card} {...props}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 25,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    }
});

export default Card;