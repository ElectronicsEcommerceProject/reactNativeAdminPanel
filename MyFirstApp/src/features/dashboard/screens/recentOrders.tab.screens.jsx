import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../config/colors.config';
import { recentOrdersTabStyles } from './dashboard.styles.screens';

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
    <View style={recentOrdersTabStyles.container}>
      {/* Header */}
      <View style={recentOrdersTabStyles.header}>
        <Text style={recentOrdersTabStyles.headerTitle}>Recent Orders</Text>
        <Text style={recentOrdersTabStyles.headerSubtitle}>{orders.length} orders</Text>
      </View>

      {/* Orders List */}
      <ScrollView style={recentOrdersTabStyles.ordersList} showsVerticalScrollIndicator={false}>
        {orders.map((order) => (
          <TouchableOpacity
            key={order.id}
            style={recentOrdersTabStyles.orderCard}
            onPress={() => navigation.navigate('OrderDetail', { orderId: order.id })}
          >
            <View style={recentOrdersTabStyles.orderHeader}>
              <Text style={recentOrdersTabStyles.orderId}>{order.id}</Text>
              <Text style={recentOrdersTabStyles.orderDate}>{order.date}</Text>
            </View>
            
            <View style={recentOrdersTabStyles.orderBody}>
              <View style={recentOrdersTabStyles.orderInfo}>
                <Text style={recentOrdersTabStyles.customerName}>{order.customer}</Text>
                <Text style={recentOrdersTabStyles.orderAmount}>{order.amount}</Text>
              </View>
              
              <View style={[recentOrdersTabStyles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
                <Text style={[recentOrdersTabStyles.statusText, { color: getStatusColor(order.status) }]}>
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



export default RecentOrdersTabScreen;
