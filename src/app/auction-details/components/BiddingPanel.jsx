import React, { useState } from 'react'
import Button from '../../../components/ui/Button'
import Input from '../../../components/ui/Input'

const BiddingPanel = ({ auction, onPlaceBid }) => {
  const [bidAmount, setBidAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (bidAmount && onPlaceBid) {
      onPlaceBid(parseFloat(bidAmount))
      setBidAmount('')
    }
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Place Your Bid</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder="Enter bid amount"
          min={auction?.minimumBid || 0}
          step="0.01"
          required
        />
        <Button type="submit" className="w-full">
          Place Bid
        </Button>
      </form>
    </div>
  )
}

export default BiddingPanel