'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Button from './Button'
import Icon from '../AppIcon'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" /> // Prevent layout shift
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Icon name="Sun" className="h-5 w-5" />
      ) : (
        <Icon name="Moon" className="h-5 w-5" />
      )}
    </Button>
  )
}