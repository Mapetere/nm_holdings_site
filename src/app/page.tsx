import React from 'react';

export default function Home() {
    return (
        <main>
            {/* Navigation */}
            <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
                <img src="/logo.png" alt="NM Logo" style={{ height: '50px' }} />
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    <a href="#solutions">NMSolutions</a>
                    <a href="#ventures">Ventures</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="section-padding container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: '300' }}>
                    Building <span className="gold-gradient">Excellence</span> <br />
                    Across Every Industry.
                </h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>
                    NM Holdings is the cornerstone of innovation, from elite web engineering to lifestyle and culinary experiences.
                </p>
            </section>

            {/* NMSolutions Section */}
            <section id="solutions" className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <div>
                                <img src="/logo.png" alt="NM Solutions" style={{ height: '60px', marginBottom: '1rem' }} /><br />
                                <span className="gold-gradient" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 'bold' }}>Active Service</span>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                                We specialize in crafting high-performance, visually stunning websites and complex web applications.
                                Currently seeking <strong>7 Founding Clients</strong> to join us in our inaugural launch phase.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> Professional Web Engineering
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> E-commerce & Scalable Storefronts
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> Custom Software Solutions
                                </li>
                            </ul>
                            <div className="glass-card" style={{ marginTop: '2rem', border: '1px dashed var(--accent-gold)', background: 'rgba(212, 175, 55, 0.05)' }}>
                                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Limited Time: Complimentary System Audit</h4>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                                    We perform a deep dive analysis of your existing systems to identify performance bottlenecks, security vulnerabilities, and scalability opportunities,ensuring your tech is future ready
                                </p>
                            </div>
                            <button style={{
                                marginTop: '1.5rem',
                                padding: '1rem 2rem',
                                background: 'var(--accent-gold)',
                                border: 'none',
                                borderRadius: '4px',
                                color: '#000',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>
                                Claim Your Free Audit
                            </button>
                        </div>
                        <div className="glass-card" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>7</div>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Founding Client Slots</h4>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                                Exclusive partnership benefits for our first 7 collaborators.
                                Dedicated support and priority development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Ventures */}
            <section id="ventures" className="section-padding container">
                <h3 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Future Portfolio</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[
                        { name: 'NM Food', desc: 'Culinary excellence & catering.' },
                        { name: 'NM Store', desc: 'Curated retail experiences.' },
                        { name: 'NM Salon', desc: 'Premium beauty & wellness.' },
                        { name: 'NM Lifestyle', desc: 'Girly essentials & more.' }
                    ].map((v) => (
                        <div key={v.name} className="glass-card">
                            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>{v.name}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>{v.desc}</p>
                            <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Coming Soon</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding" style={{ background: '#000' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Start Your Journey</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '3rem' }}>Inquire today and become part of the NM Solutions legacy.</p>
                    <form style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="text" placeholder="Full Name" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }} />
                        <input type="email" placeholder="Email Address" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }} />
                        <textarea placeholder="Tell us about your project" rows={4} style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}></textarea>
                        <button type="button" style={{
                            padding: '1rem',
                            background: 'transparent',
                            border: '1px solid var(--accent-gold)',
                            color: 'var(--accent-gold)',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            borderRadius: '4px'
                        }}>
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                    Contact: 0774694160 | mapeterenyasha@gmail.com
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                    © {new Date().getFullYear()} NM HOLDINGS. All rights reserved. <br />
                    Built with precision by NMSolutions.
                </p>
            </footer>
        </main>
    );
}
