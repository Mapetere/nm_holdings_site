'use client';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';

export default function PrivacyPolicy() {
    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '8rem 0' }}>
            <Header />
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '3rem', color: 'var(--gold)' }}>Privacy Policy</h1>

                <div style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: 'rgba(244, 241, 231, 0.8)',
                    lineHeight: '1.8',
                    fontSize: '1.1rem'
                }}>
                    <p style={{ marginBottom: '2rem' }}>
                        Last Updated: February 9, 2026
                    </p>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>1. Introduction</h2>
                        <p>
                            NM Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our digital engineering services.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>2. Information Collection</h2>
                        <p>
                            We collect information that you voluntarily provide to us when you fill out our application or discovery forms. This includes:
                        </p>
                        <ul style={{ paddingLeft: '2rem', marginTop: '1rem' }}>
                            <li>Personal identifiers (Name, Email, Business Name)</li>
                            <li>Project details and business descriptions</li>
                            <li>Communication preferences</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>3. How We Use Your Information</h2>
                        <p>
                            The information we collect is used solely for the purpose of:
                        </p>
                        <ul style={{ paddingLeft: '2rem', marginTop: '1rem' }}>
                            <li>Reviewing and processing your client application</li>
                            <li>Engineering bespoke solutions tailored to your business</li>
                            <li>Communicating with you about your projects</li>
                            <li>Providing ongoing technical support and maintenance</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>4. Data Security</h2>
                        <p>
                            We implement industry standard security measures to protect your data. We use proven, secure service providers for hosting and data storage. We do not sell or share your personal information with third parties for marketing purposes.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>5. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us through our application portal.
                        </p>
                    </section>
                </div>
            </div>
            <BackToHome />
            <Footer />
        </main>
    );
}
