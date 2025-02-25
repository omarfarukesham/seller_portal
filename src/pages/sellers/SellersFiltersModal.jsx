import Form from '@/components/form/Form';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import FormInput from '@/components/form/FormInput';
// import FormInput from '@/components/form/form-dropdown/FormInput';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';
// import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';

const SellersFiltersModal = ({
  isOpen,
  setIsOpen,
  filters,
  applyFilters,
  clearFilters,
}) => {
  const filtersData = {
    ...filters,
  };

  const handleApplyFilters = (data) => {
    applyFilters(removeUndefinedKeys(data));
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    clearFilters();
    setIsOpen(false);
  };

  const profileStatusOptions = [
    { label: 'Verified', value: 'VERIFIED' },
    { label: 'Submitted', value: 'SUBMITTED' },
    { label: 'Unverified', value: 'UNVERIFIED' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10'
    >
      <Form
        onSubmit={handleApplyFilters}
        defaultValues={filtersData}
        className='flex-1 flex flex-col gap-10'
      >
        <div className='flex-1'>
          <div className='grid md:grid-cols-2 gap-x-10 gap-y-6'>
            <FormInput
              name='authorizedPersonNid'
              label='Authorized Person NID'
              placeholder='Authorized Person NID'
              className='bg-white'
            />
            <FormInput
              name='authorizedPersonMobile'
              label='Authorized Person Mobile'
              placeholder='Authorized Person Mobile'
              className='bg-white'
            />
            <FormInput
              name='authorizedPersonEmail'
              label='Authorized Person Email'
              placeholder='Authorized Person Email'
              className='bg-white'
            />
            <FormInput
              name='storeName'
              label='Store Name'
              placeholder='Store Name'
              className='bg-white'
            />
            <FormDropdown
              name='profileStatus'
              options={profileStatusOptions}
              placeholder='Profile Status'
            />
          </div>
        </div>
        <div className='flex justify-center gap-5'>
          <Button type='submit' className='text-white border-white'>
            Apply Filters
          </Button>
          <Button
            onClick={handleClearFilters}
            variant='secondary'
            className='text-white border-white'
          >
            Clear Filters
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default SellersFiltersModal;
