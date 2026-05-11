import {
  Shield,
  CheckCircle2,
  XCircle,
  Briefcase,
  Route,
  CalendarCheck2,
  ArrowRight,
  ClipboardList,
  Gauge,
  Layers,
  Handshake
} from 'lucide-react';
import { motion } from 'motion/react';

const HERO_SECTION_VIDEO =
  'https://videos.pexels.com/video-files/4496268/4496268-hd_1920_1080_25fps.mp4';

export function TecnicoContratacion({ t, onBookDemo }: { t: any, onBookDemo: () => void }) {
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
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.08 }
    }
  };

  const itemReveal = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' }
    }
  };

  const workModel = [
    {
      title: 'Direccion y gobierno',
      desc: 'Definimos prioridades, responsables y criterios de decision con comite ejecutivo.'
    },
    {
      title: 'Roadmap y ejecucion',
      desc: 'Convertimos objetivos en un plan 30-60-90 y bajamos cada iniciativa a acciones concretas.'
    },
    {
      title: 'Adopcion de equipo',
      desc: 'Acompanamos a los lideres de area para asegurar implementacion real, no teoria.'
    },
    {
      title: 'Seguimiento de impacto',
      desc: 'Medimos avance con KPIs de negocio para mantener foco y accountability.'
    }
  ];

  const deliverables = [
    ['Mapa de oportunidades IA', 'Listado priorizado por impacto y viabilidad.'],
    ['Plan 30-60-90', 'Acciones, responsables, hitos y metricas por iniciativa.'],
    ['Ritmo de direccion', 'Cadencia de comite y decisiones de seguimiento.'],
    ['Cuadro de mando ejecutivo', 'KPIs de negocio para evaluar retorno real.']
  ];

  const first90Days = [
    {
      label: 'Semanas 1-2',
      title: 'Diagnostico + foco',
      desc: 'Que esta funcionando, que esta bloqueado y que debe priorizarse ya.'
    },
    {
      label: 'Semanas 3-6',
      title: 'Plan de ejecucion',
      desc: 'Roadmap operativo con responsables, secuencia y objetivos medibles.'
    },
    {
      label: 'Semanas 7-12',
      title: 'Implementacion + metricas',
      desc: 'Ejecucion de iniciativas prioritarias con seguimiento de KPIs.'
    }
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
          poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2200&q=80"
        >
          <source src={HERO_SECTION_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] bg-slate-950/65" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="relative z-10 py-2 pr-4 lg:col-span-8">
            <div className="glass-card mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
              Servicio ejecutivo fractional
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[0.95] text-white mb-6">
              CAIO as a Service
            </h1>
            <p className="text-lg text-slate-100 max-w-4xl">
              Liderazgo de IA para direccion general: definimos prioridades, gobernamos ejecucion y medimos impacto
              sin necesidad de contratar un C-Level interno a tiempo completo.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="glass-card relative z-10 p-8 lg:col-span-4"
          >
            <h2 className="text-xl font-black mb-5">Resumen rapido</h2>
            <div className="space-y-4 text-sm text-slate-100">
              <div className="flex items-start gap-3"><Briefcase className="w-4 h-4 mt-0.5" /> Empresas 50-500 empleados</div>
              <div className="flex items-start gap-3"><Layers className="w-4 h-4 mt-0.5" /> Modelo embedded + fractional</div>
              <div className="flex items-start gap-3"><Gauge className="w-4 h-4 mt-0.5" /> Objetivo: ROI y velocidad de ejecucion</div>
              <div className="flex items-start gap-3"><Handshake className="w-4 h-4 mt-0.5" /> Trabajo junto a CEO/COO y lideres de area</div>
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
        <div className="glass-card mx-auto max-w-7xl p-8">
          <h2 className="text-3xl font-black mb-8">Como operamos dentro de tu empresa</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-4">
            {workModel.map((item, i) => (
              <motion.div
                variants={itemReveal}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                key={i}
                className="glass-card glass-card--sm grid items-start gap-4 p-5 md:grid-cols-12 md:gap-4"
              >
                <div className="md:col-span-3">
                  <p className="text-xs uppercase tracking-[0.14em] font-black text-slate-500 dark:text-slate-400">Bloque {i + 1}</p>
                  <h3 className="text-xl font-black mt-1">{item.title}</h3>
                </div>
                <p className="md:col-span-9 text-slate-600 dark:text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="glass-card p-8">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80" alt="Equipo de direccion IA" className="h-40 w-full object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="text-2xl font-black mb-6">Incluye</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              {['Comite de decision con direccion','Roadmap 30-60-90 con responsables','Acompanamiento de implementacion','KPIs ejecutivos y seguimiento continuo'].map((item, i) => (
                <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-500" /><p>{item}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="glass-card p-8">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80" alt="Riesgos de ejecucion sin estrategia" className="h-40 w-full object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="text-2xl font-black mb-6">No incluye</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              {['Consultoria de slides sin ejecucion','Automatizaciones aisladas sin estrategia','Sustitucion de tu CTO o estructura tecnica interna'].map((item, i) => (
                <div key={i} className="flex items-start gap-3"><XCircle className="w-5 h-5 mt-0.5 text-slate-500" /><p>{item}</p></div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-14 px-4">
        <div className="glass-card mx-auto max-w-7xl p-8">
          <h2 className="text-3xl font-black mb-8">Que recibe direccion cada mes</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-3">
            {deliverables.map(([title, desc], i) => (
              <motion.div variants={itemReveal} key={i} className="glass-card glass-card--sm grid gap-4 p-4 md:grid-cols-12">
                <p className="md:col-span-4 font-bold text-slate-900 dark:text-white">{title}</p>
                <p className="md:col-span-8 text-slate-600 dark:text-slate-300">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="glass-card p-8">
            <h2 className="text-2xl font-black mb-5">Encaja si...</h2>
            <div className="space-y-3">
              {['Eres CEO/COO y necesitas foco en IA con retorno.','Tienes presion competitiva y poco margen para experimentar.','Tu equipo ya empezo con IA, pero falta direccion ejecutiva.'].map((item, i) => (
                <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-500" /><p className="text-slate-700 dark:text-slate-300">{item}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="glass-card p-8">
            <h2 className="text-2xl font-black mb-5">No encaja si...</h2>
            <div className="space-y-3">
              {['Buscas solo un proveedor tecnico por horas.','No hay sponsor directivo para ejecutar decisiones.','No existe voluntad de medir impacto en negocio.'].map((item, i) => (
                <div key={i} className="flex items-start gap-3"><XCircle className="w-5 h-5 mt-0.5 text-slate-500" /><p className="text-slate-700 dark:text-slate-300">{item}</p></div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-14 px-4">
        <div className="glass-card mx-auto max-w-7xl p-8">
          <h2 className="text-3xl font-black mb-8">Que pasa en 90 dias</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
            {first90Days.map((step, i) => (
              <motion.div variants={itemReveal} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} key={i} className="glass-card glass-card--sm p-5">
                <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-3">
                  {i === 0 && <ClipboardList className="w-5 h-5 text-slate-700 dark:text-slate-300" />}
                  {i === 1 && <Route className="w-5 h-5 text-slate-700 dark:text-slate-300" />}
                  {i === 2 && <CalendarCheck2 className="w-5 h-5 text-slate-700 dark:text-slate-300" />}
                </div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 mb-2">{step.label}</p>
                <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 px-4">
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="glass-card mx-auto max-w-5xl p-10">
          <div className="w-20 h-20 bg-slate-500/10 dark:bg-slate-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-slate-600 dark:text-slate-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-5 leading-[0.95]">
            Quieres validar si encaja en tu empresa?
          </h2>
          <p className="text-center text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            En una sesion ejecutiva revisamos situacion actual, prioridades y plan inicial para empezar con foco.
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              onClick={onBookDemo}
              className="px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2"
            >
              Reservar diagnostico
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
