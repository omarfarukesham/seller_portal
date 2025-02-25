import FormTextarea from '@/components/form/FormTextarea';
import FromDropdownRest from '@/components/form/form-dropdown-rest/FromDropdownRest';
import {
  useGetAreas,
  useGetCountries,
  useGetStates,
  useGetZones,
} from '@/services/country/countryService';

const SellerBillingAddressForm = () => {
  return (
    <>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
        {/* Common billing address form fields */}
        <FromDropdownRest
          name='billingAddress.countryId'
          label='Country Name'
          isMulti={false}
          restServiceHook={useGetCountries}
        />
        <FromDropdownRest
          name='billingAddress.stateId'
          label='State Name'
          isMulti={false}
          restServiceHook={useGetStates}
        />

        <FromDropdownRest
          name='billingAddress.zoneId'
          label='Zone Name'
          isMulti={false}
          restServiceHook={useGetZones}
        />
        <FromDropdownRest
          name='billingAddress.areaId'
          label='Area Name'
          isMulti={false}
          restServiceHook={useGetAreas}
        />
        <FormTextarea
          name='billingAddress.details'
          label='Billing Details'
          placeholder='Details'
        />
      </div>
    </>
  );
};

export default SellerBillingAddressForm;
