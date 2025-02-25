import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';

const SellerViewBusinessInformation = () => {
  const {
    data: { seller },
  } = useDataContext();
  return (
    <CollapsibleSection
      icon={SpecificationIcon}
      title='Business Information'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          <TableRow>
            <TableHead>BIN Number</TableHead>
            <TableData>{seller?.bizInfo?.binNo}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>TIN Number</TableHead>
            <TableData>{seller?.bizInfo?.tinNo}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Trade License Number</TableHead>
            <TableData>{seller?.bizInfo?.tradeLicenseNo}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Email</TableHead>
            <TableData>{seller?.bizInfo?.email}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Mobile</TableHead>
            <TableData>{seller?.bizInfo?.mobile}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Telephone</TableHead>
            <TableData>{seller?.bizInfo?.telephone}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Website</TableHead>
            <TableData>{seller?.bizInfo?.website}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerViewBusinessInformation;
