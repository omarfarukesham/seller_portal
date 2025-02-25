import FormInput from '@/components/form/FormInput';
import FormTextarea from '@/components/form/FormTextarea';
import FormUploadContentService from '@/components/form/FormUploadContentService';
import FormSelectionNestedRest from '@/components/form/form-select-nested-rest/FormSelectionNestedRest';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import { useDataContext } from '@/context/dataContext';
import { useDirectUploadContent } from '@/services/content/contentService';
import { useGetSellerTypes } from '@/services/seller/shopTypeService';
import SellerEditStatus from './SellerEditStatus';

const SellerEditStoreInfoForm = () => {
  const {
    data: { seller },
  } = useDataContext();

  const selectedShopType = {
    label: seller?.shopTypeHierarchy?.nameHierarchy,
    value: seller?.shopTypeHierarchy?.idHierarchy,
  };

  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        <TableRow>
          <TableHead>Store Name </TableHead>
          <TableData>
            <FormInput
              name='storeName'
              validations={{ required: 'Please write a store name' }}
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Store Display Name </TableHead>
          <TableData>
            <FormInput
              name='storeDisplayName'
              validations={{ required: 'Please write display name' }}
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Description </TableHead>
          <TableData>
            <FormTextarea name='description' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Shop Type Category</TableHead>
          <TableData>
            <FormSelectionNestedRest
              className='bg-white'
              name='shopTypeId'
              parentKey='shopTypeParentId'
              valueKey='shopTypeId'
              restServiceHook={useGetSellerTypes}
              restFilters={{ isRootShopType: true }}
              selectedOption={selectedShopType}
              validations={{ required: 'Please select a shop type' }}
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Logo</TableHead>
          <TableData>
            <FormUploadContentService
              name='logo.url'
              label='Seller Logo'
              type='image'
              className='h-16 w-16'
              restServiceHook={useDirectUploadContent}
              restData={{ fileType: 'SELLER_LOGO' }}
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Banner Image </TableHead>
          <TableData>
            <FormUploadContentService
              name='bannerImage.url'
              label='Seller Banner Image'
              type='image'
              className='h-48 w-full'
              restServiceHook={useDirectUploadContent}
              restData={{ fileType: 'SELLER_BANNER' }}
            />
          </TableData>
        </TableRow>

        <SellerEditStatus />
      </TableBody>
    </Table>
  );
};

export default SellerEditStoreInfoForm;
