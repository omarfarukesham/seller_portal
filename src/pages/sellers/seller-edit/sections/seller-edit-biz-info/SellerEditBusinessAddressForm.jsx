import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import FromDropdownRest from '@/components/form/form-dropdown-rest/FromDropdownRest';
import FormInput from '@/components/form/FormInput';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import {
  useGetAreas,
  useGetStates,
  useGetZones,
} from '@/services/country/countryService';

const SellerEditBusinessAddressForm = () => {
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
            <TableData>
              <FromDropdownRest
                name='storeAddress.countryId'
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
                name='storeAddress.stateId'
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
                name='storeAddress.zoneId'
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
                name='storeAddress.areaId'
                placeholder='Select Area'
                isMulti={false}
                restServiceHook={useGetAreas}
              />
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>Address Line</TableHead>
            <TableData>
              <FormInput
                name='storeAddress.addressLine'
                placeholder='Address Line'
              />
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerEditBusinessAddressForm;
