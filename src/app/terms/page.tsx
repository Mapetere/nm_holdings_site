'use client';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import FadeInUp from '@/components/FadeInUp';

export default function TermsOfService() {
    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '10rem 0 8rem' }}>
            <Header />
            <div className="container" style={{ maxWidth: '800px' }}>
                <FadeInUp>
                    <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '3rem', color: 'var(--gold)' }}>Terms of Service</h1>

                    <div style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: 'rgba(244, 241, 231, 0.8)',
                        lineHeight: '1.8',
                        fontSize: '1.1rem'
                    }}>
                        <p style={{ marginBottom: '2rem' }}>
                            Effective Date: February 9, 2026
                        </p>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>1. Services</h2>
                            <p>
                                NM Solutions provides bespoke digital engineering and web development services. By accessing our site or submitting an application, you agree to comply with these terms.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>2. Project Engagement</h2>
                            <p>
                                We engage with clients on a per-project basis. Initiation of any digital engineering project requires a successful discovery phase and mutual agreement on technical specifications and milestones. We reserve the right to select projects that align with our engineering standards and current capacity.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>3. Intellectual Property</h2>
                            <p>
                                All custom code and designs engineered for clients remain the property of the client upon full payment, unless otherwise specified in a separate service level agreement. All materials on this website are the intellectual property of NM Solutions.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>4. Professional Conduct</h2>
                            <p>
                                We pride ourselves on elite-level engineering and professional excellence. We expect the same level of professional conduct from our partners and clients.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 className="serif" style={{ color: 'var(--cream)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>5. Limitations</h2>
                            <p>
                                Our services are provided "as is." While we strive for excellence in every line of code, we are not liable for indirect or consequential damages arising from the use of our services or website.
                            </p>
                        </section>
                    </div>
                </FadeInUp>
            </div>
            <BackToHome />
            <Footer />
        </main>
    );
}
