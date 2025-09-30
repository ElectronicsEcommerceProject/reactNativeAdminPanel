export const formatPrice = (price) => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN');
};

export const formatDateTime = (date) => {
  return new Date(date).toLocaleString('en-IN');
};