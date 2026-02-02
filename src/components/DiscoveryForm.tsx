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

    return (
        <div className="discovery-form-loading">
            Initialising Discovery Interface...
        </div>
    );
}
