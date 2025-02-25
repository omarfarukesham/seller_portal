import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';

const ShopTypeTable = ({ data }) => {
  const columns = [
    {
      label: 'SL No.',
      key: 'serial',
    },
    {
      label: 'Shope Name',
      key: 'name',
    },
    {
      label: 'Description',
      key: 'description',
    },
    {
      label: 'Shop Type Category Id',
      key: 'shopTypeCategoryId',
    },
    {
      label: 'Shop Type Parent Category Name',
      key: 'shopTypeParentCategoryName',
    },
    // {
    //   label: 'Bank Info',
    //   key: 'bankInfo',
    //   content: (bankInfo) => bankInfo?.name,
    // },
    // {
    //   label: 'Logo',
    //   key: 'logo',
    //   content: (logo) => <img src={logo?.url} className='w-10 h-10' />,
    // },

    {
      label: 'Status',
      key: 'status',
    },
  ];

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default ShopTypeTable;
