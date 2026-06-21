import { useNavigate } from 'react-router-dom';

const SEOLeads = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: 'Exclusive SEO Leads',
      desc: 'Unlike traditional directories that sell the same contact to five competitors, we operate a strict 1-to-1 distribution model. Your agency is the sole recipient of the lead, eliminating price-cutting bidding wars.'
    },
    {
      title: 'Real-Time API Delivery',
      desc: 'Timing determines conversion. Leads are pushed straight into your CRM (HubSpot, Salesforce, or via Webhooks) and email inbox within seconds of double-opt-in verification, enabling instant callback sync.'
    },
    {
      title: 'Decision Maker Access',
      desc: 'We bypass gatekeepers. Every lead profile connects you directly with the verified business owner, VP of Marketing, CEO, or Chief Growth Officer who has the direct authority to approve SEO retainers.'
    },
    {
      title: 'Comprehensive Verification',
      desc: 'Each prospect undergoes rigorous multi-step validation. We verify their phone number, work email address, current search rankings, monthly ad spend, and explicit interest in hiring an SEO vendor.'
    }
  ];

  const valueProps = [
    {
      title: 'Lead Replacement Guarantee',
      desc: 'We stand by data integrity. If you receive a lead with a disconnected phone number, wrong contact details, or from a business with no genuine search intent, submit a replacement claim within 7 days for a 100% credit.'
    },
    {
      title: 'Minimum Budget Audits',
      desc: 'We filter out low-margin opportunities. Every SEO lead is verified to have an active marketing budget of at least $1,500/month, ensuring your sales team only pitches high-ticket, profitable contracts.'
    },
    {
      title: 'Predictable Pipeline ROI',
      desc: 'Agencies using our verified stream experience closing rates of 18% to 26%. By shifting from cold outreach to high-intent commercial buyers, your customer acquisition cost decreases.'
    }
  ];

  const processSteps = [
    {
      title: '1. Inbound Intent Capture',
      desc: 'Prospects actively search for SEO solutions and land on our high-intent audit portals, entering details about their current ranking drops and traffic goals.'
    },
    {
      title: '2. Multi-Point Verification',
      desc: 'Our system runs automated domain analysis, validates telephone and email coordinates, and confirms B2B decision-maker status.'
    },
    {
      title: '3. Human Lead Check',
      desc: 'A lead strategist manually reviews the business query to confirm their organic growth plans and verify their search budget limits.'
    },
    {
      title: '4. Real-Time Routing',
      desc: 'The qualified profile is instantly locked, assigned to your agency, and pushed to your CRM for immediate sales engagement.'
    }
  ];

  const faqs = [
    {
      q: 'How does your lead replacement policy work?',
      a: 'We maintain a transparent policy. If a lead contains invalid contact data, duplicate submissions, or incorrect company details, click "Request Replacement" inside your portal within 7 days, and we will credit your balance instantly.'
    },
    {
      q: 'Are these leads shared with other SEO agencies?',
      a: 'Absolutely not. All SEO leads are exclusive. We coordinate a 1-to-1 matching queue, meaning once a lead is assigned to your account, it is permanently locked and never resold.'
    },
    {
      q: 'What criteria determines a "decision-maker"?',
      a: 'We qualify leads by confirming the prospect holds a title like CEO, Founder, Director of Marketing, or CMO. We verify their linkedin profile or company registry details before routing.'
    },
    {
      q: 'How fast are the leads delivered to our sales pipeline?',
      a: 'Delivery is instant. Our API handles real-time webhooks, routing the buyer profile into your sales queue within 1.8 seconds of final verification.'
    }
  ];

  return (
    <div className="seo-leads-page animate-fade-in">
      {/* Hero */}
      <section className="seo-leads-hero section-padding text-left relative overflow-hidden">
        <div className="glow-blur" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', backgroundColor: 'var(--primary-glow)', position: 'absolute', zIndex: -1 }}></div>
        <div className="container hero-grid-dual">
          <div className="hero-left-content">
            <span className="section-tag">High-Ticket Pipeline</span>
            <h1>Exclusive SEO Leads with Guaranteed ROI</h1>
            <p className="subtitle text-left-align">
              Skip the cold outreach. Source verified B2B decision-makers actively searching for search optimization retainers. Delivered in real-time, complete with a 7-day replacement policy.
            </p>
            <button onClick={() => navigate('/contact')} className="btn btn-orange btn-lg mt-4">
              Request SEO Lead Access
            </button>
          </div>
          <div className="hero-right-image">
            <img src="/seo_leads.png" alt="Exclusive SEO Leads Sourcing" className="service-hero-img" />
          </div>
        </div>
      </section>

      {/* Services Context Overview */}
      <section className="seo-long-copy section-padding border-t">
        <div className="container text-left max-width-article">
          <h2>High-Intent B2B SEO Buyers, Qualified Manually</h2>
          <p className="lead-paragraph">
            Most B2B lead generation companies scrape outdated lists and sell the same generic contacts to dozens of agencies. This creates low-margin bidding wars that drain your sales resources.
          </p>
          <p className="paragraph-body">
            At SEOLeads, we do things differently. We capture leads through a network of proprietary SEO tools, ranking portals, and traffic audit engines. When a business owner enters their domain to check their Google penalty index or map rankings, they are signaling high commercial intent. We verify their intent, match their requirements against our budget baseline, and route them to your agency.
          </p>
          <p className="paragraph-body">
            Every lead is delivered with an detailed footprint report, including their main search competitor, target keywords, current domain authority index, and a verified telephone confirmation, giving your sales reps everything they need to close the deal on the first call.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="seo-benefits section-padding bg-tertiary">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Core Services</span>
            <h2>Enterprise Lead Quality Blueprint</h2>
          </div>
          <div className="grid-2 benefits-grid">
            {benefits.map((b, i) => (
              <div className="glass-card benefit-card text-left" key={i}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee */}
      <section className="seo-value-props section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Trust & Assurance</span>
            <h2>Why Established Agencies Rely on Us</h2>
          </div>
          <div className="grid-3 benefits-grid">
            {valueProps.map((vp, i) => (
              <div className="glass-card benefit-card text-left" key={i}>
                <h3>{vp.title}</h3>
                <p>{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process Roadmap */}
      <section className="seo-process section-padding bg-tertiary">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Methodology</span>
            <h2>Our Lead Verification Funnel</h2>
          </div>
          <div className="grid-4 process-grid-vertical">
            {processSteps.map((step, i) => (
              <div className="glass-card process-step-card text-left" key={i}>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlit Case Study */}
      <section className="seo-case-study section-padding border-t">
        <div className="container max-width-article text-left">
          <span className="badge badge-success mb-3">Case Study Spotlight</span>
          <h2>How Vanguard SEO Added $48,000 MRR in 90 Days</h2>
          <p className="paragraph-body">
            Vanguard SEO, a mid-sized search agency based in Austin, was struggling to scale their sales pipeline using cold email outreach and PPC ads. Their cost-per-acquisition (CPA) was climbing, and close rates hovered below 4%.
          </p>
          <blockquote>
            "Moving to SEOLeads' exclusive lead flow changed our unit economics. We received real-time notifications when decision-makers requested SEO audits. Because we were the only agency pitching, our team secured 8 new enterprise accounts within three months, averaging $6,000/month retainers."
          </blockquote>
          <div className="mt-4">
            <strong>- David K., Founder of Vanguard SEO</strong>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="seo-faqs section-padding bg-tertiary">
        <div className="container max-width-article">
          <div className="section-title-wrapper">
            <span className="section-tag">FAQ</span>
            <h2>SEO Lead Acquisition Strategy FAQs</h2>
          </div>
          <div className="faq-list text-left">
            {faqs.map((faq, i) => (
              <div className="faq-item-simple mt-4" key={i}>
                <strong>{faq.q}</strong>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="seo-cta section-padding border-t text-center">
        <div className="container">
          <h2>Secure Your Exclusive Lead Stream</h2>
          <p className="subtitle">Integrate real-time qualified SEO leads directly into your sales pipeline.</p>
          <button onClick={() => navigate('/contact')} className="btn btn-orange btn-lg mt-4">
            Initialize Lead Routing Queue
          </button>
        </div>
      </section>

      <style>{`
        .hero-grid-dual {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }
        .hero-left-content {
          max-width: 650px;
          text-align: left;
        }
        .hero-right-image {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-light);
          padding: 8px;
          background: #ffffff;
        }
        .service-hero-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: var(--radius-md);
        }
        .text-left-align {
          text-align: left !important;
          margin-left: 0 !important;
        }
        @media (max-width: 1024px) {
          .hero-grid-dual {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-left-content {
            margin: 0 auto;
            text-align: center;
          }
          .text-left-align {
            text-align: center !important;
            margin: 0 auto !important;
          }
        }
        .seo-leads-page {
          background-color: var(--bg-primary);
        }
        .max-width-article {
          max-width: 800px;
          margin: 0 auto;
        }
        .seo-leads-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
          line-height: 1.15;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }
        .lead-paragraph {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 24px;
        }
        .paragraph-body {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        blockquote {
          font-size: 1.1rem;
          font-style: italic;
          color: var(--text-primary);
          border-left: 3px solid var(--primary);
          padding-left: 20px;
          margin: 24px 0;
          line-height: 1.6;
        }
        .benefit-card {
          padding: 30px;
        }
        .benefit-card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 700;
        }
        .benefit-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        
        .process-step-card {
          padding: 24px;
        }
        .process-step-card h4 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
        }
        .process-step-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .faq-item-simple strong {
          display: block;
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-family: var(--font-heading);
        }
        .faq-item-simple p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .seo-leads-hero h1 {
            font-size: 2.5rem;
          }
          blockquote {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SEOLeads;
