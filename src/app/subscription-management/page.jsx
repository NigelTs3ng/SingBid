'use client'

import Header from '@/components/ui/Header'
import CurrentPlanCard from './components/CurrentPlanCard'
import BillingHistoryCard from './components/BillingHistoryCard'
import SubscriptionSettingsCard from './components/SubscriptionSettingsCard'
import PlanComparisonTable from './components/PlanComparisonTable'

export default function SubscriptionManagementPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Subscription Management
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <CurrentPlanCard />
            <BillingHistoryCard />
            <PlanComparisonTable />
          </div>

          {/* Sidebar */}
          <div>
            <SubscriptionSettingsCard />
          </div>
        </div>
      </div>
    </main>
  )
}