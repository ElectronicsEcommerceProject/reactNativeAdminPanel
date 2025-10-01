import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COLORS } from '../../../config/colors.config';
import { recentOrdersTabStyles } from './dashboard.styles.screens';
import CustomDrawer from '../components/CustomDrawer.components';

const RecentOrdersTabScreen = ({ navigation }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Customer');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [customerOrders] = useState([
    { id: 'ORD-20250715-0302', type: 'Customer', date: '2025-07-15', status: 'Processing' },
    { id: 'ORD-20250715-0302', type: 'Customer', date: '2025-07-15', status: 'Cancelled' },
    { id: 'ORD-20250715-0302', type: 'Customer', date: '2025-07-15', status: 'Processing' },
  ]);

  const [retailerOrders] = useState([
    { id: 'ORD-20250715-0302', type: 'Customer', date: '2025-07-15', status: 'Pending' },
    { id: 'ORD-20250715-0302', type: 'Customer', date: '2025-07-15', status: 'Cancelled' },
    { id: 'ORD-20250715-0302', type: 'Customer', date: '2025-07-15', status: 'Pending' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processing':
        return '#4CAF50';
      case 'Cancelled':
        return '#F44336';
      case 'Pending':
        return '#FFA500';
      default:
        return '#999';
    }
  };

  const currentOrders = activeTab === 'Customer' ? customerOrders : retailerOrders;

  return (
    <>
      <CustomDrawer 
        visible={drawerVisible} 
        onClose={() => setDrawerVisible(false)} 
        navigation={navigation}
      />
      
      <View style={recentOrdersTabStyles.container}>
        {/* Header with Back Button and Add Button */}
        <View style={recentOrdersTabStyles.topHeader}>
          <TouchableOpacity 
            style={recentOrdersTabStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={recentOrdersTabStyles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={recentOrdersTabStyles.topHeaderTitle}>Recent Orders</Text>
          <TouchableOpacity style={recentOrdersTabStyles.addButton}>
            <Text style={recentOrdersTabStyles.addIcon}>⊕</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={recentOrdersTabStyles.searchContainer}>
          <Text style={recentOrdersTabStyles.searchIcon}>🔍</Text>
          <TextInput
            style={recentOrdersTabStyles.searchInput}
            placeholder="Search for recent Orders"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Customer/Retailer Tabs */}
        <View style={recentOrdersTabStyles.tabContainer}>
          <TouchableOpacity
            style={[
              recentOrdersTabStyles.tab,
              activeTab === 'Customer' && recentOrdersTabStyles.activeTab
            ]}
            onPress={() => setActiveTab('Customer')}
          >
            <Text style={[
              recentOrdersTabStyles.tabText,
              activeTab === 'Customer' && recentOrdersTabStyles.activeTabText
            ]}>
              Customer
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              recentOrdersTabStyles.tab,
              activeTab === 'Retailer' && recentOrdersTabStyles.activeTab
            ]}
            onPress={() => setActiveTab('Retailer')}
          >
            <Text style={[
              recentOrdersTabStyles.tabText,
              activeTab === 'Retailer' && recentOrdersTabStyles.activeTabText
            ]}>
              Retailer
            </Text>
          </TouchableOpacity>
        </View>

        {/* Orders Grid */}
        <ScrollView 
          style={recentOrdersTabStyles.ordersGrid} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={recentOrdersTabStyles.ordersGridContent}
        >
          {currentOrders.map((order, index) => (
            <TouchableOpacity
              key={`${order.id}-${index}`}
              style={recentOrdersTabStyles.orderCard}
              onPress={() => navigation.navigate('OrderDetail', { orderId: order.id })}
            >
              <Text style={recentOrdersTabStyles.orderLabel}>Id:</Text>
              <Text style={recentOrdersTabStyles.orderId}>{order.id}</Text>
              
              <Text style={recentOrdersTabStyles.orderLabel}>Type:</Text>
              <Text style={recentOrdersTabStyles.orderType}>{order.type}</Text>
              
              <Text style={recentOrdersTabStyles.orderLabel}>Date:</Text>
              <Text style={recentOrdersTabStyles.orderDate}>{order.date}</Text>
              
              <Text style={recentOrdersTabStyles.orderLabel}>Status: </Text>
              <Text style={[
                recentOrdersTabStyles.orderStatus,
                { color: getStatusColor(order.status) }
              ]}>
                {order.status}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};



export default RecentOrdersTabScreen;
