/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
const SellerProfileEdit = lazy(() =>
  import('@/pages/seller-profile/edit/SellerProfileEdit'),
);
const SellerEditAuthorizerInfo = lazy(() =>
  import(
    '@/pages/sellers/seller-edit/sections/seller-edit-authorizer-info/SellerEditAuthorizerInfo'
  ),
);
const SellerEditBankInfo = lazy(() =>
  import(
    '@/pages/sellers/seller-edit/sections/seller-edit-bank-info/SellerEditBankInfo'
  ),
);
const SellerEditBillingAddress = lazy(() =>
  import(
    '@/pages/sellers/seller-edit/sections/seller-edit-billing-address/SellerEditBillingAddress'
  ),
);
const SellerEditBizDoc = lazy(() =>
  import(
    '@/pages/sellers/seller-edit/sections/seller-edit-biz-doc/SellerEditBizDoc'
  ),
);
const SellerEditBizInfo = lazy(() =>
  import(
    '@/pages/sellers/seller-edit/sections/seller-edit-biz-info/SellerEditBizInfo'
  ),
);
const SellerEditShippingAddress = lazy(() =>
  import(
    '@/pages/sellers/seller-edit/sections/seller-edit-shipping-address/SellerEditShippingAddress'
  ),
);
const SellerEditStoreInfo = lazy(() =>
  import(
    '@/pages/sellers/seller-edit/sections/seller-edit-store-info/SellerEditStoreInfo'
  ),
);
const SellerEditSubmitProfile = lazy(() =>
  import(
    '@/pages/sellers/seller-edit/sections/seller-edit-submit-profile/SellerEditSubmitProfile'
  ),
);
const SellerEditWarehouseAddress = lazy(() =>
  import(
    '@/pages/sellers/seller-edit/sections/seller-edit-warehouse-address/SellerEditWarehouseAddress'
  ),
);

const sellerProfileRoutes = [
  {
    path: 'seller-profile/edit',
    element: (
      <RouteAuthorization
        element={SellerProfileEdit}
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
        element: <SellerEditStoreInfo />,
      },
      {
        path: 'business-information',
        element: <SellerEditBizInfo />,
      },
      {
        path: 'business-documents',
        element: <SellerEditBizDoc />,
      },
      {
        path: 'authorized-person',
        element: <SellerEditAuthorizerInfo />,
      },
      {
        path: 'bank-information',
        element: <SellerEditBankInfo />,
      },
      {
        path: 'shipping-address',
        element: <SellerEditShippingAddress />,
      },
      {
        path: 'billing-address',
        element: <SellerEditBillingAddress />,
      },
      {
        path: 'warehouse-address',
        element: <SellerEditWarehouseAddress />,
      },
      {
        path: 'final-submit',
        element: <SellerEditSubmitProfile />,
      },
    ],
  },
];

export default sellerProfileRoutes;
