'use client'

import Header from '@/components/ui/Header'
import PricingCards from './components/PricingCards'
import TrustSignalsSection from '@/pages/home-page/components/TrustSignalsSection'

export default function SubscriptionPlansPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your business needs. All plans include core features with different usage limits.
          </p>
        </div>

        <PricingCards />

        {/* Trust Signals Section */}
        <div className="mt-16">
          <TrustSignalsSection />
        </div>
      </div>
    </main>
  )
}