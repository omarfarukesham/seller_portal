import Form from '@/components/form/Form';
import FormYesNoToggle from '@/components/form/FormYesNoToggle';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';

const ShopTypeFilterModal = ({
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

  const statusOptions = [
    { value: 'ACTIVE', label: 'Active' },
    { value: 'INACTIVE', label: 'Inactive' },
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
            <FormDropdown
              name='status'
              label='Status'
              options={statusOptions}
              className='bg-white'
            />

            <FormYesNoToggle
              name='isRootShopType'
              label='Root Shop Type'
              className='bg-white'
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

export default ShopTypeFilterModal;
