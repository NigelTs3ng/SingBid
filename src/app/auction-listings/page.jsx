'use client'

import React, { useState } from 'react'
import Header from '@/components/ui/Header'
import FilterPanel from './components/FilterPanel'
import SortControls from './components/SortControls'
import AuctionGrid from './components/AuctionGrid'

export default function AuctionListingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-80 flex-shrink-0">
            <FilterPanel />
          </aside>
          <div className="flex-1">
            <SortControls />
            <AuctionGrid />
          </div>
        </div>
      </div>
    </main>
  )
}