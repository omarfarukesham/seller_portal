import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import SellerEditBody from './SellerEditBody';

const SellerEdit = () => {
  return (
    <PageContainer className='flex flex-col gap-3 overflow-hidden'>
      <PageHeader title='Edit Seller' />
      <SellerEditBody />
    </PageContainer>
  );
};

export default SellerEdit;
