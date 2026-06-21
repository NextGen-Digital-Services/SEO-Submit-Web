import { useNavigate } from 'react-router-dom';

const AppointmentLeads = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: 'Pre-Qualified Appointments',
      desc: 'We do not just pass along email addresses. We deliver booked calendar meetings. Every prospect is screened for monthly budget levels, target timelines, and authority before a meeting is secured.'
    },
    {
      title: 'Direct Calendar Scheduling Sync',
      desc: 'No messy hand-offs. The appointment is scheduled straight onto your sales representatives’ calendars via direct integration with Google Calendar, Calendly, HubSpot Meetings, or Outlook.'
    },
    {
      title: 'Sales-Ready Prospects Only',
      desc: 'Our call team manually verifies each meeting coordinate. Prospects are briefed on your agency’s capabilities and attend the video call with explicit intent to discuss digital solutions.'
    }
  ];

  const verificationPoints = [
    {
      title: 'Telephone Validation',
      desc: 'Within 2 hours of calendar booking, our validation specialists call the prospect to confirm their business identity, operational site, and project requirements.'
    },
    {
      title: 'Double-Reminder Engine',
      desc: 'We coordinate automated SMS and email reminder sequences 24 hours and 1 hour before the scheduled meet, reducing no-show rates to under 6%.'
    },
    {
      title: 'Budget Verification',
      desc: 'Meetings are only pushed to your sales team if the business owner verifies they meet your target budget threshold (e.g. $2,000+/month).'
    }
  ];

  const processSteps = [
    {
      title: '1. Intent Screening',
      desc: 'Prospects requesting custom audits undergo validation. If they fit B2B targets, they are routed to a booking portal.'
    },
    {
      title: '2. Direct Calendar Sync',
      desc: 'The prospect selects a vacant slot on your sales reps calendar. Meeting details and company audit data are synced.'
    },
    {
      title: '3. Manual Verification Call',
      desc: 'Our validation desk contacts the client to confirm their project scope, business size, and meeting presence.'
    },
    {
      title: '4. Sales Brief Delivery',
      desc: 'Your sales team receives the confirmed calendar invite alongside a detailed background dossier 24 hours prior to the call.'
    }
  ];

  const faqs = [
    {
      q: 'What happens if a prospect does not show up to the call?',
      a: 'We offer a strict 100% replacement guarantee. If a prospect no-shows or cancels the call, and does not reschedule within 3 days, we replace the lead or credit your balance instantly.'
    },
    {
      q: 'Can we define the qualification filters?',
      a: 'Yes. We coordinate with your team to align minimum employee size, marketing budgets, and geographical targets before launching the routing queue.'
    },
    {
      q: 'How many sales reps can we connect to the system?',
      a: 'You can connect unlimited calendars. Our round-robin routing logic distributes verified meetings evenly across your sales development team.'
    }
  ];

  return (
    <div className="appointment-leads-page animate-fade-in">
      {/* Hero */}
      <section className="app-leads-hero section-padding text-left relative overflow-hidden">
        <div className="glow-blur" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', backgroundColor: 'var(--primary-glow)', position: 'absolute', zIndex: -1 }}></div>
        <div className="container hero-grid-dual">
          <div className="hero-left-content">
            <span className="section-tag">High-Ticket Sales Sync</span>
            <h1>Pre-Qualified B2B Calendar Appointments</h1>
            <p className="subtitle text-left-align">
              Skip the prospecting. Secure sales-ready discovery calls directly on your calendar with verified decision-makers who have approved budgets and active requirements.
            </p>
            <button onClick={() => navigate('/contact')} className="btn btn-orange btn-lg mt-4">
              Initialize Calendar Setup
            </button>
          </div>
          <div className="hero-right-image">
            <img src="/appointment_leads.png" alt="Pre-Qualified Calendar Appointments" className="service-hero-img" />
          </div>
        </div>
      </section>

      {/* Long copy block */}
      <section className="app-long-copy section-padding border-t">
        <div className="container text-left max-width-article">
          <h2>Direct Calendar Bookings with Sales-Ready prospects</h2>
          <p className="lead-paragraph">
            Cold pitching is dead. Your sales team wastes hours sending outreach emails, leaving voicemails, and speaking to gatekeepers who block your deals.
          </p>
          <p className="paragraph-body">
            At SEOLeads, we run the outbound prospecting, content syndication, and calendar management for you. We generate interest through our high-DA business tools, manually interview the prospects who request assessments, and sync verified prospects directly onto your calendar.
          </p>
          <p className="paragraph-body">
            Your sales reps show up to meetings with fully briefed, high-intent corporate buyers who already understand your pricing baseline, project milestones, and value proposition. This increases sales efficiency and doubles closing rates.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="app-benefits section-padding bg-tertiary">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Value Proposition</span>
            <h2>Vetted Sales Opportunities</h2>
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

      {/* Verification steps */}
      <section className="app-verification section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Quality Assurance</span>
            <h2>Our Multi-Step Verification Funnel</h2>
          </div>
          <div className="grid-3 benefits-grid">
            {verificationPoints.map((v, i) => (
              <div className="glass-card benefit-card text-left" key={i}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="app-process section-padding bg-tertiary">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Methodology</span>
            <h2>Our Booking Delivery Roadmap</h2>
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

      {/* Case study */}
      <section className="app-case-study section-padding border-t">
        <div className="container max-width-article text-left">
          <span className="badge badge-success mb-3">Case Study Spotlight</span>
          <h2>How Apex Digital Increased Sales Efficiency by 350%</h2>
          <p className="paragraph-body">
            Apex Digital, a leading SEO and web agency, was struggling with high outbound costs. Their SDR team was spending over 80% of their day prospecting rather than pitching contracts.
          </p>
          <blockquote>
            "Moving to SEOLeads' Appointment Fixed Leads program changed our SDR workflow. Instead of cold calling lists, our reps show up to verified calendar calls. Our close rate jumped from 6% to 24%, saving us thousands in overhead."
          </blockquote>
          <div className="mt-4">
            <strong>- Marcus B., VP of Sales at Apex Digital</strong>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="app-faqs section-padding bg-tertiary">
        <div className="container max-width-article">
          <div className="section-title-wrapper">
            <span className="section-tag">FAQ</span>
            <h2>Appointment Fixed Leads Strategy FAQs</h2>
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
      <section className="app-cta section-padding border-t text-center">
        <div className="container">
          <h2>Accelerate Your Agency Scaling</h2>
          <p className="subtitle">Secure pre-qualified calendar appointments directly with business owners.</p>
          <button onClick={() => navigate('/contact')} className="btn btn-orange btn-lg mt-4">
            Integrate Calendar Queue
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
        .appointment-leads-page {
          background-color: var(--bg-primary);
        }
        .max-width-article {
          max-width: 800px;
          margin: 0 auto;
        }
        .app-leads-hero h1 {
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
          .app-leads-hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AppointmentLeads;
