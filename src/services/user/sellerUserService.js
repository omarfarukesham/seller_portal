import { SELLER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: SELLER_SERVICE_BASE_URL,
};

const sellerUserService = {
  getSellerUsers: (filters) => {
    return httpService.get(ENDPOINTS.getSellerUsers, {
      ...config,
      params: {
        ...filters,
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },

  addSellerUser: (data) => {
    return httpService.post(ENDPOINTS.addSellerUser, data, {
      ...config,
    });
  },

  sellerUserActivation: (data) => {
    return httpService.post(ENDPOINTS.sellerUserActivation, null, {
      ...config,
      params: data,
    });
  },
};

export default sellerUserService;
