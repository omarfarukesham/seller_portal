import FormUploadContentService from '@/components/form/FormUploadContentService';
import { useDirectUploadContent } from '@/services/content/contentService';

const SellerBizDocForm = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-5'>
      <FormUploadContentService
        name='bizDoc.bin'
        label='BIN'
        type='pdf'
        restServiceHook={useDirectUploadContent}
        restData={{ fileType: 'SELLER_DOCUMENT' }}
      />
      <FormUploadContentService
        name='bizDoc.tin'
        label='TIN'
        type='pdf'
        restServiceHook={useDirectUploadContent}
        restData={{ fileType: 'SELLER_DOCUMENT' }}
      />
      <FormUploadContentService
        name='bizDoc.tradeLicense'
        label='Trade License'
        type='pdf'
        restServiceHook={useDirectUploadContent}
        restData={{ fileType: 'SELLER_DOCUMENT' }}
      />
      <FormUploadContentService
        name='bizDoc.rjsc'
        label='RJSC'
        type='pdf'
        restServiceHook={useDirectUploadContent}
        restData={{ fileType: 'SELLER_DOCUMENT' }}
      />
    </div>
  );
};

export default SellerBizDocForm;
