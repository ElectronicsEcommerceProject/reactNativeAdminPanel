import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../config/colors.config';

const LowStockTabScreen = ({ navigation }) => {
  const [products] = useState([
    { id: 1, name: 'Wireless Headphones', sku: 'WH-001', stock: 5, minStock: 20, category: 'Electronics' },
    { id: 2, name: 'Smart Watch', sku: 'SW-002', stock: 3, minStock: 15, category: 'Electronics' },
    { id: 3, name: 'Laptop Bag', sku: 'LB-003', stock: 8, minStock: 25, category: 'Accessories' },
    { id: 4, name: 'USB Cable', sku: 'UC-004', stock: 12, minStock: 50, category: 'Accessories' },
    { id: 5, name: 'Phone Case', sku: 'PC-005', stock: 7, minStock: 30, category: 'Accessories' },
    { id: 6, name: 'Power Bank', sku: 'PB-006', stock: 4, minStock: 20, category: 'Electronics' },
    { id: 7, name: 'Screen Protector', sku: 'SP-007', stock: 15, minStock: 40, category: 'Accessories' },
    { id: 8, name: 'Bluetooth Speaker', sku: 'BS-008', stock: 2, minStock: 10, category: 'Electronics' },
  ]);

  const getStockLevel = (stock, minStock) => {
    const percentage = (stock / minStock) * 100;
    if (percentage <= 25) return { level: 'Critical', color: '#F44336' };
    if (percentage <= 50) return { level: 'Low', color: '#FF9800' };
    return { level: 'Warning', color: '#FFC107' };
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Low Stock Alert</Text>
        <Text style={styles.headerSubtitle}>{products.length} items need attention</Text>
      </View>

      {/* Products List */}
      <ScrollView style={styles.productsList} showsVerticalScrollIndicator={false}>
        {products.map((product) => {
          const stockInfo = getStockLevel(product.stock, product.minStock);
          return (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductList')}
            >
              <View style={styles.productHeader}>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productSku}>SKU: {product.sku}</Text>
                  <Text style={styles.productCategory}>{product.category}</Text>
                </View>
                
                <View style={[styles.stockBadge, { backgroundColor: stockInfo.color + '20' }]}>
                  <Text style={[styles.stockLevel, { color: stockInfo.color }]}>
                    {stockInfo.level}
                  </Text>
                </View>
              </View>
              
              <View style={styles.stockInfo}>
                <View style={styles.stockRow}>
                  <Text style={styles.stockLabel}>Current Stock:</Text>
                  <Text style={[styles.stockValue, { color: stockInfo.color }]}>
                    {product.stock} units
                  </Text>
                </View>
                <View style={styles.stockRow}>
                  <Text style={styles.stockLabel}>Minimum Required:</Text>
                  <Text style={styles.stockValue}>{product.minStock} units</Text>
                </View>
              </View>

              {/* Progress Bar */}
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBarBackground}>
                  <View 
                    style={[
                      styles.progressBarFill, 
                      { 
                        width: `${Math.min((product.stock / product.minStock) * 100, 100)}%`,
                        backgroundColor: stockInfo.color 
                      }
                    ]} 
                  />
                </View>
                <Text style={styles.progressText}>
                  {Math.round((product.stock / product.minStock) * 100)}%
                </Text>
              </View>

              <TouchableOpacity style={styles.reorderButton}>
                <Text style={styles.reorderButtonText}>Reorder Now</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#F44336',
    marginTop: 5,
    fontWeight: '500',
  },
  productsList: {
    flex: 1,
    padding: 15,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productSku: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  productCategory: {
    fontSize: 12,
    color: '#999',
  },
  stockBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  stockLevel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  stockInfo: {
    marginBottom: 12,
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  stockLabel: {
    fontSize: 14,
    color: '#666',
  },
  stockValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 10,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    width: 40,
    textAlign: 'right',
  },
  reorderButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  reorderButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LowStockTabScreen;
