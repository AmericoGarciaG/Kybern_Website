"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Factory, Cpu, Network, Database } from "lucide-react";

const solutions = [
    {
        phase: "Fase 1",
        title: "Automatización Inteligente (IPA)",
        subtitle: "Ingeniería Cognitiva",
        description: "Modernización de operaciones mediante Agentes Autónomos. Automatizamos conciliación financiera, facturación y flujos administrativos complejos.",
        icon: Brain,
        color: "bg-blue-100 text-blue-600",
        link: "/ingenieria-cognitiva"
    },
    {
        phase: "Fase 2",
        title: "Sistemas Transaccionales y Predictivos",
        subtitle: "Desarrollo DBBD + DirGen",
        description: "Arquitecturas de microservicios y High-Frequency Processing. Modelos de predicción de demanda y detección de fraude en tiempo real.",
        icon: Factory,
        color: "bg-green-100 text-green-600",
    },
    {
        phase: "Fase 3",
        title: "Gestión del Conocimiento (RAG)",
        subtitle: "Activos que no improvisan",
        description: "Asistentes corporativos con Tasa de Alucinación Cero. Consultas sobre manuales técnicos y legales con total certeza de la fuente.",
        icon: Cpu,
        color: "bg-purple-100 text-purple-600",
    },
    {
        phase: "Fase 4 y 5",
        title: "Ingeniería Cognitiva (Formación)",
        subtitle: "Infraestructura y Estrategia",
        description: "Transformamos a sus equipos técnicos y de negocio de usuarios pasivos a arquitectos capaces de gobernar sistemas de IA.",
        icon: Database,
        color: "bg-orange-100 text-orange-600",
    },
];

export function SolutionsSection() {
    return (
        <section id="solutions" className="py-24 bg-slate-50">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Capacidades y Servicios
                    </h2>
                    <p className="text-xl text-slate-600">Soluciones diseñadas para integrarse en su infraestructura.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Conditional Rendering for Link */}
                                {item.link ? (
                                    <a href={item.link} className="block h-full">
                                        <Card className="h-full border-slate-200 hover:border-green-400 hover:shadow-lg transition-all group cursor-pointer relative top-0 hover:-top-1">
                                            <CardHeader>
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <div className="text-sm font-semibold text-slate-400 mb-1 tracking-wider uppercase">{item.phase}</div>
                                                <CardTitle className="text-xl text-slate-900 group-hover:text-green-600 transition-colors flex items-center gap-2">
                                                    {item.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <h4 className="font-semibold text-slate-700 mb-2">{item.subtitle}</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <p className="mt-4 text-xs font-bold text-green-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                                    Ver Tracks y Temario →
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </a>
                                ) : (
                                    <Card className="h-full border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group">
                                        <CardHeader>
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-sm font-semibold text-slate-400 mb-1 tracking-wider uppercase">{item.phase}</div>
                                            <CardTitle className="text-xl text-slate-900 group-hover:text-green-600 transition-colors">{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <h4 className="font-semibold text-slate-700 mb-2">{item.subtitle}</h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
