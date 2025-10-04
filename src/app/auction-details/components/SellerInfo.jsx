import React from 'react'

const SellerInfo = ({ seller }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Seller Information</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            {seller?.avatar ? (
              <img
                src={seller.avatar}
                alt={seller?.name}
                className="w-full h-full rounded-full"
              />
            ) : (
              <span className="text-xl">{seller?.name?.[0]}</span>
            )}
          </div>
          <div>
            <p className="font-medium">{seller?.name}</p>
            <p className="text-sm text-gray-500">Member since {seller?.memberSince}</p>
          </div>
        </div>
        <div className="text-sm">
          <p>Total Sales: {seller?.totalSales || 0}</p>
          <p>Rating: {seller?.rating || 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default SellerInfo