import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import DataProvider from '@/context/dataContext';
import { useGetSeller } from '@/services/seller/sellerService';
import { useParams } from 'react-router-dom';
import SellerViewBodyLayout from './SellerViewBodyLayout';

const SellerViewBody = () => {
  const { id } = useParams();
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

export default SellerViewBody;
