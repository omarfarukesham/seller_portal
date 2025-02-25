import DescriptionIcon from '@/assets/icons/DescriptionIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';

const SellerViewBillingAddress = () => {
  const {
    data: { seller },
  } = useDataContext();

  return (
    <CollapsibleSection
      icon={DescriptionIcon}
      title='Billing Address'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          {/* <TableRow>
            <TableHead>Country</TableHead>
            <TableData>{seller?.billingAddress?.countryName}</TableData>
          </TableRow> */}
          <TableRow>
            <TableHead>State (Division)</TableHead>
            <TableData>{seller?.billingAddress?.stateName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Zone (District)</TableHead>
            <TableData>{seller?.billingAddress?.zoneName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Area (Thana)</TableHead>
            <TableData>{seller?.billingAddress?.areaName}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Address Line</TableHead>
            <TableData>{seller?.billingAddress?.addressLine}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerViewBillingAddress;
