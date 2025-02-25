import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SellerEditSidebar from './SellerEditSidebar';

const SellerEditBodyLayout = () => {
  return (
    <div className='flex-1 flex gap-5 overflow-hidden'>
      <SellerEditSidebar />
      <Suspense fallback={<LoadingSpinner text='Loading your content' />}>
        <div className='flex-1 bg-white shadow overflow-auto'>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default SellerEditBodyLayout;
