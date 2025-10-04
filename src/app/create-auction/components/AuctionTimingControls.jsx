import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'

const AuctionTimingControls = ({ formData, onUpdate, onNext, onBack }) => {
  const [customDuration, setCustomDuration] = useState(false)
  
  const durationOptions = [
    { value: '3', label: '3 days' },
    { value: '5', label: '5 days' },
    { value: '7', label: '7 days' },
    { value: '10', label: '10 days' },
    { value: 'custom', label: 'Custom duration' }
  ]

  const handleDurationChange = (value) => {
    if (value === 'custom') {
      setCustomDuration(true)
      onUpdate({
        ...formData,
        duration: formData.duration || 7
      })
    } else {
      setCustomDuration(false)
      onUpdate({
        ...formData,
        duration: parseInt(value)
      })
    }
  }

  const handleCustomDurationChange = (e) => {
    const value = parseInt(e.target.value)
    if (value >= 1 && value <= 30) {
      onUpdate({
        ...formData,
        duration: value
      })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Auction Timing</h2>

      <div className="space-y-4">
        <Select
          label="Auction Duration"
          value={customDuration ? 'custom' : formData.duration?.toString()}
          onChange={handleDurationChange}
          options={durationOptions}
        />

        {customDuration && (
          <Input
            type="number"
            label="Custom Duration (days)"
            value={formData.duration}
            onChange={handleCustomDurationChange}
            min={1}
            max={30}
            required
            description="Enter a duration between 1 and 30 days"
          />
        )}

        <div className="bg-muted/30 rounded-lg p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-muted-foreground" />
            <span className="text-sm">
              Your auction will start immediately after approval
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-muted-foreground" />
            <span className="text-sm">
              It will run for {formData.duration} days
            </span>
          </div>
        </div>
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
          disabled={!formData.duration}
        >
          <span>Next</span>
          <Icon name="ArrowRight" size={16} />
        </Button>
      </div>
    </div>
  )
}

export default AuctionTimingControls