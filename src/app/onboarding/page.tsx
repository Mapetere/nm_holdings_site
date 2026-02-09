import React from 'react';
import Image from 'next/image';
import DiscoveryForm from '@/components/DiscoveryForm';

export default function OnboardingPage() {
    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Image src="/nm-solutions-icon.png" alt="Logo" className="logo-enhance" width={45} height={45} priority style={{ height: '45px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <span className="serif" style={{ fontSize: '1.3rem', letterSpacing: '1px', fontWeight: '500', lineHeight: '1.1' }}>
                                NM<span className="gold-metallic" style={{ fontWeight: '700' }}>SOLUTIONS</span>
                            </span>
                            <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold)', opacity: 0.8 }}>
                                Digital Engineering
                            </span>
                        </div>
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
