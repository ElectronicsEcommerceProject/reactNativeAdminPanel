import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { bannerCardStyles } from '../screens/banners.styles.screens';

const BannerCard = ({
  title,
  description,
  price,
  buttonText,
  discount,
  status,
  updatedAt,
  createdAt,
  imageUrl,
  backgroundColor,
  gradientStart,
  gradientEnd,
}) => {
  const getStatusColor = (status) => {
    return status === 'Active' ? '#4CAF50' : '#F44336';
  };

  return (
    <View style={bannerCardStyles.card}>
      <View style={bannerCardStyles.cardHeader}>
        <View style={bannerCardStyles.bannerInfo}>
          <Text style={bannerCardStyles.bannerTitle}>{title}</Text>
          <Text style={bannerCardStyles.bannerUrl}>{description}</Text>
          <Text style={bannerCardStyles.bannerDates}>
            Price: {price} • {buttonText}
          </Text>
          <Text style={bannerCardStyles.bannerDates}>
            {discount} • {updatedAt || createdAt}
          </Text>
        </View>
        
        <View style={[bannerCardStyles.statusBadge, { backgroundColor: getStatusColor(status) + '20' }]}>
          <Text style={[bannerCardStyles.statusText, { color: getStatusColor(status) }]}>
            {status}
          </Text>
        </View>
      </View>
      
      <View style={[bannerCardStyles.bannerPreview, { backgroundColor }]}>
        <Image source={{ uri: imageUrl }} style={bannerCardStyles.bannerImage} />
      </View>

      <View style={bannerCardStyles.cardActions}>
        <TouchableOpacity style={[bannerCardStyles.actionButton, bannerCardStyles.editButton]}>
          <Text style={bannerCardStyles.actionButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[bannerCardStyles.actionButton, bannerCardStyles.deleteButton]}>
          <Text style={bannerCardStyles.actionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BannerCard;