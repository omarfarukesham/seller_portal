import FormInput from '@/components/form/FormInput';
import FromDropdownRest from '@/components/form/form-dropdown-rest/FromDropdownRest';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import {
  useGetAreas,
  useGetStates,
  useGetZones,
} from '@/services/country/countryService';

const SellerEditWarehouseAddressForm = () => {
  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableData>
            <FormInput name='name' placeholder='Warehouse Name' />
          </TableData>
        </TableRow>

        {/* <TableRow>
          <TableHead>Country</TableHead>
          <TableData>
            <FromDropdownRest
              name='countryId'
              placeholder='Select Country'
              isMulti={false}
              restServiceHook={useGetCountries}
            />
          </TableData>
        </TableRow> */}

        <TableRow>
          <TableHead>State (Division)</TableHead>
          <TableData>
            <FromDropdownRest
              name='stateId'
              placeholder='Select State'
              isMulti={false}
              restServiceHook={useGetStates}
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Zone (District)</TableHead>
          <TableData>
            <FromDropdownRest
              name='zoneId'
              placeholder='Select Zone'
              isMulti={false}
              restServiceHook={useGetZones}
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Area (Thana)</TableHead>
          <TableData>
            <FromDropdownRest
              name='areaId'
              placeholder='Select Area'
              isMulti={false}
              restServiceHook={useGetAreas}
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Address Line</TableHead>
          <TableData>
            <FormInput name='addressLine' placeholder='Address Line' />
          </TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SellerEditWarehouseAddressForm;
