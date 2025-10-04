import React from 'react'
import Select from '../../../components/ui/Select'

const SortControls = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'endingSoon', label: 'Ending Soon' },
    { value: 'priceLowToHigh', label: 'Price: Low to High' },
    { value: 'priceHighToLow', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'mostBids', label: 'Most Bids' }
  ]

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium">Sort by:</span>
      <Select
        value={sortBy}
        onChange={onSortChange}
        options={sortOptions}
        className="w-48"
      />
    </div>
  )
}

export default SortControls