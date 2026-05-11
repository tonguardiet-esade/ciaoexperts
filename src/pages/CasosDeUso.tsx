import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Clock3, BarChart3, CheckCircle2, Target } from 'lucide-react';

interface CasosDeUsoProps {
  t: any;
  onContact: () => void;
}

const HERO_SECTION_VIDEO =
  'https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4';

export const CasosDeUso: React.FC<CasosDeUsoProps> = ({ onContact }) => {
  const sectionReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: 'easeOut' }
    }
  };

  const listStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } }
  };

  const itemReveal = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' }
    }
  };

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
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative overflow-hidden px-4 py-14"
      >
        <video
          className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=80"
        >
          <source src={HERO_SECTION_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] bg-slate-950/65" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="relative z-10 py-2 pr-4 lg:col-span-8">
            <div className="glass-card mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
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
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="glass-card relative z-10 p-8 lg:col-span-4"
          >
            <h2 className="text-xl font-black mb-5">Que medimos</h2>
            <div className="space-y-4 text-sm text-slate-100">
              <div className="flex items-start gap-3"><Clock3 className="w-4 h-4 mt-0.5" /> Tiempo y velocidad operativa</div>
              <div className="flex items-start gap-3"><BarChart3 className="w-4 h-4 mt-0.5" /> KPIs de impacto por area</div>
              <div className="flex items-start gap-3"><TrendingUp className="w-4 h-4 mt-0.5" /> Productividad y retorno</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-14 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-black mb-3">Ejemplos de impacto</h2>
            <p className="text-slate-600 dark:text-slate-300">Casos tipo orientativos para visualizar que cambia en negocio cuando hay liderazgo de IA.</p>
          </div>
          <h2 className="text-3xl font-black mb-8">Casos tipo de transformacion</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-5">
            {caseTypes.map((item, i) => (
              <motion.div
                variants={itemReveal}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                key={i}
                className="glass-card grid gap-5 p-6 md:grid-cols-12"
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="glass-card p-8">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80" alt="Metricas y performance" className="h-40 w-full object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="text-2xl font-black mb-5">Metricas orientativas</h2>
            <div className="space-y-3">
              {kpis.map((item, i) => (
                <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-500" /><p className="text-slate-700 dark:text-slate-300">{item}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="glass-card p-8">
            <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1400&q=80" alt="Decision ejecutiva basada en datos" className="h-40 w-full object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="text-2xl font-black mb-5">Antes vs Despues</h2>
            <div className="space-y-5">
              <div className="glass-card glass-card--sm p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">Antes</p>
                <p className="text-slate-600 dark:text-slate-300">Pruebas aisladas, foco difuso, decisiones lentas y resultados poco medibles.</p>
              </div>
              <div className="glass-card glass-card--sm p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">Despues</p>
                <p className="text-slate-700 dark:text-slate-200 font-semibold">Plan claro, ejecucion coordinada y KPIs activos para escalar lo que funciona.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 px-4">
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="glass-card mx-auto max-w-5xl p-10">
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
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              onClick={onContact}
              className="px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2"
            >
              Agendar diagnostico
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};
