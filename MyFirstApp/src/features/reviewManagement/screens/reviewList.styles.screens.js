import { StyleSheet } from 'react-native';

export const reviewListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3a5f',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#1e3a5f',
  },
  backIcon: {
    fontSize: 24,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
    marginLeft: 16,
  },
  notificationIcon: {
    fontSize: 20,
    color: '#fff',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchPlaceholder: {
    fontSize: 14,
    color: '#999',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 8,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#e8f4ff',
  },
  tabText: {
    fontSize: 11,
    color: '#666',
  },
  activeTabText: {
    color: '#1e3a5f',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  reviewsList: {
    padding: 16,
  },
  reviewCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  reviewHeader: {
    marginBottom: 8,
  },
  reviewProduct: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  reviewerName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  reviewRating: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  reviewDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  reviewStatus: {
    fontSize: 12,
    color: '#4CAF50',
  },
  reviewActions: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  flagButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
  },
  flagButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
  },
  deleteButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  analyticsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  analyticsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  barChartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 150,
    paddingBottom: 10,
  },
  barWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 40,
    borderRadius: 4,
    marginBottom: 8,
  },
  barLabel: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  pieChartContainer: {
    alignItems: 'center',
  },
  pieChart: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 16,
  },
  pieSlice: {
    position: 'absolute',
    width: 150,
    height: 150,
  },
  pieSlice1: {
    backgroundColor: '#FFC107',
    borderRadius: 75,
  },
  pieSlice2: {
    backgroundColor: '#F44336',
    width: 75,
    height: 150,
    borderTopRightRadius: 75,
    borderBottomRightRadius: 75,
    right: 0,
  },
  pieLegend: {
    alignItems: 'center',
  },
  pieLegendText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  topProduct: {
    fontSize: 14,
    color: '#333',
  },
});
