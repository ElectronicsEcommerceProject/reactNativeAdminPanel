import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

const AnimatedLogo = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.logoContainer,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <Text style={styles.logoText}>📱</Text>
      <Text style={styles.appName}>Admin Panel</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 80,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AnimatedLogo;