'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import FadeInUp from '@/components/FadeInUp';

const projectTypes = [
    { id: 'ecommerce', label: 'E Commerce / Hardware Shop' },
    { id: 'cosmetics', label: 'Beauty & Cosmetics Store' },
    { id: 'fashion', label: 'Fashion Boutique' },
    { id: 'grocery', label: 'Grocery / Fresh Produce' },
    { id: 'construction', label: 'Construction / Trades' },
    { id: 'dashboard', label: 'Business Admin Dashboard' },
    { id: 'mobile', label: 'Mobile Application' },
    { id: 'custom', label: 'Custom Engineering' },
];

export default function Apply() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [consent, setConsent] = useState(false);
    const [projectType, setProjectType] = useState('');
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

            const requiredFields = ['fullName', 'businessName', 'email', 'description', 'projectType'];
            const newErrors: Record<string, boolean> = {};

            requiredFields.forEach(field => {
                const value = field === 'projectType' ? projectType : formData.get(field);
                if (!value) {
                    newErrors[field] = true;
                }
            });

            // Email validation
            const emailValue = formData.get('email') as string;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailValue && !emailRegex.test(emailValue)) {
                newErrors['email'] = true;
                setStatusMessage({ type: 'error', text: 'Please enter a valid email address.' });
                setErrors(newErrors);
                return;
            }

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setStatusMessage({ type: 'error', text: 'Please fill in all required fields.' });
                return;
            }

            setLoading(true);

            // Collect project data
            const projectData = Object.fromEntries(formData);
            projectData.projectType = projectType;

            const response = await fetch('/api/apply', {
                method: 'POST',
                body: JSON.stringify(projectData),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                setStatusMessage({ type: 'error', text: 'There was an issue sending your application. Please try again.' });
            }
        } catch (error) {
            setStatusMessage({ type: 'error', text: 'Connection error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <main className="section-navy" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.2rem' }}>
                        <Image
                            src="/nm-solutions-icon.png"
                            alt="NM Solutions"
                            width={65}
                            height={65}
                            priority
                            className="logo-enhance"
                            style={{ height: '65px', width: 'auto' }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <span className="serif" style={{ fontSize: '2.5rem', letterSpacing: '1px', fontWeight: '500', lineHeight: '1', color: 'var(--cream)' }}>
                                NMS<span className="gold-metallic" style={{ fontSize: '1.8rem', fontWeight: '700' }}>olutions</span>
                            </span>
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--gold)', opacity: 0.8 }}>
                                Digital Engineering
                            </span>
                        </div>
                    </div>
                    <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Success!</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(244, 241, 231, 0.7)' }}>
                        Your project inquiry has been received. We're excited to see what we can build together. A senior engineer will review your request and reach out within 48 hours.
                    </p>
                    <div style={{ marginTop: '3rem' }}>
                        <a href="/" className="btn-gold">Return Home</a>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '6rem 0' }}>
            <Header />
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '8rem',
                alignItems: 'start',
                position: 'relative'
            }}>
                {/* Left Side: Content */}
                <div style={{ position: 'sticky', top: '6rem' }}>


                    <header>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--gold)', fontWeight: '700', fontSize: '0.75rem' }}>
                            Apply
                        </span>
                        <h1 className="serif" style={{ fontSize: '4rem', lineHeight: '1.1', margin: '1rem 0 2rem', color: 'var(--cream)' }}>
                            Let's Build <br />
                            Together
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.8',
                            color: 'rgba(244, 241, 231, 0.6)',
                            maxWidth: '450px'
                        }}>
                            Ready to transform your vision into a high performance digital ecosystem? Tell us about your project, and let's engineer the solution for your brand.
                        </p>

                        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(194, 159, 82, 0.05)', borderRadius: '24px', border: '1px solid rgba(194, 159, 82, 0.1)' }}>
                            <h4 className="serif" style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>What happens next?</h4>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(244, 241, 231, 0.5)', lineHeight: '1.6' }}>
                                1. We review your industry needs.<br />
                                2. We prepare a tailored technical brief.<br />
                                3. We scedule discussion meeting
                            </p>
                        </div>
                    </FadeInUp>
                </div>

                {/* Right Side: Form */}
                <FadeInUp delay={0.2}>
                    <div style={{
                        background: 'rgba(244, 241, 231, 0.03)',
                        border: '1px solid rgba(244, 241, 231, 0.1)',
                        backdropFilter: 'blur(10px)',
                        padding: '4rem',
                        borderRadius: '40px'
                    }}>
                        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {/* Name & Business */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label style={labelStyle}>Full Name <span style={{ color: 'var(--gold)' }}>*</span></label>
                                    <input required name="fullName" placeholder="Nyasha Mapetere" style={errors.fullName ? { ...inputStyle, borderColor: 'rgba(231, 76, 60, 0.5)' } : inputStyle} onChange={() => setErrors({ ...errors, fullName: false })} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label style={labelStyle}>Business Name <span style={{ color: 'var(--gold)' }}>*</span></label>
                                    <input required name="businessName" placeholder="Your Brand" style={errors.businessName ? { ...inputStyle, borderColor: 'rgba(231, 76, 60, 0.5)' } : inputStyle} onChange={() => setErrors({ ...errors, businessName: false })} />
                                </div>
                            </div>

                            {/* Email */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label style={labelStyle}>Email Address <span style={{ color: 'var(--gold)' }}>*</span></label>
                                <input required name="email" type="email" placeholder="nyasha@example.com" style={errors.email ? { ...inputStyle, borderColor: 'rgba(231, 76, 60, 0.5)' } : inputStyle} onChange={() => setErrors({ ...errors, email: false })} />
                            </div>

                            {/* Project Type */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label style={labelStyle}>I want to build a... <span style={{ color: 'var(--gold)' }}>*</span></label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => {
                                                setProjectType(type.id);
                                                setErrors({ ...errors, projectType: false });
                                            }}
                                            style={{
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                background: projectType === type.id ? 'var(--gold)' : 'rgba(244, 241, 231, 0.05)',
                                                border: '1px solid',
                                                borderColor: projectType === type.id ? 'var(--gold)' : (errors.projectType ? 'rgba(231, 76, 60, 0.5)' : 'rgba(244, 241, 231, 0.1)'),
                                                color: projectType === type.id ? 'var(--navy)' : 'var(--cream)',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {type.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label style={labelStyle}>Project Vision <span style={{ color: 'var(--gold)' }}>*</span></label>
                                <textarea required name="description" rows={4} placeholder="Tell us about your goals, features, and target audience..." style={errors.description ? { ...inputStyle, resize: 'none', borderColor: 'rgba(231, 76, 60, 0.5)' } : { ...inputStyle, resize: 'none' }} onChange={() => setErrors({ ...errors, description: false })} />
                            </div>



                            {/* Consent */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginTop: '1rem' }}>
                                <input
                                    type="checkbox"
                                    id="consent"
                                    checked={consent}
                                    onChange={(e) => {
                                        setConsent(e.target.checked);
                                        if (e.target.checked) setErrors({ ...errors, consent: false });
                                    }}
                                    style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--gold)', marginTop: '4px' }}
                                />
                                <label htmlFor="consent" style={{ fontSize: '0.85rem', color: 'rgba(244, 241, 231, 0.6)', cursor: 'pointer' }}>
                                    I agree to receive a technical consultation for my project. <span style={{ color: 'var(--gold)' }}>*</span>
                                </label>
                            </div>

                            {/* Status Message */}
                            {statusMessage && (
                                <div style={{
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    fontSize: '0.9rem',
                                    background: statusMessage.type === 'error' ? 'rgba(231, 76, 60, 0.1)' : 'rgba(46, 204, 113, 0.1)',
                                    color: statusMessage.type === 'error' ? '#e74c3c' : '#2ecc71',
                                    border: `1px solid ${statusMessage.type === 'error' ? 'rgba(231, 76, 60, 0.2)' : 'rgba(46, 204, 113, 0.2)'}`
                                }}>
                                    {statusMessage.text}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn-gold"
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    fontSize: '1rem',
                                    padding: '1.2rem',
                                    opacity: loading ? 0.7 : 1,
                                    pointerEvents: loading ? 'none' : 'auto'
                                }}
                            >
                                {loading ? 'Submitting Inquiry...' : 'Engineer My Solution'}
                            </button>
                        </form>
                    </div>
                </FadeInUp>
            </div>
            <BackToHome />
            <Footer />

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 1200px) {
                    .container { gap: 4rem !important; }
                    #apply h1 { font-size: 3rem !important; }
                }
                @media (max-width: 991px) {
                    .container { 
                        grid-template-columns: 1fr !important;
                        padding-top: 2rem !important;
                    }
                    form { padding: 2rem !important; }
                }
            `}} />

            {loading && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(5, 8, 16, 0.98)',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    <div style={{ animation: 'spin 2s linear infinite' }}>
                        <Image src="/nm-solutions-icon.png" alt="Loading" width={80} height={80} />
                    </div>
                    <p style={{ color: 'var(--gold)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                        Architecting Request
                    </p>
                    <style dangerouslySetInnerHTML={{ __html: `@keyframes spin { 100% { transform: rotate(360deg); } }` }} />
                </div>
            )}
        </main>
    );
}

const labelStyle = {
    fontSize: '0.75rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
    fontWeight: '700',
    color: 'rgba(244, 241, 231, 0.5)'
};

const inputStyle = {
    padding: '1.1rem',
    borderRadius: '16px',
    background: 'rgba(244, 241, 231, 0.05)',
    border: '1px solid rgba(244, 241, 231, 0.1)',
    color: 'var(--cream)',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease'
};
