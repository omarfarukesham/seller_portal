import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import SellerViewBody from './SellerViewBody';

const SellerView = () => {
  return (
    <PageContainer className='flex flex-col gap-3 overflow-hidden'>
      <PageHeader title='View Seller' />
      <SellerViewBody />
    </PageContainer>
  );
};

export default SellerView;
