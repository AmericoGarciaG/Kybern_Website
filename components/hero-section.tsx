"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container relative z-10 px-6 mx-auto text-center flex flex-col items-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="kybern" className="mb-8 px-4 py-1 text-sm tracking-wide uppercase">
                        Ingeniería de IA Gobernarda
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
                >
                    No implementamos IA. <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                        Instalamos Gobernanza.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed"
                >
                    La mayoría de las empresas operan bajo el &quot;Vibe Coding&quot;, acumulando deuda técnica silenciosa. En Kybern, transformamos la fuerza bruta de los LLMs en <strong className="font-semibold text-slate-900">Sistemas Generativos Deterministas</strong> y precisión industrial.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button variant="kybernPrimary" size="lg" className="h-12 px-8 text-base group">
                        Descubra el Estándar Kybern
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="kybernOutline" size="lg" className="h-12 px-8 text-base">
                        <Activity className="mr-2 w-4 h-4 text-green-600" />
                        Audite su Madurez Lógica
                    </Button>
                </motion.div>
            </div>

            {/* Decorative gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}
