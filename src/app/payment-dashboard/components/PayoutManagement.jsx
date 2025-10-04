import React from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'

const PayoutManagement = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Payout Management</h3>
        <Button variant="outline" size="sm" className="space-x-2">
          <Icon name="ArrowRight" size={16} />
          <span>View All</span>
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Available for Payout</p>
          <p className="text-2xl font-bold">S$1,458.00</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Next Payout Date</p>
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-muted-foreground" />
            <span>October 7, 2025</span>
          </div>
        </div>

        <Button className="w-full space-x-2">
          <Icon name="BanknoteIcon" size={16} />
          <span>Request Payout</span>
        </Button>
      </div>

      {/* Recent Payouts */}
      <div className="space-y-4 border-t border-border pt-4">
        <h4 className="text-sm font-medium">Recent Payouts</h4>
        <div className="space-y-3">
          {[
            { date: 'Sep 30, 2025', amount: 'S$856.00', status: 'completed' },
            { date: 'Sep 23, 2025', amount: 'S$1,247.00', status: 'completed' },
          ].map((payout, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="space-y-1">
                <p className="font-medium">{payout.amount}</p>
                <p className="text-muted-foreground">{payout.date}</p>
              </div>
              <span className="text-success">Completed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PayoutManagement