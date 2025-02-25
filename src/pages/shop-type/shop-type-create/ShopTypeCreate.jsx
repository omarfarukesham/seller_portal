import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import ShopTypeCreateForm from './ShopTypeCreateForm';

const ShopTypeCreate = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Create Shop Type' />
      <ShopTypeCreateForm />
    </PageContainer>
  );
};

export default ShopTypeCreate;
