import WarehouseIcon from '@/assets/icons/WarehouseIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { useUpdateSeller } from '@/services/seller/sellerService';
import { toast } from 'react-toastify';
import SellerEditWarehouseAddressForm from './SellerEditWarehouseAddressForm';

const SellerEditWarehouseAddress = () => {
  const { data } = useDataContext();
  const { isLoading, error, mutate } = useUpdateSeller();
  const seller = data.seller || {};

  const handleEdit = (formData) => {
    const data = {
      id: seller.id,
      warehouseAddress: formData,
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
      icon={WarehouseIcon}
      title='Warehouse Address'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Form defaultValues={seller.warehouseAddress} onSubmit={handleEdit}>
        <SellerEditWarehouseAddressForm />

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

export default SellerEditWarehouseAddress;
