import SaveIcon from '@/assets/icons/SaveIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useAddSeller } from '@/services/seller/sellerService';
import removeEmptyKeys from '@/utilities/removeEmptyKeys';
import { toast } from 'react-toastify';
import { sellerAddSteps } from './sellerAddSteps';

const SellerAddBody = () => {
  const { isLoading, error, mutate } = useAddSeller();
  const createSeller = (formData) => {
    let data = {
      ...formData,
      bannerImage: removeEmptyKeys(formData.bannerImage, ['']),
      logo: removeEmptyKeys(formData.logo, ['']),
    };

    data = removeEmptyKeys(data, [''], { removeEmptyObject: true });

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully added');
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <PageInnerContainer className='flex flex-col p-5 px-10'>
      <div className='h-full overflow-auto no-scrollbar'>
        <Form onSubmit={createSeller} className='grid gap-3'>
          {sellerAddSteps.map((section) => (
            <CollapsibleSection
              key={section.title}
              icon={section.icon}
              title={section.title}
              open={section.isOpen}
            >
              <section.component />
            </CollapsibleSection>
          ))}

          <Button
            variant='outlined'
            type='submit'
            loading={isLoading}
            className='fixed z-10 bottom-16 right-16 rounded-full md:w-16 md:h-16 bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] hover:bg-primary group border-none'
          >
            <SaveIcon className='fill-primary group-hover:fill-white' />
          </Button>
          {error && <PageError message={error.message} />}
        </Form>
      </div>
    </PageInnerContainer>
  );
};

export default SellerAddBody;
