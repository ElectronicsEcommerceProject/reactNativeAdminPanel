import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { COLORS } from '../../../config/colors.config';
import { homeTabStyles } from './dashboard.styles.screens';
import { logo } from '../../../assets/index.assets';



const HomeTabScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const managementItems = [
    { id: 1, title: 'Product\nManagement', icon: '📦', screen: 'ProductList' },
    { id: 2, title: 'Order\nManagement', icon: '🛒', screen: 'OrderList' },
    { id: 3, title: 'Stock\nManagement', icon: '🏪', screen: 'ProductList' },
    { id: 4, title: 'User\nManagement', icon: '👤', screen: 'UserList' },
    { id: 5, title: 'Reports &\nAnalytics', icon: '📊', screen: 'Dashboard' },
    { id: 6, title: 'Review\nManagement', icon: '⭐', screen: 'Dashboard' },
  ];

  return (
    <ScrollView style={homeTabStyles.container}>
      {/* Top Bar with Menu and Search */}
      <View style={homeTabStyles.topBar}>
        <TouchableOpacity style={homeTabStyles.menuButton}>
          <Text style={homeTabStyles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <View style={homeTabStyles.searchContainer}>
          <Text style={homeTabStyles.searchIcon}>🔍</Text>
          <TextInput
            style={homeTabStyles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Header */}
      <View style={homeTabStyles.header}>
        <Text style={homeTabStyles.greeting}>Hi Admin !</Text>
      </View>

      {/* Dashboard Card */}
      <ImageBackground source={logo} style={homeTabStyles.dashboardCard} imageStyle={{ borderRadius: 15, opacity: 0.3 }}>
        <Text style={homeTabStyles.dashboardTitle}>DashBoard</Text>
        <View style={homeTabStyles.revenueSection}>
          <Text style={homeTabStyles.revenueLabel}>Total Revenue</Text>
          <Text style={homeTabStyles.revenueAmount}>1,02,000</Text>
        </View>
      </ImageBackground>

      {/* Management Section */}
      <Text style={homeTabStyles.sectionTitle}>Management</Text>
      <View style={homeTabStyles.managementGrid}>
        {managementItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={homeTabStyles.managementCard}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={homeTabStyles.iconContainer}>
              <Text style={homeTabStyles.icon}>{item.icon}</Text>
            </View>
            <Text style={homeTabStyles.managementTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};



export default HomeTabScreen;
