import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredAuctions = [
    {
      id: 1,
      title: "Vintage Rolex Submariner 1960s",
      description: "Rare vintage Rolex Submariner in excellent condition with original box and papers. A collector\'s dream piece.",
      currentBid: 15800,
      reservePrice: 12000,
      timeRemaining: { hours: 2, minutes: 45, seconds: 30 },
      image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=800&h=600&fit=crop",
      seller: {
        name: "WatchCollector_SG",
        rating: 4.9,
        verified: true
      },
      totalBids: 47,
      category: "Watches & Jewelry"
    },
    {
      id: 2,
      title: "Limited Edition Singapore Art Print",
      description: "Exclusive Singapore skyline art print by renowned local artist. Only 50 pieces ever made.",
      currentBid: 680,
      reservePrice: 500,
      timeRemaining: { hours: 5, minutes: 12, seconds: 15 },
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      seller: {
        name: "ArtGallery_Marina",
        rating: 4.8,
        verified: true
      },
      totalBids: 23,
      category: "Art & Collectibles"
    },
    {
      id: 3,
      title: "MacBook Pro M3 Max 16-inch",
      description: "Brand new sealed MacBook Pro with M3 Max chip, 32GB RAM, 1TB SSD. Perfect for professionals.",
      currentBid: 3200,
      reservePrice: 2800,
      timeRemaining: { hours: 1, minutes: 8, seconds: 42 },
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
      seller: {
        name: "TechDeals_SG",
        rating: 4.7,
        verified: true
      },
      totalBids: 89,
      category: "Electronics"
    }
  ];

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = {};
      featuredAuctions?.forEach(auction => {
        const { hours, minutes, seconds } = auction?.timeRemaining;
        let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
        
        if (totalSeconds < 0) totalSeconds = 0;
        
        newTimeLeft[auction.id] = {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredAuctions?.length);
    }, 8000);

    return () => clearInterval(slideTimer);
  }, [featuredAuctions?.length]);

  const handleBidNow = (auctionId) => {
    navigate(`/auction-details?id=${auctionId}`);
  };

  const handleViewDetails = (auctionId) => {
    navigate(`/auction-details?id=${auctionId}`);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const currentAuction = featuredAuctions?.[currentSlide];
  const currentTime = timeLeft?.[currentAuction?.id] || currentAuction?.timeRemaining;

  return (
    <div className="relative bg-gradient-to-br from-red-50 via-red-25 to-pink-50 rounded-2xl overflow-hidden mb-12 singbid-shadow-lg">
      <div className="relative h-[500px] lg:h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={currentAuction?.image}
            alt={currentAuction?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-900/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-2xl text-white">
              {/* Category Badge */}
              <div className="inline-flex items-center px-4 py-2 singbid-gradient backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4 singbid-shadow">
                <Icon name="Star" size={16} className="mr-2" />
                Featured Auction
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                {currentAuction?.title}
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-red-100 mb-6 leading-relaxed">
                {currentAuction?.description}
              </p>

              {/* Auction Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    S${currentAuction?.currentBid?.toLocaleString()}
                  </div>
                  <div className="text-sm text-red-200">Current Bid</div>
                </div>

                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    {currentAuction?.totalBids}
                  </div>
                  <div className="text-sm text-red-200">Total Bids</div>
                </div>

                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 col-span-2 lg:col-span-2 border border-white/20">
                  <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-bold text-white">
                    <span>{formatTime(currentTime?.hours || 0)}h</span>
                    <span>:</span>
                    <span>{formatTime(currentTime?.minutes || 0)}m</span>
                    <span>:</span>
                    <span>{formatTime(currentTime?.seconds || 0)}s</span>
                  </div>
                  <div className="text-sm text-red-200">Time Remaining</div>
                </div>
              </div>

              {/* Seller Info */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 singbid-gradient rounded-full flex items-center justify-center singbid-shadow">
                  <Icon name="User" size={20} color="white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-white">{currentAuction?.seller?.name}</span>
                    {currentAuction?.seller?.verified && (
                      <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/20 rounded-full border border-green-400/30">
                        <Icon name="Shield" size={14} className="text-green-400" />
                        <span className="text-xs text-green-400 font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-red-200">
                    <Icon name="Star" size={14} className="text-yellow-400" />
                    <span>{currentAuction?.seller?.rating}</span>
                    <span>•</span>
                    <span>Singapore Seller</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => handleBidNow(currentAuction?.id)}
                  iconName="Gavel"
                  iconPosition="left"
                  className="singbid-gradient hover:opacity-90 text-white font-semibold px-8 py-3 singbid-shadow"
                >
                  Place Bid Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleViewDetails(currentAuction?.id)}
                  iconName="Eye"
                  iconPosition="left"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20 px-8 py-3 backdrop-blur-sm"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredAuctions?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white singbid-shadow' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredAuctions?.length) % featuredAuctions?.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 border border-white/20"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredAuctions?.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 border border-white/20"
        >
          <Icon name="ChevronRight" size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;