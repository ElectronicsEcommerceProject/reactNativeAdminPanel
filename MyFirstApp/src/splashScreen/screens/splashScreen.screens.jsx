import React, { useEffect, useRef } from 'react';
import { View, StatusBar, Animated } from 'react-native';
import { splashScreenStyles } from './splashScreen.styles.screens';
import AnimatedLogo from '../components/AnimatedLogo.components';
import LoadingIndicator from '../components/LoadingIndicator.components';

const SplashScreen = ({ onFinish }) => {
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false, // backgroundColor is not supported by native driver
    }).start();

    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#007AFF'] // from white to blue
  });

  return (
    <Animated.View style={[
      splashScreenStyles.container,
      { backgroundColor }
    ]}>
      <StatusBar backgroundColor="#007AFF" barStyle="light-content" />
      <View style={splashScreenStyles.contentContainer}>
        <AnimatedLogo />
        <LoadingIndicator />
      </View>
    </Animated.View>
  );
};



export default SplashScreen;
