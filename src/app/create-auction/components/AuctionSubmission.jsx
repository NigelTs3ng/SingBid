import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'
import { LoadingButton } from '@/components/ui/LoadingButton'

const AuctionSubmission = ({ formData, images, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      setError(null)

      // TODO: Implement actual submission logic
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Redirect to success page or auction details
      window.location.href = '/auction-listings'
    } catch (err) {
      setError(err.message || 'Failed to submit auction')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Submit Your Auction</h2>

      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        {/* Confirmation Message */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-lg font-medium">
            <Icon name="AlertCircle" className="text-primary" />
            <span>Please review your submission</span>
          </div>
          <p className="text-muted-foreground">
            Once submitted, your auction will be reviewed by our team. This usually takes 1-2 business days.
            You will be notified via email once your auction is approved and live.
          </p>
        </div>

        {/* Summary */}
        <div className="space-y-4 border-t border-border pt-6">
          <h3 className="font-medium">Submission Summary</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Title</p>
              <p className="font-medium">{formData.title}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Category</p>
              <p className="font-medium">{formData.category}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Starting Price</p>
              <p className="font-medium">S${formData.startingPrice}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Duration</p>
              <p className="font-medium">{formData.duration} days</p>
            </div>
            <div>
              <p className="text-muted-foreground">Images</p>
              <p className="font-medium">{images.length} uploaded</p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={onBack}
            className="space-x-2"
            disabled={isSubmitting}
          >
            <Icon name="ArrowLeft" size={16} />
            <span>Back</span>
          </Button>
          <LoadingButton
            onClick={handleSubmit}
            loading={isSubmitting}
            className="space-x-2"
          >
            <Icon name="Send" size={16} />
            <span>Submit Auction</span>
          </LoadingButton>
        </div>
      </div>
    </div>
  )
}

export default AuctionSubmission