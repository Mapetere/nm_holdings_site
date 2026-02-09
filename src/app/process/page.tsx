'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import FadeInUp from '@/components/FadeInUp';

export default function Process() {
    const steps = [
        {
            title: 'Discovery & Strategy',
            description: 'We begin by diving deep into your business goals, target audience, and market landscape. This phase defines the project scope, technical requirements, and strategic roadmap.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            )
        },
        {
            title: 'Design & Prototyping',
            description: 'Our designers create intuitive, high-fidelity wireframes and prototypes. We focus on user experience (UX) and user interface (UI) to ensure your product is both beautiful and functional.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                </svg>
            )
        },
        {
            title: 'Development',
            description: 'Our engineering team brings the designs to life using modern, scalable technologies. We build robust backends, responsive frontends, and ensure secure data handling.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            title: 'Testing & QA',
            description: 'Rigorous testing is conducted to identify and fix bugs. We perform functional, performance, and security testing to ensure a flawless user experience across all devices.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            )
        },
        {
            title: 'Deployment & Launch',
            description: 'We handle the deployment process, configuring servers, domains, and CI/CD pipelines. We monitor the launch closely to ensure everything runs smoothly.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        },
        {
            title: 'Maintenance & Growth',
            description: 'Post-launch, we provide ongoing support, updates, and optimization. We use analytics to track performance and guide future enhancements.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            )
        }
    ];

    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '10rem 0 8rem', position: 'relative' }}>
            <Header />

            {/* Top Right Back to Home */}
            <a href="/" style={{
                position: 'absolute',
                top: '7rem',
                right: '2rem',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--gold)',
                textDecoration: 'none',
                fontWeight: '600'
            }}>
                Home <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </a>

            <div className="container">
                <FadeInUp>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--gold)', fontWeight: '700', fontSize: '0.85rem' }}>
                            Our Methodology
                        </span>
                        <h1 className="serif" style={{ fontSize: '4rem', color: 'var(--cream)', margin: '1rem 0' }}>
                            Product Development <br />
                            <span className="gold-metallic" style={{ fontStyle: 'italic' }}>Flow</span>
                        </h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(244, 241, 231, 0.6)', lineHeight: '1.8' }}>
                            A structured, transparent approach to bringing your digital vision to life. From the first spark of an idea to a scalable, market-ready product.
                        </p>
                    </div>
                </FadeInUp>

                <div style={{ position: 'relative', marginTop: '4rem' }}>
                    {/* Connecting Line (Desktop) */}
                    <div className="process-line" style={{
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        left: '50%',
                        width: '1px',
                        background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
                        opacity: 0.3,
                        transform: 'translateX(-50%)',
                        zIndex: 0
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                        {steps.map((step, index) => (
                            <FadeInUp key={index} delay={index * 0.1}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '4rem',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    {/* Text Side */}
                                    <div style={{ flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                                        <h3 className="serif" style={{ fontSize: '2rem', color: 'var(--cream)', marginBottom: '1rem' }}>
                                            {step.title}
                                        </h3>
                                        <p style={{ fontSize: '1.1rem', color: 'rgba(244, 241, 231, 0.6)', lineHeight: '1.7' }}>
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Icon/Number Center */}
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'rgba(5, 8, 16, 1)',
                                        border: '1px solid var(--gold)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--gold)',
                                        flexShrink: 0,
                                        boxShadow: '0 0 30px rgba(194, 159, 82, 0.1)'
                                    }}>
                                        {step.icon}
                                    </div>

                                    {/* Empty Side for Balance */}
                                    <div style={{ flex: 1 }} />
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '8rem' }}>
                    <FadeInUp delay={0.6}>
                        <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Ready to start the journey?</h3>
                        <a href="/packages" className="btn-gold">
                            View Packages
                        </a>
                    </FadeInUp>
                </div>
            </div>
            <BackToHome />
            <Footer />

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .process-line { left: 40px !important; }
                    .container > div > div > div {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 1.5rem !important;
                        padding-left: 5rem;
                    }
                    .container > div > div > div > div:nth-child(1) {
                        text-align: left !important;
                        order: 2;
                    }
                    .container > div > div > div > div:nth-child(2) {
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                     .container > div > div > div > div:nth-child(3) {
                        display: none;
                     }
                }
            `}} />
        </main>
    );
}
