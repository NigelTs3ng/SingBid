import React from 'react'
import { Checkbox } from '@/components/ui/Checkbox'
import Select from '../../../components/ui/Select'

const FilterPanel = ({ filters, onFilterChange }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-3 py-2 border rounded-md"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full px-3 py-2 border rounded-md"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <Select
            value={filters.category}
            onChange={(value) => onFilterChange('category', value)}
            options={[
              { value: 'all', label: 'All Categories' },
              { value: 'electronics', label: 'Electronics' },
              { value: 'fashion', label: 'Fashion' },
              { value: 'home', label: 'Home & Garden' },
              { value: 'collectibles', label: 'Collectibles' },
            ]}
          />
        </div>

        {/* Auction Status */}
        <div>
          <label className="block text-sm font-medium mb-2">Auction Status</label>
          <div className="space-y-2">
            <Checkbox
              label="Active Auctions"
              checked={filters.showActive}
              onChange={(checked) => onFilterChange('showActive', checked)}
            />
            <Checkbox
              label="Ending Soon"
              checked={filters.showEndingSoon}
              onChange={(checked) => onFilterChange('showEndingSoon', checked)}
            />
            <Checkbox
              label="Recently Added"
              checked={filters.showRecentlyAdded}
              onChange={(checked) => onFilterChange('showRecentlyAdded', checked)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel