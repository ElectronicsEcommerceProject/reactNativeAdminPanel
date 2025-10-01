import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { COLORS } from '../../../config/colors.config';

const { width } = Dimensions.get('window');

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
    <ScrollView style={styles.container}>
      {/* Top Bar with Menu and Search */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi Admin !</Text>
      </View>

      {/* Dashboard Card */}
      <View style={styles.dashboardCard}>
        <Text style={styles.dashboardTitle}>DashBoard</Text>
        <View style={styles.revenueSection}>
          <Text style={styles.revenueLabel}>Total Revenue</Text>
          <Text style={styles.revenueAmount}>1,02,000</Text>
        </View>
      </View>

      {/* Management Section */}
      <Text style={styles.sectionTitle}>Management</Text>
      <View style={styles.managementGrid}>
        {managementItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.managementCard}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <Text style={styles.managementTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  dashboardCard: {
    backgroundColor: '#1E3A5F',
    margin: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 15,
    minHeight: 120,
  },
  dashboardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  revenueSection: {
    marginTop: 10,
  },
  revenueLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  revenueAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 15,
  },
  managementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  managementCard: {
    backgroundColor: '#FFFFFF',
    width: (width - 40) / 2,
    margin: 5,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 120,
    justifyContent: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
  },
  managementTitle: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 18,
  },
});

export default HomeTabScreen;
