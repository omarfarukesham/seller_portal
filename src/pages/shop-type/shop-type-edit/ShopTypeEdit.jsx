import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import ShopTypeEditBody from './ShopTypeEditBody';

const ShopTypeEdit = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Edit Shop Type' />
      <ShopTypeEditBody />
    </PageContainer>
  );
};

export default ShopTypeEdit;
