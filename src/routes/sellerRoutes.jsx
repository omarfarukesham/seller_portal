/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import { lazy } from 'react';
import sellerEditRoutes from './sellerEditRoutes';
import sellerProfileEditRoutes from './sellerProfileEditRoutes';
import sellerProfileViewRoutes from './sellerProfileViewRoutes';
import sellerViewRoutes from './sellerViewRoutes';

const seller = lazy(() => import('@/pages/sellers/Sellers'));
const sellerAdd = lazy(() => import('@/pages/sellers/seller-add/SellerAdd'));
const SellerEdit = lazy(() => import('@/pages/sellers/seller-edit/SellerEdit'));

const sellerRoutes = [
  {
    path: 'Seller',
    element: (
      <RouteAuthorization
        element={seller}
        permission={permissions.VIEW_ATTRIBUTE}
      />
    ),
  },
  ...sellerViewRoutes,
  ...sellerEditRoutes,
  ...sellerProfileEditRoutes,
  ...sellerProfileViewRoutes,
  {
    path: 'Seller/add',
    element: (
      <RouteAuthorization
        element={sellerAdd}
        permission={permissions.VIEW_ATTRIBUTE}
      />
    ),
  },
  {
    path: 'Seller/:id/edit',
    element: (
      <RouteAuthorization
        element={SellerEdit}
        permission={permissions.VIEW_ATTRIBUTE}
      />
    ),
  },
  // {
  //   path: 'Seller/:id/view',
  //   element: (
  //     <RouteAuthorization
  //       element={SellerView}
  //       permission={permissions.VIEW_ATTRIBUTE}
  //     />
  //   ),
  // },
];

export default sellerRoutes;
