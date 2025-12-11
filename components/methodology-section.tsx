"use client";

import { motion } from "framer-motion";
import { BookMarked, GitPullRequestClosed } from "lucide-react";

export function MethodologySection() {
    return (
        <section id="methodology" className="py-24 bg-white">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        El fin de la Caja Negra Ingobernable
                    </h2>
                    <p className="text-xl text-slate-600">Arquitectura propietaria de dos niveles.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 w-16 h-1 bg-slate-200 -translate-x-1/2 -translate-y-1/2" />
                    <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-slate-300 rounded-full -translate-x-1/2 -translate-y-1/2" />

                    {/* Level 1: DBBD */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group"
                    >
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors h-full shadow-sm hover:shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-4 py-2 bg-slate-100 text-slate-500 text-xs font-bold rounded-bl-xl">NIVEL 1</div>
                            <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                                <BookMarked className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">DBBD <span className="text-slate-400 font-normal text-lg ml-2">(Driven Black Box Development)</span></h3>
                            <h4 className="text-lg font-semibold text-green-600 mb-4">Integridad Lógica</h4>
                            <p className="text-slate-600 leading-relaxed">
                                El negocio nunca cede el control. El &apos;Logic Book&apos; es la Constitución inmutable. La IA obedece al libro, asegurando que la lógica de negocio permanezca humana y explícita.
                            </p>
                        </div>
                    </motion.div>

                    {/* Level 2: DirGen */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group"
                    >
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-green-200 transition-colors h-full shadow-sm hover:shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-4 py-2 bg-green-50 text-green-700 text-xs font-bold rounded-bl-xl">NIVEL 2</div>
                            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 border border-green-100 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                <GitPullRequestClosed className="w-8 h-8 text-green-600 group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">DirGen <span className="text-slate-400 font-normal text-lg ml-2">(Directed Generative SE)</span></h3>
                            <h4 className="text-lg font-semibold text-green-600 mb-4">Calidad Industrial</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Gobernanza como Código. Ninguna línea generada por IA llega a producción sin cruzar Quality Gates automatizados y trazabilidad forense.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
