import React from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'

const AuctionAdvancedOptions = ({ formData, onUpdate, onNext, onBack }) => {
  const handleChange = (field, value) => {
    onUpdate({
      ...formData,
      [field]: value
    })
  }

  const shippingMethods = [
    { value: 'meetup', label: 'Meet-up' },
    { value: 'singpost', label: 'SingPost Standard' },
    { value: 'singpost-reg', label: 'SingPost Registered' },
    { value: 'courier', label: 'Courier Service' }
  ]

  const paymentMethods = [
    { value: 'paynow', label: 'PayNow' },
    { value: 'bank', label: 'Bank Transfer' },
    { value: 'credit', label: 'Credit Card' }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Advanced Options</h2>

      <div className="space-y-6">
        {/* Shipping Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Shipping</h3>
          
          <Select
            label="Shipping Method"
            value={formData.shippingMethod}
            onChange={(value) => handleChange('shippingMethod', value)}
            options={shippingMethods}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="number"
              label="Shipping Fee (S$)"
              value={formData.shippingFee}
              onChange={(e) => handleChange('shippingFee', e.target.value)}
              min="0"
              step="0.1"
              required
            />

            <div className="space-y-2">
              <label className="text-sm font-medium">Free Shipping</label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="freeShipping"
                  checked={formData.freeShipping}
                  onChange={(e) => handleChange('freeShipping', e.target.checked)}
                  className="rounded border-gray-300"
                />
                <label htmlFor="freeShipping" className="text-sm">
                  Offer free shipping
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Payment</h3>
          
          <Select
            label="Accepted Payment Methods"
            value={formData.paymentMethods || []}
            onChange={(value) => handleChange('paymentMethods', value)}
            options={paymentMethods}
            multiple
            required
          />

          <div className="space-y-2">
            <label className="text-sm font-medium">Payment Terms</label>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="escrow"
                checked={formData.useEscrow}
                onChange={(e) => handleChange('useEscrow', e.target.checked)}
                className="rounded border-gray-300"
              />
              <label htmlFor="escrow" className="text-sm">
                Use SingBid Escrow Service (Recommended)
              </label>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <Input
          label="Additional Notes"
          value={formData.notes}
          onChange={(e) => handleChange('notes', e.target.value)}
          placeholder="Any additional information for buyers..."
          multiline
          rows={3}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="space-x-2"
        >
          <Icon name="ArrowLeft" size={16} />
          <span>Back</span>
        </Button>
        <Button
          onClick={onNext}
          className="space-x-2"
          disabled={!formData.shippingMethod || !formData.paymentMethods?.length}
        >
          <span>Next</span>
          <Icon name="ArrowRight" size={16} />
        </Button>
      </div>
    </div>
  )
}

export default AuctionAdvancedOptions