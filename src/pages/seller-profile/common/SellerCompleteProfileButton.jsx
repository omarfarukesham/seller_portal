import Button from '@/components/ui/Button';
import { useAuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router-dom';

const SellerViewEditButton = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const isUnverifiedSeller = user?.sellerInfo?.profileStatus === 'UNVERIFIED';

  if (!isUnverifiedSeller) return null;

  const gotoEditPage = () => {
    navigate('/admin/seller-profile/edit');
  };

  return (
    <Button onClick={gotoEditPage} size='small' variant='secondary'>
      Complete Profile
    </Button>
  );
};

export default SellerViewEditButton;
