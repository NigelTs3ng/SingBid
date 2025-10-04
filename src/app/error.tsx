'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
          <Icon
            name="AlertTriangle"
            className="text-destructive"
            size={32}
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">
          Oops! Something went wrong
        </h1>
        <p className="text-muted-foreground mb-6">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
          >
            <Icon name="RefreshCcw" size={16} />
            <span>Refresh Page</span>
          </Button>
          <Button onClick={reset}>
            <Icon name="RotateCcw" size={16} />
            <span>Try Again</span>
          </Button>
        </div>
      </div>
    </div>
  )
}