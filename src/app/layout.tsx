import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL('https://nmsolutions.co.zw'), // Update this to your actual domain
    title: "NM Solutions | Professional Web Engineering & Software Solutions",
    description: "We craft high-performance websites and custom software solutions. Currently seeking 7 Founding Clients for exclusive partnership benefits.",
    keywords: "web development, software solutions, e-commerce, web engineering, custom software, Zimbabwe",
    openGraph: {
        title: "NM Solutions | Professional Web Engineering",
        description: "Crafting high-performance websites and custom software solutions.",
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
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
