import FormInput from '@/components/form/FormInput';
import FromDropdownRest from '@/components/form/form-dropdown-rest/FromDropdownRest';
import {
  useGetAreas,
  useGetStates,
  useGetZones,
} from '@/services/country/countryService';

const WarehouseAddressForm = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
      <FormInput
        name='warehouseAddress.name'
        label='Warehouse Name'
        className='bg-white'
        placeholder='Warehouse Name'
      />
      <FromDropdownRest
        name='warehouseAddress.stateId'
        label='State (Division)'
        isMulti={false}
        className='bg-white'
        restServiceHook={useGetStates}
      />
      <FromDropdownRest
        name='warehouseAddress.zoneId'
        label='Zone (District)'
        isMulti={false}
        restServiceHook={useGetZones}
        className='bg-white'
      />
      <FromDropdownRest
        name='warehouseAddress.areaId'
        label='Area (Thana)'
        isMulti={false}
        restServiceHook={useGetAreas}
        className='bg-white'
      />
      <FormInput
        name='warehouseAddress.addressLine'
        label='Address Line'
        placeholder='Address Line'
      />
    </div>
  );
};

export default WarehouseAddressForm;
