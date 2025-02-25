import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ShopTypeCategoriesListEmpty from './ShopTypeCategoriesListEmpty';
import ShopTypeCategoriesListItem from './ShopTypeCategoriesListItem';

const ShopTypeCategoriesList = ({
  shopTypes = [],
  restServiceHook = () => ({
    data: { items: shopTypes },
    error: null,
    isFetching: false,
  }),
  restFilters,
}) => {
  const { data, error, isFetching } = restServiceHook(restFilters);
  return (
    <div className='h-full flex flex-col overflow-auto'>
      {isFetching && <LoadingSpinner message='Loading Children Categories' />}
      {!isFetching &&
        !error &&
        data?.items.map((shopType) => (
          <ShopTypeCategoriesListItem shopType={shopType} key={shopType.id} />
        ))}
      {!isFetching && !error && !data?.items?.length && (
        <ShopTypeCategoriesListEmpty />
      )}
      {!isFetching && error && <PageError message={error.message} />}
    </div>
  );
};

export default ShopTypeCategoriesList;
