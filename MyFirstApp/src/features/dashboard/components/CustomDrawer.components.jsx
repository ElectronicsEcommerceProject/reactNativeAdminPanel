import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
  },
  drawerContainer: {
    width: width * 0.75,
    maxWidth: 300,
    backgroundColor: '#FFFFFF',
    height: height,
  },
  header: {
    backgroundColor: '#003D7A',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileIcon: {
    fontSize: 40,
  },
  adminText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  menuContainer: {
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default CustomDrawer;
