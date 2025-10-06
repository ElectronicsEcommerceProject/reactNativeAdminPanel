import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { reviewListStyles } from './reviewList.styles.screens';

const ReviewListScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All Reviews');
  const [fadeAnim] = useState(new Animated.Value(1));

  const handleTabChange = (tab) => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
    setActiveTab(tab);
  };

  const reviews = [
    { product: 'Reano', reviewer: 'Rohit Kumar', rating: 5, date: '06/07/2025', status: 'Flag' },
    { product: 'Reano', reviewer: 'Rohit Kumar', rating: 5, date: '06/07/2025', status: 'Flag' },
    { product: 'Reano', reviewer: 'Rohit Kumar', rating: 5, date: '06/07/2025', status: 'Flag' },
    { product: 'Reano', reviewer: 'Rohit Kumar', rating: 5, date: '06/07/2025', status: 'Flag' },
  ];

  const renderAnalytics = () => (
    <ScrollView style={reviewListStyles.reviewsList}>
      <View style={reviewListStyles.analyticsCard}>
        <Text style={reviewListStyles.analyticsTitle}>Review Counts</Text>
        <View style={reviewListStyles.barChartContainer}>
          <View style={reviewListStyles.barWrapper}>
            <View style={[reviewListStyles.bar, { height: 60, backgroundColor: '#4A90E2' }]} />
            <Text style={reviewListStyles.barLabel}>Pending(2)</Text>
          </View>
          <View style={reviewListStyles.barWrapper}>
            <View style={[reviewListStyles.bar, { height: 120, backgroundColor: '#4CAF50' }]} />
            <Text style={reviewListStyles.barLabel}>Approved(6)</Text>
          </View>
          <View style={reviewListStyles.barWrapper}>
            <View style={[reviewListStyles.bar, { height: 80, backgroundColor: '#FFC107' }]} />
            <Text style={reviewListStyles.barLabel}>Flagged(2)</Text>
          </View>
          <View style={reviewListStyles.barWrapper}>
            <View style={[reviewListStyles.bar, { height: 50, backgroundColor: '#F44336' }]} />
            <Text style={reviewListStyles.barLabel}>Rejected(1)</Text>
          </View>
        </View>
      </View>

      <View style={reviewListStyles.analyticsCard}>
        <Text style={reviewListStyles.analyticsTitle}>Rating Distribution</Text>
        <View style={reviewListStyles.pieChartContainer}>
          <View style={reviewListStyles.pieChart}>
            <View style={[reviewListStyles.pieSlice, reviewListStyles.pieSlice1]} />
            <View style={[reviewListStyles.pieSlice, reviewListStyles.pieSlice2]} />
          </View>
          <View style={reviewListStyles.pieLegend}>
            <Text style={reviewListStyles.pieLegendText}>5/5(20%)</Text>
            <Text style={reviewListStyles.pieLegendText}>5/5(80%)</Text>
          </View>
        </View>
      </View>

      <View style={reviewListStyles.analyticsCard}>
        <Text style={reviewListStyles.analyticsTitle}>Top Rated Product</Text>
        <Text style={reviewListStyles.topProduct}>• Rinvano - 5/5 (6 reviews)</Text>
      </View>
    </ScrollView>
  );

  const renderReviews = () => (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <ScrollView style={reviewListStyles.reviewsList}>
      {reviews.map((review, index) => (
        <TouchableOpacity
          key={index}
          style={reviewListStyles.reviewCard}
          onPress={() => navigation.navigate('ReviewDetail', { review })}
        >
          <View style={reviewListStyles.reviewHeader}>
            <Text style={reviewListStyles.reviewProduct}>Product: {review.product}</Text>
            <Text style={reviewListStyles.reviewerName}>Reviewer: {review.reviewer}</Text>
            <Text style={reviewListStyles.reviewRating}>Rating: {review.rating}/5</Text>
            <Text style={reviewListStyles.reviewDate}>Date: {review.date}</Text>
            <Text style={reviewListStyles.reviewStatus}>Status: {review.status}</Text>
          </View>
          <View style={reviewListStyles.reviewActions}>
            <TouchableOpacity style={reviewListStyles.flagButton}>
              <Text style={reviewListStyles.flagButtonText}>Flag</Text>
            </TouchableOpacity>
            <TouchableOpacity style={reviewListStyles.deleteButton}>
              <Text style={reviewListStyles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </Animated.View>
  );

  return (
    <View style={reviewListStyles.container}>
      <View style={reviewListStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={reviewListStyles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={reviewListStyles.headerTitle}>Review Management</Text>
        <TouchableOpacity>
          <Text style={reviewListStyles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <View style={reviewListStyles.searchBox}>
        <Text style={reviewListStyles.searchIcon}>🔍</Text>
        <Text style={reviewListStyles.searchPlaceholder}>Search by Product or reviews</Text>
      </View>

      <View style={reviewListStyles.tabContainer}>
        <TouchableOpacity
          style={[reviewListStyles.tab, activeTab === 'All Reviews' && reviewListStyles.activeTab]}
          onPress={() => handleTabChange('All Reviews')}
        >
          <Text style={[reviewListStyles.tabText, activeTab === 'All Reviews' && reviewListStyles.activeTabText]}>
            All Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[reviewListStyles.tab, activeTab === 'Approved Reviews' && reviewListStyles.activeTab]}
          onPress={() => handleTabChange('Approved Reviews')}
        >
          <Text style={[reviewListStyles.tabText, activeTab === 'Approved Reviews' && reviewListStyles.activeTabText]}>
            Approved Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[reviewListStyles.tab, activeTab === 'Flagged Reviews' && reviewListStyles.activeTab]}
          onPress={() => handleTabChange('Flagged Reviews')}
        >
          <Text style={[reviewListStyles.tabText, activeTab === 'Flagged Reviews' && reviewListStyles.activeTabText]}>
            Flagged Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[reviewListStyles.tab, activeTab === 'Rejected Reviews' && reviewListStyles.activeTab]}
          onPress={() => handleTabChange('Rejected Reviews')}
        >
          <Text style={[reviewListStyles.tabText, activeTab === 'Rejected Reviews' && reviewListStyles.activeTabText]}>
            Rejected Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[reviewListStyles.tab, activeTab === 'Analytics' && reviewListStyles.activeTab]}
          onPress={() => handleTabChange('Analytics')}
        >
          <Text style={[reviewListStyles.tabText, activeTab === 'Analytics' && reviewListStyles.activeTabText]}>
            Analytics
          </Text>
        </TouchableOpacity>
      </View>

      <View style={reviewListStyles.content}>
        {activeTab === 'Analytics' ? renderAnalytics() : renderReviews()}
      </View>
    </View>
  );
};

export default ReviewListScreen;
