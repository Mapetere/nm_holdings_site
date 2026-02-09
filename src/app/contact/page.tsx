'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import FadeInUp from '@/components/FadeInUp';

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

export default function ContactResult() {
    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '10rem 0 8rem', position: 'relative' }}>
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

            <div className="container">
                <FadeInUp>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', fontSize: '0.75rem', color: 'var(--gold)' }}>Get In Touch</span>
                        <h1 className="serif" style={{
                            fontSize: '4rem',
                            lineHeight: '1.2',
                            margin: '1rem 0 1.5rem',
                            color: 'var(--cream)'
                        }}>
                            Contact <span className="gold-metallic">Us</span>
                        </h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(244, 241, 231, 0.6)', fontSize: '1.2rem' }}>
                            Ready to start your project? Reach out through any of these channels.
                        </p>
                    </div>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {/* WhatsApp */}
                        <a href="https://wa.me/263774694160?text=Hi%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '3rem 2rem',
                            background: 'rgba(194, 159, 82, 0.05)',
                            borderRadius: '24px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(194, 159, 82, 0.2)'
                        }} className="glass-card">
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>💬</div>
                            <h4 style={{ color: 'var(--gold)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '600' }}>WhatsApp</h4>
                            <span style={{ color: 'var(--cream)', opacity: 0.7, fontSize: '1rem' }}>0774 694 160</span>
                        </a>

                        {/* Email */}
                        <a href="mailto:support@nmsolutions.co.zw?subject=Project%20Inquiry" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '3rem 2rem',
                            background: 'rgba(194, 159, 82, 0.05)',
                            borderRadius: '24px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(194, 159, 82, 0.2)'
                        }} className="glass-card">
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✉️</div>
                            <h4 style={{ color: 'var(--gold)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '600' }}>Email</h4>
                            <span style={{ color: 'var(--cream)', opacity: 0.7, fontSize: '1rem' }}>support@nmsolutions.co.zw</span>
                        </a>

                        {/* Facebook */}
                        <a href="https://facebook.com/nmsolutions.zw" target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '3rem 2rem',
                            background: 'rgba(194, 159, 82, 0.05)',
                            borderRadius: '24px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(194, 159, 82, 0.2)'
                        }} className="glass-card">
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📘</div>
                            <h4 style={{ color: 'var(--gold)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '600' }}>Facebook</h4>
                            <span style={{ color: 'var(--cream)', opacity: 0.7, fontSize: '1rem' }}>nmsolutions.zw</span>
                        </a>
                    </div>
                </FadeInUp>

                {/* Leave a Message Link */}
                <FadeInUp delay={0.4}>
                    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                        <p style={{ color: 'rgba(244, 241, 231, 0.6)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Prefer to fill out a detailed form?
                        </p>
                        <a href="/apply" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '1.2rem 3rem',
                            background: 'transparent',
                            border: '1px solid var(--gold)',
                            borderRadius: '12px',
                            color: 'var(--gold)',
                            fontWeight: '600',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            transition: 'all 0.3s ease'
                        }} className="btn-gold-outline">
                            Start Project Discovery <ArrowIcon />
                        </a>
                    </div>
                </FadeInUp>
            </div>

            <BackToHome />
            <Footer />
        </main>
    );
}
