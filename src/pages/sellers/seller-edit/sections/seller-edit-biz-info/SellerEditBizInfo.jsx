import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import { useDataContext } from '@/context/dataContext';
import { useUpdateSeller } from '@/services/seller/sellerService';
import { toast } from 'react-toastify';
import SellerEditBizInfoForm from './SellerEditBizInfoForm';
import SellerEditBusinessAddressForm from './SellerEditBusinessAddressForm';

const SellerEditBizInfo = () => {
  const { data } = useDataContext();
  const { isLoading, error, mutate } = useUpdateSeller();
  const seller = data.seller || {};

  const handleEdit = (formData) => {
    const data = {
      id: seller.id,
      bizInfo: formData,
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
    <Form defaultValues={seller.bizInfo} onSubmit={handleEdit}>
      <SellerEditBizInfoForm />
      <SellerEditBusinessAddressForm />

      <div className='flex justify-center'>
        <Button variant='secondary' loading={isLoading} type='submit'>
          Update
        </Button>
      </div>
      <PageError message={error?.message} />
    </Form>
  );
};

export default SellerEditBizInfo;
