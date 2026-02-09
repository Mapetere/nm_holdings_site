'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import FadeInUp from '@/components/FadeInUp';

// Icons
const GlobeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
);

const DesktopIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

type PackageCategory = 'ecommerce' | 'mobile' | 'desktop';

const packages = {
    ecommerce: {
        title: 'E commerce Development',
        subtitle: 'Online Stores & Sales Platforms',
        icon: GlobeIcon,
        tiers: [
            {
                name: 'Small / Basic',
                price: '$600',
                bestFor: 'Simple product catalog with basic functionality',
                features: [
                    { text: 'Up to 20 product listings', included: true },
                    { text: 'Simple product categories', included: true },
                    { text: 'Contact form for inquiries', included: true },
                    { text: 'Mobile responsive design', included: true },
                    { text: 'Basic SEO setup', included: true },
                    { text: 'Free domain registration (1 Yr)', included: true },
                    { text: 'Free SSL/TLS certificate', included: true },
                    { text: 'DNS management included', included: true },
                    { text: 'Social media links', included: true },
                    { text: '1 revision', included: true },
                    { text: 'Shopping cart functionality', included: false },
                    { text: 'Payment gateway integration', included: false },
                    { text: 'Customer accounts', included: false },
                    { text: 'Admin dashboard', included: false },
                    { text: 'Inventory management', included: false },
                    { text: 'Analytics dashboard', included: false },
                    { text: 'Copywriting available ($10/page)', included: true },
                ],
            },
            {
                name: 'Standard',
                price: '$850',
                bestFor: 'Growing businesses ready for online sales',
                popular: true,
                features: [
                    { text: 'Up to 100 product listings', included: true },
                    { text: 'Product categories & search', included: true },
                    { text: 'Contact form for inquiries', included: true },
                    { text: 'Mobile responsive design', included: true },
                    { text: 'SEO optimization', included: true },
                    { text: 'Free domain registration (1 Yr)', included: true },
                    { text: 'Free SSL/TLS certificate', included: true },
                    { text: 'DNS management included', included: true },
                    { text: 'Social media links', included: true },
                    { text: '1 month of support', included: true },
                    { text: 'Shopping cart functionality', included: true },
                    { text: 'Payment gateway (Visa/Mastercard)', included: true },
                    { text: 'Customer accounts & order history', included: true },
                    { text: 'Admin dashboard', included: true },
                    { text: 'Inventory management', included: false },
                    { text: 'Analytics dashboard', included: false },
                    { text: 'Basic copywriting (5 pages)', included: true },
                ],
            },
            {
                name: 'Complex / Custom',
                price: '$1 500+',
                bestFor: 'Established businesses needing advanced features',
                features: [
                    { text: 'Unlimited product listings', included: true },
                    { text: 'Advanced categories & filtering', included: true },
                    { text: 'Contact form for inquiries', included: true },
                    { text: 'Mobile responsive design', included: true },
                    { text: 'Advanced SEO & analytics', included: true },
                    { text: 'Free domain registration (1 Yr)', included: true },
                    { text: 'Free SSL/TLS certificate', included: true },
                    { text: 'DNS management included', included: true },
                    { text: 'Social media integration', included: true },
                    { text: '3 months priority support', included: true },
                    { text: 'Shopping cart functionality', included: true },
                    { text: 'Multiple payment options', included: true },
                    { text: 'Customer accounts & reviews', included: true },
                    { text: 'Admin dashboard with roles', included: true },
                    { text: 'Inventory management', included: true },
                    { text: 'Sales analytics dashboard', included: true },
                    { text: 'Premium professional copywriting', included: true },
                ],
            },
            {
                name: 'Maintenance',
                price: 'Custom',
                bestFor: 'Keep your store secure and updated',
                features: [
                    { text: 'Regular security updates', included: true },
                    { text: 'Performance optimization', included: true },
                    { text: 'Content updates', included: true },
                    { text: 'Backup management', included: true },
                    { text: 'Uptime monitoring', included: true },
                    { text: 'Technical support', included: true },
                    { text: 'Bug fixes & troubleshooting', included: true },
                    { text: 'Pricing based on scope', included: true },
                ],
            },
        ],
    },
    mobile: {
        title: 'Mobile App Development',
        subtitle: 'iOS & Android Applications',
        icon: PhoneIcon,
        tiers: [
            {
                name: 'Basic',
                price: '$500',
                bestFor: 'Startups testing their mobile presence',
                features: [
                    'Single platform (iOS or Android)',
                    'Core screens: Home, Profile, Settings',
                    'User authentication (Email/Password)',
                    'Basic UI with standard components',
                    'Push notification setup',
                    'App store submission assistance',
                    '1 month of bug fixes after launch',
                    'Copywriting available (extra cost)',
                ],
            },
            {
                name: 'Standard',
                price: '$900',
                bestFor: 'Growing businesses ready for cross platform reach',
                popular: true,
                features: [
                    'Everything in Basic, plus:',
                    'Both iOS and Android (React Native/Flutter)',
                    'In-app payment integration (Stripe/PayPal)',
                    'Social login (Google, Facebook, Apple)',
                    'Advanced push notifications with segmentation',
                    'Offline data caching',
                    'Admin panel for content management',
                    'Analytics integration (Firebase/Mixpanel)',
                    '3 months of support and updates',
                    'Basic UI copy & ASO copywriting',
                ],
            },
            {
                name: 'Premium',
                price: '$1 500+',
                bestFor: 'Enterprises requiring feature-rich mobile solutions',
                features: [
                    'Everything in Standard, plus:',
                    'Custom UI/UX design with animations',
                    'Advanced role-based access control',
                    'Real-time features (chat, live updates)',
                    'Biometric authentication (Face ID/Fingerprint)',
                    'Background sync and offline mode',
                    'Multi-language support',
                    'API integrations with existing systems',
                    'Comprehensive analytics dashboard',
                    '6 months of priority support',
                    'Performance optimization for scale',
                    'Premium UI/UX copywriting & ASO',
                ],
            },
        ],
    },
    desktop: {
        title: 'Desktop App Development',
        subtitle: 'Windows & macOS Applications',
        icon: DesktopIcon,
        tiers: [
            {
                name: 'Basic',
                price: '$800',
                bestFor: 'Simple internal tools and utilities',
                features: [
                    'Single OS (Windows or macOS)',
                    'Core functionality screens',
                    'Local data storage (SQLite)',
                    'Basic user interface',
                    'Simple reporting capabilities',
                    'Installation package creation',
                    '1 month of bug fixes after launch',
                    'Copywriting available (extra cost)',
                ],
            },
            {
                name: 'Standard',
                price: '$1 000',
                bestFor: 'Business applications with data management',
                popular: true,
                features: [
                    'Everything in Basic, plus:',
                    'Cross-platform (Windows + macOS)',
                    'Database integration (PostgreSQL/MySQL)',
                    'User authentication and roles',
                    'Data import/export (Excel, CSV, PDF)',
                    'Print functionality with templates',
                    'Auto-update mechanism',
                    'Basic cloud sync capability',
                    '3 months of support and updates',
                    'Onboarding & basic UI copywriting',
                ],
            },
            {
                name: 'Premium',
                price: '$2 200+',
                bestFor: 'Enterprise grade desktop solutions',
                features: [
                    'Everything in Standard, plus:',
                    'MultiOS including Linux',
                    'Real time cloud synchronization',
                    'Advanced reporting & analytics',
                    'Integration with external APIs/services',
                    'Multi user collaboration features',
                    'Offline first architecture',
                    'Custom plugin/extension system',
                    'Enterprise security features',
                    '12 months of priority support',
                    'Full tech docs & premium UI copy',
                    'Dedicated account manager',
                ],
            },
        ],
    },
};

function PackagesContent() {
    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState<PackageCategory>('ecommerce');
    const currentPackage = packages[activeCategory];

    // Read category from URL on mount
    useEffect(() => {
        const category = searchParams.get('category');
        if (category && (category === 'ecommerce' || category === 'mobile' || category === 'desktop')) {
            setActiveCategory(category);
        }
    }, [searchParams]);
    const IconComponent = currentPackage.icon;

    return (
        <main>
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
                            Development Packages
                        </div>
                        <h1 className="serif" style={{
                            fontSize: '3.5rem',
                            lineHeight: '1.2',
                            marginBottom: '1.5rem',
                            color: 'var(--cream)'
                        }}>
                            Let's Build <br /> Together
                        </h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(244, 241, 231, 0.6)', fontSize: '1.1rem' }}>
                            Quality development packages designed for small to medium enterprises.
                            Built to scale with your business.
                        </p>
                    </div>
                </FadeInUp>
            </section>

            {/* Category Tabs */}
            <section className="section-navy" style={{ padding: '0 0 4rem' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        marginBottom: '3rem'
                    }}>
                        {(Object.keys(packages) as PackageCategory[]).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                style={{
                                    padding: '1rem 2rem',
                                    background: activeCategory === key ? 'var(--gold)' : 'transparent',
                                    border: '1px solid var(--gold)',
                                    borderRadius: '8px',
                                    color: activeCategory === key ? '#000' : 'var(--gold)',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    transition: 'var(--transition)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <div style={{ width: '20px', height: '20px' }}>
                                    {React.createElement(packages[key].icon)}
                                </div>
                                {packages[key].title.replace(' Development', '').replace(' App', '')}
                            </button>
                        ))}
                    </div>

                    {/* Category Header */}
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div style={{ width: '60px', height: '60px', margin: '0 auto 1rem', color: 'var(--gold)' }}>
                            <IconComponent />
                        </div>
                        <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{currentPackage.title}</h2>
                        <p style={{ color: 'rgba(244, 241, 231, 0.5)' }}>{currentPackage.subtitle}</p>
                    </div>

                    {/* Pricing Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${currentPackage.tiers.length}, 1fr)`,
                        gap: '1.5rem'
                    }}>
                        {currentPackage.tiers.map((tier, i) => (
                            <FadeInUp key={i} delay={0.1 * i}>
                                <div
                                    className="glass-card"
                                    style={{
                                        position: 'relative',
                                        border: tier.popular ? '2px solid var(--gold)' : undefined,
                                        transform: tier.popular ? 'scale(1.05)' : undefined,
                                        paddingTop: tier.popular ? '4rem' : '3rem',
                                        height: '100%',
                                        zIndex: tier.popular ? 2 : 1
                                    }}
                                >
                                    {tier.popular && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-1px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: 'var(--gold)',
                                            color: '#000',
                                            padding: '0.5rem 1.5rem',
                                            borderRadius: '8px',
                                            fontSize: '0.65rem',
                                            fontWeight: '800',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="serif" style={{ fontSize: '1.5rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                                        {tier.name}
                                    </h3>
                                    <div className="gold-metallic" style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                                        {tier.price}
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: 'rgba(244, 241, 231, 0.5)', marginBottom: '2rem' }}>
                                        {tier.bestFor}
                                    </p>
                                    <div style={{ borderTop: '1px solid rgba(194, 159, 82, 0.2)', paddingTop: '1.5rem' }}>
                                        {tier.features.map((feature: { text: string; included: boolean } | string, j: number) => {
                                            const isObject = typeof feature === 'object';
                                            const text = isObject ? feature.text : feature;
                                            const included = isObject ? feature.included : true;
                                            return (
                                                <div key={j} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '0.75rem',
                                                    marginBottom: '0.75rem',
                                                    fontSize: '0.8rem',
                                                    color: included ? 'rgba(244, 241, 231, 0.7)' : 'rgba(244, 241, 231, 0.35)',
                                                    textDecoration: included ? 'none' : 'line-through',
                                                }}>
                                                    <div style={{
                                                        color: included ? '#4ade80' : '#ef4444',
                                                        marginTop: '2px',
                                                        flexShrink: 0
                                                    }}>
                                                        {included ? <CheckIcon /> : <XIcon />}
                                                    </div>
                                                    <span>{text}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <Link
                                        href={`/apply?package=${encodeURIComponent(tier.name)}&category=${activeCategory}&price=${encodeURIComponent(tier.price)}`}
                                        className="btn-gold"
                                        style={{
                                            width: '100%',
                                            justifyContent: 'center',
                                            marginTop: '2rem',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Get Started <ArrowIcon />
                                    </Link>
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
                            Need Custom Features?
                        </h3>
                        <p style={{ color: 'rgba(244, 241, 231, 0.6)', marginBottom: '1rem' }}>
                            For add on costs and custom requirements, contact our support team.
                        </p>
                        <a href="/apply" style={{ color: 'var(--gold)', fontWeight: '600', textDecoration: 'none' }}>
                            Contact Support →
                        </a>
                    </div>
                </div>
            </section>

            <BackToHome />
            <Footer />
        </main>
    );
}

export default function PackagesPage() {
    return (
        <Suspense fallback={
            <main className="section-navy" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="serif gold-metallic" style={{ fontSize: '1.5rem' }}>Loading Packages...</div>
            </main>
        }>
            <PackagesContent />
        </Suspense>
    );
}
