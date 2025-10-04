'use client'

import Header from '@/components/ui/Header'
import PaymentStats from './components/PaymentStats'
import PaymentFilters from './components/PaymentFilters'
import TransactionTable from './components/TransactionTable'
import PayoutManagement from './components/PayoutManagement'
import BankAccountManagement from './components/BankAccountManagement'
import DisputeManagement from './components/DisputeManagement'

export default function PaymentDashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Payment Dashboard
        </h1>

        {/* Payment Stats */}
        <div className="mb-8">
          <PaymentStats />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <PaymentFilters />
            <TransactionTable />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <PayoutManagement />
            <BankAccountManagement />
            <DisputeManagement />
          </div>
        </div>
      </div>
    </main>
  )
}