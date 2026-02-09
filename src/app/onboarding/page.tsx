'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import DiscoveryForm from '@/components/DiscoveryForm';
import FadeInUp from '@/components/FadeInUp';

export default function OnboardingPage() {
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
                    <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ marginBottom: '2rem' }}>
                        </div>
                        <h1 className="serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Project Discovery</h1>
                        <p style={{ color: 'rgba(244, 241, 231, 0.6)', maxWidth: '600px', margin: '0 auto' }}>
                            Let's architect your digital future. Fill out this form to give us a clear view of your vision.
                            Works offline your progress is saved automatically.
                        </p>
                    </header>

                    <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
                        <DiscoveryForm />
                    </div>
                </FadeInUp>

                <BackToHome />
            </div>
            <Footer />
        </main>
    );
}
