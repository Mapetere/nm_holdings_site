'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll Spy Logic
    useEffect(() => {
        const sections = ['vision', 'capabilities', 'partnership'];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of section is visible

        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (window.location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: isScrolled ? '1rem 0' : '2.5rem 0',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: isScrolled ? '0.75rem 2.5rem' : '0 2rem',
                maxWidth: isScrolled ? '900px' : '1100px',
                background: isScrolled ? 'rgba(5, 8, 16, 0.6)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(15px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(15px)' : 'none',
                borderRadius: isScrolled ? '50px' : '0',
                border: isScrolled ? '1px solid rgba(194, 159, 82, 0.2)' : '1px solid transparent',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: 'auto',
                boxShadow: isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.4)' : 'none',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Noise Texture for Scrolled State */}
                {isScrolled && (
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        opacity: 0.03,
                        pointerEvents: 'none',
                        zIndex: -1
                    }} />
                )}

                <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: isScrolled ? '0.8rem' : '1rem' }}>
                    <div className="header-glow">
                        <Image
                            src="/nm-solutions-icon.png"
                            alt="NM Solutions icon"
                            className="logo-enhance"
                            width={isScrolled ? 35 : 50}
                            height={isScrolled ? 35 : 50}
                            priority
                            style={{
                                height: isScrolled ? '35px' : '50px',
                                width: 'auto',
                                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                        <span className="serif" style={{
                            fontSize: isScrolled ? '1.2rem' : '1.6rem',
                            letterSpacing: '1px',
                            fontWeight: '500',
                            lineHeight: '1.1',
                            color: 'var(--cream)',
                            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}>
                            {activeSection === 'capabilities' ? (
                                <span className="gold-metallic" style={{ fontSize: isScrolled ? '1rem' : '1.3rem' }}>Core Capabilities</span>
                            ) : activeSection === 'partnership' ? (
                                <span className="gold-metallic" style={{ fontSize: isScrolled ? '1rem' : '1.3rem' }}>Partnership</span>
                            ) : (
                                <>NMS<span className="gold-metallic" style={{
                                    fontSize: isScrolled ? '1rem' : '1.3rem',
                                    fontWeight: '700',
                                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}>olutions</span></>
                            )}
                        </span>

                    </div>
                </Link>

                <nav style={{
                    display: 'flex',
                    gap: isScrolled ? '1.5rem' : '2.5rem',
                    fontSize: isScrolled ? '0.7rem' : '0.8rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                    <Link href="/about" className="nav-link" style={{ color: activeSection === 'about' ? 'var(--gold)' : 'inherit' }}>About</Link>
                    <Link href="/services" className="nav-link" style={{ color: activeSection === 'capabilities' ? 'var(--gold)' : 'inherit' }} onClick={(e) => scrollToSection(e, 'capabilities')}>Services</Link>
                    <Link href="/packages" className="nav-link" style={{ color: activeSection === 'packages' ? 'var(--gold)' : 'inherit' }}>Packages</Link>
                    <Link href="/apply" className="nav-link" style={{ color: activeSection === 'partnership' ? 'var(--gold)' : 'inherit' }} onClick={(e) => scrollToSection(e, 'partnership')}>Partnership</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
