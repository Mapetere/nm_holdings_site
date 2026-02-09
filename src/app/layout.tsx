import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
    metadataBase: new URL('https://nmsolutions.co.zw'), // Update this to your actual domain
    title: "NM Solutions | Professional Web Engineering & Software Solutions",
    description: "We craft high performance websites and custom software solutions. Currently opening early access for 2026 strategic partnerships.",
    keywords: "web development, software solutions, e commerce, web engineering, custom software, Zimbabwe",
    openGraph: {
        title: "NM Solutions | Professional Web Engineering",
        description: "Crafting high performance websites and custom software solutions.",
        type: "website",
    },
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.png",
        apple: "/favicon.png",
    },
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NM Solutions",
        "url": "https://nmsolutions.co.zw",
        "logo": "https://nmsolutions.co.zw/favicon.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+263-XXX-XXXXXX",
            "contactType": "customer service",
            "areaServed": "ZW",
            "availableLanguage": "English"
        }
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>

                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}
