import React from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'

const SubscriptionSettingsCard = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Subscription Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your subscription preferences and billing settings
        </p>
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Payment Method</h3>
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="CreditCard" className="text-primary" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/26</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Icon name="Pencil" size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Billing Address</h3>
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">123 Business Ave</p>
              <p className="text-sm text-muted-foreground">Singapore 123456</p>
            </div>
            <Button variant="ghost" size="sm">
              <Icon name="Pencil" size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Email Preferences */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Email Notifications</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-gray-300"
            />
            <span className="text-sm">Billing receipts</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-gray-300"
            />
            <span className="text-sm">Plan change notifications</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-gray-300"
            />
            <span className="text-sm">Usage alerts</span>
          </label>
        </div>
      </div>

      {/* Cancel Subscription */}
      <div className="pt-6 border-t border-border">
        <Button
          variant="outline"
          className="w-full text-destructive hover:text-destructive space-x-2"
        >
          <Icon name="XCircle" size={16} />
          <span>Cancel Subscription</span>
        </Button>
      </div>
    </div>
  )
}

export default SubscriptionSettingsCard