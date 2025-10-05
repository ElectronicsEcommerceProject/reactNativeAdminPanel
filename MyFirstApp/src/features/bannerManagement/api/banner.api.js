import axiosConfig from '../../../shared/api/axiosConfig.api';

export const getBanners = async () => {
  const response = await axiosConfig.get('/banners');
  return response.data;
};

export const createBanner = async (bannerData) => {
  const response = await axiosConfig.post('/banners', bannerData);
  return response.data;
};

export const deleteBanner = async (bannerId) => {
  const response = await axiosConfig.delete(`/banners/${bannerId}`);
  return response.data;
};
