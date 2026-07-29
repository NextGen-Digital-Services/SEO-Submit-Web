import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'Buy SEO Leads in USA | Exclusive Website Design Leads USA',
  '/about': 'About SEO Submit Web | Buy SEO Leads in USA for Digital Marketing Agencies',
  '/seo-leads': 'Buy Exclusive SEO Leads in USA | Best SEO Leads in USA',
  '/web-design-leads': 'Buy Web Design Leads | Exclusive Web Design Leads for USA Agencies',
  '/appointment-leads': 'Buy Appointment Leads in USA | Buy SEO Leads & Website Design Leads',
  '/blog': 'Blog — SEO Submit Web',
  '/testimonials': 'Testimonials — SEO Submit Web',
  '/contact': 'Contact Us — SEO Submit Web',
  '/admin': 'Admin Login — SEO Submit Web',
  '/admin/dashboard': 'Blog Management Admin — SEO Submit Web',
};

export const RouteTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = routeTitles[pathname] || 'SEO Submit Web';
  }, [pathname]);

  return null;
};

export default RouteTitle;
