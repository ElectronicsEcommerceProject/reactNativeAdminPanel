import React from 'react';
import { View, Text } from 'react-native';

const CategoryCard = ({ category }) => {
  return (
    <View>
      <Text>{category.name}</Text>
    </View>
  );
};

export default CategoryCard;