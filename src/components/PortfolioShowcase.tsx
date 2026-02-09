'use client';
import React, { useState, useRef, useEffect } from 'react';
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
        description: 'Elegant e commerce with subscription options, reviews, and personalized recommendations.',
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

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        // Check after a bit to account for rendering
        const timer = setTimeout(checkScroll, 100);
        window.addEventListener('resize', checkScroll);
        return () => {
            window.removeEventListener('resize', checkScroll);
            clearTimeout(timer);
        };
    }, [filteredItems]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
            // After scroll finishes
            setTimeout(checkScroll, 500);
        }
    };

    return (
        <section id="examples" className="section-navy" style={{ padding: '8rem 0', overflow: 'hidden' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        fontWeight: '700',
                        fontSize: '0.75rem',
                        color: 'var(--gold)'
                    }}>
                        Bespoke Engineering
                    </span>
                    <h2 className="serif" style={{ fontSize: '3.5rem', margin: '1rem 0', color: 'var(--cream)' }}>
                        What Can We <span className="gold-metallic">Build Together?</span>
                    </h2>
                    <p style={{
                        maxWidth: '650px',
                        margin: '0 auto',
                        color: 'rgba(244, 241, 231, 0.6)',
                        fontSize: '1.1rem',
                        lineHeight: '1.8'
                    }}>
                        Every business is unique. We engineer high performance digital ecosystems
                        tailored to your specific industry goals.
                    </p>
                </div>

                {/* Industry Filter Pills */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '4rem',
                    flexWrap: 'wrap'
                }}>
                    {industries.map(ind => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveIndustry(ind.id as Industry | 'all')}
                            style={{
                                padding: '0.6rem 1.25rem',
                                background: activeIndustry === ind.id ? 'var(--gold)' : 'transparent',
                                border: '1px solid var(--gold)',
                                borderRadius: '50px',
                                color: activeIndustry === ind.id ? '#000' : 'var(--gold)',
                                fontWeight: '600',
                                fontSize: '0.75rem',
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

                {/* Netflix-style Slider Area */}
                <div style={{ position: 'relative', width: '100%' }}>
                    {/* Navigation Arrows */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="netflix-nav left"
                            aria-label="Previous"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                    )}
                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="netflix-nav right"
                            aria-label="Next"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    )}

                    <div
                        ref={scrollRef}
                        onScroll={checkScroll}
                        className="netflix-scroll"
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            overflowX: 'auto',
                            padding: '1rem 0 4rem',
                            scrollSnapType: 'x mandatory',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none'
                        }}
                    >
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className="netflix-card"
                                style={{
                                    position: 'relative',
                                    minWidth: '350px',
                                    flex: '0 0 auto',
                                    aspectRatio: '16/9',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    scrollSnapAlign: 'start',
                                    transition: 'transform 0.4s ease, border-color 0.4s ease',
                                    border: '1px solid rgba(194, 159, 82, 0.1)',
                                    cursor: 'pointer'
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        transition: 'all 0.6s ease',
                                        transform: hoveredItem === item.id ? 'scale(1.1)' : 'scale(1)',
                                        filter: hoveredItem === item.id ? 'brightness(0.4)' : 'brightness(0.8)'
                                    }}
                                />

                                {/* Info Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    background: 'rgba(5, 8, 16, 0.85)',
                                    backdropFilter: 'blur(8px)',
                                    opacity: hoveredItem === item.id ? 1 : 0,
                                    transition: 'all 0.4s ease',
                                    zIndex: 5
                                }}>
                                    <h3 className="serif" style={{
                                        fontSize: '1.4rem',
                                        color: 'var(--cream)',
                                        marginBottom: '0.5rem',
                                        transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(-10px)',
                                        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'rgba(244, 241, 231, 0.8)',
                                        margin: 0,
                                        maxWidth: '240px',
                                        lineHeight: '1.6',
                                        transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(10px)',
                                        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0.1s',
                                        opacity: hoveredItem === item.id ? 1 : 0
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '2rem',
                    padding: '3rem',
                    background: 'rgba(194, 159, 82, 0.05)',
                    border: '1px solid rgba(194, 159, 82, 0.15)',
                    borderRadius: '24px',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--cream)' }}>
                        Don't See Your Industry?
                    </h3>
                    <p style={{
                        color: 'rgba(244, 241, 231, 0.6)',
                        marginBottom: '1.5rem',
                        fontSize: '1rem'
                    }}>
                        We engineer custom solutions for any challenge. Let's discuss your unique requirements.
                    </p>
                    <Link href="/apply" className="btn-gold" style={{ padding: '1rem 2.5rem' }}>
                        Let's Talk
                    </Link>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .netflix-scroll::-webkit-scrollbar { display: none; }
                .netflix-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                
                .netflix-nav {
                    position: absolute;
                    top: 50%;
                    width: 44px;
                    height: 44px;
                    z-index: 20;
                    background: rgba(244, 241, 231, 0.1);
                    border: 1px solid rgba(244, 241, 231, 0.2);
                    border-radius: 50%;
                    color: var(--cream);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    opacity: 0.4;
                    transform: translateY(-50%);
                    backdrop-filter: blur(5px);
                }
                .netflix-nav:hover { 
                    background: rgba(244, 241, 231, 0.2); 
                    color: var(--gold);
                    opacity: 1;
                    border-color: var(--gold);
                }
                .netflix-nav.left { left: 1rem; }
                .netflix-nav.right { right: 1rem; }
                
                div:hover > .netflix-nav { opacity: 1; }
                
                .netflix-card:hover {
                    border-color: var(--gold);
                    z-index: 10;
                }

                @media (max-width: 768px) {
                    .netflix-card { min-width: 280px !important; }
                    .netflix-nav { display: none !important; }
                }
            `}} />
        </section>
    );
}

