import React from 'react'

const AuctionInfo = ({ auction }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{auction?.title}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Current Bid</h3>
          <p className="text-2xl font-bold">${auction?.currentBid}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Time Remaining</h3>
          <p className="text-2xl font-bold">{auction?.timeRemaining}</p>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Description</h3>
        <p className="mt-2 text-gray-700">{auction?.description}</p>
      </div>
    </div>
  )
}

export default AuctionInfo