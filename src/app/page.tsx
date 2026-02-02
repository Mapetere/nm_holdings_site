import React from 'react';

// --- Professional Icon Components ---
const GlobeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const MegaphoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
);

const TargetIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const BoltIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const PaletteIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
);

const DiamondIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M6 3h12l4 5-10 13L2 8z" />
        <path d="M11 3l-4 5 10 13" />
        <path d="M13 3l4 5-10 13" />
        <path d="M2 8h20" />
    </svg>
);

const CloudIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
);

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

export default function Home() {
    return (
        <main>
            {/* Header */}
            <header className="section-navy" style={{
                padding: '1.5rem 0',
                borderBottom: '1px solid rgba(194, 159, 82, 0.1)'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img
                            src="/logo.svg"
                            alt="NM Solutions Logo"
                            style={{ height: '55px', width: 'auto' }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="serif" style={{ fontSize: '1.5rem', letterSpacing: '1px', fontWeight: '500' }}>
                                NM<span className="gold-metallic" style={{ fontWeight: '700' }}>SOLUTIONS</span>
                            </span>
                            <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--gold)', opacity: 0.8 }}>
                                Digital Engineering
                            </span>
                        </div>
                    </div>
                    <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        <a href="#vision" className="nav-link">Vision</a>
                        <a href="#capabilities" className="nav-link">Capabilities</a>
                        <a href="#partnership" className="nav-link">Partnership</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section id="vision" className="section-navy" style={{
                padding: '8rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        border: '1px solid var(--gold)',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        color: 'var(--gold)',
                        marginBottom: '2.5rem'
                    }}>
                        Bespoke Web Engineering
                    </div>

                    <h1 className="serif" style={{
                        fontSize: '4.5rem',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        maxWidth: '900px',
                        margin: '0 auto 1.5rem'
                    }}>
                        Architecting the Future of <br />
                        <span className="gold-metallic">Digital Commerce</span>
                    </h1>

                    <p style={{
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        fontSize: '1.2rem',
                        color: 'rgba(244, 241, 231, 0.6)',
                        lineHeight: '1.8'
                    }}>
                        Where elite level code meets unparalleled creative artistry. We don't just build websites; we engineer high-performance ecosystems for visionary brands.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <a href="/apply" className="btn-gold">Initiate Inquiry</a>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section id="capabilities" className="section-navy" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Core Capabilities</h2>
                        <div style={{ width: '60px', height: '3px', background: 'var(--gold)', margin: '0 auto' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {[
                            { Icon: GlobeIcon, title: 'Internet Recognition', text: 'We engineer digital footprints that command attention. Your domain becomes a landmark of authority.' },
                            { Icon: MegaphoneIcon, title: 'Strategic Presence', text: 'Beyond social media. We craft a unified digital voice that resonates across all touchpoints.' },
                            { Icon: TargetIcon, title: 'Client Discovery', text: 'Optimizing for the human experience. We ensure your partners find you effortlessly.' }
                        ].map((cap, i) => (
                            <div key={i} className="glass-card">
                                <div className="icon-shell"><cap.Icon /></div>
                                <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--gold)' }}>{cap.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(244, 241, 231, 0.5)', lineHeight: '1.7' }}>{cap.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Founding 7 */}
            <section id="partnership" className="section-cream" style={{
                padding: '8rem 0',
                color: 'var(--navy)',
                position: 'relative'
            }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gap: '5rem',
                        alignItems: 'center'
                    }}>
                        <div>
                            <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', fontSize: '0.75rem', color: 'var(--gold)' }}>
                                Exclusive Founding Program
                            </span>
                            <h2 className="serif" style={{ fontSize: '3.5rem', margin: '1rem 0 2rem', lineHeight: '1.2' }}>
                                Start Clean. Start Fresh. <br />
                                <span style={{ color: 'var(--gold)' }}>Lead the Industry.</span>
                            </h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.8, lineHeight: '1.8' }}>
                                Launching this month, NM Solutions is opening its vault to 7 Founding Clients. This is a head start for 2026 bringing elite infrastructure to visionary local businesses.
                            </p>

                            <div style={{ display: 'grid', gap: '1.25rem' }}>
                                {[
                                    'Complimentary Comprehensive Tech Audit',
                                    'Founding Partner Performance Incentives',
                                    'Direct Line to Founding Engineers',
                                    'Priority Roadmap Influence'
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '22px', height: '22px', background: 'var(--navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="float-anim" style={{
                            background: 'var(--navy)',
                            color: 'var(--cream)',
                            padding: '4rem 3rem',
                            borderRadius: '24px',
                            textAlign: 'center',
                            border: '1px solid var(--gold)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                        }}>
                            <div className="gold-metallic big-num">7</div>
                            <h3 className="serif" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Bespoke Slots</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '2rem' }}>
                                Dedicated to the pioneers who value <br />
                                speed, security, and superior design.
                            </p>
                            <a href="/apply" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                                Capture Your Slot
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Grid */}
            <section className="section-navy" style={{ padding: '6rem 0', borderTop: '1px solid rgba(194, 159, 82, 0.05)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                        {[
                            { title: 'Full-Stack Engineering', Icon: BoltIcon },
                            { title: 'Brand Identity', Icon: PaletteIcon },
                            { title: 'E-commerce Architecture', Icon: DiamondIcon },
                            { title: 'Cloud Infrastructure', Icon: CloudIcon }
                        ].map((serv, i) => (
                            <div key={i} style={{
                                padding: '2rem',
                                border: '1px solid rgba(194, 159, 82, 0.1)',
                                borderRadius: '16px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                background: 'rgba(255,255,255,0.01)'
                            }}>
                                <div style={{ width: '40px', height: '40px', color: 'var(--gold)' }}><serv.Icon /></div>
                                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold)' }}>{serv.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="section-navy" style={{
                padding: '4rem 0',
                borderTop: '1px solid rgba(194, 159, 82, 0.1)'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '2.5rem' }}>
                        <a href="tel:0774694160" style={{ color: 'var(--cream)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ color: 'var(--gold)' }}><PhoneIcon /></div>
                            0774694160
                        </a>
                        <a href="mailto:mapeterenyasha@gmail.com" style={{ color: 'var(--cream)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ color: 'var(--gold)' }}><MailIcon /></div>
                            mapeterenyasha@gmail.com
                        </a>
                    </div>
                    <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.3 }}>
                        © {new Date().getFullYear()} NM Solutions — Precision Built.
                    </p>
                </div>
            </footer>
        </main>
    );
}
