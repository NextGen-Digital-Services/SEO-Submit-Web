import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'SEO Submit Web — Buy Exclusive SEO Leads',
  '/about': 'About Us — SEO Submit Web',
  '/seo-leads': 'Buy SEO Leads — SEO Submit Web',
  '/web-design-leads': 'Web Design Leads — SEO Submit Web',
  '/appointment-leads': 'Appointment Leads — SEO Submit Web',
  '/blog': 'Blog — SEO Submit Web',
  '/testimonials': 'Testimonials — SEO Submit Web',
  '/contact': 'Contact Us — SEO Submit Web',
};

export const RouteTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = routeTitles[pathname] || 'SEO Submit Web';
  }, [pathname]);

  return null;
};

export default RouteTitle;
