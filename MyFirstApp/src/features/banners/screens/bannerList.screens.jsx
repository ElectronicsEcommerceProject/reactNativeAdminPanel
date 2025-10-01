import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { bannerListStyles } from './banners.styles.screens';
import BannerCard from '../components/bannerCard.components';
import LinearGradient from 'react-native-linear-gradient';

const BannerListScreen = ({ navigation }) => {
  const banners = [
    {
      id: 1,
      title: 'Banner Title',
      description: 'Description',
      price: 'Starting 199',
      buttonText: 'Button Text',
      discount: '7% off',
      status: 'Active',
      updatedAt: 'Updated - 7/3/2025',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=120&fit=crop',
      gradientColors: ['#B85450', '#8B4A8B'],
    },
    {
      id: 2,
      title: 'Banner Title',
      description: 'Description',
      price: 'Starting 199',
      buttonText: 'Button Text',
      discount: '7% off',
      status: 'Active',
      createdAt: 'Created - 8/7/2025',
      imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=200&h=120&fit=crop',
      gradientColors: ['#4A9B8E', '#2E5C8A'],
    },
  ];

  return (
    <View style={bannerListStyles.container}>
      <View style={bannerListStyles.topHeader}>
        <TouchableOpacity style={bannerListStyles.backButton} onPress={() => navigation.goBack()}>
          <Text style={bannerListStyles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={bannerListStyles.topHeaderTitle}>Banner Management</Text>
        <TouchableOpacity style={bannerListStyles.addIconButton}>
          <Text style={bannerListStyles.addIcon}>⊕</Text>
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
              gradientColors={banner.gradientColors}
            />
          ))}
          <TouchableOpacity style={bannerListStyles.addNewBannerButton} onPress={() => navigation.navigate('AddEditBanner')}>
            <Text style={bannerListStyles.addNewBannerIcon}>+</Text>
            <Text style={bannerListStyles.addNewBannerText}>Add New Banner</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BannerListScreen;