import React, { useEffect, useRef } from 'react';
import { Animated, Text, Image, View, Dimensions } from 'react-native';
import { logo } from '../../assets/index.assets';
import { animatedLogoStyles } from './AnimatedLogo.styles.components';

const { width } = Dimensions.get('window');

const AnimatedLogo = () => {
  const scaleAnim = useRef(new Animated.Value(0.1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: -width * 0.1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={animatedLogoStyles.container}>
      <Animated.View
        style={[
          animatedLogoStyles.logoContainer,
          {
            transform: [{ scale: scaleAnim }, { translateX: translateX }],
          },
        ]}
      >
        <Image 
          source={logo} 
          style={animatedLogoStyles.logoImage}
          resizeMode="contain"
        />
      </Animated.View>
      <Animated.View 
        style={[
          animatedLogoStyles.textContainer,
          {
            opacity: textOpacity,
          },
        ]}
      >
        <Text style={animatedLogoStyles.appName}>MAA LAXMI STORE</Text>
        <Text style={animatedLogoStyles.adminPanel}>ADMIN PANEL</Text>
      </Animated.View>
    </View>
  );
};



export default AnimatedLogo;