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

    const nextStep = () => setStep(s => Math.min(s + 1, 5));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    return (
        <div className="discovery-form-ready">
            Persistence and Navigation Active. Ready for Form UI.
            <button onClick={nextStep}>Next Step</button>
        </div>
    );
}
