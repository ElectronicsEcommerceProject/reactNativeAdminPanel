import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const animatedLogoStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: width * 0.04,
  },
  textContainer: {
    marginLeft: width * 0.04,
  },
  appName: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    lineHeight: width * 0.065,
  },
  adminPanel: {
    fontSize: width * 0.045,
    fontWeight: '800',
    color: '#FFD700',
    textAlign: 'left',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: width * 0.02,
    paddingVertical: width * 0.01,
    borderRadius: width * 0.01,
    marginTop: width * 0.01,
    overflow: 'hidden',
  },
});