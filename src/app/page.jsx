'use client'

import Header from '../components/ui/Header'
import HeroSection from '../pages/home-page/components/HeroSection'
import FilterControls from '../pages/home-page/components/FilterControls'
import ActiveAuctionsGrid from '../pages/home-page/components/ActiveAuctionsGrid'
import RecentlyCompletedSection from '../pages/home-page/components/RecentlyCompletedSection'
import TrustSignalsSection from '../pages/home-page/components/TrustSignalsSection'
import Button from '../components/ui/Button'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            Welcome to <span className="text-primary">SingBid</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Singapore's premier online auction marketplace. Discover unique items, 
            place competitive bids, and win amazing deals from verified sellers across the island.
          </p>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={() => window.location.href = '/auction-listings'}
              iconName="Search"
              iconPosition="left"
              className="px-8 py-3"
            >
              Browse All Auctions
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/create-auction'}
              iconName="Plus"
              iconPosition="left"
              className="px-8 py-3"
            >
              Start Selling
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Filter Controls */}
        <FilterControls />

        {/* Active Auctions Grid */}
        <ActiveAuctionsGrid />

        {/* Recently Completed Section */}
        <RecentlyCompletedSection />

        {/* Trust Signals Section */}
        <TrustSignalsSection />

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-center text-white mb-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Great Deal</h2>
            <p className="text-lg mb-6 opacity-90">
              Get notified about new auctions, ending soon alerts, and exclusive deals 
              from your favorite categories.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button
                variant="secondary"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Join 15,000+ users who get the best auction alerts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}