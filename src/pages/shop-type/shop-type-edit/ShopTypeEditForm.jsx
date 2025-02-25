import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormTextEditor from '@/components/form/FormTextEditor';
import FormSelectionNestedRest from '@/components/form/form-select-nested-rest/FormSelectionNestedRest';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import {
  useEditSellerType,
  useGetSellerTypes,
} from '@/services/seller/shopTypeService';
import { toast } from 'react-toastify';

const ShopTypeEditForm = ({ data }) => {
  const { isLoading, error, mutate } = useEditSellerType();

  const handleEdit = (formData) => {
    const data = { ...formData };
    delete data.shopTypeId;

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Form className='grid gap-10' onSubmit={handleEdit} defaultValues={data}>
      <FormInput name='name' label='Shop Type Name' />
      {/* <FormInput name='shopTypeParentName' label='Shop Type Parent Name' /> */}
      <div className='flex-1'>
        <FormSelectionNestedRest
          className='bg-white'
          name='shopTypeParentId'
          label='Parent Category'
          parentKey='shopTypeParentId'
          valueKey='shopTypeId'
          restServiceHook={useGetSellerTypes}
          restFilters={{ isRootShopType: true }}
          selectedOption={{
            label: data?.shopTypeParentName || 'Root Category',
            value: data?.shopTypeParentId,
          }}
          rootOption={{ name: 'Root Category', shopTypId: null }}
        />
      </div>
      {/* <div className='flex-1'>
        <FormSelectionNestedRest
          className='bg-white'
          name='parentCategoryId'
          label='Parent Category'
          valueKey='categoryId'
          restServiceHook={useGetCategories}
          selectedOption={{
            label: category?.parentCategoryName || 'Root Category',
            value: category?.parentCategoryId,
          }}
          rootOption={{ name: 'Root Category', categoryId: null }}
        />
      </div> */}
      <FormTextEditor name='description' label='Description' />

      <div className='flex justify-center gap-8 mt-5'>
        <Button type='submit' className='w-[120px]' loading={isLoading}>
          Save
        </Button>
      </div>
      {error && <PageError message={error.message} />}
    </Form>
  );
};

export default ShopTypeEditForm;
