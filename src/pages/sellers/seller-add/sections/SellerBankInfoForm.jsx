import FormInput from '@/components/form/FormInput';
import FormUploadContentService from '@/components/form/FormUploadContentService';
import { useDirectUploadContent } from '@/services/content/contentService';

const SellerBankInfoForm = () => {
  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
      <FormInput
        label='Bank Name'
        name='bankInfo.bankName'
        placeholder='Bank Name'
        validations={{ required: 'Please Write Bank Name' }}
      />
      <FormInput
        label='Branch Name'
        name='bankInfo.branchName'
        placeholder='Branch Name'
      />
      <FormInput
        label='Routing No'
        name='bankInfo.routingNo'
        placeholder='Routing No'
      />
      <FormInput
        label='Account No'
        name='bankInfo.accountNo'
        placeholder='Account No'
        validations={{ required: 'Please Write Account No' }}
      />
      <FormInput
        label='Account Name'
        name='bankInfo.accountName'
        placeholder='Account Name'
        validations={{ required: 'Please Write Account Name' }}
      />
      <FormUploadContentService
        label='Cheque'
        name='cheque'
        type='image'
        className='h-48'
        restServiceHook={useDirectUploadContent}
        restData={{ fileType: 'SELLER_DOCUMENT' }}
      />
    </div>
  );
};

export default SellerBankInfoForm;
