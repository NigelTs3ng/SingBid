import React from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();

  const routeMap = {
    '/home-page': 'Home',
    '/auction-listings': 'Browse Auctions',
    '/auction-details': 'Auction Details',
    '/create-auction': 'Create Auction',
    '/payment-dashboard': 'Payment Dashboard',
    '/subscription-management': 'Subscription Management',
  };

  const generateBreadcrumbs = () => {
    if (customItems) {
      return customItems;
    }

    const pathSegments = location?.pathname?.split('/')?.filter(Boolean);
    const breadcrumbs = [{ label: 'Home', path: '/home-page' }];

    if (location?.pathname !== '/home-page') {
      const currentRoute = `/${pathSegments?.join('/')}`;
      const routeLabel = routeMap?.[currentRoute] || pathSegments?.[pathSegments?.length - 1];
      
      breadcrumbs?.push({
        label: routeLabel,
        path: currentRoute,
        isActive: true
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const handleNavigation = (path) => {
    if (path) {
      window.location.href = path;
    }
  };

  if (breadcrumbs?.length <= 1 && location?.pathname === '/home-page') {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs?.map((item, index) => (
          <li key={item?.path || index} className="flex items-center space-x-2">
            {index > 0 && (
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
            )}
            {item?.isActive ? (
              <span className="font-medium text-foreground truncate max-w-xs">
                {item?.label}
              </span>
            ) : (
              <button
                onClick={() => handleNavigation(item?.path)}
                className="hover:text-foreground transition-colors duration-200 truncate max-w-xs"
              >
                {item?.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;