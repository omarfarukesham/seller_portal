import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetSellerType } from '@/services/seller/shopTypeService';
import { useParams } from 'react-router-dom';
import ShopTypeEditForm from './ShopTypeEditForm';

const ShopTypeEditBody = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useGetSellerType(id);

  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      {isFetching && (
        <LoadingSpinner text='Loading Edit .. ' className='flex' />
      )}
      {!isFetching && data && !error && <ShopTypeEditForm data={data} />}
      {!isFetching && error && <PageError message={error.message} />}
    </div>
  );
};

export default ShopTypeEditBody;
