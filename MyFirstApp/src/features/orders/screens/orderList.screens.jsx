import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import { orderStyles } from './orders.styles.screens';

const OrderListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedUserType, setSelectedUserType] = useState('User Type');
  const [selectedDate, setSelectedDate] = useState(null);

  const statusOptions = ['Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned'];
  const userTypeOptions = ['Customer', 'Retailer'];

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setShowStatusModal(false);
  };

  const handleUserTypeSelect = (type) => {
    setSelectedUserType(type);
    setShowUserTypeModal(false);
  };

  const generateCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const handleDateSelect = (day) => {
    if (day) {
      const today = new Date();
      const selected = new Date(today.getFullYear(), today.getMonth(), day);
      setSelectedDate(selected.toLocaleDateString());
      setShowDateModal(false);
    }
  };

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
          <TouchableOpacity style={orderStyles.filterButton} onPress={() => setShowStatusModal(true)}>
            <Text style={orderStyles.filterButtonText}>{selectedStatus}</Text>
            <Text style={orderStyles.filterIcon}>▼</Text>
          </TouchableOpacity>
          <TouchableOpacity style={orderStyles.filterButton} onPress={() => setShowDateModal(true)}>
            <Text style={orderStyles.filterButtonText}>{selectedDate || 'Date'}</Text>
            <Text style={orderStyles.filterIcon}>▼</Text>
          </TouchableOpacity>
          <TouchableOpacity style={orderStyles.filterButton} onPress={() => setShowUserTypeModal(true)}>
            <Text style={orderStyles.filterButtonText}>{selectedUserType}</Text>
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

      <Modal visible={showStatusModal} transparent animationType="fade" onRequestClose={() => setShowStatusModal(false)}>
        <TouchableOpacity style={orderStyles.modalOverlay} activeOpacity={1} onPress={() => setShowStatusModal(false)}>
          <View style={orderStyles.modalContent}>
            <Text style={orderStyles.modalTitle}>Select Status</Text>
            {statusOptions.map((status, index) => (
              <TouchableOpacity key={index} style={orderStyles.modalOption} onPress={() => handleStatusSelect(status)}>
                <Text style={orderStyles.modalOptionText}>{status}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={showDateModal} transparent animationType="fade" onRequestClose={() => setShowDateModal(false)}>
        <TouchableOpacity style={orderStyles.modalOverlay} activeOpacity={1} onPress={() => setShowDateModal(false)}>
          <View style={orderStyles.calendarModal}>
            <Text style={orderStyles.calendarTitle}>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</Text>
            <View style={orderStyles.calendarWeekDays}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <Text key={index} style={orderStyles.weekDayText}>{day}</Text>
              ))}
            </View>
            <View style={orderStyles.calendarDays}>
              {generateCalendar().map((day, index) => (
                <TouchableOpacity
                  key={index}
                  style={[orderStyles.calendarDay, !day && orderStyles.emptyDay]}
                  onPress={() => handleDateSelect(day)}
                  disabled={!day}
                >
                  {day && <Text style={orderStyles.calendarDayText}>{day}</Text>}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={showUserTypeModal} transparent animationType="fade" onRequestClose={() => setShowUserTypeModal(false)}>
        <TouchableOpacity style={orderStyles.modalOverlay} activeOpacity={1} onPress={() => setShowUserTypeModal(false)}>
          <View style={orderStyles.modalContent}>
            <Text style={orderStyles.modalTitle}>Select User Type</Text>
            {userTypeOptions.map((type, index) => (
              <TouchableOpacity key={index} style={orderStyles.modalOption} onPress={() => handleUserTypeSelect(type)}>
                <Text style={orderStyles.modalOptionText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default OrderListScreen;
