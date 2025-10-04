'use client'

import { useRouter, usePathname } from 'next/navigation'

export function useNavigation() {
  const router = useRouter()
  const pathname = usePathname()

  return {
    navigate: (path, options = {}) => {
      const { state = {}, replace = false } = options
      
      // Handle search params if they exist
      const url = new URL(path, window.location.origin)
      const searchParams = url.searchParams.toString()
      const finalPath = searchParams ? `${url.pathname}?${searchParams}` : url.pathname

      if (replace) {
        router.replace(finalPath)
      } else {
        router.push(finalPath)
      }
    },
    pathname,
    back: () => router.back(),
    forward: () => router.forward()
  }
}