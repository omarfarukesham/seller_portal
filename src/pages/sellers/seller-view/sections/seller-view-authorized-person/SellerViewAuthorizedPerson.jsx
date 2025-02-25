import ArticleIcon from '@/assets/icons/ArticleIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';

const SellerViewAuthorizedPerson = () => {
  const {
    data: { seller },
  } = useDataContext();

  return (
    <CollapsibleSection
      icon={ArticleIcon}
      title='Authorized Person'
      isCollapsible={false}
      className='p-10 py-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableData>{seller?.authorizedPerson?.name}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableData>{seller?.authorizedPerson?.email}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>NID</TableHead>
            <TableData>{seller?.authorizedPerson?.nid}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Phone</TableHead>
            <TableData>{seller?.authorizedPerson?.mobile}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Telephone</TableHead>
            <TableData>{seller?.authorizedPerson?.telephone}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default SellerViewAuthorizedPerson;
