"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Factory, Cpu, Network, Database } from "lucide-react";

const solutions = [
    {
        phase: "Fase 1",
        title: "Talento y Adopción",
        subtitle: "Ingeniería Cognitiva",
        description: "Instale un nuevo sistema operativo mental. Elevamos a sus equipos de usuarios pasivos a Arquitectos de Sistemas capaces de definir y gobernar la IA, eliminando el miedo operativo.",
        icon: Brain,
        color: "bg-blue-100 text-blue-600",
    },
    {
        phase: "Fase 2",
        title: "Fábrica de Software",
        subtitle: "Desarrollo DBBD + DirGen",
        description: "Transforme su área de TI de taller artesanal a línea de montaje de alta precisión.",
        icon: Factory,
        color: "bg-green-100 text-green-600",
    },
    {
        phase: "Fase 3",
        title: "Soluciones de IA Corporativa",
        subtitle: "Activos que no improvisan",
        description: "Implemente sistemas que obedecen. Desde asistentes con Tasa de Alucinación Cero (RAG Determinista) hasta agentes autónomos que ejecutan procesos complejos bajo reglas de negocio estrictas.",
        icon: Cpu,
        color: "bg-purple-100 text-purple-600",
    },
    {
        phase: "Fase 4 y 5",
        title: "Cimientos",
        subtitle: "Infraestructura y Estrategia",
        description: "Arquitectura de Datos Cognitiva y Auditoría de Madurez Logic-First.",
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
                        Ecosistema de Soluciones
                    </h2>
                    <p className="text-xl text-slate-600">De la experimentación a la industrialización.</p>
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
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
