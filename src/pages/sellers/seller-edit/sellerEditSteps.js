import ArticleIcon from '@/assets/icons/ArticleIcon';
import DocumentIcon from '@/assets/icons/DocumentIcon';
import DollarIcon from '@/assets/icons/DollarIcon';
import ShopIcon from '@/assets/icons/ShopIcon';
import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import WarehouseIcon from '@/assets/icons/WarehouseIcon';

const sellerEditSteps = [
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
    label: 'Bank Information',
    path: 'bank-information',
    icon: DollarIcon,
  },
  // {
  //   id: 6,
  //   label: 'Shipping Address',
  //   path: 'shipping-Address',
  //   icon: ShippingIcon,
  // },
  // {
  //   id: 7,
  //   label: 'Billing Address',
  //   path: 'billing-address',
  //   icon: DescriptionIcon,
  // },
  {
    id: 8,
    label: 'Warehouse Address',
    path: 'warehouse-address',
    icon: WarehouseIcon,
  },
];

export default sellerEditSteps;
