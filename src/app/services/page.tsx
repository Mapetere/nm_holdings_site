'use client';
import React from 'react';
import Image from 'next/image';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import Header from '@/components/Header';
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

const SocialIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
);

const PaletteIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
);

const CloudIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
);

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const services = [
    {
        icon: GlobeIcon,
        title: 'Web Design',
        description: 'Clean, modern, user focused designs that convert visitors into customers.',
        link: '/packages?category=ecommerce',
    },
    {
        icon: GlobeIcon,
        title: 'Web Development',
        description: 'Fast, scalable, and secure websites built with modern technologies.',
        link: '/packages?category=ecommerce',
    },
    {
        icon: DesktopIcon,
        title: 'E Commerce',
        description: 'Powerful online stores designed to grow your sales and brand.',
        link: '/packages?category=ecommerce',
    },
    {
        icon: PhoneIcon,
        title: 'Mobile Apps',
        description: 'Native and cross platform apps for iOS and Android that users love.',
        link: '/packages?category=mobile',
    },
    {
        icon: DesktopIcon,
        title: 'Desktop Apps',
        description: 'Custom desktop applications tailored to your business processes.',
        link: '/packages?category=desktop',
    },
    {
        icon: SocialIcon,
        title: 'Social Media',
        description: 'Boost your brand\'s online presence with targeted campaigns and strategies.',
        link: '/social-media',
    },
];



export default function ServicesPage() {
    return (
        <main style={{ position: 'relative' }}>
            <Header />

            {/* Top Right Back to Home */}
            <a href="/" style={{
                position: 'fixed',
                top: '2rem',
                right: '2rem',
                zIndex: 1100,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--gold)',
                textDecoration: 'none',
                fontWeight: '600',
                background: 'rgba(5, 8, 16, 0.8)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                border: '1px solid rgba(194, 159, 82, 0.3)',
                backdropFilter: 'blur(5px)'
            }}>
                Home <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </a>

            {/* Hero Section - ApexFinish Style */}
            <section className="section-navy" style={{ padding: '10rem 0 4rem' }}>
                <FadeInUp>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h1 className="serif" style={{
                            fontSize: '4rem',
                            lineHeight: '1.2',
                            marginBottom: '2rem',
                            maxWidth: '800px',
                            margin: '0 auto 2rem',
                            color: 'var(--cream)'
                        }}>
                            Let's Build <br /> Together
                        </h1>
                        <p style={{
                            maxWidth: '650px',
                            margin: '0 auto 2.5rem',
                            fontSize: '1.2rem',
                            color: 'rgba(244, 241, 231, 0.6)',
                            lineHeight: '1.8'
                        }}>
                            We help businesses grow with stunning websites from high converting
                            landing pages to powerful full-scale web applications.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <a href="/packages" className="btn-gold">View Packages</a>
                            <a href="/apply" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1.1rem 2.5rem',
                                border: '1px solid var(--gold)',
                                borderRadius: '8px',
                                color: 'var(--gold)',
                                fontWeight: '600',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                transition: 'var(--transition)'
                            }}>
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </FadeInUp>
            </section>

            {/* Services Grid - Clean ApexFinish Style */}
            <section id="services" className="section-navy" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h2>
                        <div style={{ width: '60px', height: '3px', background: 'var(--gold)', margin: '0 auto' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {services.map((service, i) => (
                            <FadeInUp key={i} delay={0.1 * i}>
                                <div
                                    className="glass-card"
                                    style={{
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        transition: 'var(--transition)',
                                        height: '100%'
                                    }}
                                >
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        margin: '0 auto 1.5rem',
                                        padding: '15px',
                                        background: 'rgba(194, 159, 82, 0.1)',
                                        border: '1px solid rgba(194, 159, 82, 0.2)',
                                        borderRadius: '16px',
                                        color: 'var(--gold)'
                                    }}>
                                        <service.icon />
                                    </div>
                                    <h3 className="serif" style={{ fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '0.75rem' }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ fontSize: '0.95rem', color: 'rgba(244, 241, 231, 0.6)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                        {service.description}
                                    </p>
                                    <a href={service.link} style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--gold)',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        transition: 'var(--transition)'
                                    }}>
                                        Learn More <ArrowIcon />
                                    </a>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Examples */}
            <PortfolioShowcase />

            {/* Development Process Flow - Enhanced Visual */}


            {/* About / Value Proposition Section */}
            <section className="section-navy" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <div>
                            <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', fontSize: '0.75rem', color: 'var(--gold)' }}>
                                How We Work
                            </span>
                            <h2 className="serif" style={{ fontSize: '2.5rem', margin: '1rem 0 1.5rem', lineHeight: '1.2' }}>
                                Building Products Through <span className="gold-metallic">Research</span> and Precision
                            </h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.7, lineHeight: '1.8' }}>
                                We take time to understand your business before writing a single line of code.
                                Every project starts with research, planning, and clear communication.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                {[
                                    { num: '✓', label: 'Research-First Approach' },
                                    { num: '✓', label: 'Phase-Based Delivery' },
                                    { num: '✓', label: 'Rigorous Testing' },
                                    { num: '✓', label: 'Transparent Process' },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="gold-metallic" style={{ fontSize: '2rem', fontWeight: '700' }}>
                                            {stat.num}
                                        </div>
                                        <div style={{ fontSize: '0.85rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="float-anim" style={{
                            background: 'rgba(194, 159, 82, 0.05)',
                            border: '1px solid rgba(194, 159, 82, 0.15)',
                            borderRadius: '24px',
                            padding: '3rem',
                            textAlign: 'center'
                        }}>
                            <h3 className="serif" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                                Ready to Start?
                            </h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.6, marginBottom: '2rem' }}>
                                Let us discuss how we can help build your digital solution.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a href="https://wa.me/263774694160?text=Hi%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                                    WhatsApp Us <ArrowIcon />
                                </a>
                                <a href="mailto:support@nmsolutions.co.zw?subject=Project%20Inquiry" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem',
                                    border: '1px solid var(--gold)',
                                    borderRadius: '8px',
                                    color: 'var(--gold)',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px'
                                }}>
                                    Send Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <BackToHome />
            <Footer />
        </main>
    );
}
