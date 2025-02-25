import FormInput from '@/components/form/FormInput';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';

const SellerEditAuthorizerInfoForm = () => {
  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableData>
            <FormInput name='name' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Email</TableHead>
          <TableData>
            <FormInput name='email' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>NID</TableHead>
          <TableData>
            <FormInput name='nid' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Mobile</TableHead>
          <TableData>
            <FormInput name='mobile' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Telephone</TableHead>
          <TableData>
            <FormInput name='telephone' />
          </TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SellerEditAuthorizerInfoForm;
