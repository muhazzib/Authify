import { StyleSheet } from 'react-native';

const formInputStyles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  eyeIconContainer: {
    position: 'absolute',
    top: 8,
    right: 10,
    zIndex: 1,
    padding: 4,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default formInputStyles;
