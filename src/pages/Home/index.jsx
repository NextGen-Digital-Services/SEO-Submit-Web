import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import TrustBar from '../../components/sections/TrustBar';
import AuthorityMetrics from '../../components/sections/AuthorityMetrics';
import BentoGrid from '../../components/sections/BentoGrid';
import LeadDashboardPreview from '../../components/sections/LeadDashboardPreview';
import ProcessSteps from '../../components/sections/ProcessSteps';
import IndustriesGrid from '../../components/sections/IndustriesGrid';
import CaseStudyCard from '../../components/sections/CaseStudyCard';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import PricingTable from '../../components/sections/PricingTable';
import FAQAccordion from '../../components/sections/FAQAccordion';
import CTABlock from '../../components/sections/CTABlock';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AuthorityMetrics />
      <BentoGrid />
      <LeadDashboardPreview />
      <ProcessSteps />
      <IndustriesGrid />
      <CaseStudyCard />
      <TestimonialsSection />
      <PricingTable />
      <FAQAccordion />
      <CTABlock />
    </>
  );
};

export default Home;
