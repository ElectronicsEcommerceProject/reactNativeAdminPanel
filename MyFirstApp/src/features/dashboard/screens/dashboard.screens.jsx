import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>150</Text>
          <Text style={styles.statLabel}>Total Orders</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statLabel}>New Users</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>$12,500</Text>
          <Text style={styles.statLabel}>Revenue</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Orders</Text>
        <View style={styles.orderItem}>
          <Text>Order #1001 - $250</Text>
        </View>
        <View style={styles.orderItem}>
          <Text>Order #1002 - $180</Text>
        </View>
        <View style={styles.orderItem}>
          <Text>Order #1003 - $320</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  orderItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default DashboardScreen;