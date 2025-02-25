import { useAuthContext } from '@/context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UnverifiedSellerChecker = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const isUnverified =
    user && user?.sellerInfo?.profileStatus === 'UNVERIFIED' ? true : false;

  useEffect(() => {
    if (user.sellerInfo && isUnverified) {
      navigate(`/admin/seller-profile/edit`);
    }
  });
};

export default UnverifiedSellerChecker;
