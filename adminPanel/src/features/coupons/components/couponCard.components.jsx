import React from 'react';
import { View, Text } from 'react-native';

const CouponCard = ({ coupon }) => {
  return (
    <View>
      <Text>{coupon.code}</Text>
    </View>
  );
};

export default CouponCard;