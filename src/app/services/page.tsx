'use client';
import React from 'react';
import Image from 'next/image';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';

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
        title: 'E-Commerce',
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

const processSteps = [
    {
        step: '01',
        title: 'Research',
        description: 'We study your business, understand your goals, and research examples you provide.'
    },
    {
        step: '02',
        title: 'Setup',
        description: 'We gather necessary tools: server hosting, domain registration, and development environment.'
    },
    {
        step: '03',
        title: 'Development',
        description: 'Building your solution in phases for complex projects, or as a single deliverable for simpler ones.'
    },
    {
        step: '04',
        title: 'Testing',
        description: 'Rigorous testing to ensure your product works flawlessly across all scenarios.'
    },
    {
        step: '05',
        title: 'Delivery',
        description: 'We present the final product and hand over everything you need to succeed.'
    },
];

export default function ServicesPage() {
    return (
        <main>
            <Header />

            {/* Hero Section - ApexFinish Style */}
            <section className="section-navy" style={{ padding: '6rem 0 4rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="serif" style={{
                        fontSize: '4rem',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        maxWidth: '800px',
                        margin: '0 auto 1.5rem',
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
                            <div
                                key={i}
                                className="glass-card"
                                style={{
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'var(--transition)'
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
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Examples */}
            <PortfolioShowcase />

            {/* Development Process Flow - Enhanced Visual */}
            <section id="flow" className="section-cream" style={{ padding: '8rem 0', background: '#f9f7f0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', fontSize: '0.75rem', color: 'var(--gold)' }}>Our Method</span>
                        <h2 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--navy)' }}>
                            Product Development <span className="gold-metallic">Flow</span>
                        </h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(5, 8, 16, 0.6)', fontSize: '1.1rem' }}>
                            A precision-engineered lifecycle designed to deliver elite-level digital products.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        position: 'relative'
                    }}>
                        {/* Connecting Line (Desktop) */}
                        <div style={{
                            position: 'absolute',
                            top: '40px',
                            left: '50px',
                            right: '50px',
                            height: '1px',
                            background: 'rgba(194, 159, 82, 0.3)',
                            zIndex: 0
                        }} className="hide-mobile" />

                        {processSteps.map((step, i) => (
                            <div key={i} style={{
                                textAlign: 'center',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    margin: '0 auto 2rem',
                                    background: 'var(--navy)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid var(--gold)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease'
                                }} className="step-circle">
                                    <span style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: 'var(--gold)'
                                    }}>
                                        {step.step}
                                    </span>
                                </div>
                                <h4 className="serif" style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: 'var(--navy)'
                                }}>
                                    {step.title}
                                </h4>
                                <div style={{ width: '30px', height: '2px', background: 'var(--gold)', margin: '0 auto 1.5rem', opacity: 0.5 }} />
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'rgba(5, 8, 16, 0.7)',
                                    lineHeight: '1.7',
                                    margin: '0 auto'
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @media (max-width: 991px) {
                        .hide-mobile { display: none !important; }
                    }
                    .step-circle:hover {
                        transform: translateY(-5px) scale(1.05);
                        border-color: var(--gold);
                        box-shadow: 0 15px 40px rgba(194, 159, 82, 0.2);
                    }
                `}} />
            </section>

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

            {/* Contact Us Section */}
            <section id="contact" className="section-cream" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--navy)' }}>
                            Contact Us
                        </h2>
                        <p style={{ maxWidth: '500px', margin: '0 auto', color: 'rgba(5, 8, 16, 0.6)' }}>
                            Ready to start your project? Reach out through any of these channels.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2rem',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {/* WhatsApp */}
                        <a href="https://wa.me/263774694160?text=Hi%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '2.5rem 2rem',
                            background: 'var(--navy)',
                            borderRadius: '16px',
                            textDecoration: 'none',
                            transition: 'transform 0.3s ease',
                            border: '1px solid rgba(194, 159, 82, 0.2)'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
                            <h4 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>WhatsApp</h4>
                            <span style={{ color: 'var(--cream)', opacity: 0.7, fontSize: '0.9rem' }}>0774 694 160</span>
                        </a>

                        {/* Email */}
                        <a href="mailto:support@nmsolutions.co.zw?subject=Project%20Inquiry" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '2.5rem 2rem',
                            background: 'var(--navy)',
                            borderRadius: '16px',
                            textDecoration: 'none',
                            transition: 'transform 0.3s ease',
                            border: '1px solid rgba(194, 159, 82, 0.2)'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✉️</div>
                            <h4 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>Email</h4>
                            <span style={{ color: 'var(--cream)', opacity: 0.7, fontSize: '0.9rem' }}>support@nmsolutions.co.zw</span>
                        </a>

                        {/* Facebook */}
                        <a href="https://facebook.com/nmsolutions.zw" target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '2.5rem 2rem',
                            background: 'var(--navy)',
                            borderRadius: '16px',
                            textDecoration: 'none',
                            transition: 'transform 0.3s ease',
                            border: '1px solid rgba(194, 159, 82, 0.2)'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📘</div>
                            <h4 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>Facebook</h4>
                            <span style={{ color: 'var(--cream)', opacity: 0.7, fontSize: '0.9rem' }}>nmsolutions.zw</span>
                        </a>
                    </div>

                    {/* Leave a Message Link */}
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p style={{ color: 'rgba(5, 8, 16, 0.6)', marginBottom: '1rem' }}>
                            Have a comment or want to leave feedback?
                        </p>
                        <a href="/apply" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '1rem 2rem',
                            background: 'var(--navy)',
                            border: '1px solid var(--gold)',
                            borderRadius: '8px',
                            color: 'var(--gold)',
                            fontWeight: '600',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px'
                        }}>
                            Leave a Message <ArrowIcon />
                        </a>
                    </div>
                </div>
            </section>

            <BackToHome />
            <Footer />
        </main>
    );
}
