import { ENDPOINTS } from '@/configuration/endpoints';
import AppUser from '@/model/AppUser';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import sellerUserService from './sellerUserService';

export const useGetSellerUsers = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.getSellerUsers, JSON.stringify(filters)],
    queryFn: () => sellerUserService.getSellerUsers(filters),
    select: (response) => new PaginatedResponse(response.data?.data, AppUser),
  });
};

export const useAddSellerUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.addSellerUser],
    mutationFn: sellerUserService.addSellerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.getSellerUsers] });
    },
  });
};

export const useSellerUserActivation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.sellerUserActivation],
    mutationFn: sellerUserService.sellerUserActivation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.getSellerUsers] });
    },
  });
};
