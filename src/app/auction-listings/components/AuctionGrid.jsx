import React from 'react'
import Link from 'next/link'

const AuctionGrid = ({ auctions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {auctions.map((auction) => (
        <Link
          key={auction.id}
          href={`/auction-details/${auction.id}`}
          className="block group"
        >
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={auction.images[0]?.url || '/assets/images/no_image.png'}
                alt={auction.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                {auction.title}
              </h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Current Bid</p>
                  <p className="font-bold">${auction.currentBid}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Time Left</p>
                  <p className="text-sm font-medium">{auction.timeRemaining}</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500">{auction.bids} bids</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AuctionGrid