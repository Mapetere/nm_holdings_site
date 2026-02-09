'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll Spy Logic
    useEffect(() => {
        const sections = ['vision', 'capabilities', 'examples', 'partnership'];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.3 }); // Trigger when 30% of section is visible

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
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    const dropdownLinks = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Packages', href: '/packages' },
        { name: 'Tech Stack', href: '/tech-stack' },
        { name: 'Onboarding', href: '/onboarding' },
        { name: 'Project Discovery', href: '/apply' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'Social Media', href: '/social-media' }
    ];

    return (
        <>
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
                    overflow: 'visible'
                }}>
                    {/* Noise Texture for Scrolled State */}
                    {isScrolled && (
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            opacity: 0.03,
                            pointerEvents: 'none',
                            zIndex: -1,
                            borderRadius: '50px'
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
                                {pathname !== '/' ? (
                                    <span className="gold-metallic" style={{ fontSize: isScrolled ? '1rem' : '1.3rem', textTransform: 'capitalize' }}>
                                        {pathname.replace('/', '').replace(/\//g, ' ').replace('-', ' ')}
                                    </span>
                                ) : activeSection === 'capabilities' ? (
                                    <span className="gold-metallic" style={{ fontSize: isScrolled ? '1rem' : '1.3rem' }}>Capabilities</span>
                                ) : activeSection === 'examples' ? (
                                    <span className="gold-metallic" style={{ fontSize: isScrolled ? '1rem' : '1.3rem' }}>Portfolio</span>
                                ) : activeSection === 'partnership' ? (
                                    <span className="gold-metallic" style={{ fontSize: isScrolled ? '1rem' : '1.3rem' }}>Partnership</span>
                                ) : (
                                    <span style={{ fontSize: isScrolled ? '1rem' : '1.3rem', display: 'flex', flexDirection: 'column' }}>
                                        <span className="serif" style={{ color: 'var(--cream)', lineHeight: '1' }}>NMS<span className="gold-metallic" style={{ fontWeight: '700' }}>olutions</span></span>
                                    </span>
                                )}
                            </span>

                        </div>
                    </Link>

                    <nav style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: isScrolled ? '1.5rem' : '2.5rem',
                        fontSize: isScrolled ? '0.7rem' : '0.8rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}>
                        <Link href="/#vision" className="nav-link" style={{ color: activeSection === 'vision' ? 'var(--gold)' : 'inherit' }} onClick={(e) => scrollToSection(e, 'vision')}>Vision</Link>
                        <Link href="/#capabilities" className="nav-link" style={{ color: activeSection === 'capabilities' ? 'var(--gold)' : 'inherit' }} onClick={(e) => scrollToSection(e, 'capabilities')}>Capabilities</Link>
                        <Link href="/#examples" className="nav-link" style={{ color: activeSection === 'examples' ? 'var(--gold)' : 'inherit' }} onClick={(e) => scrollToSection(e, 'examples')}>Portfolio</Link>
                        <Link href="/#partnership" className="nav-link" style={{ color: activeSection === 'partnership' ? 'var(--gold)' : 'inherit' }} onClick={(e) => scrollToSection(e, 'partnership')}>Partnership</Link>

                        {/* Menu Button */}
                        <button
                            onClick={() => setIsDrawerOpen(true)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--cream)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '0.5rem',
                                transition: 'all 0.3s ease',
                                pointerEvents: 'auto'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cream)'}
                        >
                            <span style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px' }}>MENU</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ width: '18px', height: '2px', background: 'currentColor' }} />
                                <div style={{ width: '12px', height: '2px', background: 'currentColor', alignSelf: 'flex-end' }} />
                            </div>
                        </button>
                    </nav>
                </div>
            </header>

            {/* Side Drawer Overlay */}
            <div style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(5, 8, 16, 0.4)',
                backdropFilter: 'blur(10px)',
                opacity: isDrawerOpen ? 1 : 0,
                visibility: isDrawerOpen ? 'visible' : 'hidden',
                zIndex: 2000,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: isDrawerOpen ? 'auto' : 'none'
            }} onClick={() => setIsDrawerOpen(false)}>

                {/* Drawer Content */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    maxWidth: '450px',
                    background: 'rgba(5, 8, 16, 0.95)',
                    borderLeft: '1px solid rgba(194, 159, 82, 0.2)',
                    boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.5)',
                    transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '4rem 3.5rem',
                }} onClick={(e) => e.stopPropagation()}>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsDrawerOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '2.5rem',
                            right: '2.5rem',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--cream)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--gold)';
                            e.currentTarget.style.transform = 'rotate(90deg)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--cream)';
                            e.currentTarget.style.transform = 'rotate(0deg)';
                        }}
                    >
                        <div style={{ position: 'relative', width: '24px', height: '24px' }}>
                            <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '2px', background: 'currentColor', transform: 'rotate(45deg)' }} />
                            <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '2px', background: 'currentColor', transform: 'rotate(-45deg)' }} />
                        </div>
                    </button>

                    <div style={{ marginBottom: '4rem' }}>
                        <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase' }}>Navigation</span>
                        <div style={{ width: '40px', height: '2px', background: 'var(--gold)', marginTop: '0.5rem' }} />
                    </div>

                    <nav style={{ display: 'grid', gap: '1.5rem' }}>
                        {dropdownLinks.map((link, idx) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsDrawerOpen(false)}
                                style={{
                                    color: 'var(--cream)',
                                    textDecoration: 'none',
                                    fontSize: '1.8rem',
                                    fontWeight: '600',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    transform: isDrawerOpen ? 'translateY(0)' : 'translateY(20px)',
                                    opacity: isDrawerOpen ? 1 : 0,
                                    transitionDelay: `${0.1 + idx * 0.05}s`,
                                    display: 'inline-block'
                                }}
                                className="drawer-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div style={{ marginTop: 'auto', paddingTop: '4rem', borderTop: '1px solid rgba(194, 159, 82, 0.1)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <p style={{ color: 'rgba(244, 241, 231, 0.4)', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                &copy; 2026 NM SOLUTIONS HOLDINGS
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <Link href="/privacy" className="footer-link-small">Privacy</Link>
                                <Link href="/terms" className="footer-link-small">Terms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .drawer-link:hover {
                    color: var(--gold) !important;
                    transform: translateX(10px) !important;
                }
                .footer-link-small {
                    color: rgba(244, 241, 231, 0.4);
                    text-decoration: none;
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: color 0.3s ease;
                }
                .footer-link-small:hover {
                    color: var(--gold);
                }
                .nav-link {
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: var(--gold) !important;
                }
            `}</style>
        </>
    );
};

export default Header;
