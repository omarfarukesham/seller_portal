import PlusIcon from '@/assets/icons/PlusIcon';
import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import ShopTypeBody from './ShopTypeBody';

const ShopType = () => {
  const navigate = useNavigate();
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Shop Type'>
        <Button onClick={() => navigate('/admin/shopType/add')}>
          <PlusIcon className='w-5 h-5 ml-[-5px]' />
          Add Shop Type
        </Button>
      </PageHeader>
      <ShopTypeBody />
    </PageContainer>
  );
};

export default ShopType;
