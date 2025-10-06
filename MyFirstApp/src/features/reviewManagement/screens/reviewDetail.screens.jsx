import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { reviewDetailStyles } from './reviewDetail.styles.screens';

const ReviewDetailScreen = ({ navigation, route }) => {
  return (
    <View style={reviewDetailStyles.container}>
      <View style={reviewDetailStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={reviewDetailStyles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={reviewDetailStyles.headerTitle}>Review Management</Text>
        <TouchableOpacity>
          <Text style={reviewDetailStyles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={reviewDetailStyles.content}>
        <View style={reviewDetailStyles.section}>
          <Text style={reviewDetailStyles.sectionTitle}>Review Details</Text>
          <View style={reviewDetailStyles.infoRow}>
            <Text style={reviewDetailStyles.infoLabel}>Product: (review)</Text>
            <Text style={reviewDetailStyles.infoValue}>Laptop G5</Text>
          </View>
          <View style={reviewDetailStyles.infoRow}>
            <Text style={reviewDetailStyles.infoLabel}>Review Counts</Text>
            <Text style={reviewDetailStyles.infoValue}></Text>
          </View>
          <View style={reviewDetailStyles.infoRow}>
            <Text style={reviewDetailStyles.infoLabel}>Date: 06/07/2025</Text>
          </View>
          <View style={reviewDetailStyles.infoRow}>
            <Text style={reviewDetailStyles.infoLabel}>Status: Flag</Text>
          </View>
        </View>

        <View style={reviewDetailStyles.section}>
          <Text style={reviewDetailStyles.sectionTitle}>Title:</Text>
          <Text style={reviewDetailStyles.reviewText}>nice product</Text>
        </View>

        <View style={reviewDetailStyles.section}>
          <Text style={reviewDetailStyles.sectionTitle}>Review:</Text>
          <Text style={reviewDetailStyles.reviewText}>nice one</Text>
        </View>

        <View style={reviewDetailStyles.buttonContainer}>
          <TouchableOpacity style={reviewDetailStyles.updateButton}>
            <Text style={reviewDetailStyles.updateButtonText}>Update Review</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={reviewDetailStyles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={reviewDetailStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReviewDetailScreen;
