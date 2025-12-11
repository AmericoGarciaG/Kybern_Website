"use client";

import { motion } from "framer-motion";

export function ManifestoSection() {
    return (
        <section id="manifesto" className="py-32 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
                        El Futuro es Dirigido
                    </h2>
                    <p className="text-lg md:text-2xl font-light leading-relaxed text-slate-300 font-serif italic">
                        &quot;Estamos presenciando el fin de la era del programador como &apos;mecanógrafo de código&apos; y el nacimiento del Ingeniero como Director de Sistemas. En Kybern, no somos aceleracionistas ciegos ni luditas temerosos. Somos ingenieros. Creemos que el futuro pertenece a quien gobierne mejor su lógica. Bienvenido a la Era de la Arquitectura de Precisión.&quot;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
