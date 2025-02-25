import DollarIcon from '@/assets/icons/DollarIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ImagePreview from '@/components/upload/ImagePreview';
import { useDataContext } from '@/context/dataContext';

const SellerViewBankInfo = () => {
  const {
    data: { seller },
  } = useDataContext();

  return (
    <CollapsibleSection
      icon={DollarIcon}
      title='Bank Information'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          <TableRow>
            <TableHead>Bank Name</TableHead>
            <TableData>{seller?.bankInfo?.bankName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Branch Name</TableHead>
            <TableData>{seller?.bankInfo?.branchName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Routing No</TableHead>
            <TableData>{seller?.bankInfo?.routingNo}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Account No</TableHead>
            <TableData>{seller?.bankInfo?.accountNo}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Account Name</TableHead>
            <TableData>{seller?.bankInfo?.accountName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Cheque</TableHead>
            <TableData>
              <ImagePreview url={seller?.bankInfo?.cheque} />
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerViewBankInfo;
