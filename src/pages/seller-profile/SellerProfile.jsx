import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import SellerProfileBody from './SellerProfileBody';
import SellerUnverifiedNotice from './common/SellerUnverifiedNotice';

const SellerProfile = () => {
  return (
    <PageContainer className='flex flex-col gap-3 overflow-hidden'>
      <PageHeader
        title='Seller Profile'
        showBreadcrumb={false}
        backButton={false}
      />
      <SellerUnverifiedNotice />
      <SellerProfileBody />
    </PageContainer>
  );
};

export default SellerProfile;
