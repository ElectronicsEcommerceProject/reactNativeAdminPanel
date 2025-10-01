import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../config/colors.config';

const RecentOrdersTabScreen = ({ navigation }) => {
  const [orders] = useState([
    { id: '#1001', customer: 'John Doe', amount: '$250', status: 'Delivered', date: '2024-01-15' },
    { id: '#1002', customer: 'Jane Smith', amount: '$180', status: 'Pending', date: '2024-01-15' },
    { id: '#1003', customer: 'Mike Johnson', amount: '$320', status: 'Processing', date: '2024-01-14' },
    { id: '#1004', customer: 'Sarah Williams', amount: '$450', status: 'Delivered', date: '2024-01-14' },
    { id: '#1005', customer: 'Tom Brown', amount: '$290', status: 'Pending', date: '2024-01-13' },
    { id: '#1006', customer: 'Emily Davis', amount: '$380', status: 'Processing', date: '2024-01-13' },
    { id: '#1007', customer: 'David Wilson', amount: '$210', status: 'Delivered', date: '2024-01-12' },
    { id: '#1008', customer: 'Lisa Anderson', amount: '$560', status: 'Pending', date: '2024-01-12' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return '#4CAF50';
      case 'Processing':
        return '#FF9800';
      case 'Pending':
        return '#F44336';
      default:
        return '#999';
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recent Orders</Text>
        <Text style={styles.headerSubtitle}>{orders.length} orders</Text>
      </View>

      {/* Orders List */}
      <ScrollView style={styles.ordersList} showsVerticalScrollIndicator={false}>
        {orders.map((order) => (
          <TouchableOpacity
            key={order.id}
            style={styles.orderCard}
            onPress={() => navigation.navigate('OrderDetail', { orderId: order.id })}
          >
            <View style={styles.orderHeader}>
              <Text style={styles.orderId}>{order.id}</Text>
              <Text style={styles.orderDate}>{order.date}</Text>
            </View>
            
            <View style={styles.orderBody}>
              <View style={styles.orderInfo}>
                <Text style={styles.customerName}>{order.customer}</Text>
                <Text style={styles.orderAmount}>{order.amount}</Text>
              </View>
              
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
                <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>
                  {order.status}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  ordersList: {
    flex: 1,
    padding: 15,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  orderDate: {
    fontSize: 12,
    color: '#999',
  },
  orderBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 15,
    color: '#333',
    marginBottom: 5,
  },
  orderAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default RecentOrdersTabScreen;
