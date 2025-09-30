import React from 'react';
import { View, Text } from 'react-native';

const BannerCard = ({ banner }) => {
  return (
    <View>
      <Text>{banner.title}</Text>
    </View>
  );
};

export default BannerCard;