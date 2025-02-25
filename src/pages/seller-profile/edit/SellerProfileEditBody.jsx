import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAuthContext } from '@/context/authContext';
import DataProvider from '@/context/dataContext';
import SellerEditBodyLayout from '@/pages/sellers/seller-edit/SellerEditBodyLayout';
import { useGetSeller } from '@/services/seller/sellerService';

const SellerProfileEditBody = () => {
  const { user } = useAuthContext();
  const id = user?.sellerInfo?.id;
  const { data: seller, error, isFetching } = useGetSeller(id);

  const dataContextValue = {
    seller: seller,
  };

  return (
    <>
      {isFetching && <LoadingSpinner text='Loading Sellers' className='flex' />}
      {!isFetching && seller && !error && (
        <DataProvider initialData={dataContextValue}>
          <SellerEditBodyLayout />
        </DataProvider>
      )}
      {!isFetching && error && <PageError message={error.message} />}
    </>
  );
};

export default SellerProfileEditBody;
