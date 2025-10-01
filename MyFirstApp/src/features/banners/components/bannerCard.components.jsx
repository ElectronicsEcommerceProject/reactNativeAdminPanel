import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { bannerListStyles } from '../screens/banners.styles.screens';
import LinearGradient from 'react-native-linear-gradient';

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
  gradientColors,
}) => {
  const getStatusColor = (status) => {
    return status === 'Active' ? '#4CAF50' : '#F44336';
  };

  return (
    <View style={bannerListStyles.bannerCard}>
      <LinearGradient
        colors={gradientColors}
        style={bannerListStyles.bannerContent}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <View style={bannerListStyles.discountBadge}>
          <Text style={bannerListStyles.discountText}>{discount}</Text>
        </View>
        
        <View style={bannerListStyles.bannerTextSection}>
          <Text style={bannerListStyles.bannerTitle}>{title}</Text>
          <Text style={bannerListStyles.bannerDescription}>{description}</Text>
          <Text style={bannerListStyles.bannerPrice}>{price}</Text>
          <View style={bannerListStyles.buttonTextContainer}>
            <Text style={bannerListStyles.buttonText}>{buttonText}</Text>
          </View>
        </View>
        
        <View style={bannerListStyles.bannerImageSection}>
          <Image source={{ uri: imageUrl }} style={bannerListStyles.bannerImage} />
        </View>
      </LinearGradient>
      
      <View style={bannerListStyles.bannerFooter}>
        <View style={bannerListStyles.statusRow}>
          <View style={[bannerListStyles.statusBadge, { backgroundColor: getStatusColor(status) + '20' }]}>
            <Text style={[bannerListStyles.statusText, { color: getStatusColor(status) }]}>
              {status}
            </Text>
          </View>
          <TouchableOpacity style={bannerListStyles.deactivateButton}>
            <Text style={bannerListStyles.deactivateButtonText}>Deactivate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={bannerListStyles.iconButton}>
            <Text style={[bannerListStyles.editIcon, { color: '#007AFF' }]}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={bannerListStyles.iconButton}>
            <Text style={[bannerListStyles.deleteIcon, { color: '#FF3B30' }]}>🗑️</Text>
          </TouchableOpacity>
        </View>
        <Text style={bannerListStyles.dateText}>{updatedAt || createdAt}</Text>
      </View>
    </View>
  );
};

export default BannerCard;