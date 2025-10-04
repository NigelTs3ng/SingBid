'use client'

import NextImage from 'next/image'
import { cn } from '../utils/cn'
import { useState } from 'react'

export default function AppImage({ 
  className, 
  fallback = '/assets/images/no_image.png',
  alt,
  ...props 
}) {
  const [error, setError] = useState(false)

  return (
    <NextImage
      className={cn(
        'transition-all duration-300',
        error ? 'animate-pulse' : '',
        className
      )}
      alt={alt || 'Image'}
      onError={() => setError(true)}
      src={error ? fallback : props.src}
      {...props}
    />
  )
}
