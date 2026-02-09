'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type Industry = 'all' | 'retail' | 'services' | 'food' | 'tech';

interface ExampleItem {
    id: string;
    title: string;
    industry: Industry;
    question: string;
    description: string;
    image: string;
    features: string[];
}

const exampleItems: ExampleItem[] = [
    {
        id: 'hardware',
        title: 'Hardware & Tools',
        industry: 'retail',
        question: 'Do you sell tools, equipment, or building materials?',
        description: 'We can build you an online store with product catalogs, inventory tracking, and secure payments.',
        image: '/portfolio/ecommerce-hardware.png',
        features: ['Product Catalog', 'Online Payments', 'Stock Management']
    },
    {
        id: 'cosmetics',
        title: 'Beauty & Wellness',
        industry: 'retail',
        question: 'Are you in the beauty, skincare, or wellness industry?',
        description: 'Elegant e-commerce with subscription options, reviews, and personalized recommendations.',
        image: '/portfolio/cosmetics-shop.png',
        features: ['Subscriptions', 'Customer Reviews', 'Wishlists']
    },
    {
        id: 'fashion',
        title: 'Fashion & Apparel',
        industry: 'retail',
        question: 'Do you sell clothing, shoes, or accessories?',
        description: 'Stylish online boutique with size guides, filters, and a seamless shopping experience.',
        image: '/portfolio/fashion-store.png',
        features: ['Size Guides', 'Smart Filters', 'Wishlist']
    },
    {
        id: 'grocery',
        title: 'Grocery & Fresh Produce',
        industry: 'food',
        question: 'Do you sell groceries, fresh produce, or food items?',
        description: 'Delivery platform with real-time inventory, scheduled deliveries, and category browsing.',
        image: '/portfolio/grocery-store.png',
        features: ['Delivery Scheduling', 'Live Inventory', 'Order Tracking']
    },
    {
        id: 'construction',
        title: 'Construction & Trades',
        industry: 'services',
        question: 'Are you in construction, plumbing, or skilled trades?',
        description: 'Professional corporate website showcasing your projects, services, and contact options.',
        image: '/portfolio/construction-business.png',
        features: ['Project Gallery', 'Quote Requests', 'Service Areas']
    },
    {
        id: 'admin',
        title: 'Business Dashboard',
        industry: 'tech',
        question: 'Need to track sales, users, or business metrics?',
        description: 'Custom admin panels with analytics, reports, and user management for your operations.',
        image: '/portfolio/admin-dashboard.png',
        features: ['Analytics', 'User Roles', 'Reports']
    },
    {
        id: 'mobile',
        title: 'Mobile App',
        industry: 'tech',
        question: 'Want your customers to shop from their phones?',
        description: 'Native mobile apps for iOS and Android with push notifications and offline support.',
        image: '/portfolio/mobile-app.png',
        features: ['iOS & Android', 'Push Notifications', 'Offline Mode']
    },
];

const industries = [
    { id: 'all', label: 'All Industries' },
    { id: 'retail', label: 'Retail & Shops' },
    { id: 'food', label: 'Food & Groceries' },
    { id: 'services', label: 'Services' },
    { id: 'tech', label: 'Tech & Dashboards' },
];

export default function IndustryExamples() {
    const [activeIndustry, setActiveIndustry] = useState<Industry | 'all'>('all');
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const filteredItems = activeIndustry === 'all'
        ? exampleItems
        : exampleItems.filter(item => item.industry === activeIndustry);

    return (
        <section id="examples" className="section-navy" style={{ padding: '6rem 0' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        fontWeight: '700',
                        fontSize: '0.75rem',
                        color: 'var(--gold)'
                    }}>
                        Your Industry, Your Solution
                    </span>
                    <h2 className="serif" style={{ fontSize: '3rem', margin: '1rem 0' }}>
                        What Can We <span className="gold-metallic">Build For You?</span>
                    </h2>
                    <p style={{
                        maxWidth: '650px',
                        margin: '0 auto',
                        color: 'rgba(244, 241, 231, 0.6)',
                        fontSize: '1.1rem',
                        lineHeight: '1.8'
                    }}>
                        Every business is unique. Here are examples of what we can create —
                        tell us about your industry and we'll engineer the perfect solution.
                    </p>
                </div>

                {/* Industry Filter Pills */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {industries.map(ind => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveIndustry(ind.id as Industry | 'all')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: activeIndustry === ind.id ? 'var(--gold)' : 'rgba(194, 159, 82, 0.1)',
                                border: '1px solid var(--gold)',
                                borderRadius: '50px',
                                color: activeIndustry === ind.id ? '#000' : 'var(--gold)',
                                fontWeight: '600',
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            {ind.label}
                        </button>
                    ))}
                </div>

                {/* Examples Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className="glass-card"
                            style={{
                                padding: 0,
                                overflow: 'hidden',
                                opacity: 0,
                                animation: `fadeSlideIn 0.5s ease forwards ${index * 0.1}s`
                            }}
                        >
                            {/* Image Container */}
                            <div style={{
                                position: 'relative',
                                aspectRatio: '4/3',
                                overflow: 'hidden'
                            }}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                        transform: hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)'
                                    }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Gradient Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(5, 8, 16, 0.95) 0%, rgba(5, 8, 16, 0.3) 50%, transparent 100%)',
                                }} />

                                {/* Example Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    padding: '0.4rem 0.8rem',
                                    background: 'rgba(0,0,0,0.6)',
                                    backdropFilter: 'blur(4px)',
                                    borderRadius: '4px',
                                    fontSize: '0.65rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    color: 'var(--gold)'
                                }}>
                                    Example
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '1.5rem' }}>
                                {/* Question */}
                                <p style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--gold)',
                                    marginBottom: '0.5rem',
                                    fontWeight: '500',
                                    fontStyle: 'italic'
                                }}>
                                    {item.question}
                                </p>

                                <h3 className="serif" style={{
                                    fontSize: '1.4rem',
                                    color: 'var(--cream)',
                                    marginBottom: '0.75rem'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'rgba(244, 241, 231, 0.6)',
                                    marginBottom: '1rem',
                                    lineHeight: '1.6'
                                }}>
                                    {item.description}
                                </p>

                                {/* Feature Tags */}
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {item.features.map(feature => (
                                        <span
                                            key={feature}
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                background: 'rgba(194, 159, 82, 0.15)',
                                                border: '1px solid rgba(194, 159, 82, 0.3)',
                                                borderRadius: '20px',
                                                fontSize: '0.7rem',
                                                color: 'var(--gold)',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href="/apply"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--gold)',
                                        fontWeight: '600',
                                        fontSize: '0.85rem',
                                        textDecoration: 'none',
                                        transition: 'gap 0.3s ease'
                                    }}
                                >
                                    I want something like this →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    padding: '3rem',
                    background: 'rgba(194, 159, 82, 0.05)',
                    border: '1px solid rgba(194, 159, 82, 0.15)',
                    borderRadius: '24px'
                }}>
                    <h3 className="serif" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                        Don't See Your Industry?
                    </h3>
                    <p style={{
                        color: 'rgba(244, 241, 231, 0.6)',
                        marginBottom: '1.5rem',
                        fontSize: '1.05rem',
                        maxWidth: '500px',
                        margin: '0 auto 1.5rem'
                    }}>
                        We build custom solutions for any business. Tell us what you need and we'll create something perfect for you.
                    </p>
                    <a href="/apply" className="btn-gold">
                        Let's Talk About Your Project
                    </a>
                </div>
            </div>

            {/* Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @media (max-width: 768px) {
                    #examples h2 {
                        font-size: 2rem !important;
                    }
                    #examples > div > div:nth-child(3) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}} />
        </section>
    );
}
