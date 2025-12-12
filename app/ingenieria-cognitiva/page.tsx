"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ShieldCheck, FileCode2, Sparkles, Scale, ArrowRight, Lightbulb, Users, Network } from "lucide-react";

export default function IngenieriaCognitivaPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                
                <div className="container relative z-10 px-6 mx-auto text-center flex flex-col items-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="kybern" className="mb-8 px-4 py-1 text-sm tracking-wide uppercase">
                            Metodología Adaptativa Kybern
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
                    >
                        Ingeniería Cognitiva: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-green-600">
                            Reconfiguración Mental
                        </span> para la Era GenAI
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed"
                    >
                        No es un curso de Prompt Engineering. Es una actualización del sistema operativo mental de sus equipos. Transformamos la intuición humana en directrices de sistema precisas.
                    </motion.p>
                </div>
            </section>

            {/* TRACKS SECTION */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Los 3 Tracks de Especialización</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Track A */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="h-full"
                        >
                            <Card className="h-full border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group overflow-hidden relative">
                                <div className="absolute top-0 w-full h-1 bg-blue-500" />
                                <CardHeader className="text-center pt-10">
                                    <div className="mx-auto w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                                        <Sparkles className="w-8 h-8 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 mx-auto w-fit">Track A</Badge>
                                    <CardTitle className="text-2xl text-slate-900">Exploradores Intuitivos</CardTitle>
                                    <p className="text-sm font-medium text-slate-500 mt-2">Creativos & Marketing</p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="bg-slate-50 p-4 rounded-lg">
                                        <p className="text-sm text-slate-600 italic">
                                            &quot;La IA me da resultados genéricos, robóticos y sin alma.&quot;
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                            Enfoque Kybern:
                                        </h4>
                                        <p className="text-slate-700 font-semibold mb-1">Domar el Caos.</p>
                                        <p className="text-slate-600 text-sm">Control de temperatura y estilo. De la respuesta promedio a la firma de autor única.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Track B */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full border-slate-200 hover:border-purple-200 hover:shadow-lg transition-all group overflow-hidden relative">
                                <div className="absolute top-0 w-full h-1 bg-purple-500" />
                                <CardHeader className="text-center pt-10">
                                    <div className="mx-auto w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                                        <Scale className="w-8 h-8 text-purple-600 group-hover:text-white" />
                                    </div>
                                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4 mx-auto w-fit">Track B</Badge>
                                    <CardTitle className="text-2xl text-slate-900">Traductores Sistémicos</CardTitle>
                                    <p className="text-sm font-medium text-slate-500 mt-2">Líderes & Estrategas</p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="bg-slate-50 p-4 rounded-lg">
                                        <p className="text-sm text-slate-600 italic">
                                            &quot;No confío en la IA; inventa datos y es un riesgo operativo.&quot;
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                            Enfoque Kybern:
                                        </h4>
                                        <p className="text-slate-700 font-semibold mb-1">Validar la Verdad.</p>
                                        <p className="text-slate-600 text-sm">Grounding y Alfabetización Crítica. Uso de la IA como sparring intelectual, eliminando alucinaciones.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Track C */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-full"
                        >
                            <Card className="h-full border-slate-200 hover:border-green-200 hover:shadow-lg transition-all group overflow-hidden relative">
                                <div className="absolute top-0 w-full h-1 bg-green-500" />
                                <CardHeader className="text-center pt-10">
                                    <div className="mx-auto w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                                        <FileCode2 className="w-8 h-8 text-green-600 group-hover:text-white" />
                                    </div>
                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4 mx-auto w-fit">Track C</Badge>
                                    <CardTitle className="text-2xl text-slate-900">Arquitectos Lógicos</CardTitle>
                                    <p className="text-sm font-medium text-slate-500 mt-2">Ingenieros & Data Scientists</p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="bg-slate-50 p-4 rounded-lg">
                                        <p className="text-sm text-slate-600 italic">
                                            &quot;La IA es una caja negra impredecible.&quot;
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                                            Enfoque Kybern:
                                        </h4>
                                        <p className="text-slate-700 font-semibold mb-1">Ingeniería Determinista.</p>
                                        <p className="text-slate-600 text-sm">Metodología DBBD pura. Inyección de estado y colapso de entropía para obtener código funcional y seguro.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* LEVELS SECTION */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 opacity-50" />
                
                <div className="container relative z-10 px-6 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Niveles Evolutivos</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">No buscamos usuarios que "chateen" con la IA. Formamos operadores que orquestan sistemas.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-800 before:-translate-x-1/2">
                        
                        {/* Level 1 */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative md:flex items-center justify-between group"
                        >
                            <div className="hidden md:block w-[45%] text-right pr-12">
                                <h3 className="text-2xl font-bold text-green-400">Nivel 1: La Génesis</h3>
                                <p className="text-slate-400 mt-2">Del uso pasivo al activo. Romper la inercia del "no sé qué preguntar" y establecer la primera relación productiva con el modelo.</p>
                            </div>
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-slate-900 border-4 border-green-500 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                                <Lightbulb className="w-4 h-4 text-green-500" />
                            </div>
                            <div className="ml-12 md:ml-0 md:w-[45%] md:pl-12">
                                <div className="md:hidden mb-2">
                                    <h3 className="text-xl font-bold text-green-400">Nivel 1: La Génesis</h3>
                                </div>
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <p className="text-sm text-slate-300 md:hidden">Del uso pasivo al activo. Romper la inercia del "no sé qué preguntar".</p>
                                    <ul className="text-sm text-slate-400 space-y-2 mt-2 md:mt-0">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" />Superar el "Blank Page Syndrome"</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" />Prompting Básico Estructurado</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Level 2 */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative md:flex items-center justify-between group"
                        >
                            <div className="order-2 md:order-1 ml-12 md:ml-0 md:w-[45%] md:pr-12">
                                <div className="md:hidden mb-2">
                                    <h3 className="text-xl font-bold text-blue-400">Nivel 2: El Diálogo Maestro</h3>
                                </div>
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 text-right md:text-left">
                                     <p className="text-sm text-slate-300 md:hidden text-left">Ingeniería de Contexto. Aprender a alimentar al modelo para obtener resultados específicos.</p>
                                     <ul className="text-sm text-slate-400 space-y-2 mt-2 md:mt-0 inline-block text-left">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Few-Shot Prompting</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Chain of Thought (CoT)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-slate-900 border-4 border-blue-500 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                <Users className="w-4 h-4 text-blue-500" />
                            </div>
                            <div className="order-1 md:order-2 hidden md:block w-[45%] pl-12">
                                <h3 className="text-2xl font-bold text-blue-400">Nivel 2: El Diálogo Maestro</h3>
                                <p className="text-slate-400 mt-2">Ingeniería de Contexto. No basta con preguntar; hay que saber guiar. Dominio del contexto y curación de inputs para maximizar la calidad del output.</p>
                            </div>
                        </motion.div>

                        {/* Level 3 */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative md:flex items-center justify-between group"
                        >
                            <div className="hidden md:block w-[45%] text-right pr-12">
                                <h3 className="text-2xl font-bold text-purple-400">Nivel 3: El Arquitecto</h3>
                                <p className="text-slate-400 mt-2">Orquestación de Sistemas. La IA deja de ser un chat y se convierte en un componente de software integrado en flujos de trabajo complejos.</p>
                            </div>
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-slate-900 border-4 border-purple-500 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                <Network className="w-4 h-4 text-purple-500" />
                            </div>
                            <div className="ml-12 md:ml-0 md:w-[45%] md:pl-12">
                                <div className="md:hidden mb-2">
                                    <h3 className="text-xl font-bold text-purple-400">Nivel 3: El Arquitecto</h3>
                                </div>
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                    <p className="text-sm text-slate-300 md:hidden">Orquestación de Sistemas integrados en flujos de trabajo complejos.</p>
                                    <ul className="text-sm text-slate-400 space-y-2 mt-2 md:mt-0">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />Diseño de Agentes Autónomos</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />Evaluación y Gobernanza (RAGs)</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

             {/* CTA SECTION */}
             <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Del Azar a la Ciencia</h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Deje de jugar a la lotería con sus prompts. Implemente una metodología replicable.
                        </p>
                        <Button variant="kybernPrimary" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto" asChild>
                            <a href="/#contact">
                                Agendar Diagnóstico de Perfiles
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
