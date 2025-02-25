import Pagination from '@/components/ui/Pagination';

const SellerViewUsersFiltersFooter = ({
  onFilterChange,
  filters,
  paginate,
}) => {
  return (
    <div className='flex-1 flex flex-col gap-3 md:items-end p-4'>
      <Pagination
        perPage={filters.perPage}
        page={filters.page}
        onChange={onFilterChange}
        paginate={paginate}
      />
    </div>
  );
};

export default SellerViewUsersFiltersFooter;
