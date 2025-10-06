import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { orderDetailStyles } from './orderDetail.styles.screens';

const OrderDetailScreen = ({ navigation, route }) => {
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Status');

  const statusOptions = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned'];

  return (
    <View style={orderDetailStyles.container}>
      <View style={orderDetailStyles.header}>
        <Text style={orderDetailStyles.headerTitle}>Order Details</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={orderDetailStyles.closeIcon}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={orderDetailStyles.content}>
        <Text style={orderDetailStyles.orderId}>ORD-20250904-4A40</Text>

        <View style={orderDetailStyles.section}>
          <Text style={orderDetailStyles.sectionTitle}>Customer Information</Text>
          <View style={orderDetailStyles.infoRow}>
            <Text style={orderDetailStyles.icon}>👤</Text>
            <Text style={orderDetailStyles.infoText}>Satyam Singh</Text>
          </View>
          <View style={orderDetailStyles.infoRow}>
            <Text style={orderDetailStyles.icon}>✉</Text>
            <Text style={orderDetailStyles.infoText}>satyamarthnaser@gmail.com</Text>
          </View>
          <View style={orderDetailStyles.infoRow}>
            <Text style={orderDetailStyles.icon}>📞</Text>
            <Text style={orderDetailStyles.infoText}>7870000909</Text>
          </View>
          <View style={orderDetailStyles.infoRow}>
            <Text style={orderDetailStyles.icon}>📍</Text>
            <Text style={orderDetailStyles.infoText}>SHL LMP Jharkhand, 800020</Text>
          </View>
        </View>

        <View style={orderDetailStyles.coordinatesSection}>
          <View style={orderDetailStyles.coordinatesLeft}>
            <Text style={orderDetailStyles.coordinatesTitle}>Coordinates:</Text>
            <Text style={orderDetailStyles.coordinatesText}>Latitude: 25.5977948</Text>
            <Text style={orderDetailStyles.coordinatesText}>Longitude: 95.5977639B</Text>
          </View>
          <View style={orderDetailStyles.statusContainer}>
            <Text style={orderDetailStyles.statusLabel}>Order Status</Text>
            <TouchableOpacity
              style={orderDetailStyles.statusDropdown}
              onPress={() => setShowStatusDropdown(!showStatusDropdown)}
            >
              <Text style={orderDetailStyles.statusDropdownText}>{selectedStatus}</Text>
              <Text style={orderDetailStyles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={orderDetailStyles.section}>
          <View style={orderDetailStyles.orderItemsHeader}>
            <Text style={orderDetailStyles.sectionTitle}>Order Items</Text>
            <Text style={orderDetailStyles.totalLabel}>Total</Text>
          </View>
          <Text style={orderDetailStyles.orderItemText}>Man dash charger × 2 ₹100.00</Text>
          <Text style={orderDetailStyles.totalAmount}>₹2140.00</Text>
        </View>

        <View style={orderDetailStyles.buttonContainer}>
          <TouchableOpacity style={orderDetailStyles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={orderDetailStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={orderDetailStyles.saveButton}>
            <Text style={orderDetailStyles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={showStatusDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={orderDetailStyles.modalOverlay}
          onPress={() => setShowStatusDropdown(false)}
        >
          <View style={orderDetailStyles.dropdownMenu}>
            {statusOptions.map((status, index) => (
              <TouchableOpacity
                key={index}
                style={orderDetailStyles.dropdownItem}
                onPress={() => {
                  setSelectedStatus(status);
                  setShowStatusDropdown(false);
                }}
              >
                <Text style={orderDetailStyles.dropdownItemText}>{status}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default OrderDetailScreen;
