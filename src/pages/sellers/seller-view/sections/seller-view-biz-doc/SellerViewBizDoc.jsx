import DocumentIcon from '@/assets/icons/DocumentIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';

const SellerViewBizDoc = () => {
  const {
    data: { seller },
  } = useDataContext();

  return (
    <CollapsibleSection
      icon={DocumentIcon}
      title='Business Documents'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          <TableRow>
            <TableHead>BIN</TableHead>
            <TableData>
              {seller?.bizDoc?.bin ? (
                <iframe
                  title='bin'
                  src={seller?.bizDoc?.bin}
                  width='100%'
                  height='500px'
                />
              ) : (
                <span>Not found</span>
              )}
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>TIN</TableHead>
            <TableData>
              {seller?.bizDoc?.tin ? (
                <iframe
                  title='tin'
                  src={seller?.bizDoc?.tin}
                  width='100%'
                  height='500px'
                />
              ) : (
                <span>Not found</span>
              )}
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>Trade License</TableHead>
            <TableData>
              {seller?.bizDoc?.tradeLicense ? (
                <iframe
                  title='trade license'
                  src={seller?.bizDoc?.tradeLicense}
                  width='100%'
                  height='500px'
                />
              ) : (
                <span>Not found</span>
              )}
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>RJSC</TableHead>
            <TableData>
              {seller?.bizDoc?.rjsc ? (
                <iframe
                  title='rjsc'
                  src={seller?.bizDoc?.rjsc}
                  width='100%'
                  height='500px'
                />
              ) : (
                <span>Not found</span>
              )}
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerViewBizDoc;
