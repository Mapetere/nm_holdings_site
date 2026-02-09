'use client';
import React from 'react';

export default function TechStack() {
    const techItems = [
        { name: 'Next.js 16', description: 'The power of modern React for high-performance, SEO-optimized web applications.', category: 'Framework' },
        { name: 'React 19', description: 'Proven library for building dynamic, interactive user interfaces.', category: 'UI Library' },
        { name: 'TypeScript', description: 'Type-safe JavaScript for reliable, maintainable, and error-free codebases.', category: 'Language' },
        { name: 'Node.js', description: 'Robust and scalable runtime for high-performance server-side engineering.', category: 'Backend' },
        { name: 'PostgreSQL', description: 'The world\'s most advanced open-source database for secure data persistence.', category: 'Database' },
        { name: 'AWS Infrastructure', description: 'Enterprise-grade cloud services from Amazon for global scalability and reliability.', category: 'Infrastructure' },
        { name: 'Vercel', description: 'State-of-the-art edge network deployment for lightning-fast global delivery.', category: 'Deployment' },
        { name: 'Tailwind CSS', description: 'Modern, utility-first CSS framework for rapid and precise styling.', category: 'Styling' }
    ];

    return (
        <main className="section-navy" style={{ minHeight: '100vh', padding: '8rem 0' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', fontSize: '0.75rem', color: 'var(--gold)' }}>Our Arsenal</span>
                    <h1 className="serif" style={{ fontSize: '4rem', margin: '1rem 0' }}>The <span className="gold-metallic">Tech Stack</span></h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(244, 241, 231, 0.6)', fontSize: '1.2rem' }}>
                        We use only proven, industry-standard technologies and service providers to ensure your digital ecosystem is built for longevity and scale.
                    </p>
                </div>

                {/* Tech Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {techItems.map((tech, index) => (
                        <div key={tech.name} className="glass-card" style={{
                            padding: '2.5rem',
                            animation: `fadeSlideIn 0.5s ease forwards ${index * 0.1}s`,
                            opacity: 0
                        }}>
                            <span style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                color: 'var(--gold)',
                                opacity: 0.8,
                                display: 'block',
                                marginBottom: '0.5rem'
                            }}>
                                {tech.category}
                            </span>
                            <h3 className="serif" style={{ fontSize: '1.8rem', color: 'var(--cream)', marginBottom: '1rem' }}>
                                {tech.name}
                            </h3>
                            <p style={{ color: 'rgba(244, 241, 231, 0.5)', lineHeight: '1.6' }}>
                                {tech.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Infrastructure Note */}
                <div style={{
                    marginTop: '6rem',
                    padding: '4rem',
                    textAlign: 'center',
                    background: 'rgba(194, 159, 82, 0.05)',
                    border: '1px solid rgba(194, 159, 82, 0.1)',
                    borderRadius: '32px'
                }}>
                    <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--gold)' }}>Proven Infrastructure</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(244, 241, 231, 0.7)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        For deployment and hosting, we rely exclusively on enterprise-grade infrastructure. We architect on **AWS (Amazon Web Services)** and **Vercel** to provide the security, uptime, and speed that visionary brands require. No experimental platforms—just rock-solid digital foundations.
                    </p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeSlideIn {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}} />
        </main>
    );
}
