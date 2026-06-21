import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: 'Alexander Vance',
      role: 'CEO & Founder',
      bio: 'Former VP of Growth at Apex Digital with 18+ years of organic search and enterprise lead generation experience.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of SEO Strategy',
      bio: 'Recognized search architect specializing in algorithmic market intelligence, B2B intent validation, and scalable organic lead acquisition.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Marcus Brody',
      role: 'Director of Web Architecture',
      bio: 'Over a decade designing high-converting, mobile-first landers and technical schemas for Fortune 500 portals.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    }
  ];

  const values = [
    {
      title: 'Obsessive Data Curation',
      desc: 'We manually verify every lead profile and B2B intent indicator to ensure absolute data validity. Zero spam, zero unqualified leads.'
    },
    {
      title: 'Real-Time Delivery',
      desc: 'A lead is useless if it sits in a queue. We prioritize instant CRM routing and Slack alerts to guarantee immediate callback times.'
    },
    {
      title: 'Transparency & Ownership',
      desc: 'Agencies own 100% of their exclusive lead queues. You receive detailed background reports, CRM integration panels, and replacement logs.'
    }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* Hero Banner */}
      <section className="about-hero section-padding text-center relative overflow-hidden">
        <div className="glow-blur" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', backgroundColor: 'var(--primary-glow)', position: 'absolute', zIndex: -1 }}></div>
        <div className="container">
          <span className="section-tag">Agency Heritage</span>
          <h1>Engineered for Authority. Built for Scale.</h1>
          <p className="subtitle">
            We are a group of technical search strategists, digital builders, and Conversion Optimization Specialists dedicated to acquiring high-intent organic leads for modern companies.
          </p>
        </div>
      </section>

      {/* Stats Board */}
      <section className="about-stats section-padding border-y">
        <div className="container">
          <div className="grid-4 stats-grid">
            <div className="stat-card">
              <span className="stat-value text-gradient">2011</span>
              <span className="stat-label">Company Founded</span>
            </div>
            <div className="stat-card">
              <span className="stat-value text-gradient">185K+</span>
              <span className="stat-label">Exclusive Leads Sourced</span>
            </div>
            <div className="stat-card">
              <span className="stat-value text-gradient">98.2%</span>
              <span className="stat-label">Appointment Show Rate</span>
            </div>
            <div className="stat-card">
              <span className="stat-value text-gradient">$150M+</span>
              <span className="stat-label">Client Revenue Secured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & History */}
      <section className="about-story section-padding">
        <div className="container">
          <div className="grid-2 story-grid">
            <div className="story-text text-left">
              <span className="badge badge-primary mb-3">Our History</span>
              <h2>How We Scaled from a Boutique SEO Desk to a Premium Lead Sourcing Desk</h2>
              <p className="story-paragraph">
                Founded in 2011, our team realized digital agencies were spending hundreds of hours cold-calling gatekeepers and buying outdated lists. The results were slow sales cycles, low show rates, and wasted budget.
              </p>
              <p className="story-paragraph">
                We set out to build a platform that merges inbound B2B content marketing, pre-qualification telephone checks, and active CRM scheduling syncs. By partnering directly with business owners requesting organic optimization, we created the ultimate exclusive lead routing desk.
              </p>
            </div>
            <div className="story-image-box">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Office Collaboration" className="story-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission section-padding bg-tertiary">
        <div className="container">
          <div className="grid-2 mission-grid">
            <div className="mission-card glass-card text-left">
              <h3>Our Mission</h3>
              <p>
                To provide digital marketing and web design agencies with a predictable pipeline of exclusive, high-intent client opportunities. We eliminate business development bottlenecks by delivering vetted decision-makers straight to your CRM.
              </p>
            </div>
            <div className="mission-card glass-card text-left">
              <h3>Our Vision</h3>
              <p>
                To remain the world’s most trusted B2B agency growth partner. We continuously refine our outbound verification scripts, build integrations with modern sales stacks, and coordinate routing queues to help agencies scale their MRR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Our Ethos</span>
            <h2>Core Values That Steer Our Campaigns</h2>
          </div>
          <div className="grid-3 values-grid">
            {values.map((v, i) => (
              <div className="glass-card value-card text-left" key={i}>
                <span className="value-num">0{i + 1}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team section-padding bg-tertiary">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Leadership</span>
            <h2>The Technical Minds Behind the Results</h2>
          </div>
          <div className="grid-3 team-grid">
            {team.map((member, i) => (
              <div className="glass-card team-card text-left" key={i}>
                <img src={member.image} alt={member.name} className="team-avatar" />
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta section-padding border-t text-center">
        <div className="container">
          <h2>Ready to Scale Your Agency Pipeline?</h2>
          <p className="subtitle">Secure pre-qualified calendar appointments directly with B2B decision-makers.</p>
          <button onClick={() => navigate('/contact')} className="btn btn-orange btn-lg mt-4">
            Request Sample Leads
          </button>
        </div>
      </section>

      <style>{`
        .about-page {
          background-color: var(--bg-primary);
        }
        .about-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 24px;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }
        .border-y {
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .border-t {
          border-top: 1px solid var(--border-light);
        }
        .bg-tertiary {
          background-color: var(--bg-tertiary);
        }
        
        /* Stats Grid */
        .stats-grid {
          text-align: center;
        }
        .stat-card {
          padding: 20px;
        }
        .stat-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 800;
        }
        .stat-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        /* Story Grid */
        .story-grid {
          align-items: center;
        }
        .story-text {
          display: flex;
          flex-direction: column;
        }
        .story-text h2 {
          font-size: 2.2rem;
          margin-bottom: 20px;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }
        .story-paragraph {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .story-img {
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          width: 100%;
        }

        /* Mission Grid */
        .mission-card {
          padding: 40px;
        }
        .mission-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }
        .mission-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1rem;
        }

        /* Values Grid */
        .value-card {
          padding: 30px;
          position: relative;
        }
        .value-num {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-light);
          display: block;
          margin-bottom: 16px;
        }
        .value-title {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }
        .value-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Team Grid */
        .team-card {
          padding: 30px;
        }
        .team-avatar {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
        }
        .team-name {
          font-size: 1.25rem;
          margin-bottom: 6px;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }
        .team-role {
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 700;
          display: block;
          margin-bottom: 16px;
        }
        .team-bio {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.3rem;
          }
          .story-text h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
