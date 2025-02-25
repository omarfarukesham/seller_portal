import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import { useAuthContext } from '@/context/authContext';

const SellerEditStatus = () => {
  const { user } = useAuthContext();

  if (user?.sellerInfo) return null;

  const profileStatusOptions = [
    { label: 'Unverified', value: 'UNVERIFIED' },
    { label: 'Submitted', value: 'SUBMITTED' },
    { label: 'Verified', value: 'VERIFIED' },
  ];
  return (
    <TableRow>
      <TableHead>Profile Status</TableHead>
      <TableData>
        <FormDropdown name='profileStatus' options={profileStatusOptions} />
      </TableData>
    </TableRow>
  );
};

export default SellerEditStatus;
