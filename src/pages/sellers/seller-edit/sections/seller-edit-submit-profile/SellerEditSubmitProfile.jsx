import SubmitIcon from '@/assets/icons/SubmitIcon';
import ConfirmationModal from '@/components/modal/ConfirmationModal/ConfirmationModal';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { useUpdateSeller } from '@/services/seller/sellerService';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SellerEditSubmitProfile = () => {
  const [confirmModal, setConfirmModal] = useState(false);
  const { data } = useDataContext();
  const { isLoading, mutate } = useUpdateSeller();

  const seller = data.seller || {};
  const handleSubmission = () => {
    const data = {
      id: seller.id,
      profileStatus: 'SUBMITTED',
    };
    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully submitted');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const isUnverified = seller.profileStatus === 'UNVERIFIED';

  return (
    <CollapsibleSection
      icon={SubmitIcon}
      className='p-10 py-5 flex-1 flex flex-col h-full w-full'
      title='Final Submit'
      isCollapsible={false}
      contentClassName='h-full w-full'
    >
      <div className='h-full w-full flex flex-col gap-2 justify-center items-center'>
        {isUnverified ? (
          <>
            <div>Please submit your seller profile to review your details</div>
            <Button
              loading={isLoading}
              className='w-fit'
              variant='secondary'
              onClick={() => setConfirmModal(true)}
              disabled={isLoading}
            >
              Final Submit
            </Button>
          </>
        ) : (
          <div>
            Your profile is submitted. Please wait for the confirmation.
          </div>
        )}
      </div>
      {confirmModal && (
        <ConfirmationModal
          isOpen={confirmModal}
          setIsOpen={setConfirmModal}
          title='Are you sure, you want to submit your seller profile?'
          onAccept={handleSubmission}
        />
      )}
    </CollapsibleSection>
  );
};

export default SellerEditSubmitProfile;
