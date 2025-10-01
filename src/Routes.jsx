import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PaymentDashboard from './pages/payment-dashboard';
import CreateAuction from './pages/create-auction';
import AuctionDetails from './pages/auction-details';
import SubscriptionManagement from './pages/subscription-management';
import AuctionListings from './pages/auction-listings';
import HomePage from './pages/home-page';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/payment-dashboard" element={<PaymentDashboard />} />
        <Route path="/create-auction" element={<CreateAuction />} />
        <Route path="/auction-details" element={<AuctionDetails />} />
        <Route path="/subscription-management" element={<SubscriptionManagement />} />
        <Route path="/auction-listings" element={<AuctionListings />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
