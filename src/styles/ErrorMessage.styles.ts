import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const errorStyles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    top: 40,
    left: width * 0.05,
    width: width * 0.9,
    backgroundColor: '#fef2f2',
    borderLeftWidth: 4,
    borderLeftColor: '#ef4444',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    shadowColor: '#ef4444',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    zIndex: 100,
  },
  text: {
    color: '#b91c1c',
    fontSize: 15,
    fontWeight: '600',
    flexShrink: 1,
  },
});

export default errorStyles;
