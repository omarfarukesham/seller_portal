import FormInput from '@/components/form/FormInput';
import FormUploadContentService from '@/components/form/FormUploadContentService';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import { useDirectUploadContent } from '@/services/content/contentService';

const SellerBankInfoForm = () => {
  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        <TableRow>
          <TableHead>Bank name</TableHead>
          <TableData>
            <FormInput name='bankName' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Branch Name</TableHead>
          <TableData>
            <FormInput name='branchName' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Routing No</TableHead>
          <TableData>
            <FormInput name='routingNo' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Account No</TableHead>
          <TableData>
            <FormInput name='accountNo' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Account name</TableHead>
          <TableData>
            <FormInput name='accountName' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Cheque</TableHead>
          <TableData>
            <FormUploadContentService
              name='cheque'
              type='image'
              className='h-48'
              restServiceHook={useDirectUploadContent}
              restData={{ fileType: 'SELLER_DOCUMENT' }}
            />
          </TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SellerBankInfoForm;
