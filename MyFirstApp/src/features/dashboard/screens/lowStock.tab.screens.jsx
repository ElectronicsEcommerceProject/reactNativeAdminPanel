import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../config/colors.config';
import { lowStockTabStyles } from './dashboard.styles.screens';

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
    <View style={lowStockTabStyles.container}>
      {/* Header */}
      <View style={lowStockTabStyles.header}>
        <Text style={lowStockTabStyles.headerTitle}>Low Stock Alert</Text>
        <Text style={lowStockTabStyles.headerSubtitle}>{products.length} items need attention</Text>
      </View>

      {/* Products List */}
      <ScrollView style={lowStockTabStyles.productsList} showsVerticalScrollIndicator={false}>
        {products.map((product) => {
          const stockInfo = getStockLevel(product.stock, product.minStock);
          return (
            <TouchableOpacity
              key={product.id}
              style={lowStockTabStyles.productCard}
              onPress={() => navigation.navigate('ProductList')}
            >
              <View style={lowStockTabStyles.productHeader}>
                <View style={lowStockTabStyles.productInfo}>
                  <Text style={lowStockTabStyles.productName}>{product.name}</Text>
                  <Text style={lowStockTabStyles.productSku}>SKU: {product.sku}</Text>
                  <Text style={lowStockTabStyles.productCategory}>{product.category}</Text>
                </View>
                
                <View style={[lowStockTabStyles.stockBadge, { backgroundColor: stockInfo.color + '20' }]}>
                  <Text style={[lowStockTabStyles.stockLevel, { color: stockInfo.color }]}>
                    {stockInfo.level}
                  </Text>
                </View>
              </View>
              
              <View style={lowStockTabStyles.stockInfo}>
                <View style={lowStockTabStyles.stockRow}>
                  <Text style={lowStockTabStyles.stockLabel}>Current Stock:</Text>
                  <Text style={[lowStockTabStyles.stockValue, { color: stockInfo.color }]}>
                    {product.stock} units
                  </Text>
                </View>
                <View style={lowStockTabStyles.stockRow}>
                  <Text style={lowStockTabStyles.stockLabel}>Minimum Required:</Text>
                  <Text style={lowStockTabStyles.stockValue}>{product.minStock} units</Text>
                </View>
              </View>

              {/* Progress Bar */}
              <View style={lowStockTabStyles.progressBarContainer}>
                <View style={lowStockTabStyles.progressBarBackground}>
                  <View 
                    style={[
                      lowStockTabStyles.progressBarFill, 
                      { 
                        width: `${Math.min((product.stock / product.minStock) * 100, 100)}%`,
                        backgroundColor: stockInfo.color 
                      }
                    ]} 
                  />
                </View>
                <Text style={lowStockTabStyles.progressText}>
                  {Math.round((product.stock / product.minStock) * 100)}%
                </Text>
              </View>

              <TouchableOpacity style={lowStockTabStyles.reorderButton}>
                <Text style={lowStockTabStyles.reorderButtonText}>Reorder Now</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};



export default LowStockTabScreen;
