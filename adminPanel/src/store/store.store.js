import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth.slice.features';
import productSlice from './features/product.slice.features';
import orderSlice from './features/order.slice.features';
import userSlice from './features/user.slice.features';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    order: orderSlice,
    user: userSlice,
  },
});