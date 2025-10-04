import React from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'

const AuctionPreview = ({ formData, images, onNext, onBack }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Preview Your Auction</h2>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {/* Image Gallery */}
        <div className="aspect-video relative bg-muted">
          {images.length > 0 ? (
            <img
              src={images[0].preview}
              alt={formData.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <Icon name="Image" size={48} className="text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Auction Details */}
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{formData.title}</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">
              {formData.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">
                Starting Price
              </h4>
              <p className="text-2xl font-bold">S${formData.startingPrice}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">
                Duration
              </h4>
              <p className="text-2xl font-bold">{formData.duration} days</p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                Category
              </h4>
              <div className="flex items-center space-x-2">
                <Icon name="Tag" size={16} />
                <span>{formData.category}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                Shipping
              </h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={16} />
                  <span>{formData.shippingMethod}</span>
                </div>
                {formData.freeShipping ? (
                  <p className="text-success text-sm">Free Shipping</p>
                ) : (
                  <p className="text-sm">S${formData.shippingFee} shipping fee</p>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                Payment Methods
              </h4>
              <div className="flex flex-wrap gap-2">
                {formData.paymentMethods?.map((method) => (
                  <span
                    key={method}
                    className="inline-flex items-center space-x-1 text-sm bg-muted px-2 py-1 rounded"
                  >
                    <Icon name="CreditCard" size={14} />
                    <span>{method}</span>
                  </span>
                ))}
              </div>
            </div>

            {formData.notes && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Additional Notes
                </h4>
                <p className="text-sm whitespace-pre-wrap">{formData.notes}</p>
              </div>
            )}
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
        >
          <span>Submit Auction</span>
          <Icon name="Check" size={16} />
        </Button>
      </div>
    </div>
  )
}

export default AuctionPreview