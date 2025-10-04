import React from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const FilterControls = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <Select
          className="w-full md:w-48"
          placeholder="Category"
          options={[
            { value: 'all', label: 'All Categories' },
            { value: 'electronics', label: 'Electronics' },
            { value: 'collectibles', label: 'Collectibles' },
            { value: 'art', label: 'Art' },
            { value: 'jewelry', label: 'Jewelry' },
          ]}
        />
        <Select
          className="w-full md:w-48"
          placeholder="Sort By"
          options={[
            { value: 'ending-soon', label: 'Ending Soon' },
            { value: 'newest', label: 'Newest' },
            { value: 'price-high', label: 'Price: High to Low' },
            { value: 'price-low', label: 'Price: Low to High' },
          ]}
        />
        <Input
          type="search"
          placeholder="Search auctions..."
          className="w-full md:w-64"
        />
      </div>
    </div>
  );
};

export default FilterControls;