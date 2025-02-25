import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDataContext } from '@/context/dataContext';
import { useGetSellerUsers } from '@/services/user/useSellerUser';
import { useEffect, useState } from 'react';
import SellerViewUserFiltersModal from './SellerViewUserFiltersModal';
import SellerViewUsersFilters from './SellerViewUsersFilters';
import SellerViewUsersTable from './SellerViewUsersTable';

const SellerViewUsersBody = () => {
  const {
    data: { seller },
  } = useDataContext();

  const defaultFilters = {
    perPage: 10,
    page: 1,
    sellerId: seller?.id,
  };

  const [filters, setFilters] = useState(defaultFilters);
  const { data, error, isFetching, refetch } = useGetSellerUsers(filters);

  useEffect(() => {
    refetch(filters);
  }, [filters, refetch]);

  const handleFilterChange = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters,
    });
  };

  // Apply the filters
  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  // Clearing the filters
  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <PageInnerContainer className='flex flex-col'>
      <SellerViewUsersFilters
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
        applyFilters={applyFilters}
        clearFilters={clearFilters}
      />

      {isFetching && <LoadingSpinner text='Loading Seller Users...' />}
      {!isFetching && data && !error && (
        <SellerViewUsersTable data={data?.items} />
      )}
      {/* <div>
        <SellerViewUsersFiltersFooter
          onFilterChange={handleFilterChange}
          filters={filters}
          paginate={data?.paginate}
          applyFilters={applyFilters}
          clearFilters={clearFilters}
        />
      </div> */}

      {!isFetching && error && <PageError message={error.message} />}

      <SellerViewUserFiltersModal
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
      />
    </PageInnerContainer>
  );
};

export default SellerViewUsersBody;
