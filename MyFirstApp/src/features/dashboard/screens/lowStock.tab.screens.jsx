import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { COLORS } from '../../../config/colors.config';
import { lowStockTabStyles } from './dashboard.styles.screens';
import CustomDrawer from '../components/CustomDrawer.components';

const LowStockTabScreen = ({ navigation }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [products] = useState([
    { 
      id: 1, 
      name: '44W Flash Charge', 
      variant: 'vivo, White Variant',
      stock: 50, 
      remaining: 2,
      image: null
    },
    { 
      id: 2, 
      name: 'Wireless Headphones', 
      variant: 'Sony, Black',
      stock: 30, 
      remaining: 5,
      image: null
    },
    { 
      id: 3, 
      name: 'Smart Watch', 
      variant: 'Samsung, Silver',
      stock: 25, 
      remaining: 3,
      image: null
    },
  ]);

  const getStockLevel = (stock, minStock) => {
    const percentage = (stock / minStock) * 100;
    if (percentage <= 25) return { level: 'Critical', color: '#F44336' };
    if (percentage <= 50) return { level: 'Low', color: '#FF9800' };
    return { level: 'Warning', color: '#FFC107' };
  };

  // Filter products based on search query
  const filterProducts = (products) => {
    if (!searchQuery.trim()) {
      return products;
    }

    const query = searchQuery.toLowerCase().trim();
    
    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.variant,
        product.stock.toString(),
        product.remaining.toString()
      ].join(' ').toLowerCase();

      return searchableText.includes(query);
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <CustomDrawer 
        visible={drawerVisible} 
        onClose={() => setDrawerVisible(false)} 
        navigation={navigation}
      />
      
      <View style={lowStockTabStyles.container}>
        {/* Header with Back Button and Add Button */}
        <View style={lowStockTabStyles.topHeader}>
          <TouchableOpacity 
            style={lowStockTabStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={lowStockTabStyles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={lowStockTabStyles.topHeaderTitle}>Low Stock Alert</Text>
          <TouchableOpacity style={lowStockTabStyles.addButton}>
            <Text style={lowStockTabStyles.addIcon}>⊕</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={lowStockTabStyles.searchContainer}>
          <Text style={lowStockTabStyles.searchIcon}>🔍</Text>
          <TextInput
            style={lowStockTabStyles.searchInput}
            placeholder="Search for recent Orders"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Products List */}
        <ScrollView 
          style={lowStockTabStyles.productsList} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={lowStockTabStyles.productsListContent}
        >
          {filteredProducts.length === 0 ? (
            <View style={lowStockTabStyles.noResultsContainer}>
              <Text style={lowStockTabStyles.noResultsText}>
                No products found matching "{searchQuery}"
              </Text>
            </View>
          ) : (
            filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={lowStockTabStyles.productCard}
                onPress={() => navigation.navigate('ProductList')}
              >
                <View style={lowStockTabStyles.productCardContent}>
                  {/* Product Image Placeholder */}
                  <View style={lowStockTabStyles.productImageContainer}>
                    <View style={lowStockTabStyles.productImagePlaceholder}>
                      <Text style={lowStockTabStyles.productImageIcon}>📦</Text>
                    </View>
                  </View>

                  {/* Product Details */}
                  <View style={lowStockTabStyles.productDetails}>
                    <Text style={lowStockTabStyles.productLabel}>Product: </Text>
                    <Text style={lowStockTabStyles.productName}>{product.name}</Text>
                    
                    <Text style={lowStockTabStyles.productVariant}>{product.variant}</Text>
                    
                    <Text style={lowStockTabStyles.productLabel}>Stock: </Text>
                    <Text style={lowStockTabStyles.productStock}>{product.stock}</Text>
                    
                    <Text style={lowStockTabStyles.productLabel}>Remaining: </Text>
                    <Text style={lowStockTabStyles.productRemaining}>{product.remaining}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
    </>
  );
};



export default LowStockTabScreen;
