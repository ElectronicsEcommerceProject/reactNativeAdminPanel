import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import AnimatedLogo from '../components/AnimatedLogo.components';
import LoadingIndicator from '../components/LoadingIndicator.components';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#007AFF" barStyle="light-content" />
      <AnimatedLogo />
      <LoadingIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;