'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import FadeInUp from '@/components/FadeInUp';

export default function CompliancePage() {
    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '10rem 0 8rem' }}>
            <Header />
            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <FadeInUp>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', fontSize: '0.75rem', color: 'var(--gold)' }}>Legal & Standards</span>
                    <h1 className="serif" style={{ fontSize: '3.5rem', margin: '1rem 0 2rem', color: 'var(--cream)' }}>Compliance</h1>

                    <div style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: 'rgba(244, 241, 231, 0.8)',
                        lineHeight: '1.8',
                        fontSize: '1.1rem',
                        textAlign: 'left',
                        background: 'rgba(194, 159, 82, 0.05)',
                        padding: '3rem',
                        borderRadius: '32px',
                        border: '1px solid rgba(194, 159, 82, 0.1)'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            NM Solutions is dedicated to maintaining the highest standards of digital engineering compliance and data security.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Our engineering processes adhere to international best practices for software development, including:
                        </p>
                        <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                            <li>Data protection and privacy standards</li>
                            <li>Secure coding practices (OWASP)</li>
                            <li>Industry specific regulatory requirements</li>
                            <li>Accessibility standards (WCAG)</li>
                        </ul>
                        <p>
                            For specific compliance inquiries or detailed security documentation, please reach out through our contact portal.
                        </p>
                    </div>
                </FadeInUp>
            </div>
            <BackToHome />
            <Footer />
        </main>
    );
}
