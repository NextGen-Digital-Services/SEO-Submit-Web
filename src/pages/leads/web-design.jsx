import { useNavigate } from 'react-router-dom';

const WebDesignLeads = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: 'Exclusive Design Opportunities',
      desc: 'We route web design leads exclusively to one design agency. This prevents price-based competition and allows you to establish value based on your creative portfolio and technical standards.'
    },
    {
      title: 'Vetted Project Budgets',
      desc: 'No low-budget hobby sites. We qualify prospects requesting custom web design, corporate branding, or e-commerce migrations to ensure they have approved budgets starting at $5,000.'
    },
    {
      title: 'Verified Redesign Intent',
      desc: 'We capture buyers at the moment of peak intent. These are businesses seeking active web rebuilds to improve conversions, update legacy platforms, or optimize slow-loading mobile experiences.'
    }
  ];

  const niches = [
    {
      name: 'E-Commerce & Retail',
      details: 'High-ticket store migrations (Shopify Plus, WooCommerce) focusing on headless architectures and optimized checkout pathways.'
    },
    {
      name: 'B2B SaaS & Tech',
      details: 'Fast-growing software firms seeking UI/UX interface designers to improve conversion rate metrics and product on-boarding.'
    },
    {
      name: 'Professional Services',
      details: 'Established medical groups, corporate law firms, and consultancy agencies looking to build authoritative digital footprints.'
    }
  ];

  const steps = [
    {
      title: '1. Technical Intent Scan',
      desc: 'Our lead capture engine identifies companies operating on slow, unoptimized, or outdated CMS frameworks (like old WordPress installs).'
    },
    {
      title: '2. Project Scope Analysis',
      desc: 'We contact the business owner to document their feature requests: custom integrations, mobile responsiveness, e-commerce scopes, and timeline constraints.'
    },
    {
      title: '3. CRM Lead Routing',
      desc: 'Once the budget ($5k-$50k+) is verified, the contact profile is assigned to your studio and instantly pushed to your CRM.'
    }
  ];

  const faqs = [
    {
      q: 'How do you qualify web design lead budgets?',
      a: 'During our validation checks, we verify that the business has active marketing spend and confirm their budget range during telephone interviews before routing the opportunity.'
    },
    {
      q: 'Which CMS platforms do these prospects request?',
      a: 'Prospect queries cover custom headless React applications, premium Shopify Plus setups, Webflow builds, and corporate WordPress architectures.'
    },
    {
      q: 'What is your lead replacement policy for design leads?',
      a: 'We guarantee data accuracy. If a lead has incorrect contact information, has no real project timeline, or is out of your target budget range, request a replacement within 7 days for full credit.'
    }
  ];

  return (
    <div className="web-design-leads-page animate-fade-in">
      {/* Hero */}
      <section className="wd-leads-hero section-padding text-left relative overflow-hidden">
        <div className="glow-blur" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', backgroundColor: 'var(--primary-glow)', position: 'absolute', zIndex: -1 }}></div>
        <div className="container hero-grid-dual">
          <div className="hero-left-content">
            <span className="section-tag">Agency Scalability</span>
            <h1>Exclusive Web Design Leads with High Budgets</h1>
            <p className="subtitle text-left-align">
              Connect with companies seeking immediate custom website redesigns, branding updates, and headless e-commerce builds. Fully vetted project budgets and zero shared leads.
            </p>
            <button onClick={() => navigate('/contact')} className="btn btn-orange btn-lg mt-4">
              Request Design Lead Access
            </button>
          </div>
          <div className="hero-right-image">
            <img src="/web_design_leads.png" alt="Exclusive Web Design Leads" className="service-hero-img" />
          </div>
        </div>
      </section>

      {/* Long copy block */}
      <section className="wd-long-copy section-padding border-t">
        <div className="container text-left max-width-article">
          <h2>High-Ticket Client Acquisition for Web Agencies</h2>
          <p className="lead-paragraph">
            Most web design agencies rely on passive referrals or compete on low-margin freelancer portals. This makes it impossible to build a predictable monthly revenue pipeline or scale your design staff.
          </p>
          <p className="paragraph-body">
            SEOLeads connects your studio with established businesses that have outgrown their existing templates. We capture buyers at the precise moment their website performance declines. Our validation team manually interviews each prospect, verifying their target launch timeline, CMS requirements, branding goals, and design budgets.
          </p>
          <p className="paragraph-body">
            By matching buyers with agencies in real-time, we remove the friction of standard business development, letting your designers and developers focus on pitching creative solutions.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="wd-benefits section-padding bg-tertiary">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Lead Quality Standards</span>
            <h2>Rebuild Your Sales Pipeline</h2>
          </div>
          <div className="grid-3 benefits-grid">
            {benefits.map((b, i) => (
              <div className="glass-card benefit-card text-left" key={i}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Niches */}
      <section className="wd-niches section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Target Markets</span>
            <h2>Business Niches We Support</h2>
          </div>
          <div className="grid-3 benefits-grid">
            {niches.map((n, i) => (
              <div className="glass-card benefit-card text-left" key={i}>
                <h3>{n.name}</h3>
                <p>{n.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="wd-process section-padding bg-tertiary">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Workflow</span>
            <h2>Client Acquisition Flow</h2>
          </div>
          <div className="grid-3 benefits-grid">
            {steps.map((step, i) => (
              <div className="glass-card benefit-card text-left" key={i}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Case Study */}
      <section className="wd-case-study section-padding border-t">
        <div className="container max-width-article text-left">
          <span className="badge badge-success mb-3">Case Study Spotlight</span>
          <h2>How PixelCraft Studio Secured $120,000 in Redesign Contracts</h2>
          <p className="paragraph-body">
            PixelCraft Studio, a creative web development agency, wanted to break into the enterprise SaaS sector but lacked lead generation channels. They signed up for our Exclusive Design leads program.
          </p>
          <blockquote>
            "Getting matched with companies that already have a dedicated design budget of $15k+ changed everything. We closed three major rebuild projects in our first month, including a SaaS platform migration that turned into a monthly design retainer."
          </blockquote>
          <div className="mt-4">
            <strong>- Elena R., Creative Director at PixelCraft</strong>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wd-faqs section-padding bg-tertiary">
        <div className="container max-width-article">
          <div className="section-title-wrapper">
            <span className="section-tag">FAQ</span>
            <h2>Web Design Lead Strategy FAQs</h2>
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
      <section className="wd-cta section-padding border-t text-center">
        <div className="container">
          <h2>Secure Your Design Agency Pipeline</h2>
          <p className="subtitle">Secure high-quality web design leads with verified project budgets.</p>
          <button onClick={() => navigate('/contact')} className="btn btn-orange btn-lg mt-4">
            Initialize Agency Account
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
        .web-design-leads-page {
          background-color: var(--bg-primary);
        }
        .max-width-article {
          max-width: 800px;
          margin: 0 auto;
        }
        .wd-leads-hero h1 {
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
          .wd-leads-hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default WebDesignLeads;
