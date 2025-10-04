import React from 'react'

const TrustSignalsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Choose SingBid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Secure Transactions</h3>
            <p>Every transaction is protected and guaranteed</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Verified Sellers</h3>
            <p>All our sellers are thoroughly vetted</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p>Round-the-clock customer service</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSignalsSection