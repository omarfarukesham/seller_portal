import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableRow from '@/components/table/TableRow';
import HTMLContentView from '@/components/ui/HTMLContentView';

const ShopTypeViewForm = ({ data }) => {
  return (
    <div>
      <div className='p-5 overflow-auto'>
        <Table
          className='border border-separate'
          style={{ borderColor: 'lightgray' }}
        >
          <TableBody>
            <TableRow>
              <TableData className='font-bold'>Name</TableData>
              <TableData>{data.name}</TableData>
            </TableRow>
            <TableRow>
              <TableData className='font-bold'>Shop Type Parent Name</TableData>
              <TableData>{data.shopTypeParentName}</TableData>
            </TableRow>
            {/* <FormInput name='shopTypeParentName' label='Shop Type Parent Name' /> */}
            <TableRow>
              <TableData className='font-bold'>Description</TableData>
              <TableData>
                <HTMLContentView htmlContent={data.description} />
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ShopTypeViewForm;
