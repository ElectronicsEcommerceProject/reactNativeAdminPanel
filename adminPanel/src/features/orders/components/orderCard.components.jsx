import React from 'react';
import { View, Text } from 'react-native';

const OrderCard = ({ order }) => {
  return (
    <View>
      <Text>Order #{order.id}</Text>
    </View>
  );
};

export default OrderCard;