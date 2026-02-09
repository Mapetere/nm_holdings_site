'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-navy" style={{
            padding: '4rem 0 2rem',
            borderTop: '1px solid rgba(194, 159, 82, 0.1)',
            marginTop: 'auto'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
                gap: '3rem',
                marginBottom: '4rem'
            }}>
                {/* Brand Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                        <Image
                            src="/nm-solutions-icon.png"
                            alt="NM Solutions icon"
                            width={40}
                            height={40}
                            style={{ height: '40px', width: 'auto' }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="serif" style={{ fontSize: '1.2rem', letterSpacing: '1px', fontWeight: '500', lineHeight: '1', color: 'var(--cream)' }}>
                                NM<span className="gold-metallic" style={{ fontWeight: '700' }}>SOLUTIONS</span>
                            </span>
                            <span style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold)', opacity: 0.8 }}>
                                Digital Engineering
                            </span>
                        </div>
                    </Link>
                    <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        color: 'rgba(244, 241, 231, 0.6)',
                        maxWidth: '300px'
                    }}>
                        Architecting the future of digital commerce with bespoke, elite-level engineering.
                    </p>
                </div>

                {/* Services Column */}
                <div>
                    <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', fontWeight: '700' }}>Services</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link href="/services" style={linkStyle}>Web Engineering</Link></li>
                        <li><Link href="/social-media" style={linkStyle}>Strategic Presence</Link></li>
                        <li><Link href="/packages" style={linkStyle}>Packages</Link></li>
                    </ul>
                </div>

                {/* Development Column */}
                <div>
                    <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', fontWeight: '700' }}>Development</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link href="/tech-stack" style={linkStyle}>Tech Stack</Link></li>
                        <li><span style={{ ...linkStyle, cursor: 'default' }}>Vite & Next.js</span></li>
                        <li><span style={{ ...linkStyle, cursor: 'default' }}>AWS Infrastructure</span></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div>
                    <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', fontWeight: '700' }}>Company</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link href="/about" style={linkStyle}>About Us</Link></li>
                        <li><Link href="/apply" style={linkStyle}>Contact Us</Link></li>
                        <li><Link href="/privacy" style={linkStyle}>Privacy Policy</Link></li>
                        <li><Link href="/terms" style={linkStyle}>Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container" style={{
                paddingTop: '2rem',
                borderTop: '1px solid rgba(194, 159, 82, 0.05)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: 'rgba(244, 241, 231, 0.4)'
            }}>
                <p>&copy; {currentYear} NM Solutions Holdings. All rights reserved.</p>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 991px) {
                    footer .container:first-child {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
                @media (max-width: 576px) {
                    footer .container:first-child {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }
            `}} />
        </footer>
    );
}

const linkStyle = {
    color: 'rgba(244, 241, 231, 0.7)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    display: 'inline-block'
};
