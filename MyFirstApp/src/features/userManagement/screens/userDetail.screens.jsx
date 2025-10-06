import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { userDetailStyles } from './userDetail.styles.screens';

const UserDetailScreen = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState('General Info');

  const renderGeneralInfo = () => (
    <ScrollView style={userDetailStyles.content}>
      <Text style={userDetailStyles.sectionTitle}>General Information</Text>
      <View style={userDetailStyles.infoRow}>
        <Text style={userDetailStyles.infoLabel}>Name :</Text>
        <Text style={userDetailStyles.infoValue}></Text>
      </View>
      <View style={userDetailStyles.infoRow}>
        <Text style={userDetailStyles.infoLabel}>Email :</Text>
        <Text style={userDetailStyles.infoValue}></Text>
      </View>
      <View style={userDetailStyles.infoRow}>
        <Text style={userDetailStyles.infoLabel}>Role :</Text>
        <Text style={userDetailStyles.infoValue}></Text>
      </View>
      <View style={userDetailStyles.infoRow}>
        <Text style={userDetailStyles.infoLabel}>Last Login :</Text>
        <Text style={userDetailStyles.infoValue}></Text>
      </View>
      <View style={userDetailStyles.infoRow}>
        <Text style={userDetailStyles.infoLabel}>Created Date :</Text>
        <Text style={userDetailStyles.infoValue}></Text>
      </View>
      <View style={userDetailStyles.infoRow}>
        <Text style={userDetailStyles.infoLabel}>Status :</Text>
        <Text style={userDetailStyles.infoValue}></Text>
      </View>
    </ScrollView>
  );

  const renderOrders = () => (
    <ScrollView style={userDetailStyles.content}>
      <Text style={userDetailStyles.sectionTitle}>Order Information</Text>
      <View style={userDetailStyles.orderInfoRow}>
        <Text style={userDetailStyles.orderLabel}>Total Orders :</Text>
        <Text style={userDetailStyles.orderValue}></Text>
      </View>
      <View style={userDetailStyles.orderInfoRow}>
        <Text style={userDetailStyles.orderLabel}>Total Spent :</Text>
        <Text style={userDetailStyles.orderValue}></Text>
      </View>
      
      <View style={userDetailStyles.statusBreakdown}>
        <Text style={userDetailStyles.statusLabel}>Order Status Breakdown :</Text>
        <View style={userDetailStyles.statusButtons}>
          <TouchableOpacity style={userDetailStyles.statusButton}>
            <Text style={userDetailStyles.statusButtonText}>Delivered</Text>
          </TouchableOpacity>
          <TouchableOpacity style={userDetailStyles.statusButton}>
            <Text style={userDetailStyles.statusButtonText}>Delivered</Text>
          </TouchableOpacity>
          <TouchableOpacity style={userDetailStyles.statusButton}>
            <Text style={userDetailStyles.statusButtonText}>Returned</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const renderActions = () => (
    <ScrollView style={userDetailStyles.content}>
      <Text style={userDetailStyles.sectionTitle}>Admin Actions</Text>
      
      <View style={userDetailStyles.actionSection}>
        <Text style={userDetailStyles.statusLabel}>Status Control</Text>
        <View style={userDetailStyles.actionButtons}>
          <TouchableOpacity style={userDetailStyles.actionButton}>
            <Text style={userDetailStyles.actionButtonText}>Activate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={userDetailStyles.actionButton}>
            <Text style={userDetailStyles.actionButtonText}>Deactivate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={userDetailStyles.actionButton}>
            <Text style={userDetailStyles.actionButtonText}>Ban</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={userDetailStyles.actionSection}>
        <Text style={userDetailStyles.statusLabel}>Security Actions</Text>
        <View style={userDetailStyles.actionButtons}>
          <TouchableOpacity style={userDetailStyles.actionButton}>
            <Text style={userDetailStyles.actionButtonText}>Reset Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={userDetailStyles.actionButton}>
            <Text style={userDetailStyles.actionButtonText}>Forced Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={userDetailStyles.actionSection}>
        <Text style={userDetailStyles.statusLabel}>Export & Reports</Text>
        <View style={userDetailStyles.actionButtons}>
          <TouchableOpacity style={userDetailStyles.actionButton}>
            <Text style={userDetailStyles.actionButtonText}>Export Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={userDetailStyles.actionButton}>
            <Text style={userDetailStyles.actionButtonText}>Export Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const renderReview = () => (
    <ScrollView style={userDetailStyles.content}>
      <Text style={userDetailStyles.sectionTitle}>Reviews</Text>
      <Text style={userDetailStyles.reviewText}>Number of Reviews : 0</Text>
    </ScrollView>
  );

  return (
    <View style={userDetailStyles.container}>
      <View style={userDetailStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={userDetailStyles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={userDetailStyles.headerTitle}>Users</Text>
        <TouchableOpacity>
          <Text style={userDetailStyles.downloadIcon}>⬇</Text>
        </TouchableOpacity>
      </View>

      <View style={userDetailStyles.userNameCard}>
        <Text style={userDetailStyles.userName}>Pawan Dubeys Profile</Text>
      </View>

      <View style={userDetailStyles.tabContainer}>
        <TouchableOpacity
          style={[userDetailStyles.tab, activeTab === 'General Info' && userDetailStyles.activeTab]}
          onPress={() => setActiveTab('General Info')}
        >
          <Text style={[userDetailStyles.tabText, activeTab === 'General Info' && userDetailStyles.activeTabText]}>
            General Info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[userDetailStyles.tab, activeTab === 'Orders' && userDetailStyles.activeTab]}
          onPress={() => setActiveTab('Orders')}
        >
          <Text style={[userDetailStyles.tabText, activeTab === 'Orders' && userDetailStyles.activeTabText]}>
            Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[userDetailStyles.tab, activeTab === 'Actions' && userDetailStyles.activeTab]}
          onPress={() => setActiveTab('Actions')}
        >
          <Text style={[userDetailStyles.tabText, activeTab === 'Actions' && userDetailStyles.activeTabText]}>
            Actions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[userDetailStyles.tab, activeTab === 'Review' && userDetailStyles.activeTab]}
          onPress={() => setActiveTab('Review')}
        >
          <Text style={[userDetailStyles.tabText, activeTab === 'Review' && userDetailStyles.activeTabText]}>
            Review
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'General Info' && renderGeneralInfo()}
      {activeTab === 'Orders' && renderOrders()}
      {activeTab === 'Actions' && renderActions()}
      {activeTab === 'Review' && renderReview()}
    </View>
  );
};

export default UserDetailScreen;
