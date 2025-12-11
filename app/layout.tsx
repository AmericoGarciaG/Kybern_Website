import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Kybern AI | Ingeniería de IA Gobernada",
    description: "No implementamos IA. Instalamos Gobernanza. Transformando fuerza bruta en sistemas deterministas.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={cn("min-h-screen bg-background font-sans antialiased text-slate-900", inter.variable)}>
                {children}
            </body>
        </html>
    );
}
