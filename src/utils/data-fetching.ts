import { cache } from 'react'
import { unstable_serialize } from 'swr'

type FetchOptions = {
  revalidate?: number
  tags?: string[]
}

const defaultOptions: FetchOptions = {
  revalidate: 60,
  tags: []
}

export const createKey = (endpoint: string, params?: Record<string, any>) => {
  if (!params) return endpoint
  const query = new URLSearchParams(params).toString()
  return `${endpoint}?${query}`
}

export const prefetch = cache(async (endpoint: string, options: FetchOptions = {}) => {
  const { revalidate, tags } = { ...defaultOptions, ...options }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    next: { revalidate, tags }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return response.json()
})

export const mutate = async (endpoint: string, data?: any) => {
  const key = unstable_serialize(endpoint)
  const cache = await caches.open('data-cache')
  
  if (data) {
    await cache.put(
      key,
      new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      })
    )
  } else {
    await cache.delete(key)
  }
}

export const invalidateTag = async (tag: string) => {
  await fetch(`/api/revalidate?tag=${tag}`, { method: 'POST' })
}

export const preloadData = async (endpoints: string[]) => {
  return Promise.all(endpoints.map(endpoint => prefetch(endpoint)))
}