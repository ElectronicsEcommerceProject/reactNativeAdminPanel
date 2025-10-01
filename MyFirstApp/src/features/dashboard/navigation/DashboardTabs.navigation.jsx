import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import HomeTabScreen from '../screens/home.tab.screens';
import RecentOrdersTabScreen from '../screens/recentOrders.tab.screens';
import LowStockTabScreen from '../screens/lowStock.tab.screens';

const Tab = createBottomTabNavigator();

// Custom Tab Bar Icon Component
const TabIcon = ({ icon, label, focused }) => {
  return (
    <View style={styles.tabIconContainer}>
      <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
        <Text style={[styles.icon, focused && styles.iconActive]}>{icon}</Text>
      </View>
      <Text style={[styles.label, focused && styles.labelActive]}>{label}</Text>
    </View>
  );
};

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
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

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  iconWrapperActive: {
    backgroundColor: '#007AFF',
  },
  icon: {
    fontSize: 20,
  },
  iconActive: {
    fontSize: 20,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    color: '#999',
    fontWeight: '500',
  },
  labelActive: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default DashboardTabs;
