import React from 'react'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'

const AuctionBasicDetails = ({ formData, onChange }) => {
  const categories = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'collectibles', label: 'Collectibles' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'art', label: 'Art' },
    { value: 'jewelry', label: 'Jewelry & Watches' },
    { value: 'vehicles', label: 'Vehicles' },
    { value: 'other', label: 'Other' }
  ]

  return (
    <div className="space-y-6">
      <Input
        label="Title"
        placeholder="Enter a descriptive title for your auction"
        value={formData?.title}
        onChange={(e) => onChange('title', e.target.value)}
        required
      />

      <Input
        label="Description"
        placeholder="Provide detailed information about your item"
        value={formData?.description}
        onChange={(e) => onChange('description', e.target.value)}
        multiline
        rows={4}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Category"
          options={categories}
          value={formData?.category}
          onChange={(value) => onChange('category', value)}
          required
        />

        <Input
          label="Starting Price"
          type="number"
          placeholder="0.00"
          value={formData?.startingPrice}
          onChange={(e) => onChange('startingPrice', e.target.value)}
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Auction Duration (days)"
          type="number"
          placeholder="7"
          value={formData?.duration}
          onChange={(e) => onChange('duration', e.target.value)}
          min="1"
          max="30"
          required
        />

        <Input
          label="Reserve Price (optional)"
          type="number"
          placeholder="0.00"
          value={formData?.reservePrice}
          onChange={(e) => onChange('reservePrice', e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Shipping Options</label>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="freeShipping"
            checked={formData?.freeShipping}
            onChange={(e) => onChange('freeShipping', e.target.checked)}
            className="rounded border-gray-300"
          />
          <label htmlFor="freeShipping" className="text-sm">
            Offer Free Shipping
          </label>
        </div>
      </div>
    </div>
  )
}

export default AuctionBasicDetails