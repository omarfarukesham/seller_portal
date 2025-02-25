import ArticleIcon from '@/assets/icons/ArticleIcon';
import DollarIcon from '@/assets/icons/DollarIcon';
import ShopIcon from '@/assets/icons/ShopIcon';
import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import UsersIcon from '@/assets/icons/UsersIcon';
import WarehouseIcon from '@/assets/icons/WarehouseIcon';
import DocumentIcon from '../../../assets/icons/DocumentIcon';

const sellerViewSidebarSteps = [
  {
    id: 1,
    label: 'Store Information',
    path: 'store-information',
    icon: ShopIcon,
  },
  {
    id: 2,
    label: 'Business Information',
    path: 'business-information',
    icon: SpecificationIcon,
  },
  {
    id: 3,
    label: 'Business Documents',
    path: 'business-documents',
    icon: DocumentIcon,
  },
  {
    id: 4,
    label: 'Authorized Person',
    path: 'authorized-person',
    icon: ArticleIcon,
  },
  {
    id: 5,
    label: 'Users',
    path: 'users',
    icon: UsersIcon,
  },
  {
    id: 6,
    label: 'Bank Information',
    path: 'bank-information',
    icon: DollarIcon,
  },
  // {
  //   id: 7,
  //   label: 'Shipping Address',
  //   path: 'shipping-Address',
  //   icon: ShippingIcon,
  // },
  // {
  //   id: 8,
  //   label: 'Billing Address',
  //   path: 'billing-address',
  //   icon: DescriptionIcon,
  // },
  {
    id: 9,
    label: 'Warehouse Address',
    path: 'warehouse-address',
    icon: WarehouseIcon,
  },
];

export default sellerViewSidebarSteps;
