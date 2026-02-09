'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const GlobalLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // Minimum loading time to ensure the brand is seen and animations are smooth
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Wait for fade out animation to finish before unmounting
            setTimeout(() => setShouldRender(false), 800);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!shouldRender) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#050810', // var(--navy)
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            opacity: isLoading ? 1 : 0,
            pointerEvents: isLoading ? 'auto' : 'none'
        }}>
            <div style={{
                position: 'relative',
                width: '120px',
                height: '120px',
                marginBottom: '2rem',
                animation: 'pulse 2s ease-in-out infinite'
            }}>
                <Image
                    src="/nm-solutions-icon.png"
                    alt="NM Solutions Logo"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                />
            </div>

            <div style={{ textAlign: 'center' }}>
                <span className="serif" style={{
                    fontSize: '1.5rem',
                    letterSpacing: '2px',
                    color: '#f4f1e7', // var(--cream)
                    display: 'block',
                    marginBottom: '0.5rem',
                    opacity: 0.9
                }}>
                    NMS<span style={{ color: '#c29f52', fontWeight: '700' }}>olutions</span>
                </span>
                <span style={{
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    color: '#c29f52', // var(--gold)
                    fontWeight: '600'
                }}>
                    Digital Engineering
                </span>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.05); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default GlobalLoader;
