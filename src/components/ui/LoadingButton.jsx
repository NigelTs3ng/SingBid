'use client'

import { forwardRef } from 'react'
import Button from './Button'
import Icon from '../AppIcon'

const LoadingButton = forwardRef(({ 
  children, 
  loading = false,
  loadingText = "Loading...",
  ...props 
}, ref) => {
  return (
    <Button
      ref={ref}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <Icon
            name="Loader2"
            className="mr-2 h-4 w-4 animate-spin"
          />
          {loadingText}
        </>
      ) : children}
    </Button>
  )
})

LoadingButton.displayName = "LoadingButton"

export { LoadingButton }