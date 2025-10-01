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
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: '5%',
    paddingTop: '3%',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: width * 0.035,
    color: '#666',
    marginTop: '1%',
  },
  ordersList: {
    flex: 1,
    padding: '4%',
  },
  orderCard: {
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
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2%',
  },
  orderId: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  orderDate: {
    fontSize: width * 0.03,
    color: '#999',
  },
  orderBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: width * 0.037,
    color: '#333',
    marginBottom: '1%',
  },
  orderAmount: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: '3%',
    paddingVertical: '1.5%',
    borderRadius: 20,
  },
  statusText: {
    fontSize: width * 0.03,
    fontWeight: '600',
  },
});

// Low Stock Tab Styles
export const lowStockTabStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: '5%',
    paddingTop: '3%',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
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
    fontSize: width * 0.027,
    marginTop: '1%',
    color: '#999',
    fontWeight: '500',
  },
  labelActive: {
    color: '#007AFF',
    fontWeight: '600',
  },
});