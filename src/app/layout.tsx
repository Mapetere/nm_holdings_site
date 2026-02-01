import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "NM Holdings | NMSolutions",
    description: "Excellence in Web Engineering and Diversified Holdings",
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
