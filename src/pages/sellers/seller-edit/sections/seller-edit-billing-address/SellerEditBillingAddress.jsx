import DescriptionIcon from '@/assets/icons/DescriptionIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { useUpdateSeller } from '@/services/seller/sellerService';
import { toast } from 'react-toastify';
import SellerEditBillingAddressForm from './SellerEditBillingAddressForm';

const SellerEditBillingAddress = () => {
  const { data } = useDataContext();
  const { isLoading, error, mutate } = useUpdateSeller();

  const seller = data.seller || {};

  const handleEdit = (formData) => {
    const data = {
      id: seller.id,
      billingAddress: formData,
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
      icon={DescriptionIcon}
      title='Billing Address'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Form defaultValues={seller.billingAddress} onSubmit={handleEdit}>
        <SellerEditBillingAddressForm />

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

export default SellerEditBillingAddress;
