import React from 'react'
import Icon from '@/components/AppIcon'

const PlanComparisonTable = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'S$19',
      features: {
        'Active Auctions': '3',
        'Storage Space': '1 GB',
        'Monthly API Calls': '1,000',
        'Support': 'Email',
        'Analytics': 'Basic',
        'Custom Templates': '1',
        'Priority Support': false,
        'White Label Option': false,
        'API Access': false
      }
    },
    {
      name: 'Premium',
      price: 'S$49',
      current: true,
      features: {
        'Active Auctions': '10',
        'Storage Space': '5 GB',
        'Monthly API Calls': '10,000',
        'Support': '24/7 Priority',
        'Analytics': 'Advanced',
        'Custom Templates': '5',
        'Priority Support': true,
        'White Label Option': false,
        'API Access': true
      }
    },
    {
      name: 'Enterprise',
      price: 'S$99',
      features: {
        'Active Auctions': 'Unlimited',
        'Storage Space': '25 GB',
        'Monthly API Calls': '100,000',
        'Support': 'Dedicated',
        'Analytics': 'Custom',
        'Custom Templates': 'Unlimited',
        'Priority Support': true,
        'White Label Option': true,
        'API Access': true
      }
    }
  ]

  const featureLabels = [
    'Active Auctions',
    'Storage Space',
    'Monthly API Calls',
    'Support',
    'Analytics',
    'Custom Templates',
    'Priority Support',
    'White Label Option',
    'API Access'
  ]

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold">Plan Comparison</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                Features
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className={`text-left p-4 min-w-[200px] ${
                    plan.current ? 'bg-primary/5' : ''
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold">{plan.name}</div>
                    <div className="text-2xl font-bold">{plan.price}<span className="text-sm text-muted-foreground">/mo</span></div>
                    {plan.current && (
                      <div className="text-xs text-primary font-medium">
                        Current Plan
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureLabels.map((feature) => (
              <tr key={feature} className="border-b border-border last:border-0">
                <td className="p-4 text-sm font-medium">{feature}</td>
                {plans.map((plan) => (
                  <td
                    key={plan.name}
                    className={`p-4 text-sm ${
                      plan.current ? 'bg-primary/5' : ''
                    }`}
                  >
                    {typeof plan.features[feature] === 'boolean' ? (
                      plan.features[feature] ? (
                        <Icon name="Check" className="text-success" size={16} />
                      ) : (
                        <Icon name="X" className="text-muted-foreground" size={16} />
                      )
                    ) : (
                      plan.features[feature]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PlanComparisonTable