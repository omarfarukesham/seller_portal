import ShopIcon from '@/assets/icons/ShopIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { twMerge } from 'tailwind-merge';

const SellerViewStoreInfo = () => {
  const {
    data: { seller },
  } = useDataContext();

  return (
    <CollapsibleSection
      icon={ShopIcon}
      title='Store Information'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          <TableRow>
            <TableHead>Store Name </TableHead>
            <TableData>{seller?.storeName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Store Display Name</TableHead>
            <TableData>{seller?.storeDisplayName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Logo </TableHead>
            <TableData>
              {' '}
              {seller?.logo?.url ? (
                <img
                  alt='Seller Certificate'
                  src={seller?.logo?.url}
                  className='w-40 h-40 rounded-full'
                />
              ) : (
                <span>No Logo available</span>
              )}
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>Banner Image </TableHead>
            <TableData>
              {seller?.bannerImage?.url ? (
                <img
                  alt='Seller Banner Img'
                  src={seller?.bannerImage?.url}
                  className='w-full h-40'
                />
              ) : (
                <span>No Banner Image</span>
              )}
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead> Shop Type Category </TableHead>
            <TableData>{seller?.shopTypeHierarchy?.nameHierarchy}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Profile Status</TableHead>
            <TableData>
              <div
                className={twMerge(
                  'font-bold text-danger',
                  seller?.profileStatus === 'VERIFIED' && 'text-success',
                )}
              >
                {seller?.profileStatus}
              </div>
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerViewStoreInfo;
