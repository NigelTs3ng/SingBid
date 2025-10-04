'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'
import { AuctionDetailsSkeleton } from '@/components/ui/Skeleton'
import Header from '@/components/ui/Header'
import ImageGallery from '../components/ImageGallery'
import AuctionInfo from '../components/AuctionInfo'
import BiddingPanel from '../components/BiddingPanel'
import BidHistory from '../components/BidHistory'
import SellerInfo from '../components/SellerInfo'
import PaymentSecurity from '../components/PaymentSecurity'

export default function AuctionDetailsPage() {
  const params = useParams()
  const auctionId = params.id
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [auctionData, setAuctionData] = useState(null)

  useEffect(() => {
    async function fetchAuctionDetails() {
      try {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(`/api/auctions/${auctionId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch auction details')
        }
        
        const data = await response.json()
        setAuctionData(data)
      } catch (err) {
        setError(err.message)
        toast.error('Failed to load auction details')
      } finally {
        setIsLoading(false)
      }
    }

    fetchAuctionDetails()
  }, [auctionId])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <AuctionDetailsSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="text-center space-y-4 animate-fade-in">
          <p className="text-destructive">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-primary hover:underline"
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ImageGallery images={auctionData?.images} />
            <AuctionInfo auction={auctionData} />
            <BidHistory auctionId={auctionId} />
          </div>
          <div className="space-y-6">
            <BiddingPanel auction={auctionData} />
            <SellerInfo seller={auctionData?.seller} />
            <PaymentSecurity />
          </div>
        </div>
      </div>
    </main>
  )
}