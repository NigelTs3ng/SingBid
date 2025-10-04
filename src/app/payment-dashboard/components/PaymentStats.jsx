import React from 'react'
import Icon from '@/components/AppIcon'

const PaymentStats = () => {
  const stats = [
    {
      label: 'Total Balance',
      value: 'S$2,458.00',
      icon: 'Wallet',
      trend: '+12.5%',
      trendUp: true
    },
    {
      label: 'Pending Payments',
      value: 'S$856.00',
      icon: 'Clock',
      count: '3 pending'
    },
    {
      label: 'Total Sales',
      value: 'S$12,847.00',
      icon: 'DollarSign',
      trend: '+23.8%',
      trendUp: true
    },
    {
      label: 'Active Disputes',
      value: '2',
      icon: 'AlertTriangle',
      status: 'In Progress'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name={stat.icon} className="text-primary" />
            </div>
            {stat.trend && (
              <span className={`text-sm ${
                stat.trendUp ? 'text-success' : 'text-destructive'
              }`}>
                {stat.trend}
              </span>
            )}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
          {(stat.count || stat.status) && (
            <p className="text-sm text-muted-foreground">
              {stat.count || stat.status}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default PaymentStats