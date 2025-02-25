import SellerViewUsersActionBtn from './SellerViewUsersActionBtn';

const usersTableColumns = [
  {
    label: 'SL No.',
    key: 'serial',
    content: (value, data, index) => index + 1,
  },
  {
    label: 'Username',
    key: 'userName',
  },
  {
    label: 'Full Name',
    key: 'userFullName',
  },
  {
    label: 'Email',
    key: 'email',
  },

  {
    label: 'Phone',
    key: 'phone',
  },
  {
    label: 'Activation',
    key: 'activated',
    content: (value) => (
      <span className={value ? 'text-success' : 'text-danger'}>
        {value ? 'Activated' : 'Inactive'}
      </span>
    ),
  },
  {
    label: <div className='text-center'>Action</div>,
    content: (_, data) => <SellerViewUsersActionBtn data={data} />,
  },
];

export default usersTableColumns;
