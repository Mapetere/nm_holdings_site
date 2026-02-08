'use client';
import React, { useState } from 'react';

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

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

type PackageCategory = 'website' | 'mobile' | 'desktop';

const packages = {
    website: {
        title: 'Website Development',
        subtitle: 'E-Commerce & Business Websites',
        icon: GlobeIcon,
        tiers: [
            {
                name: 'Basic',
                price: '$1,500',
                bestFor: 'Getting started with a simple online presence',
                features: [
                    'Static landing page with call-to-action',
                    'Up to 50 product listings with images & descriptions',
                    'Simple user registration/login',
                    'Shopping cart and basic checkout (no online payment)',
                    'Contact form for inquiries',
                    'Mobile-responsive design',
                    '1 month of bug fixes after launch',
                ],
            },
            {
                name: 'Standard',
                price: '$3,500',
                bestFor: 'Small-to-medium businesses ready for online sales',
                popular: true,
                features: [
                    'Everything in Basic, plus:',
                    'Payment Gateway Integration (Visa/Mastercard via Stripe or PayGate)',
                    'Customer can choose: Shop Online or Order for Physical Pickup',
                    'Chatbot with automated 24-hour response promise + WhatsApp redirect',
                    'Role-Based Access: Admin and Staff roles',
                    'Product categories and search functionality',
                    'Order tracking for customers',
                    'Advanced admin dashboard with order management',
                    '3 months of support and updates',
                ],
            },
            {
                name: 'Premium',
                price: '$8,000',
                bestFor: 'Established businesses wanting a complete e-commerce solution',
                features: [
                    'Everything in Standard, plus:',
                    'Unlimited products with bulk upload capability',
                    'Unlimited custom roles (Admin, Manager, Staff, Accountant, etc.)',
                    'Inventory Management System with low-stock alerts',
                    'Sales Reports & Analytics Dashboard',
                    'Customer Reviews & Ratings system',
                    'Promotional Tools: Discount codes, flash sales, featured products',
                    'Email Marketing Integration (Mailchimp/SendGrid)',
                    'Advanced SEO with blog/content management',
                    '6 months of priority support',
                    'Future-proof architecture (built to last 20+ years)',
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
                price: '$5,000',
                bestFor: 'Startups testing their mobile presence',
                features: [
                    'Single platform (iOS or Android)',
                    'Core screens: Home, Profile, Settings',
                    'User authentication (Email/Password)',
                    'Basic UI with standard components',
                    'Push notification setup',
                    'App store submission assistance',
                    '1 month of bug fixes after launch',
                ],
            },
            {
                name: 'Standard',
                price: '$12,000',
                bestFor: 'Growing businesses needing cross-platform reach',
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
                ],
            },
            {
                name: 'Premium',
                price: '$25,000',
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
                price: '$4,000',
                bestFor: 'Simple internal tools and utilities',
                features: [
                    'Single OS (Windows or macOS)',
                    'Core functionality screens',
                    'Local data storage (SQLite)',
                    'Basic user interface',
                    'Simple reporting capabilities',
                    'Installation package creation',
                    '1 month of bug fixes after launch',
                ],
            },
            {
                name: 'Standard',
                price: '$10,000',
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
                ],
            },
            {
                name: 'Premium',
                price: '$22,000',
                bestFor: 'Enterprise-grade desktop solutions',
                features: [
                    'Everything in Standard, plus:',
                    'Multi-OS including Linux',
                    'Real-time cloud synchronization',
                    'Advanced reporting & analytics',
                    'Integration with external APIs/services',
                    'Multi-user collaboration features',
                    'Offline-first architecture',
                    'Custom plugin/extension system',
                    'Enterprise security features',
                    '6 months of priority support',
                    'Dedicated account manager',
                ],
            },
        ],
    },
};

export default function PackagesPage() {
    const [activeCategory, setActiveCategory] = useState<PackageCategory>('website');
    const currentPackage = packages[activeCategory];
    const IconComponent = currentPackage.icon;

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
                            <img
                                src="/nm-solutions-icon.png"
                                alt="NM Solutions icon"
                                className="logo-enhance"
                                style={{ height: '55px', width: 'auto' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="serif" style={{ fontSize: '1.5rem', letterSpacing: '1px', fontWeight: '500', lineHeight: '1.1' }}>
                                NM<span className="gold-metallic" style={{ fontWeight: '700' }}>SOLUTIONS</span>
                            </span>
                            <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold)', opacity: 0.8 }}>
                                Digital Engineering
                            </span>
                        </div>
                    </a>
                    <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        <a href="/services" className="nav-link">Services</a>
                        <a href="/packages" className="nav-link" style={{ color: 'var(--gold)' }}>Packages</a>
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
                        Development Packages
                    </div>
                    <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        Choose Your <span className="gold-metallic">Solution</span>
                    </h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(244, 241, 231, 0.6)', fontSize: '1.1rem' }}>
                        Quality development packages designed for small to medium enterprises.
                        Built to scale with your business.
                    </p>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="section-navy" style={{ padding: '0 0 4rem' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
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
                                {packages[key].title.split(' ')[0]}
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {currentPackage.tiers.map((tier, i) => (
                            <div
                                key={i}
                                className="glass-card"
                                style={{
                                    position: 'relative',
                                    border: tier.popular ? '2px solid var(--gold)' : undefined,
                                    transform: tier.popular ? 'scale(1.02)' : undefined,
                                    paddingTop: tier.popular ? '3.5rem' : undefined
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
                                    {tier.name}
                                </h3>
                                <div className="gold-metallic" style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                                    {tier.price}
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'rgba(244, 241, 231, 0.5)', marginBottom: '2rem' }}>
                                    {tier.bestFor}
                                </p>
                                <div style={{ borderTop: '1px solid rgba(194, 159, 82, 0.2)', paddingTop: '1.5rem' }}>
                                    {tier.features.map((feature, j) => (
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
                            Need Custom Features?
                        </h3>
                        <p style={{ color: 'rgba(244, 241, 231, 0.6)', marginBottom: '1rem' }}>
                            For add-on costs and custom requirements, contact our support team.
                        </p>
                        <a href="/apply" style={{ color: 'var(--gold)', fontWeight: '600', textDecoration: 'none' }}>
                            Contact Support →
                        </a>
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
