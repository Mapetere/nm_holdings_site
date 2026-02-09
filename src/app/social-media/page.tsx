'use client';
import React from 'react';
import Image from 'next/image';

// Icons
const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const packages = [
    {
        name: 'Starter',
        price: '$500',
        period: '/month',
        bestFor: 'New businesses establishing their social presence',
        features: [
            '3 platforms (Facebook, Instagram, Twitter/X)',
            'Content calendar creation',
            '12 posts per month (3 per week)',
            'Basic graphic design for posts',
            'Monthly performance report',
            'Community engagement (replies & comments)',
            'Profile optimization & branding',
        ],
    },
    {
        name: 'Growth',
        price: '$1,200',
        period: '/month',
        bestFor: 'Growing businesses ready to expand their reach',
        popular: true,
        features: [
            'Everything in Starter, plus:',
            '5 platforms (adds LinkedIn, TikTok)',
            '20 posts per month',
            'Custom graphics & branded templates',
            'Story/Reel creation (8 per month)',
            'Hashtag strategy & optimization',
            'Competitor analysis',
            'Weekly performance reports',
            'Audience growth campaigns',
        ],
    },
    {
        name: 'Enterprise',
        price: '$2,500',
        period: '/month',
        bestFor: 'Established brands seeking full-service management',
        features: [
            'Everything in Growth, plus:',
            'Unlimited platforms',
            'Daily posts across all platforms',
            'Video content production',
            'Paid advertising management',
            'Influencer outreach & collaboration',
            'Crisis management protocol',
            'Dedicated account manager',
            'Real-time analytics dashboard',
            'A/B testing for content',
            'Monthly strategy sessions',
        ],
    },
];

const platforms = [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Facebook', icon: FacebookIcon },
    { name: 'Twitter/X', icon: TwitterIcon },
    { name: 'LinkedIn', icon: LinkedInIcon },
    { name: 'TikTok', icon: TikTokIcon },
];

export default function SocialMediaPage() {
    return (
        <main>
            {/* Header */}
            <header className="section-navy" style={{
                padding: '1.5rem 0',
                borderBottom: '1px solid rgba(194, 159, 82, 0.1)'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}>
                        <div className="header-glow">
                            <Image
                                src="/nm-solutions-icon.png"
                                alt="NM Solutions icon"
                                className="logo-enhance"
                                width={55}
                                height={55}
                                priority
                                style={{ height: '55px', width: 'auto' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="serif" style={{ fontSize: '1.6rem', letterSpacing: '1px', fontWeight: '500', lineHeight: '1.1', color: 'var(--cream)' }}>
                                NMS<span className="gold-metallic" style={{ fontSize: '1.3rem', fontWeight: '700' }}>olutions</span>
                            </span>
                            <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold)', opacity: 0.8 }}>
                                Digital Engineering
                            </span>
                        </div>
                    </a>
                    <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        <a href="/services" className="nav-link">Services</a>
                        <a href="/packages" className="nav-link">Packages</a>
                        <a href="/apply" className="nav-link">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="section-navy" style={{ padding: '5rem 0 3rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        border: '1px solid var(--gold)',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        color: 'var(--gold)',
                        marginBottom: '2rem'
                    }}>
                        Social Media Services
                    </div>
                    <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--cream)' }}>
                        Let's Build <br /> Together
                    </h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'rgba(244, 241, 231, 0.6)', fontSize: '1.1rem' }}>
                        Complete social media platform creation, content strategy, and ongoing management
                        to build your brand's digital presence.
                    </p>

                    {/* Platform Icons */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                        {platforms.map((platform, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    padding: '12px',
                                    background: 'rgba(194, 159, 82, 0.1)',
                                    border: '1px solid rgba(194, 159, 82, 0.2)',
                                    borderRadius: '12px',
                                    color: 'var(--gold)',
                                    margin: '0 auto 0.5rem'
                                }}>
                                    <platform.icon />
                                </div>
                                <span style={{ fontSize: '0.7rem', color: 'rgba(244, 241, 231, 0.5)' }}>
                                    {platform.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-navy" style={{ padding: '0 0 4rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {packages.map((pkg, i) => (
                            <div
                                key={i}
                                className="glass-card"
                                style={{
                                    position: 'relative',
                                    border: pkg.popular ? '2px solid var(--gold)' : undefined,
                                    transform: pkg.popular ? 'scale(1.02)' : undefined,
                                    paddingTop: pkg.popular ? '3.5rem' : undefined
                                }}
                            >
                                {pkg.popular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-1px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--gold)',
                                        color: '#000',
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '0 0 8px 8px',
                                        fontSize: '0.7rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="serif" style={{ fontSize: '1.5rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                                    {pkg.name}
                                </h3>
                                <div style={{ marginBottom: '0.5rem' }}>
                                    <span className="gold-metallic" style={{ fontSize: '3rem', fontWeight: '700' }}>
                                        {pkg.price}
                                    </span>
                                    <span style={{ color: 'rgba(244, 241, 231, 0.5)', fontSize: '1rem' }}>
                                        {pkg.period}
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'rgba(244, 241, 231, 0.5)', marginBottom: '2rem' }}>
                                    {pkg.bestFor}
                                </p>
                                <div style={{ borderTop: '1px solid rgba(194, 159, 82, 0.2)', paddingTop: '1.5rem' }}>
                                    {pkg.features.map((feature, j) => (
                                        <div key={j} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.75rem',
                                            marginBottom: '0.75rem',
                                            fontSize: '0.85rem',
                                            color: feature.startsWith('Everything') ? 'var(--gold)' : 'rgba(244, 241, 231, 0.7)'
                                        }}>
                                            <div style={{ color: 'var(--gold)', marginTop: '2px' }}><CheckIcon /></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="/apply" className="btn-gold" style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    marginTop: '2rem',
                                    textDecoration: 'none'
                                }}>
                                    Get Started <ArrowIcon />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Add-on Note */}
                    <div style={{
                        textAlign: 'center',
                        marginTop: '4rem',
                        padding: '2rem',
                        background: 'rgba(194, 159, 82, 0.05)',
                        border: '1px solid rgba(194, 159, 82, 0.15)',
                        borderRadius: '12px'
                    }}>
                        <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            Need Additional Services?
                        </h3>
                        <p style={{ color: 'rgba(244, 241, 231, 0.6)', marginBottom: '1rem' }}>
                            For add-on costs like paid advertising budgets, additional platforms, or custom requirements, contact our support team.
                        </p>
                        <a href="/apply" style={{ color: 'var(--gold)', fontWeight: '600', textDecoration: 'none' }}>
                            Contact Support →
                        </a>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="section-cream" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--navy)' }}>
                            What's Included
                        </h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(5, 8, 16, 0.6)' }}>
                            Our comprehensive approach to social media management
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {[
                            { title: 'Platform Setup', desc: 'Complete profile creation and optimization across all platforms with consistent branding.' },
                            { title: 'Content Strategy', desc: 'Custom content calendars aligned with your brand voice and business goals.' },
                            { title: 'Graphic Design', desc: 'Eye-catching visuals and branded templates for maximum engagement.' },
                            { title: 'Community Management', desc: 'Active engagement with your audience through comments, messages, and mentions.' },
                            { title: 'Analytics & Reporting', desc: 'Detailed insights on performance, growth, and ROI with actionable recommendations.' },
                            { title: 'Strategy Optimization', desc: 'Continuous improvement based on data-driven insights and trends.' },
                        ].map((item, i) => (
                            <div key={i} style={{
                                padding: '2rem',
                                background: 'white',
                                borderRadius: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                            }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--navy)' }}>
                                    {item.title}
                                </h4>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(5, 8, 16, 0.6)', lineHeight: '1.6' }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="section-navy" style={{
                padding: '3rem 0',
                borderTop: '1px solid rgba(194, 159, 82, 0.1)'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.4, fontWeight: '500' }}>
                        © {new Date().getFullYear()} NM SOLUTIONS — DIGITAL ENGINEERING PRECISION.
                    </p>
                </div>
            </footer>
        </main>
    );
}
