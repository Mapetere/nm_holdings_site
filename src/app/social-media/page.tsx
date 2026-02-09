'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import FadeInUp from '@/components/FadeInUp';

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
    <svg viewBox="0 0 24 24" fill="#E4405F" style={{ width: '100%', height: '100%' }}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="#1877F2" style={{ width: '100%', height: '100%' }}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="#1DA1F2" style={{ width: '100%', height: '100%' }}>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="#0A66C2" style={{ width: '100%', height: '100%' }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="#FFFFFF" style={{ width: '100%', height: '100%' }}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12-1.08-.94-1.93-2.15-2.51-3.48-.01 5.33-.01 10.66-.01 16.03 0 1.79-.53 3.63-1.88 5.08-1.46 1.59-3.69 2.21-5.74 2.1-2.2-.1-4.25-1.32-5.41-3.23-1.37-2.24-1.32-5.22.14-7.39 1.28-1.96 3.49-3.05 5.86-3.05 1.7 0 3.36.7 4.54 1.95l.07-4.08c-2.34-.69-4.88-.38-7.1 1.01-2.12 1.32-3.61 3.51-3.9 5.98-.32 2.64.49 5.37 2.37 7.29 2 2.07 5.14 2.8 7.9 2.18 2.59-.62 4.74-2.6 5.56-5.18.94-3.56.91-9.98.91-13.67z" />
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
        bestFor: 'Established brands seeking full service management',
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
        <main style={{ position: 'relative' }}>
            <Header />



            {/* Hero Section */}
            <section className="section-navy" style={{ padding: '10rem 0 4rem' }}>
                <FadeInUp>
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
                        <h1 className="serif" style={{
                            fontSize: '3.5rem',
                            lineHeight: '1.2',
                            marginBottom: '1.5rem',
                            color: 'var(--cream)'
                        }}>
                            Let's Build <br /> Together
                        </h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'rgba(244, 241, 231, 0.6)', fontSize: '1.1rem' }}>
                            Complete social media platform creation, content strategy, and ongoing management
                            to build your brand's digital presence.
                        </p>
                    </div>
                </FadeInUp>

                {/* Platform Icons */}
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                        {platforms.map((platform, i) => (
                            <FadeInUp key={i} delay={0.2 + (i * 0.1)}>
                                <div style={{ textAlign: 'center' }}>
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
                            </FadeInUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-navy" style={{ padding: '0 0 4rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {packages.map((pkg, i) => (
                            <FadeInUp key={i} delay={0.1 * i}>
                                <div
                                    className="glass-card"
                                    style={{
                                        position: 'relative',
                                        border: pkg.popular ? '2px solid var(--gold)' : undefined,
                                        transform: pkg.popular ? 'scale(1.02)' : undefined,
                                        paddingTop: pkg.popular ? '3.5rem' : undefined,
                                        height: '100%'
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
                            </FadeInUp>
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
                            For add on costs like paid advertising budgets, additional platforms, or custom requirements, contact our support team.
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
                            { title: 'Graphic Design', desc: 'Eye catching visuals and branded templates for maximum engagement.' },
                            { title: 'Community Management', desc: 'Active engagement with your audience through comments, messages, and mentions.' },
                            { title: 'Analytics & Reporting', desc: 'Detailed insights on performance, growth, and ROI with actionable recommendations.' },
                            { title: 'Strategy Optimization', desc: 'Continuous improvement based on data driven insights and trends.' },
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

            <BackToHome />
            <Footer />
        </main>
    );
}
