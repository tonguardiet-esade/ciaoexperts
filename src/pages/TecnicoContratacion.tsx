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
import { motion, useReducedMotion } from 'motion/react';
import { getMarketingSiteCopy } from '../i18n/marketingSitePages';

const HERO_SECTION_VIDEO =
  'https://videos.pexels.com/video-files/4496268/4496268-hd_1920_1080_25fps.mp4';

export function TecnicoContratacion({ lang, onBookDemo }: { lang: string; onBookDemo: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const reduce = !!prefersReducedMotion;
  const c = getMarketingSiteCopy(lang).caio;

  const sectionReveal = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.65, ease: 'easeOut' }
    }
  };

  const listStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.08
      }
    }
  };

  const itemReveal = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0 : 0.45, ease: 'easeOut' }
    }
  };

  const heroStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.11,
        delayChildren: reduce ? 0 : 0.05
      }
    }
  };

  const heroItem = {
    hidden: reduce ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 18, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const cardLift = reduce
    ? {}
    : { y: -5, scale: 1.01, transition: { type: 'spring' as const, stiffness: 260, damping: 22 } };

  const rowIconHover = reduce
    ? {}
    : { scale: 1.12, rotate: -4, transition: { type: 'spring' as const, stiffness: 400, damping: 18 } };

  const pageEnter = reduce
    ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
    : { opacity: 0, y: 36, scale: 0.982, filter: 'blur(10px)' };

  return (
    <motion.div
      initial={pageEnter}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{
        duration: reduce ? 0 : 0.78,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: reduce ? 0 : 0.55 },
        filter: { duration: reduce ? 0 : 0.52 }
      }}
      exit={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, y: -16, scale: 0.99, filter: 'blur(6px)', transition: { duration: 0.28, ease: 'easeIn' } }
      }
      className="min-h-screen origin-top pt-20"
    >
      <motion.section
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: reduce ? 0 : 0.75, ease: 'easeOut' }}
        className="relative overflow-hidden px-4 py-14"
      >
        <motion.video
          className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full object-cover"
          initial={reduce ? false : { scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduce ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2200&q=80"
        >
          <source src={HERO_SECTION_VIDEO} type="video/mp4" />
        </motion.video>
        <motion.div
          className="absolute inset-0 z-[1] bg-slate-950/65"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.55, ease: 'easeOut' }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <motion.div
            className="relative z-10 py-2 pr-4 lg:col-span-8"
            variants={heroStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.div variants={heroItem} className="glass-card mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-slate-900 dark:text-white">
              {c.badge}
            </motion.div>
            <motion.h1 variants={heroItem} className="text-4xl md:text-6xl font-black leading-[0.95] text-white mb-6">
              {c.title}
            </motion.h1>
            <motion.p variants={heroItem} className="text-lg text-slate-100 max-w-4xl">
              {c.heroLead}
            </motion.p>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduce ? 0 : 0.65, ease: 'easeOut', delay: reduce ? 0 : 0.15 }}
            whileHover={reduce ? undefined : { y: -3, transition: { type: 'spring', stiffness: 280, damping: 24 } }}
            className="glass-card relative z-10 p-8 lg:col-span-4"
          >
            <h2 className="mb-5 text-xl font-black text-slate-900 dark:text-white">{c.resumenTitle}</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="space-y-4 text-sm text-slate-700 dark:text-slate-100">
              <motion.div variants={itemReveal} className="flex items-start gap-3">
                <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-600 dark:text-white/90" whileHover={rowIconHover}><Briefcase className="w-4 h-4" /></motion.span>
                {c.resumenBullets[0]}
              </motion.div>
              <motion.div variants={itemReveal} className="flex items-start gap-3">
                <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-600 dark:text-white/90" whileHover={rowIconHover}><Layers className="w-4 h-4" /></motion.span>
                {c.resumenBullets[1]}
              </motion.div>
              <motion.div variants={itemReveal} className="flex items-start gap-3">
                <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-600 dark:text-white/90" whileHover={rowIconHover}><Gauge className="w-4 h-4" /></motion.span>
                {c.resumenBullets[2]}
              </motion.div>
              <motion.div variants={itemReveal} className="flex items-start gap-3">
                <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-600 dark:text-white/90" whileHover={rowIconHover}><Handshake className="w-4 h-4" /></motion.span>
                {c.resumenBullets[3]}
              </motion.div>
            </motion.div>
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
          <motion.h2
            className="mb-8 text-3xl font-black text-slate-900 dark:text-white"
            initial={reduce ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: 'easeOut' }}
          >
            {c.operateTitle}
          </motion.h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-4">
            {c.workModel.map((item, i) => (
              <motion.div
                variants={itemReveal}
                whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                key={i}
                className="glass-card glass-card--sm grid items-start gap-4 p-5 md:grid-cols-12 md:gap-4"
              >
                <div className="md:col-span-3">
                  <p className="text-xs uppercase tracking-[0.14em] font-black text-slate-500 dark:text-slate-400">
                    {c.blockLabel} {i + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-black text-slate-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="md:col-span-9 text-slate-600 dark:text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div whileHover={reduce ? undefined : cardLift} className="glass-card overflow-hidden p-8">
            <motion.img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
              alt="Equipo de direccion IA"
              className="mb-5 h-40 w-full rounded-md object-cover"
              loading="lazy"
              initial={reduce ? false : { opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduce ? 0 : 0.65, ease: 'easeOut' }}
              whileHover={reduce ? undefined : { scale: 1.02 }}
            />
            <h2 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">{c.includesTitle}</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-3 text-slate-700 dark:text-slate-300">
              {c.includesList.map((item, i) => (
                <motion.div key={i} variants={itemReveal} className="flex items-start gap-3">
                  <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-500" whileHover={rowIconHover}><CheckCircle2 className="w-5 h-5" /></motion.span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : cardLift} className="glass-card overflow-hidden p-8">
            <motion.img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
              alt="Riesgos de ejecucion sin estrategia"
              className="mb-5 h-40 w-full rounded-md object-cover"
              loading="lazy"
              initial={reduce ? false : { opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduce ? 0 : 0.65, ease: 'easeOut' }}
              whileHover={reduce ? undefined : { scale: 1.02 }}
            />
            <h2 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">{c.excludesTitle}</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-3 text-slate-700 dark:text-slate-300">
              {c.excludesList.map((item, i) => (
                <motion.div key={i} variants={itemReveal} className="flex items-start gap-3">
                  <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-500" whileHover={rowIconHover}><XCircle className="w-5 h-5" /></motion.span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-14 px-4">
        <div className="glass-card mx-auto max-w-7xl p-8">
          <h2 className="mb-8 text-3xl font-black text-slate-900 dark:text-white">{c.monthlyTitle}</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-3">
            {c.deliverables.map((row, i) => (
              <motion.div variants={itemReveal} key={i} whileHover={reduce ? undefined : { x: 4, transition: { type: 'spring', stiffness: 380, damping: 28 } }} className="glass-card glass-card--sm grid gap-4 p-4 md:grid-cols-12">
                <p className="md:col-span-4 font-bold text-slate-900 dark:text-white">{row.title}</p>
                <p className="md:col-span-8 text-slate-600 dark:text-slate-300">{row.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div whileHover={reduce ? undefined : cardLift} className="glass-card p-8">
            <h2 className="mb-5 text-2xl font-black text-slate-900 dark:text-white">{c.fitTitle}</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="space-y-3">
              {c.fitList.map((item, i) => (
                <motion.div key={i} variants={itemReveal} className="flex items-start gap-3">
                  <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-500" whileHover={rowIconHover}><CheckCircle2 className="w-5 h-5" /></motion.span>
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : cardLift} className="glass-card p-8">
            <h2 className="mb-5 text-2xl font-black text-slate-900 dark:text-white">{c.noFitTitle}</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="space-y-3">
              {c.noFitList.map((item, i) => (
                <motion.div key={i} variants={itemReveal} className="flex items-start gap-3">
                  <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-500" whileHover={rowIconHover}><XCircle className="w-5 h-5" /></motion.span>
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-14 px-4">
        <div className="glass-card mx-auto max-w-7xl p-8">
          <h2 className="mb-8 text-3xl font-black text-slate-900 dark:text-white">{c.ninetyTitle}</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
            {c.ninetySteps.map((step, i) => (
              <motion.div variants={itemReveal} whileHover={reduce ? undefined : cardLift} transition={{ type: 'spring', stiffness: 260, damping: 20 }} key={i} className="glass-card glass-card--sm p-5">
                <motion.div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700"
                  whileHover={reduce ? undefined : { rotate: 6, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                >
                  {i === 0 && <ClipboardList className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
                  {i === 1 && <Route className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
                  {i === 2 && <CalendarCheck2 className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
                </motion.div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 mb-2">{step.label}</p>
                <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 px-4">
        <motion.div whileHover={reduce ? undefined : { scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="glass-card mx-auto max-w-5xl p-10">
          <motion.div
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-500/10 dark:bg-slate-500/20"
            animate={reduce ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Shield className="h-10 w-10 text-slate-600 dark:text-slate-300" />
          </motion.div>
          <motion.h2
            className="mb-5 text-center text-4xl font-black leading-[0.95] text-slate-900 dark:text-white md:text-5xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 0.55, ease: 'easeOut' }}
          >
            {c.ctaTitle}
          </motion.h2>
          <motion.p
            className="mx-auto mb-8 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-300"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: 'easeOut', delay: reduce ? 0 : 0.08 }}
          >
            {c.ctaBody}
          </motion.p>
          <div className="flex justify-center">
            <motion.button
              whileHover={reduce ? undefined : { scale: 1.05, y: -3, boxShadow: '0 20px 45px rgba(15, 23, 42, 0.22)' }}
              whileTap={{ scale: reduce ? 1 : 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              onClick={onBookDemo}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              {c.ctaButton}
              <motion.span
                className="inline-flex"
                animate={reduce ? undefined : { x: [0, 5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
