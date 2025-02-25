import { SELLER_SERVICE_BASE_URL } from '@/configuration/config';
import PaginatedResponse from '@/model/PaginatedResponse';
import ShopType from '@/model/ShopType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import httpService from '../http/httpService';

const config = {
  baseURL: SELLER_SERVICE_BASE_URL,
};

const getSellerTypes = (filters) => {
  return httpService.get('shop-types', {
    ...config,
    params: {
      ...filters,
      titleEn: filters ? filters?.name : '',
      size: filters ? filters?.perPage : '',
      page: filters ? filters?.page - 1 : '',
    },
  });
};
const getSellerType = (id) => {
  return httpService.get(`shop-types/${id}`, {
    ...config,
  });
};
const addSellerType = (data) => {
  return httpService.post('shop-types', data, {
    ...config,
  });
};
const editSellerType = (data) => {
  return httpService.put(`shop-types/${data.id}`, data, {
    ...config,
  });
};
const updateSellerType = (data) => {
  return httpService.patch(`shop-types/${data.id}`, data, {
    ...config,
  });
};

export const useGetSellerTypes = (filters) => {
  return useQuery({
    queryKey: ['shop-types', JSON.stringify(filters)],
    queryFn: () => getSellerTypes(filters),
    refetchOnWindowFocus: false,
    select: (response) => new PaginatedResponse(response.data.data, ShopType),
  });
};

export const useGetSellerType = (id) => {
  return useQuery({
    queryKey: ['shop-types', id],
    queryFn: () => getSellerType(id),
    refetchOnWindowFocus: false,
    select: (response) => new ShopType(response.data?.data?.content[0]),
  });
};

export const useAddSellerType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['add-seller-type'],
    mutationFn: addSellerType,
    select: (response) => new ShopType(response.data?.data?.content[0]),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['shop-types'] });
    },
  });
};

export const useEditSellerType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['edit-seller-type'],
    mutationFn: editSellerType,
    select: (response) => new ShopType(response.data?.data?.content[0]),
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({ queryKey: ['shop-type', payload.id] });
      queryClient.invalidateQueries({ queryKey: ['shop-types'] });
    },
  });
};

export const useUpdateSellerType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['update-seller-type'],
    mutationFn: updateSellerType,
    select: (response) => new ShopType(response.data?.data?.content[0]),
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({ queryKey: ['seller', payload.id] });
      queryClient.invalidateQueries({ queryKey: ['shop-types'] });
    },
  });
};

const shopTypeService = {
  useGetSellerTypes,
  useGetSellerType,
  useAddSellerType,
  useEditSellerType,
  useUpdateSellerType,
};

export default shopTypeService;
