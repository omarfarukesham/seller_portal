import Form from '@/components/form/Form';
import FormSwitch from '@/components/form/FormSwitch';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import { useDataContext } from '@/context/dataContext';
import { useSellerUserActivation } from '@/services/user/useSellerUser';
import { toast } from 'react-toastify';

const SellerUserViewModal = ({ isOpen, setIsOpen, data }) => {
  const { isLoading, mutate } = useSellerUserActivation();
  const {
    data: { seller },
  } = useDataContext();
  // console.log(seller.id);
  const handleSubmit = (formData) => {
    mutate(
      {
        userId: data?.userId,
        sellerId: seller.id,
        ...formData,
      },
      {
        onSuccess: () => {
          toast.success('Successfully updated');
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

  const defaultValues = {
    activated: data?.activated,
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10 max-w-[400px]'
    >
      <span className='text-center text-lg font-bold'>Change Activation</span>

      <Form
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
        className='flex flex-col gap-5 justify-center'
      >
        <div className='flex gap-1'>
          <div className='font-bold'>Username: </div>
          <div>{data.username}</div>
        </div>

        <div className='flex gap-3'>
          <div className='font-bold'>Activation status: </div>
          <FormSwitch name='activated' />
        </div>

        <div className='flex justify-center mt-10'>
          <Button
            type='submit'
            className='text-white border-white'
            isLoading={isLoading}
          >
            Confirm
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default SellerUserViewModal;
