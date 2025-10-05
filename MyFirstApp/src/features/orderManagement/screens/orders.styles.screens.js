import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const orderListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A5F',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 40,
  },
  backIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  addIcon: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    minWidth: 70,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
  exportContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  exportButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  exportButtonPDF: {
    backgroundColor: '#4A90E2',
  },
  exportButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 20,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 8,
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#000000',
  },
  dropdownIcon: {
    fontSize: 10,
    color: '#666666',
  },
  ordersList: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderId: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  statusBadge: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    color: '#666666',
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  customerEmail: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  orderFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  orderDate: {
    fontSize: 12,
    color: '#666666',
  },
  viewButton: {
    padding: 4,
  },
  viewIcon: {
    fontSize: 18,
  },
  cancelText: {
    fontSize: 14,
    color: '#FF3B30',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    minWidth: 200,
    maxHeight: 300,
  },
  dropdownItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000000',
  },
  filterModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    minWidth: 200,
    maxHeight: 300,
    padding: 16,
  },
  filterOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  filterOptionText: {
    fontSize: 16,
    color: '#000000',
  },
  clearButton: {
    marginTop: 12,
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '600',
  },
});
