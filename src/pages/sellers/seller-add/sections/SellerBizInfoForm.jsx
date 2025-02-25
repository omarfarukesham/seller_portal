import FormInput from '@/components/form/FormInput';

const SellerBizInfoForm = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
      <FormInput
        label='BIN Number'
        name='bizInfo.binNo'
        placeholder='BIN Number'
      />
      <FormInput
        label='TIN Number'
        name='bizInfo.tinNo'
        placeholder='TIN Number'
      />
      <FormInput
        label='Trade License Number'
        name='bizInfo.tradeLicenseNo'
        placeholder='Trade License Number'
      />

      <FormInput
        label='Email'
        name='bizInfo.email'
        placeholder='Email'
        type='email'
        validations={{ required: 'Please Write Email' }}
      />

      <FormInput
        label='Mobile'
        name='bizInfo.mobile'
        placeholder='Mobile'
        validations={{ required: 'Please Write Mobile' }}
      />

      <FormInput
        label='Telephone'
        name='bizInfo.telephone'
        placeholder='Telephone'
      />

      <FormInput
        label='Website'
        name='bizInfo.website'
        placeholder='Website'
        type='url'
      />
    </div>
  );
};

export default SellerBizInfoForm;
