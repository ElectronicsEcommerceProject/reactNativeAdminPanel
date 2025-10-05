import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Modal, Platform } from 'react-native';
import { orderListStyles } from './orders.styles.screens';
import DateTimePicker from '@react-native-community/datetimepicker';

const OrderListScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showUserTypeDropdown, setShowUserTypeDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedUserType, setSelectedUserType] = useState('User Type');

  const statusOptions = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned'];
  const userTypeOptions = ['Customer', 'Retailer'];
  const filterOptions = ['All', 'Retailer', 'Customer'];

  const orders = [
    { id: 'ORD-20250715-0302', name: 'Rohit Kumar', email: 'rohit3339@gmail.com', amount: '₹1800.00', date: '2025-07-15', status: 'Cancel' },
    { id: 'ORD-20250715-0302', name: 'Rohit Kumar', email: 'rohit3339@gmail.com', amount: '₹1800.00', date: '2025-07-15', status: 'Cancel' },
    { id: 'ORD-20250715-0302', name: 'Rohit Kumar', email: 'rohit3339@gmail.com', amount: '₹1800.00', date: '2025-07-15', status: 'Cancel' },
    { id: 'ORD-20250715-0302', name: 'Rohit Kumar', email: 'rohit3339@gmail.com', amount: '₹1800.00', date: '2025-07-15', status: 'Cancel' },
  ];

  return (
    <View style={orderListStyles.container}>
      <View style={orderListStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={orderListStyles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={orderListStyles.headerTitle}>Order Management</Text>
        <TouchableOpacity>
          <Text style={orderListStyles.addIcon}>⊕</Text>
        </TouchableOpacity>
      </View>

      <View style={orderListStyles.statsContainer}>
        <View style={orderListStyles.statCard}>
          <Text style={orderListStyles.statNumber}>38</Text>
          <Text style={orderListStyles.statLabel}>Total</Text>
        </View>
        <View style={orderListStyles.statCard}>
          <Text style={orderListStyles.statNumber}>3</Text>
          <Text style={orderListStyles.statLabel}>Shipped</Text>
        </View>
        <View style={orderListStyles.statCard}>
          <Text style={orderListStyles.statNumber}>10</Text>
          <Text style={orderListStyles.statLabel}>Cancelled</Text>
        </View>
        <View style={orderListStyles.statCard}>
          <Text style={orderListStyles.statNumber}>20</Text>
          <Text style={orderListStyles.statLabel}>Pending</Text>
        </View>
      </View>

      <View style={orderListStyles.exportContainer}>
        <TouchableOpacity style={orderListStyles.exportButton}>
          <Text style={orderListStyles.exportButtonText}>Export CSV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[orderListStyles.exportButton, orderListStyles.exportButtonPDF]}>
          <Text style={orderListStyles.exportButtonText}>Export PDF</Text>
        </TouchableOpacity>
      </View>

      <View style={orderListStyles.contentContainer}>
        <View style={orderListStyles.searchContainer}>
          <Text style={orderListStyles.searchIcon}>🔍</Text>
          <TextInput
            style={orderListStyles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={orderListStyles.filterContainer}>
          <TouchableOpacity
            style={orderListStyles.filterButton}
            onPress={() => setShowStatusDropdown(!showStatusDropdown)}
          >
            <Text style={orderListStyles.filterButtonText}>{selectedStatus}</Text>
            <Text style={orderListStyles.dropdownIcon}>▼</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={orderListStyles.filterButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={orderListStyles.filterButtonText}>Date</Text>
            <Text style={orderListStyles.dropdownIcon}>▼</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={orderListStyles.filterButton}
            onPress={() => setShowUserTypeDropdown(!showUserTypeDropdown)}
          >
            <Text style={orderListStyles.filterButtonText}>{selectedUserType}</Text>
            <Text style={orderListStyles.dropdownIcon}>▼</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={orderListStyles.ordersList}>
          {orders.map((order, index) => (
            <View key={index} style={orderListStyles.orderCard}>
              <View style={orderListStyles.orderHeader}>
                <Text style={orderListStyles.orderId}>{order.id}</Text>
                <View style={orderListStyles.statusBadge}>
                  <Text style={orderListStyles.statusText}>Status</Text>
                </View>
              </View>
              <Text style={orderListStyles.customerName}>{order.name}</Text>
              <Text style={orderListStyles.customerEmail}>{order.email}</Text>
              <View style={orderListStyles.orderFooter}>
                <Text style={orderListStyles.orderAmount}>{order.amount}</Text>
                <Text style={orderListStyles.orderDate}>{order.date}</Text>
                <TouchableOpacity style={orderListStyles.viewButton}>
                  <Text style={orderListStyles.viewIcon}>👁</Text>
                </TouchableOpacity>
                <Text style={orderListStyles.cancelText}>{order.status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <Modal visible={showStatusDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={orderListStyles.modalOverlay}
          onPress={() => setShowStatusDropdown(false)}
        >
          <View style={orderListStyles.dropdownMenu}>
            {statusOptions.map((status, index) => (
              <TouchableOpacity
                key={index}
                style={orderListStyles.dropdownItem}
                onPress={() => {
                  setSelectedStatus(status);
                  setShowStatusDropdown(false);
                }}
              >
                <Text style={orderListStyles.dropdownItemText}>{status}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={showUserTypeDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={orderListStyles.modalOverlay}
          onPress={() => setShowUserTypeDropdown(false)}
        >
          <View style={orderListStyles.dropdownMenu}>
            {userTypeOptions.map((type, index) => (
              <TouchableOpacity
                key={index}
                style={orderListStyles.dropdownItem}
                onPress={() => {
                  setSelectedUserType(type);
                  setShowUserTypeDropdown(false);
                }}
              >
                <Text style={orderListStyles.dropdownItemText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) {
              setSelectedDate(date);
            }
          }}
        />
      )}
    </View>
  );
};

export default OrderListScreen;
