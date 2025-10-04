import React from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'

const DisputeManagement = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Active Disputes</h3>
        <Button variant="outline" size="sm" className="space-x-2">
          <Icon name="ArrowRight" size={16} />
          <span>View All</span>
        </Button>
      </div>

      <div className="space-y-4">
        {/* Disputes List */}
        <div className="space-y-3">
          {[
            {
              id: 'DSP-001',
              item: 'Vintage Camera',
              amount: 'S$450.00',
              status: 'in_review',
              date: '2025-10-02'
            },
            {
              id: 'DSP-002',
              item: 'Art Print Collection',
              amount: 'S$225.00',
              status: 'pending',
              date: '2025-10-01'
            }
          ].map((dispute) => (
            <div
              key={dispute.id}
              className="bg-muted/30 rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{dispute.item}</span>
                <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                  dispute.status === 'in_review'
                    ? 'bg-warning/10 text-warning'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {dispute.status.replace('_', ' ')}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">{dispute.amount}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Filed on</span>
                <span>{dispute.date}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full space-x-2">
                <Icon name="MessageSquare" size={16} />
                <span>View Details</span>
              </Button>
            </div>
          ))}
        </div>

        {/* Help Box */}
        <div className="bg-muted/30 rounded-lg p-4 text-sm space-y-2">
          <div className="flex items-start space-x-2">
            <Icon name="HelpCircle" size={16} className="text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium">Need Help?</p>
              <p className="text-muted-foreground">
                Contact our support team for assistance with dispute resolution.
              </p>
              <Button variant="link" className="h-auto p-0 text-primary">
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisputeManagement