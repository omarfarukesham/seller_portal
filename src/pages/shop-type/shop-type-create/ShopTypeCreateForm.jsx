import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormTextarea from '@/components/form/FormTextarea';
import FormSelectionNestedRest from '@/components/form/form-select-nested-rest/FormSelectionNestedRest';
import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import Button from '@/components/ui/Button';
import {
  useAddSellerType,
  useGetSellerTypes,
} from '@/services/seller/shopTypeService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShopTypeCreateForm = () => {
  const { isLoading, error, mutate } = useAddSellerType();
  const navigate = useNavigate();

  const createShopType = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully added');
        navigate('/admin/shopType');
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <PageInnerContainer className='flex flex-col p-2'>
      <div className='h-full overflow-auto no-scrollbar'>
        <Form onSubmit={createShopType}>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
            <FormInput
              label='Shop Type Name'
              name='name'
              placeholder='Name'
              validations={{ required: 'Please Write Shop Type Name' }}
            />

            <div className='flex-1'>
              <FormSelectionNestedRest
                className='bg-white'
                name='shopTypeParentId'
                label='Parent Shop Type'
                valueKey='shopTypeId'
                parentKey='shopTypeParentId'
                restServiceHook={useGetSellerTypes}
                restFilters={{ isRootShopType: true }}
                selectedOption={{
                  label: 'Root Shop Type',
                  value: null,
                }}
                rootOption={{ name: 'Root Shop Type', shopTypeId: null }}
              />
            </div>

            <FormTextarea
              name='description'
              label='Description'
              placeholder='Shop type description'
            />
          </div>
          <Button
            variant='outlined'
            type='submit'
            loading={isLoading}
            className='fixed z-10 bottom-16 right-16 rounded-lg md:w-20 md:h-10 bg-primary text-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] hover:bg-secondary group border-none'
          >
            <span className='group-hover:text-white'> Save </span>
          </Button>

          {error && <PageError message={error.message} />}
        </Form>
      </div>
    </PageInnerContainer>
  );
};

export default ShopTypeCreateForm;
