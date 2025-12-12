"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
    const [formState, setFormState] = useState({
        name: "",
        company: "",
        email: "",
        challenge: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log("Form submitted:", formState);
        alert("Gracias por su interés. Un Arquitecto Lógico se pondrá en contacto pronto.");
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container px-6 mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Recupere el Control de su Futuro Tecnológico
                    </h2>
                    <p className="text-lg text-slate-600">
                        Hable con un Arquitecto Logic-First y descubra cómo escalar con verdadera gobernanza.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-slate-900 font-medium">Nombre Completo</Label>
                                <Input
                                    id="name"
                                    placeholder="Ej. Jason Galaviz"
                                    className="bg-white"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-slate-900 font-medium">Empresa</Label>
                                <Input
                                    id="company"
                                    placeholder="Ej. Tech Corp"
                                    className="bg-white"
                                    value={formState.company}
                                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-900 font-medium">Correo Electrónico</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="json@empresa.com"
                                className="bg-white"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="challenge" className="text-slate-900 font-medium">Desafío Principal</Label>
                            <Select onValueChange={(value) => setFormState({ ...formState, challenge: value })}>
                                <SelectTrigger className="bg-white">
                                    <SelectValue placeholder="Seleccione un desafío" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="technical-debt">Deuda Técnica</SelectItem>
                                    <SelectItem value="ai-trust">Desconfianza en IA</SelectItem>
                                    <SelectItem value="scaling">Escalar Desarrollo</SelectItem>
                                    <SelectItem value="optimization">Optimización de Procesos</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-slate-900 font-medium">Mensaje (Opcional)</Label>
                            <Textarea
                                id="message"
                                placeholder="Cuéntenos más sobre su situación..."
                                className="bg-white min-h-[100px]"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>

                        <Button type="submit" variant="kybernAccent" className="w-full text-base py-6">
                            Hable con un Arquitecto Logic-First
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
