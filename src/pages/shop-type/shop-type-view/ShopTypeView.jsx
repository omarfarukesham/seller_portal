import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import ShopTypeViewBody from './ShopTypeViewBody';

const ShopTypeView = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='View Shop Type' />
      <ShopTypeViewBody />
    </PageContainer>
  );
};

export default ShopTypeView;
