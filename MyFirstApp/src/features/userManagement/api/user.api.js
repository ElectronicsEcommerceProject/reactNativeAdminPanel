import axiosConfig from '../../../shared/api/axiosConfig.api';

export const getUsers = async () => {
  const response = await axiosConfig.get('/users');
  return response.data;
};

export const blockUser = async (userId) => {
  const response = await axiosConfig.patch(`/users/${userId}/block`);
  return response.data;
};

export const getUserDetails = async (userId) => {
  const response = await axiosConfig.get(`/users/${userId}`);
  return response.data;
};
