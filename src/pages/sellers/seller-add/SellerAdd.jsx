import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import SellerAddBody from './SellerAddBody';

const SellerAdd = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Add Seller' />
      <SellerAddBody />
    </PageContainer>
  );
};

export default SellerAdd;
