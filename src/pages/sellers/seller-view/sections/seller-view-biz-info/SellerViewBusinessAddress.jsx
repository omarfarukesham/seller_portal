import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';

const SellerViewBusinessAddress = () => {
  const {
    data: { seller },
  } = useDataContext();
  const storeAddress = seller?.bizInfo?.storeAddress;

  return (
    <CollapsibleSection
      icon={SpecificationIcon}
      title='Business Address'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          {/* <TableRow>
            <TableHead>Country</TableHead>
            <TableData>{storeAddress?.countryName}</TableData>
          </TableRow> */}
          <TableRow>
            <TableHead>State (Division)</TableHead>
            <TableData>{storeAddress?.stateName}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Zone (District)</TableHead>
            <TableData>{storeAddress?.zoneName}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Area (Thana)</TableHead>
            <TableData>{storeAddress?.areaName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Address Line</TableHead>
            <TableData>{storeAddress?.addressLine}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerViewBusinessAddress;
