import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BannerListScreen from '../screens/bannerList.screens';
import AddEditBannerScreen from '../screens/addEditBanner.screens';

const Stack = createStackNavigator();

const BannerStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BannerList" component={BannerListScreen} />
      <Stack.Screen name="AddEditBanner" component={AddEditBannerScreen} />
    </Stack.Navigator>
  );
};

export default BannerStack;