import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { userListStyles } from './userList.styles.screens';

const UserListScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Date joined');
  const [selectedStatus, setSelectedStatus] = useState('Filter by status');
  const [selectedRole, setSelectedRole] = useState('Filter by role');

  const sortOptions = ['Date joined', 'Order count', 'Revenue'];
  const statusOptions = ['Active', 'Inactive', 'Banned', 'Pending'];
  const roleOptions = ['Customer', 'Retailer'];

  const topBuyers = [
    { name: 'Gaurav Chaudhary', orders: 10, amount: '₹2,60,604.3' },
    { name: 'Priya Sharma', orders: 8, amount: '₹1,85,320.5' },
    { name: 'Rahul Verma', orders: 12, amount: '₹1,52,890.0' },
    { name: 'Anjali Singh', orders: 6, amount: '₹1,25,450.8' },
    { name: 'Vikram Patel', orders: 9, amount: '₹98,760.2' },
  ];

  const topSellers = [
    { name: 'Tech Store Mumbai', orders: 45, amount: '₹5,60,200.0' },
    { name: 'Electronics Hub Delhi', orders: 38, amount: '₹4,85,300.5' },
    { name: 'Gadget World Bangalore', orders: 32, amount: '₹3,92,150.0' },
    { name: 'Mobile Zone Pune', orders: 28, amount: '₹3,45,680.3' },
    { name: 'Smart Devices Chennai', orders: 25, amount: '₹2,98,420.7' },
  ];

  const renderDashboard = () => (
    <ScrollView style={userListStyles.content}>
      <View style={userListStyles.statCard}>
        <View style={userListStyles.statRow}>
          <View style={userListStyles.statHalf}>
            <Text style={userListStyles.statLabel}>Avg Revenue/Users</Text>
            <Text style={userListStyles.statValue}>₹ 28,860</Text>
          </View>
          <View style={userListStyles.statHalfRight}>
            <Text style={userListStyles.statLabel}>Total Users</Text>
            <Text style={userListStyles.statValue}>23</Text>
          </View>
        </View>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Active Customers</Text>
        <Text style={userListStyles.statValue}>14</Text>
        <Text style={userListStyles.statSubtext}>last activity</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Active Retailers</Text>
        <Text style={userListStyles.statValue}>7</Text>
        <Text style={userListStyles.statSubtext}>Verified partners</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Active Users</Text>
        <Text style={userListStyles.statValue}>22</Text>
        <Text style={userListStyles.statSubtext}>Updated</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Pending Retailers</Text>
        <Text style={userListStyles.statValue}>1</Text>
        <Text style={userListStyles.statSubtext}>Awaiting Approve</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Suspended Users</Text>
        <Text style={userListStyles.statValue}>0</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>New Signups</Text>
        <Text style={userListStyles.statValue}>0</Text>
        <Text style={userListStyles.statSubtext}>Recent Registration of Last 7 Days</Text>
      </View>

      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Avg Order/Users</Text>
        <Text style={userListStyles.statValue}>1.9</Text>
        <Text style={userListStyles.statSubtext}>Current Average</Text>
      </View>

      <View style={userListStyles.buyerCard}>
        <Text style={userListStyles.buyerHeader}>Top Buyers (by Total Spend)</Text>
        {topBuyers.map((buyer, index) => (
          <View key={index} style={userListStyles.buyerRow}>
            <View style={userListStyles.buyerInfo}>
              <Text style={userListStyles.buyerName}>{buyer.name}</Text>
              <Text style={userListStyles.buyerOrders}>{buyer.orders} orders</Text>
            </View>
            <Text style={userListStyles.buyerAmount}>{buyer.amount}</Text>
          </View>
        ))}
      </View>

      <View style={userListStyles.buyerCard}>
        <Text style={userListStyles.buyerHeader}>Top Sellers (by Volume Order)</Text>
        {topSellers.map((seller, index) => (
          <View key={index} style={userListStyles.buyerRow}>
            <View style={userListStyles.buyerInfo}>
              <Text style={userListStyles.buyerName}>{seller.name}</Text>
              <Text style={userListStyles.buyerOrders}>{seller.orders} orders</Text>
            </View>
            <Text style={userListStyles.buyerAmount}>{seller.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderUsers = () => {
    const users = [
      { name: 'Rohit Kumar', email: 'rohit3339@gmail.com', orders: 0, amount: '₹1800.00', status: 'Active', role: 'Customer' },
      { name: 'Rohit Kumar', email: 'rohit3339@gmail.com', orders: 0, amount: '₹1800.00', status: 'Active', role: 'Customer' },
      { name: 'Rohit Kumar', email: 'rohit3339@gmail.com', orders: 0, amount: '₹1800.00', status: 'Active', role: 'Customer' },
      { name: 'Rohit Kumar', email: 'rohit3339@gmail.com', orders: 0, amount: '₹1800.00', status: 'Active', role: 'Customer' },
      { name: 'Rohit Kumar', email: 'rohit3339@gmail.com', orders: 0, amount: '₹1800.00', status: 'Active', role: 'Customer' },
    ];

    return (
      <View style={userListStyles.content}>
        <View style={userListStyles.filterRow}>
          <TouchableOpacity 
            style={userListStyles.filterDropdown}
            onPress={() => setShowSortDropdown(!showSortDropdown)}
          >
            <Text style={userListStyles.filterText}>{selectedSort}</Text>
            <Text style={userListStyles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={userListStyles.filterDropdown}
            onPress={() => setShowStatusDropdown(!showStatusDropdown)}
          >
            <Text style={userListStyles.filterText}>{selectedStatus}</Text>
            <Text style={userListStyles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={userListStyles.filterDropdown}
            onPress={() => setShowRoleDropdown(!showRoleDropdown)}
          >
            <Text style={userListStyles.filterText}>{selectedRole}</Text>
            <Text style={userListStyles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
        </View>

        <View style={userListStyles.searchBox}>
          <Text style={userListStyles.searchIcon}>🔍</Text>
          <Text style={userListStyles.searchPlaceholder}>Search by Name, Email</Text>
        </View>

        <ScrollView style={userListStyles.usersList}>
          {users.map((user, index) => (
            <TouchableOpacity 
              key={index} 
              style={userListStyles.userCard}
              onPress={() => navigation.navigate('UserDetail', { user })}
            >
              <View style={userListStyles.userHeader}>
                <View>
                  <Text style={userListStyles.userName}>{user.name}</Text>
                  <Text style={userListStyles.userEmail}>{user.email}</Text>
                </View>
                <Text style={userListStyles.userRole}>{user.role}</Text>
              </View>
              <View style={userListStyles.userFooter}>
                <Text style={userListStyles.userOrders}>{user.orders} orders</Text>
                <Text style={userListStyles.userAmount}>{user.amount}</Text>
                <Text style={userListStyles.userStatus}>{user.status}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  const renderRetailers = () => (
    <ScrollView style={userListStyles.content}>
      <View style={userListStyles.statCard}>
        <Text style={userListStyles.statLabel}>Total Retailers</Text>
        <Text style={userListStyles.statValue}>8</Text>
      </View>
    </ScrollView>
  );

  return (
    <View style={userListStyles.container}>
      <View style={userListStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={userListStyles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={userListStyles.headerTitle}>User Management</Text>
        <TouchableOpacity>
          <Text style={userListStyles.downloadIcon}>⬇</Text>
        </TouchableOpacity>
      </View>

      <View style={userListStyles.tabContainer}>
        <TouchableOpacity
          style={[userListStyles.tab, activeTab === 'Dashboard' && userListStyles.activeTab]}
          onPress={() => setActiveTab('Dashboard')}
        >
          <Text style={[userListStyles.tabText, activeTab === 'Dashboard' && userListStyles.activeTabText]}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[userListStyles.tab, activeTab === 'User Management' && userListStyles.activeTab]}
          onPress={() => setActiveTab('User Management')}
        >
          <Text style={[userListStyles.tabText, activeTab === 'User Management' && userListStyles.activeTabText]}>
            User Management
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[userListStyles.tab, activeTab === 'Retailer Approval' && userListStyles.activeTab]}
          onPress={() => setActiveTab('Retailer Approval')}
        >
          <Text style={[userListStyles.tabText, activeTab === 'Retailer Approval' && userListStyles.activeTabText]}>
            Retailer Approval
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Dashboard' && renderDashboard()}
      {activeTab === 'User Management' && renderUsers()}
      {activeTab === 'Retailer Approval' && renderRetailers()}

      <Modal visible={showSortDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={userListStyles.modalOverlay}
          onPress={() => setShowSortDropdown(false)}
        >
          <View style={userListStyles.dropdownMenu}>
            {sortOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={userListStyles.dropdownItem}
                onPress={() => {
                  setSelectedSort(option);
                  setShowSortDropdown(false);
                }}
              >
                <Text style={userListStyles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={showStatusDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={userListStyles.modalOverlay}
          onPress={() => setShowStatusDropdown(false)}
        >
          <View style={userListStyles.dropdownMenu}>
            {statusOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={userListStyles.dropdownItem}
                onPress={() => {
                  setSelectedStatus(option);
                  setShowStatusDropdown(false);
                }}
              >
                <Text style={userListStyles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={showRoleDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={userListStyles.modalOverlay}
          onPress={() => setShowRoleDropdown(false)}
        >
          <View style={userListStyles.dropdownMenu}>
            {roleOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={userListStyles.dropdownItem}
                onPress={() => {
                  setSelectedRole(option);
                  setShowRoleDropdown(false);
                }}
              >
                <Text style={userListStyles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default UserListScreen;
