import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { orderStyles } from './orders.styles.screens';

const OrderListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { number: '38', label: 'Total' },
    { number: '3', label: 'Shipped' },
    { number: '10', label: 'Canceled' },
    { number: '20', label: 'Pending' },
  ];

  const orders = [
    {
      id: 'ORD-20250715-0302',
      customerName: 'Rohit Kumar',
      customerEmail: 'rohit3339@gmail.com',
      price: '₹1800.00',
      date: '2025-07-15',
      status: 'Status',
    },
    {
      id: 'ORD-20250715-0302',
      customerName: 'Rohit Kumar',
      customerEmail: 'rohit3339@gmail.com',
      price: '₹1800.00',
      date: '2025-07-15',
      status: 'Status',
    },
    {
      id: 'ORD-20250715-0302',
      customerName: 'Rohit Kumar',
      customerEmail: 'rohit3339@gmail.com',
      price: '₹1800.00',
      date: '2025-07-15',
      status: 'Status',
    },
    {
      id: 'ORD-20250715-0302',
      customerName: 'Rohit Kumar',
      customerEmail: 'rohit3339@gmail.com',
      price: '₹1800.00',
      date: '2025-07-15',
      status: 'Status',
    },
  ];

  const renderOrderCard = ({ item }) => (
    <View style={orderStyles.orderCard}>
      <View style={orderStyles.orderHeader}>
        <Text style={orderStyles.orderId}>{item.id}</Text>
        <View style={orderStyles.statusBadge}>
          <Text style={orderStyles.statusText}>{item.status}</Text>
        </View>
      </View>
      
      <Text style={orderStyles.customerName}>{item.customerName}</Text>
      <Text style={orderStyles.customerEmail}>{item.customerEmail}</Text>
      
      <View style={orderStyles.orderFooter}>
        <View>
          <Text style={orderStyles.orderPrice}>{item.price}</Text>
        </View>
        <Text style={orderStyles.orderDate}>{item.date}</Text>
        <View style={orderStyles.orderActions}>
          <TouchableOpacity style={orderStyles.viewButton}>
            <Text style={orderStyles.viewIcon}>👁</Text>
          </TouchableOpacity>
          <TouchableOpacity style={orderStyles.cancelButton}>
            <Text style={orderStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={orderStyles.container}>
      <View style={orderStyles.header}>
        <View style={orderStyles.headerLeft}>
          <TouchableOpacity style={orderStyles.backButton} onPress={() => navigation.goBack()}>
            <Text style={orderStyles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={orderStyles.headerTitle}>Order Management</Text>
        </View>
        <TouchableOpacity style={orderStyles.addButton}>
          <Text style={orderStyles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={orderStyles.statsContainer}>
        <View style={orderStyles.statsRow}>
          {stats.map((stat, index) => (
            <View key={index} style={orderStyles.statCard}>
              <Text style={orderStyles.statNumber}>{stat.number}</Text>
              <Text style={orderStyles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={orderStyles.exportButtonsRow}>
          <TouchableOpacity style={orderStyles.exportButton}>
            <Text style={orderStyles.exportButtonText}>Export CSV</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[orderStyles.exportButton, orderStyles.exportButtonPDF]}>
            <Text style={[orderStyles.exportButtonText, orderStyles.exportButtonTextPDF]}>Export PDF</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={orderStyles.contentContainer}>
        <View style={orderStyles.searchContainer}>
          <Text style={orderStyles.searchIcon}>🔍</Text>
          <TextInput
            style={orderStyles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>

        <View style={orderStyles.filtersRow}>
          <TouchableOpacity style={orderStyles.filterButton}>
            <Text style={orderStyles.filterButtonText}>Status</Text>
            <Text style={orderStyles.filterIcon}>▼</Text>
          </TouchableOpacity>
          <TouchableOpacity style={orderStyles.filterButton}>
            <Text style={orderStyles.filterButtonText}>Date</Text>
            <Text style={orderStyles.filterIcon}>▼</Text>
          </TouchableOpacity>
          <TouchableOpacity style={orderStyles.filterButton}>
            <Text style={orderStyles.filterButtonText}>User Type</Text>
            <Text style={orderStyles.filterIcon}>▼</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={orders}
          renderItem={renderOrderCard}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={orderStyles.ordersList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default OrderListScreen;
