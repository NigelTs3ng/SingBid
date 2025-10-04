import React from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'

const BankAccountManagement = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Bank Account</h3>
        <Button variant="ghost" size="sm">
          <Icon name="PencilIcon" size={16} />
        </Button>
      </div>

      <div className="space-y-4">
        {/* Primary Account */}
        <div className="bg-muted/30 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Building" className="text-primary" />
              </div>
              <div>
                <p className="font-medium">DBS Bank</p>
                <p className="text-sm text-muted-foreground">Primary Account</p>
              </div>
            </div>
            <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
              Active
            </span>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Account ending in</p>
            <p className="font-medium">••••8547</p>
          </div>
        </div>

        {/* Add New Account Button */}
        <Button variant="outline" className="w-full space-x-2">
          <Icon name="Plus" size={16} />
          <span>Add New Account</span>
        </Button>

        {/* Info Box */}
        <div className="bg-muted/30 rounded-lg p-4 text-sm space-y-2">
          <div className="flex items-start space-x-2">
            <Icon name="Info" size={16} className="text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium">Important Note</p>
              <p className="text-muted-foreground">
                Bank account changes may take 1-2 business days to verify and process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankAccountManagement