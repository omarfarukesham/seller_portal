import FormInput from '@/components/form/FormInput';

const SellerAuthorizedInfoForm = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
      <FormInput
        label='Name'
        name='authorizedPerson.name'
        placeholder='Name'
        validations={{ required: 'Please Write Person Name' }}
      />
      <FormInput
        label='Email'
        name='authorizedPerson.email'
        placeholder='Email'
        type='email'
      />
      <FormInput
        label='NID'
        name='authorizedPerson.nid'
        placeholder='NID'
        validations={{ required: 'Please Write NID' }}
      />
      <FormInput
        label='Mobile'
        name='authorizedPerson.mobile'
        placeholder='Mobile'
      />
      <FormInput
        label='Telephone'
        name='authorizedPerson.telephone'
        placeholder='Telephone'
      />
    </div>
  );
};

export default SellerAuthorizedInfoForm;
