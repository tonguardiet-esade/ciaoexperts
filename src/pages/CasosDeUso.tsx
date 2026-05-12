import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, TrendingUp, Clock3, BarChart3, CheckCircle2, Target } from 'lucide-react';
import { sectionEnter } from '../lib/sectionEnter';
import { getMarketingSiteCopy } from '../i18n/marketingSitePages';

interface CasosDeUsoProps {
  lang: string;
  onContact: () => void;
}

const HERO_SECTION_VIDEO =
  'https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4';

export const CasosDeUso: React.FC<CasosDeUsoProps> = ({ lang, onContact }) => {
  const reduce = !!useReducedMotion();
  const r = getMarketingSiteCopy(lang).resultados;

  const listStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: reduce ? 0 : 0.08 } }
  };

  const itemReveal = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.45, ease: 'easeOut' }
    }
  };

  const caseImages = ['/images/Portada2.webp', '/images/Portada3.webp', '/images/Portada4.jpg'];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-20">
      <motion.section
        {...sectionEnter(reduce, 'b', 0, 0.25)}
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
          <motion.div className="relative z-10 py-2 pr-4 lg:col-span-8" {...sectionEnter(reduce, 'l', 0.06, 0.22)}>
            <div className="glass-card mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-slate-900 dark:text-white">
              {r.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[0.95] text-white mb-6">
              {r.heroTitle1}
              <span className="block">{r.heroTitle2}</span>
            </h1>
            <p className="text-lg text-slate-100 max-w-4xl">
              {r.heroLead}
            </p>
          </motion.div>
          <motion.div
            {...sectionEnter(reduce, 'r', 0.12, 0.35)}
            className="glass-card relative z-10 p-8 lg:col-span-4"
          >
            <h2 className="mb-5 text-xl font-black text-slate-900 dark:text-white">{r.measureTitle}</h2>
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-100">
              <div className="flex items-start gap-3"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-slate-600 dark:text-white/90" /> {r.measureBullets[0]}</div>
              <div className="flex items-start gap-3"><BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-slate-600 dark:text-white/90" /> {r.measureBullets[1]}</div>
              <div className="flex items-start gap-3"><TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-slate-600 dark:text-white/90" /> {r.measureBullets[2]}</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section {...sectionEnter(reduce, 'tr', 0, 0.2)} className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="mb-3 text-3xl font-black text-slate-900 dark:text-white">{r.examplesTitle}</h2>
            <p className="text-slate-600 dark:text-slate-300">{r.examplesSubtitle}</p>
          </div>
          <h2 className="mb-8 text-3xl font-black text-slate-900 dark:text-white">{r.casesTitle}</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-5">
            {r.caseTypes.map((item, i) => (
              <motion.div
                variants={itemReveal}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                key={i}
                className="glass-card grid gap-5 p-6 md:grid-cols-12"
              >
                <div className="md:col-span-3">
                  <div className="mb-3 rounded-md overflow-hidden border border-slate-300 dark:border-slate-700">
                    <img src={caseImages[i]} alt={item.title} className="w-full h-28 object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.14em] font-black text-slate-500 dark:text-slate-400 mb-2">
                    {r.casePrefix} {i + 1}
                  </p>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">{item.title}</h3>
                </div>
                <div className="md:col-span-9 grid md:grid-cols-3 gap-4">
                  <div><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">{r.labels.antes}</p><p className="text-slate-600 dark:text-slate-300 text-sm">{item.before}</p></div>
                  <div><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">{r.labels.intervencion}</p><p className="text-slate-600 dark:text-slate-300 text-sm">{item.intervention}</p></div>
                  <div><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">{r.labels.impacto}</p><p className="text-slate-700 dark:text-slate-200 text-sm font-semibold">{item.impact}</p></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section {...sectionEnter(reduce, 'bl', 0, 0.18)} className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div
            {...sectionEnter(reduce, 'l', 0.05)}
            whileHover={{ y: -5, transition: { type: 'spring', stiffness: 250, damping: 20 } }}
            className="glass-card p-8"
          >
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80" alt="Metricas y performance" className="h-40 w-full object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="mb-5 text-2xl font-black text-slate-900 dark:text-white">{r.metricsTitle}</h2>
            <div className="space-y-3">
              {r.kpis.map((item, i) => (
                <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-500" /><p className="text-slate-700 dark:text-slate-300">{item}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...sectionEnter(reduce, 'r', 0.08)}
            whileHover={{ y: -5, transition: { type: 'spring', stiffness: 250, damping: 20 } }}
            className="glass-card p-8"
          >
            <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1400&q=80" alt="Decision ejecutiva basada en datos" className="h-40 w-full object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="mb-5 text-2xl font-black text-slate-900 dark:text-white">{r.antesVsTitle}</h2>
            <div className="space-y-5">
              <div className="glass-card glass-card--sm p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">{r.antesVsAntes}</p>
                <p className="text-slate-600 dark:text-slate-300">{r.antesVsAntesBody}</p>
              </div>
              <div className="glass-card glass-card--sm p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 mb-2">{r.antesVsDespues}</p>
                <p className="text-slate-700 dark:text-slate-200 font-semibold">{r.antesVsDespuesBody}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section {...sectionEnter(reduce, 'scale', 0, 0.22)} className="py-20 px-4">
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="glass-card mx-auto max-w-5xl p-10">
          <div className="w-20 h-20 bg-slate-500/10 dark:bg-slate-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-slate-600 dark:text-slate-300" />
          </div>
          <h2 className="mb-5 text-center text-4xl font-black leading-[0.95] text-slate-900 dark:text-white md:text-5xl">
            {r.footerTitle}
          </h2>
          <p className="text-center text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            {r.footerBody}
          </p>
          <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8">
            {r.footerNote}
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              onClick={onContact}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              {r.ctaButton}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};
