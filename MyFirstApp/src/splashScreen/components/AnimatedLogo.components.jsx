import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, Image, View, Dimensions } from 'react-native';
import { logo } from '../../assets/index.assets';

const { width } = Dimensions.get('window');

const AnimatedLogo = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Start at normal size
  const translateX = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // First: Scale up (grow bigger)
      Animated.timing(scaleAnim, {
        toValue: 1.5, // Grow to 1.5x size
        duration: 1000,
        useNativeDriver: true,
      }),
      // Then: Scale back down and translate to left simultaneously
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1, // Return to normal size
          duration: 500,
          useNativeDriver: true,
        }),
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
      <Animated.View 
        style={[
          styles.textContainer,
          {
            opacity: textOpacity,
          },
        ]}
      >
        <Text style={styles.appName}>MAA LAXMI STORE</Text>
        <Text style={styles.adminPanel}>ADMIN PANEL</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: '#FFD700', // Gold color for highlighting
    textAlign: 'left',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
    paddingHorizontal: width * 0.02,
    paddingVertical: width * 0.01,
    borderRadius: width * 0.01,
    marginTop: width * 0.01,
    overflow: 'hidden',
  },
});

export default AnimatedLogo;