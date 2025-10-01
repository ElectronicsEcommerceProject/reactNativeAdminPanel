import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const splashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});