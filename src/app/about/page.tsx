'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import FadeInUp from '@/components/FadeInUp';

export default function About() {
    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '10rem 0 8rem' }}>
            <Header />
            <div className="container">
                {/* Hero Section */}
                <FadeInUp>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', fontSize: '0.75rem', color: 'var(--gold)' }}>Our Story</span>
                        <h1 className="serif" style={{
                            fontSize: '4.5rem',
                            lineHeight: '1.2',
                            margin: '1rem 0 1.5rem'
                        }}>
                            Engineering <span className="gold-metallic">Excellence</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(244, 241, 231, 0.6)', fontSize: '1.25rem', lineHeight: '1.8' }}>
                            NM Solutions was founded on the principle that digital presence should be an asset, not just an expense. We combine elite level code with visionary design.
                        </p>
                    </div>
                </FadeInUp>

                {/* Mission & Vision Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
                    <FadeInUp delay={0.2}>
                        <div className="glass-card" style={{ padding: '3rem', height: '100%' }}>
                            <h2 className="serif" style={{ color: 'var(--gold)', fontSize: '2rem', marginBottom: '1.5rem' }}>Our Mission</h2>
                            <p style={{ color: 'rgba(244, 241, 231, 0.7)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                To empower brands with bespoke digital ecosystems that drive growth, enhance user experience, and set new industry standards for performance and reliability.
                            </p>
                        </div>
                    </FadeInUp>
                    <FadeInUp delay={0.4}>
                        <div className="glass-card" style={{ padding: '3rem', height: '100%' }}>
                            <h2 className="serif" style={{ color: 'var(--gold)', fontSize: '2rem', marginBottom: '1.5rem' }}>Our Vision</h2>
                            <p style={{ color: 'rgba(244, 241, 231, 0.7)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                To be the premier digital engineering partner for visionary companies, known for our commitment to quality, innovation, and technological mastery.
                            </p>
                        </div>
                    </FadeInUp>
                </div>

                {/* Core Values Section */}
                <div style={{ marginBottom: '8rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="serif" style={{ fontSize: '3rem' }}>Our <span className="gold-metallic">Core Values</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Quality First', desc: 'We never settle for "good enough." Every line of code is written with precision.' },
                            { title: 'Integrity', desc: 'Transparent communication and honest partnerships are the bedrock of our business.' },
                            { title: 'Innovation', desc: 'We stay at the bleeding edge of technology to provide competitive advantages.' },
                            { title: 'Client Centric', desc: 'Your business goals are our primary focus. We engineer for your success.' }
                        ].map((value, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '2rem' }}>
                                <h3 className="serif" style={{ color: 'var(--cream)', fontSize: '1.5rem', marginBottom: '1rem' }}>{value.title}</h3>
                                <p style={{ color: 'rgba(244, 241, 231, 0.5)', fontSize: '0.95rem', lineHeight: '1.6' }}>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Founder Section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(250px, 1fr) 2fr',
                    gap: '4rem',
                    alignItems: 'center',
                    background: 'rgba(194, 159, 82, 0.05)',
                    padding: '3rem',
                    borderRadius: '32px',
                    border: '1px solid rgba(194, 159, 82, 0.1)',
                    marginBottom: '4rem'
                }}>
                    <div style={{
                        position: 'relative',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid var(--gold)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        width: '200px',
                        height: '200px',
                        margin: '0 auto'
                    }}>
                        <Image
                            src="/lead-engineer.jpg"
                            alt="Nyasha Mapetere - Lead Engineer"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold)', fontWeight: '700', fontSize: '0.8rem' }}>Founder & Lead Engineer</span>
                        <h2 className="serif" style={{ fontSize: '2.5rem', margin: '0.5rem 0 1.5rem', color: 'var(--cream)' }}>Nyasha Mapetere</h2>
                        <p style={{ color: 'rgba(244, 241, 231, 0.7)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            With a passion for architecting complex digital systems and a commitment to aesthetic precision, Nyasha leads the NM Solutions team in delivering elite level software products.
                        </p>
                        <a href="/apply" className="btn-gold">Work With Us</a>
                    </div>
                </div>
            </div>
            <BackToHome />
            <Footer />
        </main>
    );
}

