import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, StatusBar, Animated } from 'react-native';
import AnimatedLogo from '../components/AnimatedLogo.components';
import LoadingIndicator from '../components/LoadingIndicator.components';

const SplashScreen = ({ onFinish }) => {
  const scaleAnim = useRef(new Animated.Value(0.1)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Animated.View style={[
      styles.container,
      {
        transform: [{ scale: scaleAnim }],
      }
    ]}>
      <StatusBar backgroundColor="#007AFF" barStyle="light-content" />
      <AnimatedLogo />
      <LoadingIndicator />
    </Animated.View>
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