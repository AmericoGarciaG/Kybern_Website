"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProblemSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        La IA sin Ingeniería es solo Entropía.
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Chaos Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                    <AlertTriangle className="w-6 h-6 text-red-600" />
                                </div>
                                <CardTitle className="text-xl text-slate-800">El Camino del Caos</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-slate-600 leading-relaxed">
                                    La ilusión de velocidad. Al auditar el código, se descubre que incumple las reglas de negocio críticas. El resultado inevitable: <span className="text-slate-900 font-bold">descartar el trabajo de la IA y reescribir manualmente.</span>
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Kybern Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-blue-50/30 border-t-4 border-t-green-500 relative overflow-hidden">
                            {/* Sutil background accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-bl-full -z-10" />

                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-6 h-6 text-green-600" />
                                </div>
                                <CardTitle className="text-xl text-slate-900">El Camino Kybern</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-slate-700 font-medium leading-relaxed">
                                    Una arquitectura de precisión. Aceptamos la &apos;Caja Negra&apos;, pero la <span className="text-slate-900 font-bold">gobernamos con un Libro de Lógica inmutable.</span> La IA ejecuta la implementación, pero jamás se desvía de la intención del negocio.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
