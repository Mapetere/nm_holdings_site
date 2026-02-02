import React, { useState, useEffect } from 'react';

export default function Apply() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        console.log("Apply Page Mounted");
        const handleGlobalClick = (e: MouseEvent) => {
            console.log("Global Click Detected at:", e.clientX, e.clientY, "Target:", e.target);
        };
        document.addEventListener('click', handleGlobalClick);
        return () => document.removeEventListener('click', handleGlobalClick);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        console.log('--- HANDLE SUBMIT START ---');
        e.preventDefault();

        try {
            if (!consent) {
                console.log('Validation Error: Consent missing');
                setErrors(prev => ({ ...prev, consent: true }));
                return;
            }

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            console.log('Form Data entries:', Array.from(formData.entries()));

            const requiredFields = ['fullName', 'businessName', 'email', 'description', 'timeline'];
            const newErrors: Record<string, boolean> = {};

            requiredFields.forEach(field => {
                if (!formData.get(field)) {
                    console.log(`Validation Error: ${field} missing`);
                    newErrors[field] = true;
                }
            });

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }

            console.log('Sending API Request...');
            setLoading(true);
            const response = await fetch('/api/apply', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('API Response status:', response.status);
            if (response.ok) {
                setSubmitted(true);
            } else {
                const errData = await response.json().catch(() => ({}));
                console.error('API Error details:', errData);
                alert(`Submission failed (${response.status}). Please try again.`);
            }
        } catch (error) {
            console.error('Submission Crash:', error);
            alert('A critical error occurred. Check browser console.');
        } finally {
            setLoading(false);
            console.log('--- HANDLE SUBMIT END ---');
        }
    };

    if (submitted) {
        return (
            <main className="section-navy" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <img
                            src="/logo.svg"
                            alt="NM Solutions Arch"
                            style={{ height: '70px', width: 'auto', marginBottom: '1rem' }}
                        />
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
                    <div style={{ marginBottom: '3rem' }}>
                        <a href="/">
                            <img
                                src="/logo.svg"
                                alt="NM Solutions Arch"
                                style={{ height: '50px', width: 'auto' }}
                            />
                        </a>
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
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
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
                                <input required name="businessName" placeholder="Brand Inc." style={errors.businessName ? { ...inputStyle, borderColor: '#e74c3c', background: '#fff9f9' } : inputStyle} onChange={() => setErrors({ ...errors, businessName: false })} />
                                {errors.businessName && <span style={{ fontSize: '0.7rem', color: '#e74c3c', fontWeight: '600' }}>This field is required</span>}
                            </div>
                        </div>

                        {/* Email */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Email Address <span style={{ color: 'var(--gold)' }}>*</span>
                            </label>
                            <input required name="email" type="email" placeholder="john@example.com" style={errors.email ? { ...inputStyle, borderColor: '#e74c3c', background: '#fff9f9' } : inputStyle} onChange={() => setErrors({ ...errors, email: false })} />
                            {errors.email && <span style={{ fontSize: '0.7rem', color: '#e74c3c', fontWeight: '600' }}>This field is required</span>}
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
                                    cursor: loading ? 'not-allowed' : 'pointer'
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
                    background: 'rgba(0,0,0,0.8)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold)',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    pointerEvents: 'all'
                }}>
                    Processing Your Selection...
                </div>
            )}
        </main>
    );
}

const inputStyle = {
    padding: '1rem',
    borderRadius: '12px',
    border: '1px solid rgba(16, 26, 45, 0.1)',
    background: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease'
};
