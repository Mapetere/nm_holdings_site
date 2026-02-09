'use client';
import React, { useEffect, useState } from 'react';

interface Point {
    x: number;
    y: number;
}

export default function HeroArt() {
    const [mousePos, setMousePos] = useState<Point>({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!isClient) return null;

    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0
            }}
            aria-hidden="true"
        >
            {/* Organic flowing lines - Left side */}
            <svg
                viewBox="0 0 200 400"
                style={{
                    position: 'absolute',
                    left: '-5%',
                    top: '10%',
                    width: '250px',
                    height: '500px',
                    opacity: 0.12,
                    transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
                    transition: 'transform 0.3s ease-out'
                }}
            >
                {/* Hand-drawn style curve */}
                <path
                    d="M 50 50 
                       Q 80 100, 60 150 
                       Q 40 200, 70 250 
                       Q 100 300, 80 350 
                       Q 60 400, 90 450"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="5,8"
                    style={{
                        animation: 'drawLine 3s ease-in-out infinite alternate'
                    }}
                />
                <path
                    d="M 100 30 
                       Q 130 80, 110 130 
                       Q 90 180, 120 230 
                       Q 150 280, 130 330"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.5"
                    style={{
                        animation: 'drawLine 4s ease-in-out infinite alternate-reverse'
                    }}
                />
                {/* Organic dots */}
                <circle cx="55" cy="120" r="3" fill="var(--gold)" opacity="0.4" />
                <circle cx="75" cy="220" r="2" fill="var(--gold)" opacity="0.6" />
                <circle cx="95" cy="180" r="4" fill="var(--gold)" opacity="0.3" />
            </svg>

            {/* Organic flowing lines - Right side */}
            <svg
                viewBox="0 0 200 400"
                style={{
                    position: 'absolute',
                    right: '-5%',
                    top: '5%',
                    width: '280px',
                    height: '550px',
                    opacity: 0.1,
                    transform: `translate(${-mousePos.x * 0.4}px, ${mousePos.y * 0.4}px) rotate(15deg)`,
                    transition: 'transform 0.3s ease-out'
                }}
            >
                <path
                    d="M 150 20 
                       Q 120 70, 140 120 
                       Q 160 170, 130 220 
                       Q 100 270, 120 320 
                       Q 140 370, 110 420"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="3,6"
                    style={{
                        animation: 'drawLine 3.5s ease-in-out infinite alternate'
                    }}
                />
                {/* Leaf-like shapes */}
                <ellipse
                    cx="135" cy="150" rx="15" ry="8"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="0.8"
                    opacity="0.4"
                    transform="rotate(30 135 150)"
                />
                <ellipse
                    cx="125" cy="280" rx="12" ry="6"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="0.8"
                    opacity="0.3"
                    transform="rotate(-20 125 280)"
                />
            </svg>

            {/* Floating botanical element - Top center */}
            <svg
                viewBox="0 0 100 100"
                style={{
                    position: 'absolute',
                    left: '20%',
                    top: '15%',
                    width: '80px',
                    height: '80px',
                    opacity: 0.15,
                    transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                    transition: 'transform 0.4s ease-out'
                }}
            >
                {/* Simple leaf */}
                <path
                    d="M 50 90 Q 50 50, 30 30 Q 50 40, 70 30 Q 50 50, 50 90"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
                <path
                    d="M 50 85 L 50 40"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="0.5"
                    strokeDasharray="2,3"
                />
            </svg>

            {/* Floating circle element - Right */}
            <svg
                viewBox="0 0 100 100"
                style={{
                    position: 'absolute',
                    right: '15%',
                    bottom: '20%',
                    width: '100px',
                    height: '100px',
                    opacity: 0.08,
                    transform: `translate(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px)`,
                    transition: 'transform 0.5s ease-out'
                }}
            >
                {/* Imperfect hand-drawn circle */}
                <path
                    d="M 50 10 
                       Q 85 15, 90 50 
                       Q 88 85, 50 90 
                       Q 12 88, 10 50 
                       Q 13 12, 50 10"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
            </svg>

            {/* Small decorative marks */}
            <svg
                viewBox="0 0 50 50"
                style={{
                    position: 'absolute',
                    left: '30%',
                    bottom: '25%',
                    width: '40px',
                    height: '40px',
                    opacity: 0.12,
                    transform: `translate(${mousePos.x * 0.7}px, ${-mousePos.y * 0.7}px)`,
                    transition: 'transform 0.4s ease-out'
                }}
            >
                <line x1="10" y1="25" x2="40" y2="25" stroke="var(--gold)" strokeWidth="1" />
                <line x1="25" y1="10" x2="25" y2="40" stroke="var(--gold)" strokeWidth="1" />
            </svg>

            {/* Scattered dots */}
            <div
                style={{
                    position: 'absolute',
                    left: '10%',
                    bottom: '15%',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    opacity: 0.15,
                    transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
                    transition: 'transform 0.3s ease-out'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    right: '25%',
                    top: '30%',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    opacity: 0.2,
                    transform: `translate(${-mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                    transition: 'transform 0.4s ease-out'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    left: '45%',
                    top: '10%',
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    opacity: 0.25,
                    transform: `translate(${mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px)`,
                    transition: 'transform 0.35s ease-out'
                }}
            />

            {/* Animation Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes drawLine {
                    from {
                        stroke-dashoffset: 0;
                    }
                    to {
                        stroke-dashoffset: 26;
                    }
                }
            `}} />
        </div>
    );
}
