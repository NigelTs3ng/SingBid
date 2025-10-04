import React from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'
import { Progress } from '@/components/ui/Progress'

const CurrentPlanCard = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Plan Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold mb-2">Premium Plan</h2>
          <p className="text-sm text-muted-foreground">
            Your subscription renews on Nov 4, 2025
          </p>
        </div>
        <Button variant="outline" className="space-x-2">
          <Icon name="CreditCard" size={16} />
          <span>Change Plan</span>
        </Button>
      </div>

      {/* Usage Stats */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Active Auctions</span>
            <span className="font-medium">8 of 10</span>
          </div>
          <Progress value={80} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Storage Used</span>
            <span className="font-medium">2.1 GB of 5 GB</span>
          </div>
          <Progress value={42} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">API Calls</span>
            <span className="font-medium">8,547 of 10,000</span>
          </div>
          <Progress value={85} />
        </div>
      </div>

      {/* Plan Features */}
      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="text-sm font-medium mb-4">Included Features</h3>
        <div className="grid gap-3">
          {[
            'Up to 10 simultaneous auctions',
            '5 GB storage for images',
            'Priority customer support',
            'Advanced analytics',
            'Custom auction templates'
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={16} className="text-success" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CurrentPlanCard