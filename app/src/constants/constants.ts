// write constant values here 
export const APP_NAME = 'GR8 App';
export const API_URL = 'https://dummyjson.com/';
export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de'];
export const THEME_COLORS = {
  primary: '#6200ea',
  secondary: '#03dac6',
  background: '#f5f5f5',
  text: '#000000',
};
export const MAX_ITEMS_PER_PAGE = 20;
export const TIMEOUT_DURATION = 5000; // in milliseconds
export const DATE_FORMAT = 'YYYY-MM-DD';
export const TIME_FORMAT = 'HH:mm:ss';
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;
export const API_VERSION = 'v1';
export const ERROR_MESSAGES = {
  // General
  networkError: 'Network error. Please check your connection and try again.',
  serverError: 'A server error occurred. Please try again later.',
  genericError: 'Something went wrong. Please try again later.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to perform this action.',
  validationError: 'Please check your input and try again.',

  // Authentication-specific
  loginFailed: 'Invalid email or password. Please try again.',
  registrationFailed: 'Registration failed. Please verify your details and try again.',
  emailExists: 'An account with this email already exists.',
  resetFailed: 'Failed to reset password. Please try again.',
  tokenExpired: 'Your session has expired. Please log in again.',
  passwordMismatch: 'Passwords do not match. Please try again.',
  weakPassword: 'Password is too weak. Please use a stronger password.',
  missingFields: 'All fields are required. Please fill them in.',
  missingToken: 'Authentication token is missing. Please log in again.',
};
export const WARNING_MESSAGES = {
  unsavedChanges: 'You have unsaved changes. Do you want to continue?',
  sessionAboutToExpire: 'Your session is about to expire. Please save your work.',
  actionNotAllowed: 'This action is not allowed.',
  featureNotAvailable: 'This feature is not available in the current version.',
  deprecatedFeature: 'This feature is deprecated and will be removed in future versions.',
};
export const SUCCESS_MESSAGES = {
  dataFetched: 'Data fetched successfully.',
  itemCreated: 'Item created successfully.',
  itemUpdated: 'Item updated successfully.',
  itemDeleted: 'Item deleted successfully.',
  actionCompleted: 'Action completed successfully.',
  // Authentication-specific
  loginSuccess: 'Logged in successfully.',
  registrationSuccess: 'Account created successfully. You can now log in.',
  passwordResetRequestSent: 'Password reset link sent to your email.',
  passwordResetSuccess: 'Password reset successful. You can now log in.',
  logoutSuccess: 'Logged out successfully.',
  emailVerified: 'Email verified successfully.',
  profileUpdated: 'Profile updated successfully.',
};
export const LOADING_MESSAGES = {
  fetchingData: 'Fetching data, please wait...',
  submittingForm: 'Submitting form, please wait...',
  loading: 'Loading, please wait...',
};
export const NOTIFICATION_TIMEOUT = 3000; // in milliseconds
export const LOCAL_STORAGE_KEYS = {
    userToken
: 'userToken',
    userPreferences: 'userPreferences',         
    theme: 'theme',
}
export const API_ENDPOINTS = {
    login: 'https://reqres.in/api/login',
  register: 'https://reqres.in/api/register',
    getUser: '/user/me',
    updateUser: '/user/update',
    deleteUser: '/user/delete',
    fetchItems: '/items',
    createItem: '/items/create',
    updateItem: '/items/update',
    deleteItem: '/items/delete',
};
