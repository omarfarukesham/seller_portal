import ArticleIcon from '@/assets/icons/ArticleIcon';
import DocumentIcon from '@/assets/icons/DocumentIcon';
import DollarIcon from '@/assets/icons/DollarIcon';
import ShopIcon from '@/assets/icons/ShopIcon';
import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import WarehouseIcon from '@/assets/icons/WarehouseIcon';
import SellerAuthorizedInfoForm from './sections/SellerAuthorizedInfoForm';
import SellerBankInfoForm from './sections/SellerBankInfoForm';
import SellerBizDocForm from './sections/SellerBizDocForm';
import SellerBizInfoForm from './sections/SellerBizInfoForm';
import SellerOthersInfoForm from './sections/SellerOthersInfoForm';
import WarehouseAddressForm from './sections/WarehouseAddressForm';

export const sellerAddSteps = [
  {
    isCollapsible: false,
    isOpen: true,
    title: 'Shop Information',
    component: SellerOthersInfoForm,
    icon: ShopIcon,
  },
  {
    isCollapsible: false,
    isOpen: false,
    title: 'Business Information',
    component: SellerBizInfoForm,
    icon: SpecificationIcon,
  },
  {
    isCollapsible: false,
    isOpen: false,
    title: 'Business Documents',
    component: SellerBizDocForm,
    icon: DocumentIcon,
  },
  {
    isCollapsible: true,
    isOpen: false,
    title: 'Authorized Person',
    component: SellerAuthorizedInfoForm,
    icon: ArticleIcon,
  },
  {
    isCollapsible: true,
    isOpen: false,
    title: 'Bank Information',
    component: SellerBankInfoForm,
    icon: DollarIcon,
  },
  /* {
    icon: ArticleIcon,
    isCollapsible: true,
    isOpen: false,
    title: 'Billing Address',
    component: SellerBillingAddressForm,
  },
  {
    icon: ArticleIcon,
    isCollapsible: true,
    isOpen: false,
    title: 'Shipping Address',
    component: SellerShippingAddressForm,
  }, */
  {
    isCollapsible: false,
    isOpen: false,
    title: 'Warehouse Address',
    component: WarehouseAddressForm,
    icon: WarehouseIcon,
  },
];
