import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetSellerType } from '@/services/seller/shopTypeService';
import { useParams } from 'react-router-dom';
import ShopTypeViewForm from './ShopTypeViewForm';

const ShopTypeViewBody = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useGetSellerType(id);

  return (
    <PageInnerContainer className='flex-1 flex flex-col'>
      {isFetching && (
        <LoadingSpinner text='Loading Shop Type' className='flex' />
      )}
      {!isFetching && data && !error && <ShopTypeViewForm data={data} />}
      {!isFetching && error && <PageError message={error.message} />}
    </PageInnerContainer>
  );
};

export default ShopTypeViewBody;
