/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import ShopType from '@/pages/shop-type/ShopType';
import { lazy } from 'react';
const ShopTypeView = lazy(() =>
  import('@/pages/shop-type/shop-type-view/ShopTypeView'),
);
const ShopTypeEdit = lazy(() =>
  import('@/pages/shop-type/shop-type-edit/ShopTypeEdit'),
);
const ShopTypeCreate = lazy(() =>
  import('@/pages/shop-type/shop-type-create/ShopTypeCreate'),
);

const shopTypeRoutes = [
  {
    path: 'shopType',
    element: (
      <RouteAuthorization
        element={ShopType}
        permission={permissions.VIEW_ATTRIBUTE}
      />
    ),
  },
  // ...sellerViewRoutes,
  // ...sellerEditRoutes,
  {
    path: 'shopType/add',
    element: (
      <RouteAuthorization
        element={ShopTypeCreate}
        permission={permissions.VIEW_ATTRIBUTE}
      />
    ),
  },
  {
    path: 'shopType/:id/edit',
    element: (
      <RouteAuthorization
        element={ShopTypeEdit}
        permission={permissions.VIEW_ATTRIBUTE}
      />
    ),
  },
  {
    path: 'shopType/:id',
    element: (
      <RouteAuthorization
        element={ShopTypeView}
        permission={permissions.VIEW_ATTRIBUTE}
      />
    ),
  },
];

export default shopTypeRoutes;
