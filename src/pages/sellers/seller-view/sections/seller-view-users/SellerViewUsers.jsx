import PageInnerContainer from '@/components/layout/PageInnerContainer';
import SellerViewUsersBody from './SellerViewUsersBody';

const SellerViewUsers = () => {
  return (
    <PageInnerContainer className='flex flex-col gap-3'>
      <SellerViewUsersBody />
    </PageInnerContainer>
  );
};

export default SellerViewUsers;
