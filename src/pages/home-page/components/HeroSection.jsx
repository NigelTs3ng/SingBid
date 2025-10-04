import React from 'react';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="mb-16">
      <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-blue-600/10 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured Auctions
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Discover our handpicked selection of premium items currently up for auction. 
              From rare collectibles to luxury items, find your next treasure here.
            </p>
            <div className="space-x-4">
              <Button variant="default" size="lg">
                View Featured
              </Button>
              <Button variant="outline" size="lg">
                How It Works
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20" />
            {/* Add an image component here when available */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-4 rounded-lg">
              <p className="font-semibold">Featured: Luxury Watch Collection</p>
              <p className="text-sm opacity-80">Ending in 2 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;