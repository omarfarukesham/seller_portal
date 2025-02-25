import FormTextarea from '@/components/form/FormTextarea';
import FromDropdownRest from '@/components/form/form-dropdown-rest/FromDropdownRest';
import {
  useGetAreas,
  useGetCountries,
  useGetStates,
  useGetZones,
} from '@/services/country/countryService';

const SellerShippingAddressForm = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
      <FromDropdownRest
        name='shippingAddress.countryId'
        label='Country Name'
        isMulti={false}
        restServiceHook={useGetCountries}
      />
      <FromDropdownRest
        name='shippingAddress.stateId'
        label='State Name'
        isMulti={false}
        restServiceHook={useGetStates}
      />
      <FromDropdownRest
        name='shippingAddress.zoneId'
        label='Zone Name'
        isMulti={false}
        restServiceHook={useGetZones}
      />
      <FromDropdownRest
        name='shippingAddress.areaId'
        label='Area Name'
        isMulti={false}
        restServiceHook={useGetAreas}
      />
      <FormTextarea
        name='shippingAddress.details'
        label='Shipping Details'
        placeholder='Details'
      />
    </div>
  );
};

export default SellerShippingAddressForm;
