import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAuthContext } from '@/context/authContext';
import DataProvider from '@/context/dataContext';
import { useGetSeller } from '@/services/seller/sellerService';
import SellerViewBodyLayout from '../sellers/seller-view/SellerViewBodyLayout';

const SellerProfileBody = () => {
  const { user } = useAuthContext();
  const id = user?.sellerInfo?.id;

  const { data: seller, error, isFetching } = useGetSeller(id);

  const dataContextValue = {
    seller: seller,
  };

  return (
    <>
      {isFetching && <LoadingSpinner text='Loading Seller' className='flex' />}
      {!isFetching && seller && !error && (
        <DataProvider initialData={dataContextValue}>
          <SellerViewBodyLayout />
        </DataProvider>
      )}
      {!isFetching && error && <PageError message={error.message} />}
    </>
  );
};

export default SellerProfileBody;
