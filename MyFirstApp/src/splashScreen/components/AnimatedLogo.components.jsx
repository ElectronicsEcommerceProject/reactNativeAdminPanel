import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, Image, View, Dimensions } from 'react-native';
import { logo } from '../../assets/index.assets';

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
      Animated.timing(translateX, {
        toValue: -width * 0.15,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: scaleAnim }, { translateX: translateX }],
          },
        ]}
      >
        <Image 
          source={logo} 
          style={styles.logoImage}
          resizeMode="contain"
        />
      </Animated.View>
      <Animated.Text 
        style={[
          styles.appName,
          {
            opacity: textOpacity,
          },
        ]}
      >
        MAA LAXMI STORE{"\n"}ADMIN PANEL
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: width * 0.15,
    height: width * 0.15,
  },
  appName: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginLeft: width * 0.05,
    maxWidth: width * 0.4,
  },
});

export default AnimatedLogo;