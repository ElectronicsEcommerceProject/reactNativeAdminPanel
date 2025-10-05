import axiosConfig from '../../../shared/api/axiosConfig.api';

export const login = async (email, password) => {
  const response = await axiosConfig.post('/auth/login', { email, password });
  return response.data;
};

export const logout = async () => {
  const response = await axiosConfig.post('/auth/logout');
  return response.data;
};

export const refreshToken = async () => {
  const response = await axiosConfig.post('/auth/refresh-token');
  return response.data;
};
