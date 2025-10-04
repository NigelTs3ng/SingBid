import React from 'react'
import Icon from '@/components/AppIcon'

const BillingHistoryCard = () => {
  const transactions = [
    {
      id: 'INV-001',
      date: '2025-10-01',
      amount: 'S$49.00',
      status: 'paid',
      invoice: true
    },
    {
      id: 'INV-002',
      date: '2025-09-01',
      amount: 'S$49.00',
      status: 'paid',
      invoice: true
    },
    {
      id: 'INV-003',
      date: '2025-08-01',
      amount: 'S$39.00',
      status: 'paid',
      invoice: true
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'paid':
        return <Icon name="CheckCircle" size={16} className="text-success" />
      case 'pending':
        return <Icon name="Clock" size={16} className="text-warning" />
      case 'failed':
        return <Icon name="XCircle" size={16} className="text-destructive" />
      default:
        return null
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold">Billing History</h2>
      </div>

      <div className="divide-y divide-border">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Receipt" className="text-primary" />
              </div>
              <div>
                <p className="font-medium">{transaction.id}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="font-medium">{transaction.amount}</p>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  {getStatusIcon(transaction.status)}
                  <span className="capitalize">{transaction.status}</span>
                </div>
              </div>

              {transaction.invoice && (
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Download" size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="p-4 border-t border-border">
        <button className="w-full text-center text-sm text-primary hover:text-primary/80 transition-colors">
          View All Transactions
        </button>
      </div>
    </div>
  )
}

export default BillingHistoryCard