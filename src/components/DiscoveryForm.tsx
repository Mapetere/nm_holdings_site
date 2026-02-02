'use client';

import React, { useState, useEffect } from 'react';

export default function DiscoveryForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        companyName: '',
        hasBranding: 'No',
        tagline: '',
        contactPerson: '',
        email: '',
        phone: '',
        primaryPurpose: '',
        idealCustomer: '',
        hasDomain: 'No',
        domainName: '',
        expectedPages: '',
        specialFeatures: [] as string[],
        designInspiration: ['', ''],
        idealLaunchDate: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // Persistence
    useEffect(() => {
        const saved = localStorage.getItem('nm_discovery_draft');
        if (saved) {
            try {
                setFormData(prev => ({ ...prev, ...JSON.parse(saved) }));
            } catch (e) {
                console.error('Failed to load draft');
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('nm_discovery_draft', JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (feature: string) => {
        setFormData(prev => {
            const current = prev.specialFeatures;
            if (current.includes(feature)) {
                return { ...prev, specialFeatures: current.filter(f => f !== feature) };
            }
            return { ...prev, specialFeatures: [...current, feature] };
        });
    };

    const handleInspiration = (index: number, value: string) => {
        setFormData(prev => {
            const links = [...prev.designInspiration];
            links[index] = value;
            return { ...prev, designInspiration: links };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const res = await fetch('/api/onboarding', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('success');
                localStorage.removeItem('nm_discovery_draft');
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    const nextStep = () => setStep(s => Math.min(s + 1, 5));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    if (status === 'success') {
        return (
            <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✓</div>
                <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Discovery Received</h2>
                <p style={{ color: 'rgba(244, 241, 231, 0.6)' }}>
                    Thank you. Our engineers are reviewing your vision. We will reach out shortly to initiate the next phase.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="onboarding-form">
            {/* Progress Bar */}
            <div style={{ marginBottom: '3rem', display: 'flex', gap: '10px' }}>
                {[1, 2, 3, 4, 5].map(i => (
                    <div
                        key={i}
                        style={{
                            height: '4px',
                            flex: 1,
                            background: i <= step ? 'var(--gold)' : 'rgba(194, 159, 82, 0.1)',
                            transition: 'all 0.4s ease'
                        }}
                    />
                ))}
            </div>

            {/* Step 1: Business Identity */}
            {step === 1 && (
                <div className="form-step">
                    <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>1. Business Identity</h2>

                    <div className="input-group">
                        <label>What is the official name of the business?</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="e.g. NM Solutions"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Do you have a logo and brand colors?</label>
                        <select name="hasBranding" value={formData.hasBranding} onChange={handleChange}>
                            <option value="Yes">Yes, I have them</option>
                            <option value="No">No, I need a branding package</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>What is your tagline/slogan?</label>
                        <input
                            type="text"
                            name="tagline"
                            value={formData.tagline}
                            onChange={handleChange}
                            placeholder="Optional"
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="input-group">
                            <label>Contact Person</label>
                            <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label>Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                </div>
            )}

            {/* Step 2: The Goal */}
            {step === 2 && (
                <div className="form-step">
                    <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>2. The Goal</h2>

                    <div className="input-group">
                        <label>What is the primary purpose of the site/app?</label>
                        <textarea
                            name="primaryPurpose"
                            value={formData.primaryPurpose}
                            onChange={handleChange}
                            placeholder="e.g., Bookings, Sales, Information, Portfolio..."
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Who is your ideal customer?</label>
                        <textarea
                            name="idealCustomer"
                            value={formData.idealCustomer}
                            onChange={handleChange}
                            placeholder="Describe your target audience..."
                            required
                        />
                    </div>
                </div>
            )}

            {/* Step 3: Technical */}
            {step === 3 && (
                <div className="form-step">
                    <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>3. Technical Requirements</h2>

                    <div className="input-group">
                        <label>Do you already have a domain name?</label>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                            {['Yes', 'No'].map(opt => (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setFormData(p => ({ ...p, hasDomain: opt as 'Yes' | 'No' }))}
                                    className={formData.hasDomain === opt ? 'btn-active' : 'btn-outline'}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {formData.hasDomain === 'Yes' && (
                        <div className="input-group">
                            <label>Current Domain Name</label>
                            <input type="text" name="domainName" value={formData.domainName} onChange={handleChange} placeholder="www.example.com" />
                        </div>
                    )}

                    <div className="input-group">
                        <label>How many pages do you envision?</label>
                        <input type="text" name="expectedPages" value={formData.expectedPages} onChange={handleChange} placeholder="Home, About, Services, etc." required />
                    </div>

                    <div className="input-group">
                        <label>Do you need specialized features?</label>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                            {['WhatsApp Integration', 'Online Payments', 'Login System', 'Blog/News', 'Live Chat', 'CRM Integration'].map(f => (
                                <label key={f} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={formData.specialFeatures.includes(f)}
                                        onChange={() => handleCheckbox(f)}
                                    />
                                    {f}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Step 4: Inspiration */}
            {step === 4 && (
                <div className="form-step">
                    <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>4. Design Inspiration</h2>
                    <p style={{ marginBottom: '1.5rem', color: 'rgba(244, 241, 231, 0.5)', fontSize: '0.9rem' }}>
                        Please share 2 links to websites you like (even if they are in a different industry).
                    </p>

                    <div className="input-group">
                        <label>Link 1</label>
                        <input type="url" value={formData.designInspiration[0]} onChange={(e) => handleInspiration(0, e.target.value)} placeholder="https://..." />
                    </div>

                    <div className="input-group">
                        <label>Link 2</label>
                        <input type="url" value={formData.designInspiration[1]} onChange={(e) => handleInspiration(1, e.target.value)} placeholder="https://..." />
                    </div>
                </div>
            )}

            {/* Step 5: Timeline */}
            {step === 5 && (
                <div className="form-step">
                    <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>5. Timeline</h2>

                    <div className="input-group">
                        <label>When is your ideal launch date?</label>
                        <input type="date" name="idealLaunchDate" value={formData.idealLaunchDate} onChange={handleChange} required />
                    </div>

                    <div className="input-group" style={{ marginTop: '2rem' }}>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(244, 241, 231, 0.5)', marginBottom: '1rem' }}>
                            By submitting, you initiate the project discovery phase with NM Solutions.
                            We will contact you within 24 hours.
                        </p>
                    </div>
                </div>
            )}

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
                {step > 1 ? (
                    <button type="button" onClick={prevStep} className="btn-outline">Previous</button>
                ) : <div />}

                {step < 5 ? (
                    <button type="button" onClick={nextStep} className="btn-gold">Next Step</button>
                ) : (
                    <button type="submit" className="btn-gold" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Submitting...' : 'Complete Discovery'}
                    </button>
                )}
            </div>

            <style jsx>{`
                .onboarding-form {
                    max-width: 600px;
                    margin: 0 auto;
                }
                .input-group {
                    margin-bottom: 2rem;
                }
                label {
                    display: block;
                    font-size: 0.9rem;
                    color: var(--gold);
                    margin-bottom: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 600;
                }
                input, textarea, select {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(194, 159, 82, 0.2);
                    padding: 1rem;
                    color: var(--cream);
                    border-radius: 8px;
                    font-size: 1rem;
                    transition: border-color 0.3s ease;
                }
                input:focus, textarea:focus {
                    outline: none;
                    border-color: var(--gold);
                }
                textarea {
                    min-height: 120px;
                    resize: vertical;
                }
                .btn-outline {
                    padding: 0.8rem 1.5rem;
                    border: 1px solid var(--gold);
                    background: transparent;
                    color: var(--gold);
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .btn-outline:hover {
                    background: rgba(194, 159, 82, 0.1);
                }
                .btn-active {
                    padding: 0.8rem 1.5rem;
                    border: 1px solid var(--gold);
                    background: var(--gold);
                    color: var(--navy);
                    border-radius: 50px;
                    cursor: pointer;
                }
                .checkbox-label {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.9rem;
                    color: rgba(244, 241, 231, 0.8);
                    text-transform: none;
                    letter-spacing: normal;
                    cursor: pointer;
                }
                .checkbox-label input {
                    width: auto;
                }
            `}</style>
        </form>
    );
}
