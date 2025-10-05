import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import HomeTabScreen from '../screens/home.tab.screens';
import RecentOrdersTabScreen from '../screens/recentOrders.tab.screens';
import LowStockTabScreen from '../screens/lowStock.tab.screens';
import { dashboardTabsStyles } from '../screens/dashboard.styles.screens';

const Tab = createBottomTabNavigator();

// Custom Tab Bar Icon Component
const TabIcon = ({ icon, label, focused }) => {
  return (
    <View style={dashboardTabsStyles.tabIconContainer}>
      <View style={[dashboardTabsStyles.iconWrapper, focused && dashboardTabsStyles.iconWrapperActive]}>
        <Text style={[dashboardTabsStyles.icon, focused && dashboardTabsStyles.iconActive]}>{icon}</Text>
      </View>
      <Text style={[dashboardTabsStyles.label, focused && dashboardTabsStyles.labelActive]}>{label}</Text>
    </View>
  );
};

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: dashboardTabsStyles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="🏠" label="Home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="RecentOrdersTab"
        component={RecentOrdersTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="🛒" label="Recent Orders" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="LowStockTab"
        component={LowStockTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="📊" label="Low Stock" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};



export default DashboardTabs;
