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
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {/* WhatsApp */}
                        <a href="https://wa.me/263774694160?text=Hi%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer"
                            className="contact-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '2.5rem 2rem',
                                background: 'rgba(5, 8, 16, 0.4)',
                                borderRadius: '20px',
                                textDecoration: 'none',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                border: '1px solid rgba(37, 211, 102, 0.2)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                marginBottom: '1.5rem',
                                filter: 'drop-shadow(0 4px 12px rgba(37, 211, 102, 0.3))',
                                transition: 'transform 0.3s ease'
                            }}>
                                <svg viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <h4 style={{ color: '#25D366', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '700', letterSpacing: '0.5px' }}>WhatsApp</h4>
                            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: '500' }}>0774 694 160</span>

                            {/* Hover overlay */}
                            <div className="hover-glow" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(37, 211, 102, 0.1), transparent 70%)', opacity: 0, transition: 'opacity 0.3s ease' }}></div>
                        </a>

                        {/* Email */}
                        <a href="mailto:support@nmsolutions.co.zw?subject=Project%20Inquiry"
                            className="contact-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '2.5rem 2rem',
                                background: 'rgba(5, 8, 16, 0.4)',
                                borderRadius: '20px',
                                textDecoration: 'none',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                border: '1px solid rgba(234, 67, 53, 0.2)', // Gmail red
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                marginBottom: '1.5rem',
                                filter: 'drop-shadow(0 4px 12px rgba(234, 67, 53, 0.3))',
                                transition: 'transform 0.3s ease'
                            }}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
                                    <path d="M12 16.64l6.545-4.91V5.457c0-2.023-2.309-3.178-3.927-1.964L12 9.548 9.382 3.493C10.147 2.8 11.05 2.455 12 2.455c.95 0 1.853.345 2.618 1.038L12 9.548l-2.618-6.055C10.147 2.8 11.05 2.455 12 2.455c.95 0 1.853.345 2.618 1.038L12 16.64z" fill="#fff" fillOpacity="0.1" /> {/* Shine hint */}
                                </svg>
                            </div>
                            <h4 style={{ color: '#EA4335', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '700', letterSpacing: '0.5px' }}>Email</h4>
                            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: '500' }}>support@nmsolutions.co.zw</span>

                            <div className="hover-glow" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(234, 67, 53, 0.1), transparent 70%)', opacity: 0, transition: 'opacity 0.3s ease' }}></div>
                        </a>

                        {/* Facebook */}
                        <a href="https://facebook.com/nmsolutions.zw" target="_blank" rel="noopener noreferrer"
                            className="contact-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '2.5rem 2rem',
                                background: 'rgba(5, 8, 16, 0.4)',
                                borderRadius: '20px',
                                textDecoration: 'none',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                border: '1px solid rgba(24, 119, 242, 0.2)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                marginBottom: '1.5rem',
                                filter: 'drop-shadow(0 4px 12px rgba(24, 119, 242, 0.3))',
                                transition: 'transform 0.3s ease'
                            }}>
                                <svg viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </div>
                            <h4 style={{ color: '#1877F2', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '700', letterSpacing: '0.5px' }}>Facebook</h4>
                            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: '500' }}>nmsolutions.zw</span>

                            <div className="hover-glow" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(24, 119, 242, 0.1), transparent 70%)', opacity: 0, transition: 'opacity 0.3s ease' }}></div>
                        </a>

                        <style jsx>{`
                            .contact-card:hover {
                                transform: translateY(-5px);
                                background: rgba(25, 30, 45, 0.6) !important;
                            }
                            .contact-card:hover .hover-glow {
                                opacity: 1 !important;
                            }
                            .contact-card:hover svg {
                                transform: scale(1.1);
                            }
                        `}</style>
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
