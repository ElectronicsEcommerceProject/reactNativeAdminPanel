import React from 'react';
import { View, Text } from 'react-native';

const OrderStatusChip = ({ status }) => {
  return (
    <View>
      <Text>{status}</Text>
    </View>
  );
};

export default OrderStatusChip;