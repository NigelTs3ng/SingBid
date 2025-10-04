import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'

const AuctionImageUpload = ({ images, onUpdate, onNext, onBack }) => {
  const [dragging, setDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => {
    setDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    )
    handleFiles(files)
  }

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files).filter(file => 
      file.type.startsWith('image/')
    )
    handleFiles(files)
  }

  const handleFiles = async (files) => {
    const newImages = await Promise.all(
      files.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }))
    )
    onUpdate([...images, ...newImages])
  }

  const removeImage = (index) => {
    const newImages = [...images]
    URL.revokeObjectURL(newImages[index].preview)
    newImages.splice(index, 1)
    onUpdate(newImages)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Upload Images</h2>
      
      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragging ? 'border-primary bg-primary/5' : 'border-border'
        }`}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload" className="cursor-pointer">
          <div className="space-y-4">
            <Icon name="Upload" size={32} className="mx-auto text-muted-foreground" />
            <div>
              <p className="text-lg font-medium">
                Drop your images here or click to upload
              </p>
              <p className="text-sm text-muted-foreground">
                Support PNG, JPG or JPEG (max 5MB per image)
              </p>
            </div>
          </div>
        </label>
      </div>

      {/* Image Preview Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.preview}
                alt={`Upload preview ${index + 1}`}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

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
          disabled={images.length === 0}
        >
          <span>Next</span>
          <Icon name="ArrowRight" size={16} />
        </Button>
      </div>
    </div>
  )
}

export default AuctionImageUpload