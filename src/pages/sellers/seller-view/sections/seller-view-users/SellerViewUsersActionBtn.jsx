import Button from '@/components/ui/Button';
import { useState } from 'react';
import SellerUserViewModal from './seller-view-user-view/SellerUserViewModal';

const SellerViewUsersActionBtn = ({ data }) => {
  const [isViewUser, setIsViewUser] = useState(false);

  // console.log(data);
  const handleViewUser = () => {
    setIsViewUser(true);
  };

  return (
    <div className='flex justify-center gap-1'>
      <Button
        variant='outlined'
        size='small'
        onClick={() => handleViewUser(data.id)}
      >
        Change
      </Button>
      {isViewUser && (
        <SellerUserViewModal
          isOpen={isViewUser}
          setIsOpen={setIsViewUser}
          data={data}
        />
      )}
    </div>
  );
};

export default SellerViewUsersActionBtn;
