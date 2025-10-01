import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './CustomDrawer.styles.components.js';

const CustomDrawer = ({ visible, onClose, navigation }) => {
  const menuItems = [
    { id: 1, title: 'Banner Management', icon: '⚙️', screen: 'BannerList', color: '#007AFF' },
    { id: 2, title: 'Coupons & Offers', icon: '⚙️', screen: 'CouponList', color: '#007AFF' },
    { id: 3, title: 'Notifications', icon: '🔔', screen: 'Notifications', color: '#007AFF' },
    { id: 4, title: 'Log out', icon: '🚪', action: 'logout', color: '#007AFF' },
  ];

  const handleMenuPress = (item) => {
    if (item.action === 'logout') {
      // Handle logout
      console.log('Logging out...');
      onClose();
      // Add your logout logic here
    } else if (item.screen) {
      navigation.navigate(item.screen);
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.overlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <TouchableOpacity 
          activeOpacity={1} 
          style={styles.drawerContainer}
          onPress={(e) => e.stopPropagation()}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.profileIconContainer}>
              <Text style={styles.profileIcon}>👤</Text>
            </View>
            <Text style={styles.adminText}>Admin</Text>
          </View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={() => handleMenuPress(item)}
              >
                <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
                  <Text style={styles.menuIcon}>{item.icon}</Text>
                </View>
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomDrawer;