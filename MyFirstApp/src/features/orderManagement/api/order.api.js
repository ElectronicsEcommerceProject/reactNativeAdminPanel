import axiosConfig from '../../../shared/api/axiosConfig.api';

export const getOrders = async () => {
  const response = await axiosConfig.get('/orders');
  return response.data;
};

export const updateOrderStatus = async (orderId, status) => {
  const response = await axiosConfig.patch(`/orders/${orderId}/status`, { status });
  return response.data;
};

export const getOrderDetails = async (orderId) => {
  const response = await axiosConfig.get(`/orders/${orderId}`);
  return response.data;
};
