import axiosConfig from '../../../shared/api/axiosConfig.api';

export const getProducts = async () => {
  const response = await axiosConfig.get('/products');
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await axiosConfig.post('/products', productData);
  return response.data;
};

export const updateProduct = async (productId, productData) => {
  const response = await axiosConfig.put(`/products/${productId}`, productData);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await axiosConfig.delete(`/products/${productId}`);
  return response.data;
};
