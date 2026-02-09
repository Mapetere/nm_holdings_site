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
        <main className="section-navy" style={{ minHeight: '100vh', padding: '10rem 0 8rem' }}>
            <Header />
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
