import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Clock3, BarChart3, CheckCircle2, Target } from 'lucide-react';

interface CasosDeUsoProps {
  t: any;
  onContact: () => void;
}

export const CasosDeUso: React.FC<CasosDeUsoProps> = ({ onContact }) => {
  const caseTypes = [
    {
      image: '/images/Portada2.webp',
      title: 'Caso tipo: Operaciones',
      before: 'Procesos lentos, decisiones reactivas y baja estandarizacion.',
      intervention: 'Priorizacion de fricciones criticas + plan de automatizacion guiada.',
      impact: 'Reduccion orientativa del 20%-35% en tiempos operativos.'
    },
    {
      image: '/images/Portada3.webp',
      title: 'Caso tipo: Comercial y growth',
      before: 'Equipos con baja velocidad de ejecucion y propuestas inconsistentes.',
      intervention: 'Sistema de apoyo IA + protocolos de ejecucion comercial.',
      impact: 'Mejora orientativa del 10%-20% en productividad del equipo.'
    },
    {
      image: '/images/Portada4.jpg',
      title: 'Caso tipo: Direccion general',
      before: 'Iniciativas IA dispersas sin dueno ni criterios de retorno.',
      intervention: 'Gobierno ejecutivo IA + roadmap de impacto por areas.',
      impact: 'Mas foco estrategico y mejor conversion de ideas en resultados.'
    }
  ];

  const kpis = [
    'Tiempo de ciclo operativo antes vs despues',
    'Iniciativas IA lanzadas y adoptadas',
    'Ahorro de costes por proceso priorizado',
    'Incremento de productividad por equipo',
    'Velocidad de decision ejecutiva'
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-20">
      <section className="py-14 px-4 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=80"
          alt="Analitica y paneles de impacto"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 py-2 pr-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-md bg-white/85 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 text-xs font-black uppercase tracking-[0.14em] text-black dark:text-white mb-4">
              Resultados
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[0.95] text-white mb-6">
              Impacto en negocio,
              <span className="block">no solo actividad en IA.</span>
            </h1>
            <p className="text-lg text-slate-100 max-w-4xl">
              Mostramos que cambia cuando hay liderazgo de IA con foco ejecutivo: mas velocidad, menos desperdicio y mejores decisiones.
            </p>
          </div>
          <div className="lg:col-span-4 relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
            <h2 className="text-xl font-black mb-5">Que medimos</h2>
            <div className="space-y-4 text-sm text-slate-100">
              <div className="flex items-start gap-3"><Clock3 className="w-4 h-4 mt-0.5" /> Tiempo y velocidad operativa</div>
              <div className="flex items-start gap-3"><BarChart3 className="w-4 h-4 mt-0.5" /> KPIs de impacto por area</div>
              <div className="flex items-start gap-3"><TrendingUp className="w-4 h-4 mt-0.5" /> Productividad y retorno</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-black mb-3">Ejemplos de impacto</h2>
            <p className="text-slate-600 dark:text-slate-300">Casos tipo orientativos para visualizar que cambia en negocio cuando hay liderazgo de IA.</p>
          </div>
          <h2 className="text-3xl font-black mb-8">Casos tipo de transformacion</h2>
          <div className="space-y-5">
            {caseTypes.map((item, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-5 p-6 border border-slate-300 dark:border-slate-700 rounded-lg bg-gradient-to-r from-white/95 to-slate-100/80 dark:from-slate-800/60 dark:to-slate-700/50">
                <div className="md:col-span-3">
                  <div className="mb-3 rounded-md overflow-hidden border border-slate-300 dark:border-slate-700">
                    <img src={item.image} alt={item.title} className="w-full h-28 object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.14em] font-black text-slate-500 dark:text-slate-400 mb-2">Caso {i + 1}</p>
                  <h3 className="text-xl font-black">{item.title}</h3>
                </div>
                <div className="md:col-span-9 grid md:grid-cols-3 gap-4">
                  <div><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">Antes</p><p className="text-slate-600 dark:text-slate-300 text-sm">{item.before}</p></div>
                  <div><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">Intervencion</p><p className="text-slate-600 dark:text-slate-300 text-sm">{item.intervention}</p></div>
                  <div><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">Impacto</p><p className="text-slate-700 dark:text-slate-200 text-sm font-semibold">{item.impact}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#ecfdf5] to-[#f0fdf4] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-8">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80" alt="Metricas y performance" className="h-40 w-full object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="text-2xl font-black mb-5">Metricas orientativas</h2>
            <div className="space-y-3">
              {kpis.map((item, i) => (
                <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-500" /><p className="text-slate-700 dark:text-slate-300">{item}</p></div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#fff7ed] to-[#fffbeb] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-8">
            <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1400&q=80" alt="Decision ejecutiva basada en datos" className="h-40 w-full object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="text-2xl font-black mb-5">Antes vs Despues</h2>
            <div className="space-y-5">
              <div className="p-4 border border-slate-300 dark:border-slate-700 rounded-lg bg-white/80 dark:bg-slate-800/50">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">Antes</p>
                <p className="text-slate-600 dark:text-slate-300">Pruebas aisladas, foco difuso, decisiones lentas y resultados poco medibles.</p>
              </div>
              <div className="p-4 border border-slate-300 dark:border-slate-700 rounded-lg bg-white/80 dark:bg-slate-800/50">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">Despues</p>
                <p className="text-slate-700 dark:text-slate-200 font-semibold">Plan claro, ejecucion coordinada y KPIs activos para escalar lo que funciona.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#ede9fe] to-[#e0f2fe] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-10">
          <div className="w-20 h-20 bg-slate-500/10 dark:bg-slate-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-slate-600 dark:text-slate-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-5 leading-[0.95]">
            Si quieres este tipo de resultados, empecemos por prioridades claras.
          </h2>
          <p className="text-center text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Reserva un diagnostico ejecutivo y definimos que iniciativas deben arrancar primero para maximizar impacto.
          </p>
          <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8">
            Objetivo de esta pagina: demostrar que este modelo funciona con resultados medibles.
          </p>
          <div className="flex justify-center">
            <button onClick={onContact} className="px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
              Agendar diagnostico
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
