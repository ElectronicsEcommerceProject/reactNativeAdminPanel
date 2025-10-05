/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './src/splashScreen/index.splashScreen';
import { LoginScreen, BannerListScreen } from './src/features/index.features';
import DashboardScreen from './src/features/dashboard/screens/dashboard.screens';
import AddEditBannerScreen from './src/features/banners/screens/addEditBanner.screens';
import OrderListScreen from './src/features/orders/screens/orderList.screens';

const Stack = createNativeStackNavigator();

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="BannerList" component={BannerListScreen} />
          <Stack.Screen name="AddEditBanner" component={AddEditBannerScreen} />
          <Stack.Screen name="OrderList" component={OrderListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}



export default App;