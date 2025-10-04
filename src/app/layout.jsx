import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'SingBid - Singapore\'s Premier Auction Marketplace',
    template: '%s | SingBid'
  },
  description: 'Discover unique items and place competitive bids on Singapore\'s leading auction platform. Buy and sell with confidence.',
  keywords: ['auction', 'singapore', 'marketplace', 'online auction', 'bidding', 'collectibles'],
  authors: [{ name: 'SingBid Team' }],
  creator: 'SingBid Pte Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://singbid.sg',
    siteName: 'SingBid',
    title: 'SingBid - Singapore\'s Premier Auction Marketplace',
    description: 'Discover unique items and place competitive bids on Singapore\'s leading auction platform',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SingBid Marketplace'
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}