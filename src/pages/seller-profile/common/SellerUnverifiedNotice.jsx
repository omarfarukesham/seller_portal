import { useAuthContext } from '@/context/authContext';
import SellerCompleteProfileButton from './SellerCompleteProfileButton';

const SellerUnverifiedNotice = ({ completeButton = true }) => {
  const { user } = useAuthContext();
  if (user?.sellerInfo?.profileStatus === 'VERIFIED') return null;

  return (
    <div className='rounded p-3 text-label bg-secondary-200 flex gap-5 justify-between items-center'>
      <div className='p-1'>{user?.sellerInfo?.profileStatusMessage}</div>
      {completeButton && <SellerCompleteProfileButton />}
    </div>
  );
};

export default SellerUnverifiedNotice;
