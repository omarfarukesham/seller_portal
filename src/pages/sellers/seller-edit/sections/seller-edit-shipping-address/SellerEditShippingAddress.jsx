import ShippingIcon from '@/assets/icons/ShippingIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { useUpdateSeller } from '@/services/seller/sellerService';
import { toast } from 'react-toastify';
import SellerEditShippingAddressForm from './SellerEditShippingAddressForm';

const SellerEditShippingAddress = () => {
  const { data } = useDataContext();
  const { isLoading, error, mutate } = useUpdateSeller();

  const seller = data.seller || {};
  const handleEdit = (formData) => {
    const data = {
      id: seller.id,
      shippingAddress: formData,
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
      icon={ShippingIcon}
      title='Shipping Address'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Form defaultValues={seller.shippingAddress} onSubmit={handleEdit}>
        <SellerEditShippingAddressForm />

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

export default SellerEditShippingAddress;
