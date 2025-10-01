// API endpoint URLs - centralized URL management for all API calls
// Auth endpoints, product endpoints, order endpoints, user management URLs

export const API_URLS = {
  // Authentication endpoints
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh',
  },
  
  // Product management endpoints
  PRODUCTS: {
    GET_ALL: '/products',
    GET_BY_ID: '/products/:id',
    CREATE: '/products',
    UPDATE: '/products/:id',
    DELETE: '/products/:id',
  },
  
  // Order management endpoints
  ORDERS: {
    GET_ALL: '/orders',
    GET_BY_ID: '/orders/:id',
    UPDATE_STATUS: '/orders/:id/status',
  },
  
  // User management endpoints
  USERS: {
    GET_ALL: '/users',
    GET_BY_ID: '/users/:id',
    BLOCK_USER: '/users/:id/block',
    UNBLOCK_USER: '/users/:id/unblock',
  },
  
  // Category management endpoints
  CATEGORIES: {
    GET_ALL: '/categories',
    CREATE: '/categories',
    UPDATE: '/categories/:id',
    DELETE: '/categories/:id',
  },
  
  // Banner management endpoints
  BANNERS: {
    GET_ALL: '/banners',
    CREATE: '/banners',
    UPDATE: '/banners/:id',
    DELETE: '/banners/:id',
  },
  
  // Coupon management endpoints
  COUPONS: {
    GET_ALL: '/coupons',
    CREATE: '/coupons',
    UPDATE: '/coupons/:id',
    DELETE: '/coupons/:id',
  },
  
  // Notification endpoints
  NOTIFICATIONS: {
    GET_ALL: '/notifications',
    SEND: '/notifications/send',
  },
};