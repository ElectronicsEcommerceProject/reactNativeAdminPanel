import { StyleSheet } from 'react-native';

export const loadingIndicatorStyles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  spinner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderTopColor: 'white',
  },
});