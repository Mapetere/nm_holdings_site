'use client';
import React from 'react';
import Link from 'next/link';

const BackToHome = () => {
    return (
        <div className="container" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
            <Link
                href="/"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    color: 'var(--gold)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    width: 'fit-content',
                    transition: 'all 0.3s ease'
                }}
                className="back-to-home"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to Home
            </Link>
            <style jsx>{`
                .back-to-home:hover {
                    transform: translateX(-5px);
                    opacity: 0.8;
                }
            `}</style>
        </div>
    );
};

export default BackToHome;
