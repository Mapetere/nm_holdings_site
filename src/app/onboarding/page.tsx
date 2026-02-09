import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import DiscoveryForm from '@/components/DiscoveryForm';

export default function OnboardingPage() {
    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '4rem 0' }}>
            <Header />
            <div className="container" style={{ marginTop: '6rem' }}>
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

                <footer style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.3 }}>
                        Precision Built for Visionary Brands.
                    </p>
                </footer>
            </div>
        </main>
    );
}
