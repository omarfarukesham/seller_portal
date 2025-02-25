import ShippingIcon from '@/assets/icons/ShippingIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';

const SellerViewShippingAddress = () => {
  const {
    data: { seller },
  } = useDataContext();

  return (
    <CollapsibleSection
      icon={ShippingIcon}
      title='Shipping Address'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          {/* <TableRow>
            <TableHead>Country</TableHead>
            <TableData>{seller?.shippingAddress?.countryName}</TableData>
          </TableRow> */}
          <TableRow>
            <TableHead>State (Division)</TableHead>
            <TableData>{seller?.shippingAddress?.stateName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Zone (District)</TableHead>
            <TableData>{seller?.shippingAddress?.zoneName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Area (Thana)</TableHead>
            <TableData>{seller?.shippingAddress?.areaName}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Address Line</TableHead>
            <TableData>{seller?.shippingAddress?.addressLine}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerViewShippingAddress;
