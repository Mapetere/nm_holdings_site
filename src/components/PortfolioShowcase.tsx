'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    const scrollRef = useRef<HTMLDivElement>(null);

    const filteredItems = activeIndustry === 'all'
        ? exampleItems
        : exampleItems.filter(item => item.industry === activeIndustry);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="examples" className="section-navy" style={{ padding: '6rem 0', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        fontWeight: '700',
                        fontSize: '0.75rem',
                        color: 'var(--gold)'
                    }}>
                        Bespoke Engineering
                    </span>
                    <h2 className="serif" style={{ fontSize: '3.5rem', margin: '1rem 0' }}>
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
                        tell us about your industry and we'll engineer the solution.
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

                {/* Carousel Navigation Arrows */}
                <div style={{ display: filteredItems.length > 3 ? 'block' : 'none' }}>
                    <button
                        onClick={() => scroll('left')}
                        className="carousel-btn left"
                        aria-label="Previous"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="carousel-btn right"
                        aria-label="Next"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                </div>

                {/* Horizontal Scroll Area */}
                <div
                    ref={scrollRef}
                    className="carousel-scroll"
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        overflowX: 'auto',
                        padding: '1rem 0 3rem',
                        scrollSnapType: 'x mandatory',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none'
                    }}
                >
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className="glass-card example-card"
                            style={{
                                padding: 0,
                                minWidth: '400px',
                                flex: '0 0 auto',
                                overflow: 'hidden',
                                scrollSnapAlign: 'start',
                                position: 'relative',
                                border: hoveredItem === item.id ? '1px solid var(--gold)' : '1px solid rgba(194, 159, 82, 0.1)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            {/* Image Container */}
                            <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                        transform: hoveredItem === item.id ? 'scale(1.1)' : 'scale(1)',
                                        filter: hoveredItem === item.id ? 'brightness(0.3)' : 'brightness(0.8)'
                                    }}
                                />

                                {/* Hover revealed button */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1.5rem',
                                    opacity: hoveredItem === item.id ? 1 : 0,
                                    transition: 'all 0.4s ease',
                                    zIndex: 5,
                                    padding: '2rem',
                                    textAlign: 'center'
                                }}>
                                    <h4 className="serif gold-metallic" style={{
                                        fontSize: '1.8rem',
                                        transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(-20px)',
                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}>
                                        {item.title}
                                    </h4>
                                    <Link
                                        href={`/apply?project=${item.id}`}
                                        className="btn-gold"
                                        style={{
                                            padding: '1rem 2rem',
                                            fontSize: '0.9rem',
                                            transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(20px)',
                                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                        }}
                                    >
                                        I Want Something Like This
                                    </Link>
                                </div>
                            </div>

                            {/* Info Section (Visible when not hovered or subtly dimmed) */}
                            <div style={{ padding: '2rem', transition: 'all 0.4s ease', opacity: hoveredItem === item.id ? 0.3 : 1 }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--gold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontWeight: '700',
                                    display: 'block',
                                    marginBottom: '0.5rem'
                                }}>
                                    {item.question}
                                </span>
                                <h3 className="serif" style={{ fontSize: '1.6rem', color: 'var(--cream)', marginBottom: '1rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'rgba(244, 241, 231, 0.6)',
                                    lineHeight: '1.7',
                                    marginBottom: '1.5rem'
                                }}>
                                    {item.description}
                                </p>
                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    {item.features.map(f => (
                                        <span key={f} style={{
                                            fontSize: '0.7rem',
                                            color: 'var(--gold)',
                                            background: 'rgba(194, 159, 82, 0.1)',
                                            padding: '0.35rem 0.85rem',
                                            borderRadius: '20px',
                                            border: '1px solid rgba(194, 159, 82, 0.2)'
                                        }}>{f}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '5rem',
                    padding: '4rem',
                    background: 'rgba(194, 159, 82, 0.05)',
                    border: '1px solid rgba(194, 159, 82, 0.15)',
                    borderRadius: '32px'
                }}>
                    <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Don't See Your Industry?
                    </h3>
                    <p style={{
                        color: 'rgba(244, 241, 231, 0.6)',
                        marginBottom: '2rem',
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto 2rem'
                    }}>
                        We build custom solutions for any business. Tell us what you need and we'll create something for you.
                    </p>
                    <Link href="/apply" className="btn-gold" style={{ padding: '1.2rem 3rem' }}>
                        Let's Talk About Your Project
                    </Link>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .carousel-scroll::-webkit-scrollbar { display: none; }
                .carousel-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                
                .carousel-btn {
                    position: absolute;
                    top: 55%;
                    z-index: 20;
                    background: rgba(5, 8, 16, 0.8);
                    border: 1px solid var(--gold);
                    borderRadius: 50%;
                    width: 60px;
                    height: 60px;
                    color: var(--gold);
                    cursor: pointer;
                    display: flex;
                    alignItems: center;
                    justifyContent: center;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }
                .carousel-btn:hover { background: var(--gold); color: var(--navy); }
                .carousel-btn.left { left: -30px; }
                .carousel-btn.right { right: -30px; }

                @media (max-width: 1400px) {
                    .carousel-btn.left { left: 10px; }
                    .carousel-btn.right { right: 10px; }
                }

                @media (max-width: 768px) {
                    .carousel-btn { display: none !important; }
                    .example-card { min-width: 320px !important; }
                    .container { padding: 0 1.5rem !important; }
                }
            `}} />
        </section>
    );
}
