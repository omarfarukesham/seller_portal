/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
const SellerProfile = lazy(() =>
  import('@/pages/seller-profile/SellerProfile'),
);
const SellerViewAuthorizedPerson = lazy(() =>
  import(
    '@/pages/sellers/seller-view/sections/seller-view-authorized-person/SellerViewAuthorizedPerson'
  ),
);
const SellerViewBankInfo = lazy(() =>
  import(
    '@/pages/sellers/seller-view/sections/seller-view-bank-info/SellerViewBankInfo'
  ),
);
const SellerViewBillingAddress = lazy(() =>
  import(
    '@/pages/sellers/seller-view/sections/seller-view-billing-address/SellerViewBillingAddress'
  ),
);
const SellerViewBizDoc = lazy(() =>
  import(
    '@/pages/sellers/seller-view/sections/seller-view-biz-doc/SellerViewBizDoc'
  ),
);
const SellerViewBizInfo = lazy(() =>
  import(
    '@/pages/sellers/seller-view/sections/seller-view-biz-info/SellerViewBizInfo'
  ),
);
const SellerViewShippingAddress = lazy(() =>
  import(
    '@/pages/sellers/seller-view/sections/seller-view-shiping-address/SellerViewShippingAddress'
  ),
);
const SellerViewStoreInfo = lazy(() =>
  import(
    '@/pages/sellers/seller-view/sections/seller-view-store-info/SellerViewStoreInfo'
  ),
);
const SellerViewUsers = lazy(() =>
  import(
    '@/pages/sellers/seller-view/sections/seller-view-users/SellerViewUsers'
  ),
);
const SellerViewWarehouseAddress = lazy(() =>
  import(
    '@/pages/sellers/seller-view/sections/seller-view-warehouse-address/SellerViewWarehouseAddress'
  ),
);

const sellerProfileViewRoutes = [
  {
    path: 'seller-profile',
    element: (
      <RouteAuthorization
        element={SellerProfile}
        permission={permissions.VIEW_PRODUCT}
      />
    ),
    children: [
      {
        path: '',
        element: <Navigate to='store-information' replace />,
      },
      {
        path: 'store-information',
        element: <SellerViewStoreInfo />,
      },
      {
        path: 'business-information',
        element: <SellerViewBizInfo />,
      },
      {
        path: 'business-documents',
        element: <SellerViewBizDoc />,
      },
      {
        path: 'authorized-person',
        element: <SellerViewAuthorizedPerson />,
      },
      {
        path: 'users',
        element: <SellerViewUsers />,
      },
      {
        path: 'bank-information',
        element: <SellerViewBankInfo />,
      },
      {
        path: 'shipping-address',
        element: <SellerViewShippingAddress />,
      },
      {
        path: 'billing-address',
        element: <SellerViewBillingAddress />,
      },
      {
        path: 'warehouse-address',
        element: <SellerViewWarehouseAddress />,
      },
    ],
  },
];

export default sellerProfileViewRoutes;
