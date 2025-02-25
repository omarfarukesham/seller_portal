import { SELLER_SERVICE_BASE_URL } from '@/configuration/config';
import PaginatedResponse from '@/model/PaginatedResponse';
import Seller from '@/model/Seller';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import httpService from '../http/httpService';

const config = {
  baseURL: SELLER_SERVICE_BASE_URL,
};

const getSellers = (filters) => {
  return httpService.get('sellers', {
    ...config,
    params: {
      ...filters,
      titleEn: filters ? filters?.name : '',
      size: filters ? filters?.perPage : '',
      page: filters ? filters?.page - 1 : '',
    },
  });
};
const getSeller = (id) => {
  return httpService.get(`sellers/${id}`, {
    ...config,
  });
};
const addSeller = (data) => {
  return httpService.post('sellers', data, {
    ...config,
  });
};
const editSeller = (data) => {
  return httpService.put(`sellers/${data.id}`, data, {
    ...config,
  });
};
const updateSeller = (data) => {
  return httpService.patch(`sellers/${data.id}`, data, {
    ...config,
  });
};

export const useGetSellers = (filters) => {
  return useQuery({
    queryKey: ['sellers', JSON.stringify(filters)],
    queryFn: () => getSellers(filters),
    refetchOnWindowFocus: false,
    select: (response) => new PaginatedResponse(response.data.data, Seller),
  });
};

export const useGetSeller = (id) => {
  return useQuery({
    queryKey: ['sellers', id],
    queryFn: () => getSeller(id),
    refetchOnWindowFocus: false,
    select: (response) => new Seller(response.data?.data?.content[0]),
  });
};

export const useAddSeller = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['add-seller'],
    mutationFn: addSeller,
    select: (response) => new Seller(response.data?.data?.content[0]),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sellers'] });
    },
  });
};

export const useEditSeller = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['edit-seller'],
    mutationFn: editSeller,
    select: (response) => new Seller(response.data?.data?.content[0]),
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({ queryKey: ['seller', payload.id] });
      queryClient.invalidateQueries({ queryKey: ['sellers'] });
    },
  });
};

export const useUpdateSeller = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['update-seller'],
    mutationFn: updateSeller,
    select: (response) => new Seller(response.data?.data?.content[0]),
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({ queryKey: ['seller', payload.id] });
      queryClient.invalidateQueries({ queryKey: ['sellers'] });
    },
  });
};

const sellerService = {
  useGetSellers,
  useGetSeller,
  useAddSeller,
  useEditSeller,
  useUpdateSeller,
};

export default sellerService;
