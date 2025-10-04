import React from 'react'
import Select from '@/components/ui/Select'
import Input from '@/components/ui/Input'
import Icon from '@/components/AppIcon'

const PaymentFilters = () => {
  const statusOptions = [
    { value: 'all', label: 'All Statuses' },
    { value: 'completed', label: 'Completed' },
    { value: 'pending', label: 'Pending' },
    { value: 'failed', label: 'Failed' },
    { value: 'refunded', label: 'Refunded' }
  ]

  const dateRangeOptions = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: 'custom', label: 'Custom range' }
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Select
          placeholder="Transaction Status"
          options={statusOptions}
          className="w-full md:w-48"
        />
        <Select
          placeholder="Date Range"
          options={dateRangeOptions}
          className="w-full md:w-48"
        />
        <div className="flex-1">
          <Input
            placeholder="Search transactions..."
            icon="Search"
            type="search"
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentFilters