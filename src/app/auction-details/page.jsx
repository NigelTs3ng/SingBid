'use client'

import { useSearchParams } from 'next/navigation'
import Header from '@/components/ui/Header'
import ImageGallery from './components/ImageGallery'
import AuctionInfo from './components/AuctionInfo'
import BiddingPanel from './components/BiddingPanel'
import BidHistory from './components/BidHistory'
import SellerInfo from './components/SellerInfo'
import PaymentSecurity from './components/PaymentSecurity'

export default function AuctionDetailsPage() {
  const searchParams = useSearchParams()
  const auctionId = searchParams.get('id')

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ImageGallery />
            <AuctionInfo />
            <BidHistory />
          </div>
          <div className="space-y-6">
            <BiddingPanel />
            <SellerInfo />
            <PaymentSecurity />
          </div>
        </div>
      </div>
    </main>
  )
}