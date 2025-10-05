import axiosConfig from './axiosConfig.api';
import { API_URLS } from '../config/url.config';

export const login = async (email, password) => {
  const response = await axiosConfig.post(API_URLS.AUTH.LOGIN, {
    email,
    password,
  });
  return response.data;
};

export const logout = async () => {
  const response = await axiosConfig.post(API_URLS.AUTH.LOGOUT);
  return response.data;
};

export const refreshToken = async () => {
  const response = await axiosConfig.post(API_URLS.AUTH.REFRESH_TOKEN);
  return response.data;
};