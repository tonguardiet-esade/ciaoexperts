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
        className="py-14 px-4 relative overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2200&q=80"
          alt="Infraestructura de IA"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 py-2 pr-4 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-md bg-white/85 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 text-xs font-black uppercase tracking-[0.14em] text-black dark:text-white mb-4">
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
            className="lg:col-span-4 relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8"
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
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#f0f9ff] to-[#ecfeff] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-8">
          <h2 className="text-3xl font-black mb-8">Como operamos dentro de tu empresa</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-4">
            {workModel.map((item, i) => (
              <motion.div
                variants={itemReveal}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                key={i}
                className="grid md:grid-cols-12 gap-4 items-start p-5 bg-gradient-to-r from-white/90 to-slate-100/80 dark:from-slate-800/60 dark:to-slate-700/50 border border-slate-300 dark:border-slate-700 rounded-lg"
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
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="bg-gradient-to-br from-[#ecfdf5] to-[#f0fdf4] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-8">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80" alt="Equipo de direccion IA" className="h-40 w-full object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="text-2xl font-black mb-6">Incluye</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              {['Comite de decision con direccion','Roadmap 30-60-90 con responsables','Acompanamiento de implementacion','KPIs ejecutivos y seguimiento continuo'].map((item, i) => (
                <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-500" /><p>{item}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="bg-gradient-to-br from-[#fff7ed] to-[#fffbeb] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-8">
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
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#eff6ff] to-[#f8fafc] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-8">
          <h2 className="text-3xl font-black mb-8">Que recibe direccion cada mes</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-3">
            {deliverables.map(([title, desc], i) => (
              <motion.div variants={itemReveal} key={i} className="grid md:grid-cols-12 gap-4 p-4 border border-slate-300 dark:border-slate-700 rounded-lg bg-gradient-to-r from-white/95 to-slate-100/80 dark:from-slate-800/60 dark:to-slate-700/50">
                <p className="md:col-span-4 font-bold text-slate-900 dark:text-white">{title}</p>
                <p className="md:col-span-8 text-slate-600 dark:text-slate-300">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="bg-gradient-to-br from-[#f5f3ff] to-[#f8fafc] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-black mb-5">Encaja si...</h2>
            <div className="space-y-3">
              {['Eres CEO/COO y necesitas foco en IA con retorno.','Tienes presion competitiva y poco margen para experimentar.','Tu equipo ya empezo con IA, pero falta direccion ejecutiva.'].map((item, i) => (
                <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-500" /><p className="text-slate-700 dark:text-slate-300">{item}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="bg-gradient-to-br from-[#fef2f2] to-[#fff7ed] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-8">
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
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#eef2ff] to-[#f0f9ff] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-8">
          <h2 className="text-3xl font-black mb-8">Que pasa en 90 dias</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
            {first90Days.map((step, i) => (
              <motion.div variants={itemReveal} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} key={i} className="p-5 border border-slate-300 dark:border-slate-700 rounded-lg bg-gradient-to-r from-white/95 to-slate-100/80 dark:from-slate-800/60 dark:to-slate-700/50">
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
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="max-w-5xl mx-auto bg-gradient-to-br from-[#ede9fe] to-[#e0f2fe] dark:from-slate-900/70 dark:to-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-xl p-10">
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
