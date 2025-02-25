import SellersTableActionBtn from './SellersTableActionBtn';

const sellersTableColumns = [
  {
    label: 'SL No.',
    key: 'serial',
  },
  {
    label: 'Id',
    key: 'id',
  },
  {
    label: 'Store Name',
    key: 'storeName',
  },
  {
    label: 'Authorized Person',
    key: 'authorizedPerson',
    content: (authorizedPerson) => authorizedPerson?.name,
  },
  {
    label: 'Profile Status',
    key: 'profileStatus',
    content: (profileStatus) => (
      <>
        <p
          className={
            profileStatus === 'VERIFIED' ? 'text-success' : 'text-danger'
          }
        >
          {profileStatus}
        </p>
      </>
    ),
  },
  {
    label: <div className='text-center'>Action</div>,
    content: (_, rowData) => <SellersTableActionBtn data={rowData} />,
  },
];

export default sellersTableColumns;
