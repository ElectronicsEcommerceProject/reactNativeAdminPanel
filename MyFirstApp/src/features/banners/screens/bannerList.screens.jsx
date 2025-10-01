import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { bannerListStyles } from './banners.styles.screens';

const BannerListScreen = ({ navigation }) => {
  return (
    <View style={bannerListStyles.container}>
      <View style={bannerListStyles.header}>
        <Text style={bannerListStyles.headerTitle}>Banner Management</Text>
        <TouchableOpacity style={bannerListStyles.addButton}>
          <Text style={bannerListStyles.addButtonText}>Add Banner</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={bannerListStyles.bannersList}>
        <View style={bannerListStyles.emptyContainer}>
          <Text style={bannerListStyles.emptyText}>No banners available.{"\n"}Tap "Add Banner" to create your first banner.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BannerListScreen;