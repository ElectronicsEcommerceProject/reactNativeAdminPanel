import React from 'react';
import { View, Text } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
};

export default ProductCard;