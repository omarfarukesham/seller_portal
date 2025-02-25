import DocumentIcon from '@/assets/icons/DocumentIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { useUpdateSeller } from '@/services/seller/sellerService';
import removeEmptyKeys from '@/utilities/removeEmptyKeys';
import { toast } from 'react-toastify';
import SellerEditBizDocForm from './SellerEditBizDocForm';

const SellerEditBizDoc = () => {
  const { data } = useDataContext();
  const { isLoading, error, mutate } = useUpdateSeller();
  const seller = data.seller || {};

  const handleEdit = (formData) => {
    const data = {
      id: seller.id,
      bizDoc: removeEmptyKeys(formData, [], {
        removeEmptyObject: true,
      }),
    };
    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <CollapsibleSection
      icon={DocumentIcon}
      title='Business Documents'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Form defaultValues={seller.bizDoc} onSubmit={handleEdit}>
        <SellerEditBizDocForm />

        <div className='flex justify-center mt-8'>
          <Button variant='secondary' loading={isLoading} type='submit'>
            Update
          </Button>
        </div>
        <PageError message={error?.message} />
      </Form>
    </CollapsibleSection>
  );
};

export default SellerEditBizDoc;
