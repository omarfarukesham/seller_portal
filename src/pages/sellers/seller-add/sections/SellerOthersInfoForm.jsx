import FormInput from '@/components/form/FormInput';
import FormTextarea from '@/components/form/FormTextarea';
import FormUploadContentService from '@/components/form/FormUploadContentService';
// import FromDropdownRest from '@/components/form/form-dropdown-rest/FromDropdownRest';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import FormSelectionNestedRest from '@/components/form/form-select-nested-rest/FormSelectionNestedRest';
import { useDirectUploadContent } from '@/services/content/contentService';
import { useGetSellerTypes } from '@/services/seller/shopTypeService';

const SellerOthersInfoForm = () => {
  const options = [
    { label: 'Verified', value: 'VERIFIED' },
    { label: 'Unverified', value: 'UNVERIFIED' },
  ];

  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
      <FormInput
        label='Store Name'
        name='storeName'
        placeholder='Store Name'
        validations={{ required: 'Please write shop name' }}
      />
      <FormInput
        label='Store Display Name'
        name='storeDisplayName'
        placeholder='Store Display Name'
        validations={{ required: 'Please write shop display name' }}
      />

      <FormUploadContentService
        name='logo.url'
        label='Logo'
        className='w-20 h-20'
        restServiceHook={useDirectUploadContent}
        restData={{ fileType: 'SELLER_LOGO' }}
      />

      <FormUploadContentService
        name='bannerImage.url'
        label='Banner Image'
        className='w-50 h-32'
        restServiceHook={useDirectUploadContent}
        restData={{ fileType: 'SELLER_BANNER' }}
      />

      <FormTextarea
        name='description'
        label='Description'
        placeholder='Description'
      />

      <FormSelectionNestedRest
        className='bg-white'
        name='shopTypeId'
        label='Shop Type Category'
        parentKey='shopTypeParentId'
        valueKey='shopTypeId'
        restServiceHook={useGetSellerTypes}
        validations={{ required: 'Please Write Shop Type ID' }}
      />

      <FormDropdown
        label='Profile Status'
        name='profileStatus'
        placeholder='Profile Status'
        className='bg-white'
        options={options}
      />
    </div>
  );
};

export default SellerOthersInfoForm;
