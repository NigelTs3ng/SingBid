// App routes
export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  auctions: '/auction-listings',
  auctionDetails: (id: string) => `/auction-details/${id}`,
  createAuction: '/create-auction',
  profile: '/profile',
  settings: '/settings',
  subscriptionPlans: '/subscription-plans',
  subscriptionManagement: '/subscription-management',
  paymentDashboard: '/payment-dashboard',
} as const

// API routes
export const apiRoutes = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
  },
  auctions: {
    list: '/api/auctions',
    create: '/api/auctions',
    details: (id: string) => `/api/auctions/${id}`,
    bid: (id: string) => `/api/auctions/${id}/bid`,
  },
} as const

export const metadata = {
  [routes.home]: {
    title: 'SingBid - Singapore\'s Premier Auction Marketplace',
    description: 'Discover unique items and place competitive bids on Singapore\'s leading auction platform.'
  },
  [routes.auctions]: {
    title: 'Browse Auctions | SingBid',
    description: 'Browse through active auctions, filter by category, and find your next treasure.'
  },
  [routes.createAuction]: {
    title: 'Create New Auction | SingBid',
    description: 'List your items for auction and reach thousands of potential buyers.'
  },
  [routes.paymentDashboard]: {
    title: 'Payment Dashboard | SingBid',
    description: 'Manage your payments, transactions, and payouts.'
  },
  [routes.subscriptionManagement]: {
    title: 'Subscription Management | SingBid',
    description: 'View and manage your subscription settings and billing information.'
  },
  [routes.subscriptionPlans]: {
    title: 'Subscription Plans | SingBid',
    description: 'Choose the perfect subscription plan for your selling needs.'
  }
}

export function getMetadata(path: string) {
  return metadata[path] || {
    title: 'SingBid',
    description: 'Singapore\'s Premier Auction Marketplace'
  }
}