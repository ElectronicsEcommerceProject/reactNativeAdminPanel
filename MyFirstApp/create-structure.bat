@echo off
echo Creating microservice folder structure...

REM Shared components
echo // AppButton component > src\shared\components\common\AppButton.common.jsx
echo // AppInput component > src\shared\components\common\AppInput.common.jsx
echo // AppLoader component > src\shared\components\common\AppLoader.common.jsx
echo // Header component > src\shared\components\layout\Header.layout.jsx
echo // ScreenWrapper component > src\shared\components\layout\ScreenWrapper.layout.jsx

REM Shared config
echo export const colors = {}; > src\shared\config\colors.config.js
echo export const constants = {}; > src\shared\config\constants.config.js
echo export const typography = {}; > src\shared\config\typography.config.js

REM Shared hooks
echo export const useApi = () => {}; > src\shared\hooks\useApi.hooks.js
echo export const useDebounce = () => {}; > src\shared\hooks\useDebounce.hooks.js

REM Shared navigation
echo // AppNavigator > src\shared\navigation\AppNavigator.navigation.jsx
echo // AuthStack > src\shared\navigation\AuthStack.navigation.jsx
echo // MainDrawer > src\shared\navigation\MainDrawer.navigation.jsx

REM Shared store
echo import { configureStore } from '@reduxjs/toolkit'; > src\shared\store\store.store.js

REM Shared services
echo export const analyticsService = {}; > src\shared\services\analytics.services.js
echo export const storageService = {}; > src\shared\services\storage.services.js

REM Shared utils
echo export const formatters = {}; > src\shared\utils\formatters.utils.js
echo export const validators = {}; > src\shared\utils\validators.utils.js

REM Product Management
echo export const productAPI = {}; > src\features\productManagement\api\product.api.js
echo // ProductList screen > src\features\productManagement\screens\productList.screens.jsx
echo export const productListStyles = {}; > src\features\productManagement\screens\productList.styles.screens.js
echo // AddEditProduct screen > src\features\productManagement\screens\addEditProduct.screens.jsx
echo export const addEditProductStyles = {}; > src\features\productManagement\screens\addEditProduct.styles.screens.js
echo // ProductCard component > src\features\productManagement\components\productCard.components.jsx
echo export const productService = {}; > src\features\productManagement\services\product.services.js
echo export const productSlice = {}; > src\features\productManagement\store\product.slice.js
echo export const productTypes = {}; > src\features\productManagement\types\product.types.js

REM Order Management
echo export const orderAPI = {}; > src\features\orderManagement\api\order.api.js
echo // OrderList screen > src\features\orderManagement\screens\orderList.screens.jsx
echo export const orderStyles = {}; > src\features\orderManagement\screens\orders.styles.screens.js
echo // OrderDetail screen > src\features\orderManagement\screens\orderDetail.screens.jsx
echo export const orderDetailStyles = {}; > src\features\orderManagement\screens\orderDetail.styles.screens.js
echo // OrderCard component > src\features\orderManagement\components\orderCard.components.jsx
echo // OrderStatusChip component > src\features\orderManagement\components\orderStatusChip.components.jsx
echo export const orderService = {}; > src\features\orderManagement\services\order.services.js
echo export const orderSlice = {}; > src\features\orderManagement\store\order.slice.js
echo export const orderTypes = {}; > src\features\orderManagement\types\order.types.js

REM User Management
echo export const userAPI = {}; > src\features\userManagement\api\user.api.js
echo // UserList screen > src\features\userManagement\screens\userList.screens.jsx
echo export const userListStyles = {}; > src\features\userManagement\screens\userList.styles.screens.js
echo // UserDetail screen > src\features\userManagement\screens\userDetail.screens.jsx
echo export const userDetailStyles = {}; > src\features\userManagement\screens\userDetail.styles.screens.js
echo // UserCard component > src\features\userManagement\components\userCard.components.jsx
echo export const userService = {}; > src\features\userManagement\services\user.services.js
echo export const userSlice = {}; > src\features\userManagement\store\user.slice.js
echo export const userTypes = {}; > src\features\userManagement\types\user.types.js

REM Stock Management
echo export const stockAPI = {}; > src\features\stockManagement\api\stock.api.js
echo // StockList screen > src\features\stockManagement\screens\stockList.screens.jsx
echo export const stockListStyles = {}; > src\features\stockManagement\screens\stockList.styles.screens.js
echo // StockDetail screen > src\features\stockManagement\screens\stockDetail.screens.jsx
echo export const stockDetailStyles = {}; > src\features\stockManagement\screens\stockDetail.styles.screens.js
echo // StockCard component > src\features\stockManagement\components\stockCard.components.jsx
echo export const stockService = {}; > src\features\stockManagement\services\stock.services.js
echo export const stockSlice = {}; > src\features\stockManagement\store\stock.slice.js
echo export const stockTypes = {}; > src\features\stockManagement\types\stock.types.js

REM Banner Management
echo export const bannerAPI = {}; > src\features\bannerManagement\api\banner.api.js
echo // BannerList screen > src\features\bannerManagement\screens\bannerList.screens.jsx
echo export const bannerStyles = {}; > src\features\bannerManagement\screens\banners.styles.screens.js
echo // AddEditBanner screen > src\features\bannerManagement\screens\addEditBanner.screens.jsx
echo // BannerCard component > src\features\bannerManagement\components\bannerCard.components.jsx
echo // BannerStack navigation > src\features\bannerManagement\navigation\BannerStack.navigation.jsx
echo export const bannerService = {}; > src\features\bannerManagement\services\banner.services.js
echo export const bannerSlice = {}; > src\features\bannerManagement\store\banner.slice.js
echo export const bannerTypes = {}; > src\features\bannerManagement\types\banner.types.js

REM Review Management
echo export const reviewAPI = {}; > src\features\reviewManagement\api\review.api.js
echo // ReviewList screen > src\features\reviewManagement\screens\reviewList.screens.jsx
echo export const reviewListStyles = {}; > src\features\reviewManagement\screens\reviewList.styles.screens.js
echo // ReviewDetail screen > src\features\reviewManagement\screens\reviewDetail.screens.jsx
echo export const reviewDetailStyles = {}; > src\features\reviewManagement\screens\reviewDetail.styles.screens.js
echo // ReviewCard component > src\features\reviewManagement\components\reviewCard.components.jsx
echo export const reviewService = {}; > src\features\reviewManagement\services\review.services.js
echo export const reviewSlice = {}; > src\features\reviewManagement\store\review.slice.js
echo export const reviewTypes = {}; > src\features\reviewManagement\types\review.types.js

REM Coupons And Offers
echo export const couponAPI = {}; > src\features\couponsAndOffers\api\coupon.api.js
echo // CouponList screen > src\features\couponsAndOffers\screens\couponList.screens.jsx
echo export const couponListStyles = {}; > src\features\couponsAndOffers\screens\couponList.styles.screens.js
echo // AddEditCoupon screen > src\features\couponsAndOffers\screens\addEditCoupon.screens.jsx
echo export const addEditCouponStyles = {}; > src\features\couponsAndOffers\screens\addEditCoupon.styles.screens.js
echo // CouponCard component > src\features\couponsAndOffers\components\couponCard.components.jsx
echo export const couponService = {}; > src\features\couponsAndOffers\services\coupon.services.js
echo export const couponSlice = {}; > src\features\couponsAndOffers\store\coupon.slice.js
echo export const couponTypes = {}; > src\features\couponsAndOffers\types\coupon.types.js

REM Notifications
echo export const notificationAPI = {}; > src\features\notifications\api\notification.api.js
echo // NotificationList screen > src\features\notifications\screens\notificationList.screens.jsx
echo export const notificationListStyles = {}; > src\features\notifications\screens\notificationList.styles.screens.js
echo // SendNotification screen > src\features\notifications\screens\sendNotification.screens.jsx
echo export const sendNotificationStyles = {}; > src\features\notifications\screens\sendNotification.styles.screens.js
echo // NotificationCard component > src\features\notifications\components\notificationCard.components.jsx
echo export const notificationService = {}; > src\features\notifications\services\notification.services.js
echo export const notificationSlice = {}; > src\features\notifications\store\notification.slice.js

REM Reports And Analytics
echo export const reportsAPI = {}; > src\features\reportsAndAnalytics\api\reports.api.js
echo // ReportsList screen > src\features\reportsAndAnalytics\screens\reportsList.screens.jsx
echo export const reportsListStyles = {}; > src\features\reportsAndAnalytics\screens\reportsList.styles.screens.js
echo // AnalyticsDetail screen > src\features\reportsAndAnalytics\screens\analyticsDetail.screens.jsx
echo export const analyticsDetailStyles = {}; > src\features\reportsAndAnalytics\screens\analyticsDetail.styles.screens.js
echo // ReportCard component > src\features\reportsAndAnalytics\components\reportCard.components.jsx
echo // AnalyticsChart component > src\features\reportsAndAnalytics\components\analyticsChart.components.jsx
echo export const reportsService = {}; > src\features\reportsAndAnalytics\services\reports.services.js
echo export const reportsSlice = {}; > src\features\reportsAndAnalytics\store\reports.slice.js
echo export const reportsTypes = {}; > src\features\reportsAndAnalytics\types\reports.types.js

echo.
echo ✅ Microservice folder structure created successfully!
echo.
pause
