export const ENDPOINTS = {
  authenticate: '/authenticate',
  userInfo: '/user-info',
  sendOtp: '/send',
  verifyOtp: '/verify',
  resetPassword: '/users/reset-password',
  checkUser: '/users/check-user',
  registration: '/users/register',

  //seller users api endpoint ...
  getSellerUsers: '/sellers/users',
  addSellerUser: '/sellers/users/create',
  sellerUserActivation: '/sellers/users/activation',
  // getSellerUser: (id) => `/sellers/users/${id}`,
};
