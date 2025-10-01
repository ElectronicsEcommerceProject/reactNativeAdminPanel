import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { loadingIndicatorStyles } from './LoadingIndicator.styles.components';

const LoadingIndicator = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => spin());
    };
    spin();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={loadingIndicatorStyles.container}>
      <Animated.View
        style={[
          loadingIndicatorStyles.spinner,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      />
    </View>
  );
};



export default LoadingIndicator;