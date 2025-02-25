import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import FormInput from '@/components/form/FormInput';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';

const SellerEditBizInfoForm = () => {
  return (
    <CollapsibleSection
      icon={SpecificationIcon}
      title='Business Information'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          <TableRow>
            <TableHead>BIN Number</TableHead>
            <TableData>
              <FormInput name='binNo' placeholder='BIN Number' />
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>TIN Number</TableHead>
            <TableData>
              <FormInput name='tinNo' placeholder='TIN Number' />
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>Trade License Number</TableHead>
            <TableData>
              <FormInput
                name='tradeLicenseNo'
                placeholder='Trade License Number'
              />
            </TableData>
          </TableRow>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableData>
              <FormInput name='email' placeholder='Business Email' />
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>Mobile</TableHead>
            <TableData>
              <FormInput name='mobile' placeholder='Business Mobile Number' />
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>Telephone</TableHead>
            <TableData>
              <FormInput
                name='telephone'
                placeholder='Business Telephone Number'
              />
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>Website</TableHead>
            <TableData>
              <FormInput name='website' placeholder='Website' />
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerEditBizInfoForm;
