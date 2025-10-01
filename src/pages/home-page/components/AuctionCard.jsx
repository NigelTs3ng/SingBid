import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AuctionCard = ({ auction }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(auction?.timeRemaining);
  const [isWatching, setIsWatching] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { hours, minutes, seconds } = prevTime;
        let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
        
        if (totalSeconds < 0) totalSeconds = 0;
        
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const getTimeColor = () => {
    const totalMinutes = timeLeft?.hours * 60 + timeLeft?.minutes;
    if (totalMinutes < 60) return 'text-error';
    if (totalMinutes < 360) return 'text-warning';
    return 'text-success';
  };

  const handleCardClick = () => {
    navigate(`/auction-details?id=${auction?.id}`);
  };

  const handleBidClick = (e) => {
    e?.stopPropagation();
    navigate(`/auction-details?id=${auction?.id}&action=bid`);
  };

  const handleWatchClick = (e) => {
    e?.stopPropagation();
    setIsWatching(!isWatching);
  };

  const calculateNextBidAmount = () => {
    const increment = auction?.currentBid < 100 ? 5 : 
                     auction?.currentBid < 500 ? 10 : 
                     auction?.currentBid < 1000 ? 25 : 50;
    return auction?.currentBid + increment;
  };

  return (
    <div 
      className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={auction?.image}
          alt={auction?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {auction?.featured && (
            <div className="px-2 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              Featured
            </div>
          )}
          {auction?.category && (
            <div className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
              {auction?.category}
            </div>
          )}
        </div>

        {/* Watch Button */}
        <button
          onClick={handleWatchClick}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            isWatching 
              ? 'bg-error text-white' :'bg-white/80 backdrop-blur-sm text-muted-foreground hover:bg-white hover:text-error'
          }`}
        >
          <Icon name="Heart" size={16} className={isWatching ? 'fill-current' : ''} />
        </button>

        {/* Time Remaining Overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} className="text-white" />
                <span className="text-white text-sm font-medium">
                  {formatTime(timeLeft?.hours)}:{formatTime(timeLeft?.minutes)}:{formatTime(timeLeft?.seconds)}
                </span>
              </div>
              <div className={`text-xs font-medium ${getTimeColor()}`}>
                {timeLeft?.hours === 0 && timeLeft?.minutes < 60 ? 'Ending Soon!' : 'Time Left'}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {auction?.title}
        </h3>

        {/* Seller Info */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
            <Icon name="User" size={12} color="white" />
          </div>
          <span className="text-sm text-muted-foreground">{auction?.seller?.name}</span>
          {auction?.seller?.verified && (
            <div className="flex items-center space-x-1">
              <Icon name="Shield" size={12} className="text-success" />
              <span className="text-xs text-success font-medium">Verified</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={12} className="text-yellow-400" />
            <span className="text-xs text-muted-foreground">{auction?.seller?.rating}</span>
          </div>
        </div>

        {/* Bid Information */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Current Bid</div>
              <div className="text-xl font-bold text-foreground">
                S${auction?.currentBid?.toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Total Bids</div>
              <div className="text-lg font-semibold text-primary">
                {auction?.totalBids}
              </div>
            </div>
          </div>

          {/* Reserve Price Indicator */}
          {auction?.currentBid >= auction?.reservePrice ? (
            <div className="flex items-center space-x-2 text-success">
              <Icon name="CheckCircle" size={16} />
              <span className="text-sm font-medium">Reserve Met</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-warning">
              <Icon name="AlertCircle" size={16} />
              <span className="text-sm">Reserve: S${auction?.reservePrice?.toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            onClick={handleBidClick}
            iconName="Gavel"
            iconPosition="left"
            className="flex-1"
          >
            Bid S${calculateNextBidAmount()?.toLocaleString()}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCardClick}
            iconName="Eye"
            className="px-3"
          >
          </Button>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={12} />
              <span>Singapore</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={12} />
              <span>{auction?.views || 0} views</span>
            </div>
          </div>
          
          {auction?.shippingIncluded && (
            <div className="flex items-center space-x-1 text-xs text-success">
              <Icon name="Truck" size={12} />
              <span>Free Shipping</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;