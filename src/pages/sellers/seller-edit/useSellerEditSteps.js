import SubmitIcon from '@/assets/icons/SubmitIcon';
import { useAuthContext } from '@/context/authContext';
import sellerEditSteps from './sellerEditSteps';

function useSellerEditSteps() {
  const { user } = useAuthContext();
  if (user?.sellerInfo) {
    return sellerEditSteps.concat([
      {
        id: 9,
        label: 'Final Submit',
        path: 'final-submit',
        icon: SubmitIcon,
      },
    ]);
  } else {
    return sellerEditSteps;
  }
}

export default useSellerEditSteps;
