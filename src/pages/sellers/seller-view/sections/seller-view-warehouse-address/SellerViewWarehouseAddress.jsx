import WarehouseIcon from '@/assets/icons/WarehouseIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';

const SellerViewWarehouseAddress = () => {
  const {
    data: { seller },
  } = useDataContext();

  return (
    <CollapsibleSection
      icon={WarehouseIcon}
      title='Warehouse Address'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          {/* <TableRow>
            <TableHead>Country</TableHead>
            <TableData>{seller?.warehouseAddress?.countryName}</TableData>
          </TableRow> */}
          <TableRow>
            <TableHead>State (Division)</TableHead>
            <TableData>{seller?.warehouseAddress?.stateName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Zone (District)</TableHead>
            <TableData>{seller?.warehouseAddress?.zoneName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Area (Thana)</TableHead>
            <TableData>{seller?.warehouseAddress?.areaName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Address Line</TableHead>
            <TableData>{seller?.warehouseAddress?.addressLine}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerViewWarehouseAddress;
