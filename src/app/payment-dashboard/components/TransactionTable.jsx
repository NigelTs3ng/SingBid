import React from 'react'
import Icon from '@/components/AppIcon'

const TransactionTable = () => {
  const transactions = [
    {
      id: 'TRX-001',
      date: '2025-10-03',
      type: 'Sale',
      description: 'Vintage Watch Auction #1234',
      amount: 'S$458.00',
      status: 'completed'
    },
    {
      id: 'TRX-002',
      date: '2025-10-02',
      type: 'Purchase',
      description: 'Antique Vase Auction #9876',
      amount: 'S$225.50',
      status: 'pending'
    },
    {
      id: 'TRX-003',
      date: '2025-10-01',
      type: 'Refund',
      description: 'Collectible Cards Auction #5678',
      amount: 'S$75.00',
      status: 'refunded'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10'
      case 'pending':
        return 'text-warning bg-warning/10'
      case 'failed':
        return 'text-destructive bg-destructive/10'
      case 'refunded':
        return 'text-info bg-info/10'
      default:
        return 'text-muted-foreground bg-muted'
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Transaction ID</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Description</th>
              <th className="text-right p-4 text-sm font-medium text-muted-foreground">Amount</th>
              <th className="text-center p-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="p-4 text-sm">{transaction.id}</td>
                <td className="p-4 text-sm">{transaction.date}</td>
                <td className="p-4 text-sm">{transaction.type}</td>
                <td className="p-4 text-sm">{transaction.description}</td>
                <td className="p-4 text-sm text-right font-medium">{transaction.amount}</td>
                <td className="p-4 text-sm">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                    getStatusColor(transaction.status)
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-right">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Icon name="MoreHorizontal" size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-border p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">3</span> of{' '}
            <span className="font-medium">12</span> transactions
          </p>
          <div className="flex items-center space-x-2">
            <button
              className="p-2 text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:pointer-events-none"
              disabled
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionTable