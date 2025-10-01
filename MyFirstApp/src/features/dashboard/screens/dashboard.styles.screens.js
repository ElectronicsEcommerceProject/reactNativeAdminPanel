import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Home Tab Styles
export const homeTabStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    paddingTop: '3%',
    paddingBottom: '2%',
    backgroundColor: '#FFFFFF',
  },
  menuButton: {
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3%',
  },
  menuIcon: {
    fontSize: width * 0.06,
    color: '#333',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: '3%',
    height: width * 0.1,
  },
  searchIcon: {
    fontSize: width * 0.04,
    marginRight: '2%',
  },
  searchInput: {
    flex: 1,
    fontSize: width * 0.035,
    color: '#333',
  },
  header: {
    padding: '5%',
    paddingTop: '2%',
  },
  greeting: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  dashboardCard: {
    backgroundColor: '#1E3A5F',
    marginHorizontal: '5%',
    marginTop: '2%',
    padding: '5%',
    borderRadius: 15,
    minHeight: height * 0.15,
  },
  dashboardTitle: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '3%',
  },
  revenueSection: {
    marginTop: '2%',
  },
  revenueLabel: {
    fontSize: width * 0.04,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  revenueAmount: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: '1%',
  },
  sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: '4%',
  },
  managementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '2%',
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  managementCard: {
    backgroundColor: '#FFFFFF',
    width: '47%',
    margin: '1%',
    padding: '5%',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: height * 0.15,
    justifyContent: 'center',
  },
  iconContainer: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },
  icon: {
    fontSize: width * 0.06,
  },
  managementTitle: {
    fontSize: width * 0.032,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: width * 0.045,
  },
});

// Recent Orders Tab Styles
export const recentOrdersTabStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A5F',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E3A5F',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    paddingTop: '5%',
  },
  backButton: {
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: width * 0.07,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  topHeaderTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },
  addButton: {
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: width * 0.08,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: '4%',
    marginVertical: '3%',
    paddingHorizontal: '3%',
    borderRadius: 25,
    height: width * 0.12,
  },
  searchIcon: {
    fontSize: width * 0.045,
    marginRight: '2%',
  },
  searchInput: {
    flex: 1,
    fontSize: width * 0.035,
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: '4%',
    marginBottom: '3%',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: '1%',
  },
  tab: {
    flex: 1,
    paddingVertical: '3%',
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#4A5FD9',
  },
  tabText: {
    fontSize: width * 0.038,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  ordersGrid: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: '4%',
  },
  ordersGridContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '2%',
    paddingBottom: '5%',
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    width: '47%',
    margin: '1.5%',
    padding: '4%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderLabel: {
    fontSize: width * 0.032,
    color: '#666',
    marginTop: '2%',
  },
  orderId: {
    fontSize: width * 0.03,
    color: '#333',
    fontWeight: '500',
    marginBottom: '1%',
  },
  orderType: {
    fontSize: width * 0.03,
    color: '#333',
    fontWeight: '500',
    marginBottom: '1%',
  },
  orderDate: {
    fontSize: width * 0.03,
    color: '#333',
    fontWeight: '500',
    marginBottom: '1%',
  },
  orderStatus: {
    fontSize: width * 0.03,
    fontWeight: '600',
    marginBottom: '1%',
  },
  noResultsContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '20%',
  },
  noResultsText: {
    fontSize: width * 0.04,
    color: '#666',
    textAlign: 'center',
  },
});

// Low Stock Tab Styles
export const lowStockTabStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: '5%',
    paddingTop: '3%',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuButton: {
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3%',
  },
  menuIcon: {
    fontSize: width * 0.06,
    color: '#333',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: width * 0.035,
    color: '#F44336',
    marginTop: '1%',
    fontWeight: '500',
  },
  productsList: {
    flex: 1,
    padding: '4%',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: '4%',
    marginBottom: '3%',
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
    marginBottom: '3%',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1%',
  },
  productSku: {
    fontSize: width * 0.032,
    color: '#666',
    marginBottom: '0.5%',
  },
  productCategory: {
    fontSize: width * 0.03,
    color: '#999',
  },
  stockBadge: {
    paddingHorizontal: '3%',
    paddingVertical: '1.5%',
    borderRadius: 20,
  },
  stockLevel: {
    fontSize: width * 0.03,
    fontWeight: 'bold',
  },
  stockInfo: {
    marginBottom: '3%',
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1.5%',
  },
  stockLabel: {
    fontSize: width * 0.035,
    color: '#666',
  },
  stockValue: {
    fontSize: width * 0.035,
    fontWeight: '600',
    color: '#333',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: '2%',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: width * 0.03,
    fontWeight: '600',
    color: '#666',
    width: '10%',
    textAlign: 'right',
  },
  reorderButton: {
    backgroundColor: '#007AFF',
    paddingVertical: '2.5%',
    borderRadius: 8,
    alignItems: 'center',
  },
  reorderButtonText: {
    color: '#FFFFFF',
    fontSize: width * 0.035,
    fontWeight: '600',
  },
});

// Dashboard Tabs Navigation Styles
export const dashboardTabsStyles = StyleSheet.create({
  tabBar: {
    height: height * 0.09,
    paddingBottom: '2%',
    paddingTop: '2%',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  iconWrapperActive: {
    backgroundColor: '#007AFF',
  },
  icon: {
    fontSize: width * 0.05,
  },
  iconActive: {
    fontSize: width * 0.05,
  },
  label: {
    fontSize: width * 0.024,
    marginTop: '1%',
    color: '#999',
    fontWeight: '500',
  },
  labelActive: {
    color: '#007AFF',
    fontWeight: '600',
  },
});