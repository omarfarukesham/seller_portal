import ShopIcon from '@/assets/icons/ShopIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { useUpdateSeller } from '@/services/seller/sellerService';
import removeEmptyKeys from '@/utilities/removeEmptyKeys';
import { toast } from 'react-toastify';
import SellerEditStoreInfoForm from './SellerEditStoreInfoForm';

const SellerEditStoreInfo = () => {
  const { data } = useDataContext();
  const seller = data.seller || {};
  const { isLoading, error, mutate } = useUpdateSeller();

  const handleEdit = (formData) => {
    const modifiedData = removeEmptyKeys(
      {
        ...formData,
        logo: removeEmptyKeys(formData.logo),
        bannerImage: removeEmptyKeys(formData.bannerImage),
      },
      [],
      { removeEmptyObject: true },
    );

    mutate(modifiedData, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const {
    id,
    storeName,
    storeDisplayName,
    description,
    shopTypeId,
    logo,
    bannerImage,
    status,
    profileStatus,
  } = seller;
  const defaultValues = {
    id,
    storeName,
    storeDisplayName,
    description,
    shopTypeId,
    logo,
    bannerImage,
    status,
    profileStatus,
  };

  return (
    <CollapsibleSection
      icon={ShopIcon}
      title='Store Information'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Form defaultValues={defaultValues} onSubmit={handleEdit}>
        <SellerEditStoreInfoForm />

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

export default SellerEditStoreInfo;
