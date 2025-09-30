import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../features/dashboard/screens/dashboard.screens';
import ProductListScreen from '../features/products/screens/productList.screens';
import OrderListScreen from '../features/orders/screens/orderList.screens';
import UserListScreen from '../features/users/screens/userList.screens';
import CategoryListScreen from '../features/categories/screens/categoryList.screens';
import SettingsScreen from '../features/settings/screens/settings.screens';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Products" component={ProductListScreen} />
      <Drawer.Screen name="Orders" component={OrderListScreen} />
      <Drawer.Screen name="Users" component={UserListScreen} />
      <Drawer.Screen name="Categories" component={CategoryListScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;