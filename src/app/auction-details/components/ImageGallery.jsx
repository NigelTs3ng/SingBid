import React, { useState } from 'react'
import Icon from '@/components/AppIcon'

const ImageGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <Icon name="Image" size={48} className="text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]?.url || '/assets/images/no_image.png'}
          alt={`Auction image ${selectedImage + 1}`}
          className={`w-full h-full object-contain transition-transform duration-200 cursor-zoom-in ${
            isZoomed ? 'scale-150' : ''
          }`}
          onClick={toggleZoom}
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/50 text-white text-sm">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square rounded-md overflow-hidden ${
                index === selectedImage ? 'ring-2 ring-primary' : ''
              }`}
            >
              <img
                src={image.url || '/assets/images/no_image.png'}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery