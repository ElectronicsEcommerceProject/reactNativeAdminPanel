class AnalyticsService {
  trackEvent(eventName, properties = {}) {
    console.log('Analytics Event:', eventName, properties);
  }

  trackScreenView(screenName) {
    this.trackEvent('screen_view', { screen_name: screenName });
  }

  trackUserAction(action, details = {}) {
    this.trackEvent('user_action', { action, ...details });
  }
}

export default new AnalyticsService();