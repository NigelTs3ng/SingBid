import React from 'react'

const BidHistory = ({ bids = [] }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Bid History</h3>
      <div className="space-y-4">
        {bids.length === 0 ? (
          <p className="text-gray-500">No bids yet</p>
        ) : (
          bids.map((bid, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{bid.bidder}</p>
                <p className="text-sm text-gray-500">{bid.timestamp}</p>
              </div>
              <p className="font-bold">${bid.amount}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default BidHistory