import MinusThinIcon from '@/assets/icons/MinusThinIcon';
import PlusThinIcon from '@/assets/icons/PlusThinIcon';
import { useGetSellerTypes } from '@/services/seller/shopTypeService';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import ShopTypeCategoriesList from './ShopTypeCategoriesList';
import ShopTypeTableActionBtn from './ShopTypeTableActionBtn';

const ShopTypeCategoriesListItem = ({ shopType }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-y border-light-2 text-left even:bg-light-3'>
      <div
        className={twMerge(
          'p-3 font-light text-label flex gap-2 items-center ',
          isOpen && 'border-b border-gray-4 border-dotted',
        )}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MinusThinIcon /> : <PlusThinIcon />}
        </button>
        <div className='flex-1'>{shopType.name}</div>
        <ShopTypeTableActionBtn data={shopType} />
      </div>

      {isOpen && (
        <div className='ml-10 border-l border-gray-4 border-dotted'>
          <ShopTypeCategoriesList
            restServiceHook={useGetSellerTypes}
            restFilters={{
              shopTypeParentId: shopType.shopTypeId,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ShopTypeCategoriesListItem;
