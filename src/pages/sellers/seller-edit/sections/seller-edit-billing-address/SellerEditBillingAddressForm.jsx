import FormTextarea from '@/components/form/FormTextarea';
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

const SellerEditBillingAddressForm = () => {
  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        {/* <TableRow>
          <TableHead>Country</TableHead>
          <TableData>
            <FromDropdownRest
              name='countryId'
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
              isMulti={false}
              restServiceHook={useGetAreas}
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Address Line</TableHead>
          <TableData>
            <FormTextarea name='addressLine' placeholder='Address Line' />
          </TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SellerEditBillingAddressForm;
