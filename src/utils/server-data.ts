'use server'

import { cache } from 'react'
import { headers } from 'next/headers'
import { getSession } from './session'
import { ApiError } from './api'

export const revalidate = 60 // Revalidate data every 60 seconds

export const preload = (endpoint: string) => {
  void fetchData(endpoint)
}

export const fetchData = cache(async (endpoint: string) => {
  const session = await getSession()
  const headersList = headers()
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': session ? `Bearer ${session.token}` : '',
        'X-Request-Id': headersList.get('x-request-id') || '',
      },
      next: { revalidate }
    })

    if (!response.ok) {
      throw new ApiError('Failed to fetch data', response.status)
    }

    return response.json()
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    throw error
  }
})

export const fetchAuctionData = cache(async (id: string) => {
  return fetchData(`/auctions/${id}`)
})

export const fetchActiveAuctions = cache(async () => {
  return fetchData('/auctions?status=active')
})

export const fetchCompletedAuctions = cache(async () => {
  return fetchData('/auctions?status=completed')
})

export const fetchUserProfile = cache(async () => {
  const session = await getSession()
  if (!session) return null
  return fetchData('/users/profile')
})