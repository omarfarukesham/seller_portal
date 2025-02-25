import PageContainer from '@/components/layout/PageContainer';
import SellersBody from './SellersBody';
import SellersHeader from './SellersHeader';

const Sellers = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <SellersHeader />
      <SellersBody />
    </PageContainer>
  );
};

export default Sellers;
