import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { bannerListStyles } from './banners.styles.screens';
import BannerCard from '../components/bannerCard.components';

const BannerListScreen = ({ navigation }) => {
  const banners = [
    {
      id: 1,
      title: 'Summer Sale Banner',
      description: 'Electronics & Gadgets',
      price: 'Starting ₹199',
      buttonText: 'Shop Now',
      discount: '50% off',
      status: 'Active',
      updatedAt: '7/3/2025',
      imageUrl: 'https://via.placeholder.com/300x150/007AFF/FFFFFF?text=Electronics',
      backgroundColor: '#007AFF',
    },
    {
      id: 2,
      title: 'Mobile Accessories',
      description: 'Phones & Accessories',
      price: 'Starting ₹99',
      buttonText: 'Buy Now',
      discount: '30% off',
      status: 'Active',
      createdAt: '8/7/2025',
      imageUrl: 'https://via.placeholder.com/300x150/FF6B35/FFFFFF?text=Mobile',
      backgroundColor: '#FF6B35',
    },
  ];

  return (
    <View style={bannerListStyles.container}>
      <View style={bannerListStyles.header}>
        <Text style={bannerListStyles.headerTitle}>Banner Management</Text>
        <TouchableOpacity style={bannerListStyles.addButton}>
          <Text style={bannerListStyles.addButtonText}>Add Banner</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={bannerListStyles.bannersList}>
        <View style={bannerListStyles.bannersListContent}>
          {banners.map((banner) => (
            <BannerCard
              key={banner.id}
              title={banner.title}
              description={banner.description}
              price={banner.price}
              buttonText={banner.buttonText}
              discount={banner.discount}
              status={banner.status}
              updatedAt={banner.updatedAt}
              createdAt={banner.createdAt}
              imageUrl={banner.imageUrl}
              backgroundColor={banner.backgroundColor}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default BannerListScreen;