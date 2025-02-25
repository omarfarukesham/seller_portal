import PlusIcon from '@/assets/icons/PlusIcon';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { USER_TYPE } from '@/configuration/constants';
import { useAuthContext } from '@/context/authContext';
import { useNavigate } from 'react-router-dom';

const SellersHeader = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const showAddButton = user.userType === USER_TYPE.admin;
  return (
    <PageHeader title='All Sellers' backButton={false}>
      {showAddButton && (
        <Button onClick={() => navigate('/admin/seller/add')}>
          <PlusIcon className='w-5 h-5 ml-[-5px]' />
          Add
        </Button>
      )}
    </PageHeader>
  );
};

export default SellersHeader;
