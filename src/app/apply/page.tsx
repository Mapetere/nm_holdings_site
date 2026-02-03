'use client';

import React, { useState, useEffect } from 'react';

export default function Apply() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [consent, setConsent] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatusMessage(null);

        try {
            if (!consent) {
                setErrors(prev => ({ ...prev, consent: true }));
                setStatusMessage({ type: 'error', text: 'Please accept the consent checkbox to proceed.' });
                return;
            }

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const requiredFields = ['fullName', 'businessName', 'email', 'description', 'timeline'];
            const newErrors: Record<string, boolean> = {};

            requiredFields.forEach(field => {
                if (!formData.get(field)) {
                    newErrors[field] = true;
                }
            });

            // Email validation
            const emailValue = formData.get('email') as string;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailValue && !emailRegex.test(emailValue)) {
                newErrors['email'] = true;
                setStatusMessage({ type: 'error', text: 'Please enter a valid email address (e.g., name@example.com).' });
                setErrors(newErrors);
                return;
            }

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setStatusMessage({ type: 'error', text: 'Please fill in all required fields.' });
                return;
            }

            setLoading(true);
            setStatusMessage({ type: 'success', text: 'Submitting your application...' });

            const response = await fetch('/api/apply', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const errData = await response.json().catch(() => ({}));
                // Still show confirmation but with a note that there may have been an issue
                setStatusMessage({ type: 'error', text: 'There was an issue sending your application. Please try again or contact us directly.' });
            }
        } catch (error) {
            setStatusMessage({ type: 'error', text: 'Connection error. Please check your internet and try again.' });
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <main className="section-navy" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.2rem' }}>
                        <img
                            src="/nm-solutions-icon.png"
                            alt="NM Solutions"
                            style={{ height: '65px', width: 'auto' }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <span className="serif glow" style={{ fontSize: '2.4rem', letterSpacing: '1px', fontWeight: '500', lineHeight: '1' }}>
                                NM<span className="gold-metallic" style={{ fontWeight: '700' }}>SOLUTIONS</span>
                            </span>
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--gold)', opacity: 0.8 }}>
                                Digital Engineering
                            </span>
                        </div>
                    </div>
                    <h1 className="serif glow" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Application Received</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(244, 241, 231, 0.7)' }}>
                        Thank you for your interest in becoming a founding client. Applications are reviewed personally. Selected applicants will be contacted within 48 hours.
                    </p>
                    <div style={{ marginTop: '3rem' }}>
                        <a href="/" className="btn-gold">Return Home</a>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
                gap: '6rem',
                alignItems: 'start',
                paddingTop: '4rem',
                position: 'relative',
                zIndex: 100
            }}>
                {/* Left Side: Headline & Explanation */}
                <div style={{ position: 'sticky', top: '4rem' }}>
                    <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <a href="/">
                            <img
                                src="/nm-solutions-icon.png"
                                alt="NM Solutions"
                                style={{ height: '50px', width: 'auto' }}
                            />
                        </a>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <span className="serif" style={{ fontSize: '1.4rem', letterSpacing: '1px', fontWeight: '500', lineHeight: '1', color: 'var(--cream)' }}>
                                NM<span className="gold-metallic" style={{ fontWeight: '700' }}>SOLUTIONS</span>
                            </span>
                            <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold)', opacity: 0.8 }}>
                                Digital Engineering
                            </span>
                        </div>
                    </div>
                    <h1 className="serif" style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '2rem' }}>
                        Founding Client <br />
                        <span className="gold-metallic">Interest</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: 'rgba(244, 241, 231, 0.7)',
                        maxWidth: '400px'
                    }}>
                        NM Solutions is selecting a limited number of founding clients. Applications are reviewed individually to ensure alignment.
                    </p>
                </div>

                {/* Right Side: Structured Application Form */}
                <div className="glass-card" style={{ padding: '4rem', background: 'var(--cream)', color: 'var(--navy)', borderRadius: '32px' }}>
                    <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '2rem' }}>
                        {/* Name & Business */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Full Name <span style={{ color: 'var(--gold)' }}>*</span>
                                </label>
                                <input required name="fullName" placeholder="John Doe" style={errors.fullName ? { ...inputStyle, borderColor: '#e74c3c', background: '#fff9f9' } : inputStyle} onChange={() => setErrors({ ...errors, fullName: false })} />
                                {errors.fullName && <span style={{ fontSize: '0.7rem', color: '#e74c3c', fontWeight: '600' }}>This field is required</span>}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Business / Brand Name <span style={{ color: 'var(--gold)' }}>*</span>
                                </label>
                                <input required name="businessName" placeholder="Your Business Name" style={errors.businessName ? { ...inputStyle, borderColor: '#e74c3c', background: '#fff9f9' } : inputStyle} onChange={() => setErrors({ ...errors, businessName: false })} />
                                {errors.businessName && <span style={{ fontSize: '0.7rem', color: '#e74c3c', fontWeight: '600' }}>This field is required</span>}
                            </div>
                        </div>

                        {/* Email */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Email Address <span style={{ color: 'var(--gold)' }}>*</span>
                            </label>
                            <input required name="email" type="email" placeholder="john@example.com" style={errors.email ? { ...inputStyle, borderColor: '#e74c3c', background: '#fff9f9' } : inputStyle} onChange={(e) => {
                                setErrors({ ...errors, email: false });
                            }} />
                            {errors.email && (
                                <span style={{ fontSize: '0.7rem', color: '#e74c3c', fontWeight: '600' }}>
                                    Please enter a valid email address
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                What does your business do? <span style={{ color: 'var(--gold)' }}>*</span>
                            </label>
                            <textarea required name="description" rows={3} placeholder="Briefly describe your brand and mission..." style={errors.description ? { ...inputStyle, resize: 'none', borderColor: '#e74c3c', background: '#fff9f9' } : { ...inputStyle, resize: 'none' }} onChange={() => setErrors({ ...errors, description: false })} />
                            {errors.description && <span style={{ fontSize: '0.7rem', color: '#e74c3c', fontWeight: '600' }}>This field is required</span>}
                        </div>

                        {/* Problem */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                What problem are you looking to solve right now? <span style={{ opacity: 0.5, fontSize: '0.7rem' }}>(Optional)</span>
                            </label>
                            <textarea name="problem" rows={4} placeholder="Describe the challenges you want us to engineer solutions for..." style={{ ...inputStyle, resize: 'none' }} />
                        </div>

                        {/* Timeline */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Desired start timeline <span style={{ color: 'var(--gold)' }}>*</span>
                            </label>
                            <select required name="timeline" style={errors.timeline ? { ...inputStyle, borderColor: '#e74c3c', background: '#fff9f9' } : inputStyle} onChange={() => setErrors({ ...errors, timeline: false })}>
                                <option value="">Select a timeline...</option>
                                <option value="immediately">Immediately</option>
                                <option value="within_1_month">Within 1 month</option>
                                <option value="exploring">Just exploring</option>
                            </select>
                            {errors.timeline && <span style={{ fontSize: '0.7rem', color: '#e74c3c', fontWeight: '600' }}>This field is required</span>}
                        </div>

                        {/* Optional */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Why do you want to be a founding client? <span style={{ opacity: 0.5, fontSize: '0.7rem' }}>(Optional)</span>
                            </label>
                            <textarea name="whyFounding" rows={3} style={{ ...inputStyle, resize: 'none' }} />
                        </div>

                        {/* Consent Checkbox */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '1rem' }}>
                            <input
                                type="checkbox"
                                id="consent"
                                checked={consent}
                                onChange={(e) => {
                                    setConsent(e.target.checked);
                                    if (e.target.checked) setErrors({ ...errors, consent: false });
                                }}
                                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--gold)', marginTop: '2px' }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="consent" style={{ fontSize: '0.85rem', cursor: 'pointer', lineHeight: '1.4', opacity: 0.8 }}>
                                    I consent to having this form use my email and business information to submit my founding client request. <span style={{ color: 'var(--gold)' }}>*</span>
                                </label>
                                {errors.consent && <span style={{ fontSize: '0.7rem', color: '#e74c3c', fontWeight: '600', marginTop: '4px' }}>Consent is required to proceed</span>}
                            </div>
                        </div>

                        {/* Status Message */}
                        {statusMessage && (
                            <div style={{
                                padding: '1rem',
                                borderRadius: '12px',
                                marginBottom: '1rem',
                                textAlign: 'center',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                background: statusMessage.type === 'error' ? '#fff5f5' : '#f0fdf4',
                                color: statusMessage.type === 'error' ? '#e74c3c' : '#16a34a',
                                border: `1px solid ${statusMessage.type === 'error' ? '#fecaca' : '#bbf7d0'}`
                            }}>
                                {statusMessage.text}
                            </div>
                        )}

                        {/* Submit */}
                        <div style={{ marginTop: '1rem' }}>
                            <button
                                type="submit"
                                className="btn-gold"
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    opacity: loading ? 0.7 : 1,
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    pointerEvents: 'auto'
                                }}
                            >
                                {loading ? 'Processing...' : 'Request a Slot'}
                            </button>
                        </div>

                        {/* Note */}
                        <p style={{ textAlign: 'center', fontSize: '0.85rem', opacity: 0.6, marginTop: '1rem' }}>
                            Applications are reviewed personally. Selected applicants will be contacted within 48 hours.
                        </p>
                    </form>
                </div>
            </div>

            {/* Mobile layout adjustments */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 991px) {
                    .container {
                        grid-template-columns: 1fr !important;
                        gap: 4rem !important;
                        padding-top: 2rem !important;
                    }
                    .glass-card {
                        padding: 2rem !important;
                    }
                }
            `}} />

            {loading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(5, 8, 16, 0.95)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    pointerEvents: 'all'
                }}>
                    {/* Animated Logo Container */}
                    <div style={{
                        animation: 'pulse 2s ease-in-out infinite',
                        filter: 'drop-shadow(0 0 30px rgba(194, 159, 82, 0.4))'
                    }}>
                        <img
                            src="/nm-solutions-icon.png"
                            alt="Loading"
                            style={{
                                height: '80px',
                                width: 'auto'
                            }}
                        />
                    </div>

                    {/* Loading Text */}
                    <div style={{ textAlign: 'center' }}>
                        <p style={{
                            color: 'var(--cream)',
                            fontSize: '1.4rem',
                            fontFamily: 'var(--font-serif)',
                            marginBottom: '0.5rem',
                            opacity: 0.9
                        }}>
                            Wait a bit...
                        </p>
                        <p style={{
                            color: 'var(--gold)',
                            fontSize: '0.9rem',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            opacity: 0.7
                        }}>
                            I'm processing your request
                        </p>
                    </div>

                    {/* Loading Bar */}
                    <div style={{
                        width: '200px',
                        height: '2px',
                        background: 'rgba(194, 159, 82, 0.2)',
                        borderRadius: '2px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '60%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                            animation: 'loadingBar 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite'
                        }} />
                    </div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @keyframes pulse {
                            0%, 100% { transform: scale(1); opacity: 1; filter: drop-shadow(0 0 20px rgba(194, 159, 82, 0.3)); }
                            50% { transform: scale(1.08); opacity: 0.8; filter: drop-shadow(0 0 40px rgba(194, 159, 82, 0.6)); }
                        }
                        @keyframes loadingBar {
                            0% { transform: translateX(-150%); }
                            100% { transform: translateX(250%); }
                        }
                    `}} />
                </div>
            )}
        </main>
    );
}

const inputStyle = {
    padding: '1rem',
    borderRadius: '12px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(16, 26, 45, 0.1)',
    background: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease'
};
