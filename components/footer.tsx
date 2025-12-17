import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
            <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-2 group">
                        <Image
                            src="/images/logo-icon.png"
                            alt="Kybern AI Logo"
                            width={80}
                            height={80}
                            className="w-20 h-20 group-hover:scale-105 transition-transform"
                        />
                        <span className="text-lg font-bold text-white tracking-tight">Kybern <span className="text-green-600">AI</span></span>
                    </Link>
                    <p className="text-sm">De la Caja Negra a la Arquitectura de Precisión.</p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex gap-4">
                        <Link href="#contact" className="hover:text-green-500 transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        <Link href="#contact" className="hover:text-green-500 transition-colors"><Twitter className="w-5 h-5" /></Link>
                    </div>
                    <p className="text-xs text-slate-600">© 2025 Kybern AI. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
