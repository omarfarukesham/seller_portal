import ArticleIcon from '@/assets/icons/ArticleIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { useUpdateSeller } from '@/services/seller/sellerService';
import { toast } from 'react-toastify';
import SellerEditAuthorizerInfoForm from './SellerEditAuthorizerInfoForm';

const SellerEditAuthorizerInfo = () => {
  const { data } = useDataContext();
  const { isLoading, error, mutate } = useUpdateSeller();
  const seller = data.seller || {};

  const handleEdit = (formData) => {
    const data = {
      id: seller.id,
      authorizedPerson: formData,
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
      icon={ArticleIcon}
      title='Authorized Person'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Form defaultValues={seller.authorizedPerson} onSubmit={handleEdit}>
        <SellerEditAuthorizerInfoForm />

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

export default SellerEditAuthorizerInfo;
