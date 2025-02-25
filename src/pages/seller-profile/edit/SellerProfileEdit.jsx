import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import SellerUnverifiedNotice from '../common/SellerUnverifiedNotice';
import SellerProfileEditBody from './SellerProfileEditBody';

const SellerProfileEdit = () => {
  return (
    <PageContainer className='flex flex-col gap-3 overflow-hidden'>
      <PageHeader
        title='Complete Seller Profile'
        showBreadcrumb={false}
        backButton={false}
      />
      <SellerUnverifiedNotice completeButton={false} />
      <SellerProfileEditBody />
    </PageContainer>
  );
};

export default SellerProfileEdit;
