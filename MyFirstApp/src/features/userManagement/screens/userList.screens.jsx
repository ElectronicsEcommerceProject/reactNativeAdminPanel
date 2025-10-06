import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { userListStyles } from './userList.styles.screens';

const UserListScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const topBuyers = [
    { name: 'Gaurav Chaudhary', orders: 10, amount: '₹2,60,604.3' },
    { name: 'Priya Sharma', orders: 8, amount: '₹1,85,320.5' },
    { name: 'Rahul Verma', orders: 12, amount: '₹1,52,890.0' },
    { name: 'Anjali Singh', orders: 6, amount: '₹1,25,450.8' },
    { name: 'Vikram Patel', orders: 9, amount: '₹98,760.2' },
  ];

  const topSellers = [
    { name: 'Tech Store Mumbai', orders: 45, amount: '₹5,60,200.0' },
    { name: 'Electronics Hub Delhi', orders: 38, amount: '₹4,85,300.5' },
    { name: 'Gadget World Bangalore', orders: 32, amount: '₹3,92,150.0' },
    { name: 'Mobile Zone Pune', orders: 28, amount: '₹3,45,680.3' },
    { name: 'Smart Devices Chennai', orders: 25, amount: '₹2,98,420.7' },
  ];

  const renderDashboard = () => (
    <ScrollView style={userListStyles.content}>
      <View style={userListStyles.statCard}>
        <View style={userListStyles.statRow}>
          <View style={userListStyles.statHalf}>
            <Text style={userListStyles.statLabel}>Avg Revenue/Users</Text>
            <Text style={userListStyles.statValue}>₹ 28,860</Text>
          </View>
          <View style={userListStyles.statHalfRight}>
            <Text style={userListStyles.statLabel}>Total Users</Text>
            <Text style={userListStyles.statValue}>23</Text>
          </View>
        </View>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Active Customers</Text>
        <Text style={userListStyles.statValue}>14</Text>
        <Text style={userListStyles.statSubtext}>last activity</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Active Retailers</Text>
        <Text style={userListStyles.statValue}>7</Text>
        <Text style={userListStyles.statSubtext}>Verified partners</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Active Users</Text>
        <Text style={userListStyles.statValue}>22</Text>
        <Text style={userListStyles.statSubtext}>Updated</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Pending Retailers</Text>
        <Text style={userListStyles.statValue}>1</Text>
        <Text style={userListStyles.statSubtext}>Awaiting Approve</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Suspended Users</Text>
        <Text style={userListStyles.statValue}>0</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>New Signups</Text>
        <Text style={userListStyles.statValue}>0</Text>
        <Text style={userListStyles.statSubtext}>Recent Registration of Last 7 Days</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Avg Order/Users</Text>
        <Text style={userListStyles.statValue}>1.9</Text>
        <Text style={userListStyles.statSubtext}>Current Average</Text>
      </View>

      <View style={userListStyles.buyerCard}>
        <Text style={userListStyles.buyerHeader}>Top Buyers (by Total Spend)</Text>
        {topBuyers.map((buyer, index) => (
          <View key={index} style={userListStyles.buyerRow}>
            <View style={userListStyles.buyerInfo}>
              <Text style={userListStyles.buyerName}>{buyer.name}</Text>
              <Text style={userListStyles.buyerOrders}>{buyer.orders} orders</Text>
            </View>
            <Text style={userListStyles.buyerAmount}>{buyer.amount}</Text>
          </View>
        ))}
      </View>

      <View style={userListStyles.buyerCard}>
        <Text style={userListStyles.buyerHeader}>Top Sellers (by Volume Order)</Text>
        {topSellers.map((seller, index) => (
          <View key={index} style={userListStyles.buyerRow}>
            <View style={userListStyles.buyerInfo}>
              <Text style={userListStyles.buyerName}>{seller.name}</Text>
              <Text style={userListStyles.buyerOrders}>{seller.orders} orders</Text>
            </View>
            <Text style={userListStyles.buyerAmount}>{seller.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderUsers = () => (
    <ScrollView style={userListStyles.content}>
      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Total Users</Text>
        <Text style={userListStyles.statValue}>23</Text>
      </View>
    </ScrollView>
  );

  const renderRetailers = () => (
    <ScrollView style={userListStyles.content}>
      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Total Retailers</Text>
        <Text style={userListStyles.statValue}>8</Text>
      </View>
    </ScrollView>
  );

  return (
    <View style={userListStyles.container}>
      <View style={userListStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={userListStyles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={userListStyles.headerTitle}>User Management</Text>
        <TouchableOpacity>
          <Text style={userListStyles.downloadIcon}>⬇</Text>
        </TouchableOpacity>
      </View>

      <View style={userListStyles.tabContainer}>
        <TouchableOpacity
          style={[userListStyles.tab, activeTab === 'Dashboard' && userListStyles.activeTab]}
          onPress={() => setActiveTab('Dashboard')}
        >
          <Text style={[userListStyles.tabText, activeTab === 'Dashboard' && userListStyles.activeTabText]}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[userListStyles.tab, activeTab === 'Users' && userListStyles.activeTab]}
          onPress={() => setActiveTab('Users')}
        >
          <Text style={[userListStyles.tabText, activeTab === 'Users' && userListStyles.activeTabText]}>
            Users
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[userListStyles.tab, activeTab === 'Retailers' && userListStyles.activeTab]}
          onPress={() => setActiveTab('Retailers')}
        >
          <Text style={[userListStyles.tabText, activeTab === 'Retailers' && userListStyles.activeTabText]}>
            Retailers
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Dashboard' && renderDashboard()}
      {activeTab === 'Users' && renderUsers()}
      {activeTab === 'Retailers' && renderRetailers()}
    </View>
  );
};

export default UserListScreen;
