import React from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/AppIcon'

const PricingCards = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'S$19',
      description: 'Perfect for individuals and small sellers',
      features: [
        'Up to 3 active auctions',
        '1 GB storage for images',
        '1,000 monthly API calls',
        'Basic analytics',
        'Email support',
        '1 custom template'
      ]
    },
    {
      name: 'Premium',
      price: 'S$49',
      description: 'Best for growing businesses',
      popular: true,
      features: [
        'Up to 10 active auctions',
        '5 GB storage for images',
        '10,000 monthly API calls',
        'Advanced analytics',
        '24/7 priority support',
        '5 custom templates',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'S$99',
      description: 'For large scale operations',
      features: [
        'Unlimited active auctions',
        '25 GB storage for images',
        '100,000 monthly API calls',
        'Custom analytics',
        'Dedicated support',
        'Unlimited templates',
        'API access',
        'White label option'
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative bg-card border border-border rounded-lg p-6 ${
            plan.popular ? 'shadow-lg ring-2 ring-primary' : ''
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-2">
              {plan.price}
              <span className="text-sm text-muted-foreground font-normal">
                /month
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </div>

          <div className="space-y-4 mb-6">
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            variant={plan.popular ? 'default' : 'outline'}
            className="w-full"
          >
            Get Started
          </Button>
        </div>
      ))}
    </div>
  )
}

export default PricingCards