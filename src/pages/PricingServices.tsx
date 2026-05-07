import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, Shield, Target, Zap, HelpCircle, MessageCircle, ChevronDown, ChevronUp, Landmark, Building2, GraduationCap, BarChart3, Calendar, Cpu, XCircle, MinusCircle } from 'lucide-react';

export function PricingServices({ t, onBookDemo, onContactClick }: { t: any, onBookDemo: () => void, onContactClick: () => void }) {
  const tp = t.pricingPage;
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 relative overflow-hidden transition-colors duration-500"
    >
      <img
        src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=2400&q=80"
        alt="Entorno visual de inteligencia artificial"
        className="absolute inset-0 h-full w-full object-cover opacity-15 dark:opacity-20 pointer-events-none"
        loading="eager"
      />
      {/* Background Pattern & AI Core */}
      <div className="absolute inset-0 bg-grid-brand opacity-40 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 dark:bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none animate-pulse-brand" />
      
      {/* AI Core Brain Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] dark:opacity-[0.03] pointer-events-none">
        <Cpu className="w-[500px] h-[500px] text-brand-blue" />
      </div>

      {/* Pulsing Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 200 400 L 640 540"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 1080 400 L 640 540"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        
        {/* Top Badges from Image */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/5 dark:bg-brand-blue/10 border border-brand-blue/10 dark:border-brand-blue/20 text-brand-blue dark:text-blue-300 text-xs font-bold tracking-wide shadow-sm"
          >
            <Shield className="w-3.5 h-3.5" />
            {t.home.badge}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-emerald/5 dark:bg-brand-emerald/10 border border-brand-emerald/10 dark:border-brand-emerald/20 text-brand-emerald dark:text-emerald-400 text-xs font-bold tracking-wide shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            {t.home.platformBadge}
          </motion.div>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="rounded-3xl overflow-hidden border border-brand-blue/20 mb-8 shadow-xl">
              <img src="https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=1800&q=80" alt="Equipo y estrategia IA" className="w-full h-56 object-cover" loading="lazy" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-emerald dark:from-blue-400 dark:to-emerald-400 inline-block">
                {tp.title}
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              {tp.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Trust Badges / Social Proof - Floating Glass Modules */}
        <div className="mb-32">
          <div className="max-w-6xl mx-auto">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center text-[10px] font-bold tracking-[0.4em] text-brand-blue/60 dark:text-brand-blue/60 mb-16 uppercase"
            >
              {tp.trustTitle}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Landmark className="w-8 h-8" />, label: tp.trust1, sub: tp.trust1Sub },
                { icon: <Building2 className="w-8 h-8" />, label: tp.trust2, sub: tp.trust2Sub },
                { icon: <GraduationCap className="w-8 h-8" />, label: tp.trust3, sub: tp.trust3Sub },
                { icon: <BarChart3 className="w-8 h-8" />, label: tp.trust4, sub: tp.trust4Sub }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-brand rounded-[2.5rem] p-8 flex flex-col items-center text-center gap-6 group cursor-default relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-20 h-20 rounded-3xl bg-brand-blue/10 dark:bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:text-brand-blue group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-brand-blue transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase opacity-80">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Fases del Servei */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{tp.phasesTitle}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{tp.phasesSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-brand-blue" />,
                title: tp.phase1Title,
                desc: tp.phase1Desc
              },
              {
                icon: <Zap className="w-8 h-8 text-brand-emerald" />,
                title: tp.phase2Title,
                desc: tp.phase2Desc
              },
              {
                icon: <Shield className="w-8 h-8 text-brand-blue" />,
                title: tp.phase3Title,
                desc: tp.phase3Desc
              },
              {
                icon: <Sparkles className="w-8 h-8 text-brand-emerald" />,
                title: tp.phase4Title,
                desc: tp.phase4Desc
              }
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-brand p-8 rounded-[2.5rem] relative overflow-hidden group hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-emerald transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="mb-6 bg-brand-emerald/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-emerald transition-colors tracking-tight">{phase.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{tp.pricingTitle}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{tp.pricingSubtitle}</p>
          </div>

          {/* Quick Purchase Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  {tp.quickPurchaseBadge.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {tp.quickPurchaseBadge.subtitle}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch mb-12 relative lg:px-4">
            
            {/* Decorative arrow 1-2 (Visible only in desktop) */}
            <div className="hidden lg:block absolute top-[45%] left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-0 opacity-40">
              <ArrowRight className="w-12 h-12 text-brand-emerald drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
            </div>

            {/* Decorative arrow 2-3 (Visible only in desktop) */}
            <div className="hidden lg:block absolute top-[45%] left-[66.66%] -translate-x-1/2 -translate-y-1/2 z-0 opacity-40">
              <ArrowRight className="w-12 h-12 text-brand-emerald drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
            </div>

            {/* Card 1: Charla */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-brand rounded-[2.5rem] p-8 flex flex-col h-full relative z-10 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{tp.card1Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{tp.card1Desc}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{tp.card1Price}</span>
                </div>
              </div>
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {[tp.card1Feat1, tp.card1Feat2, tp.card1Feat3].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-brand-blue/10 p-0.5 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={onBookDemo}
                className="w-full py-4 rounded-2xl font-bold text-brand-blue bg-brand-blue/10 border border-brand-blue/20 hover:bg-brand-blue/20 transition-all flex items-center justify-center gap-2 group"
              >
                {tp.card1CTA} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Card 2: 1 Pliego */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-brand rounded-[2.5rem] p-8 flex flex-col h-full relative z-10 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300 border border-brand-blue/20"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{tp.card2Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{tp.card2Desc}</p>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{tp.card2Price}</span>
                </div>
              </div>

              <div className="flex-grow relative z-10 mt-2">
                <ul className="space-y-4 mb-4">
                  {[tp.card2Feat1, tp.card2Feat2, tp.card2Feat3].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-brand-emerald/10 p-0.5 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Bonificación Block */}
              <div className="mt-4 mb-6 pt-5 border-t border-cyan-500/30 relative z-10 text-center bg-cyan-500/5 rounded-2xl pb-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-800 px-3 py-0.5 rounded-full font-bold text-[10px] text-cyan-500 tracking-widest uppercase whitespace-nowrap shadow-sm border border-cyan-500/20">
                  Bonificación
                </div>
                <div className="pt-2">
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 font-bold px-4 mb-1">
                    SI HAS CONTRATADO LA CHARLA: -500 €
                  </p>
                  <span className="block text-2xl font-black text-slate-900 dark:text-white mt-1">
                    PRECIO FINAL: 2.500 €
                  </span>
                </div>
              </div>

              <button 
                onClick={onBookDemo}
                className="w-full py-4 rounded-2xl font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                {tp.card2CTA} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Card 3: Pack 10 (Most Popular) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-brand rounded-[2.5rem] p-8 border-2 border-brand-emerald flex flex-col h-full relative lg:scale-105 z-10 hover:shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-all duration-500 group"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-blue to-brand-emerald text-white px-8 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] shadow-xl flex items-center gap-2 uppercase z-20 whitespace-nowrap">
                <Sparkles className="w-3 h-3 animate-pulse" /> {tp.card3Badge || tp.mostPopular}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald/10 to-transparent rounded-[2.5rem] pointer-events-none" />

              <div className="mb-6 mt-4 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{tp.card3Title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{tp.card3Desc}</p>
              </div>

              {/* Direct Purchase Offer */}
              <div className="bg-brand-emerald text-white rounded-2xl p-5 mb-8 shadow-[0_8px_30px_rgba(16,185,129,0.3)] border border-brand-emerald/50 transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative z-10 overflow-hidden group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                <div className="relative z-10">
                  <p className="text-[11px] font-black tracking-widest uppercase opacity-90 mb-1">{(tp.card3OfferTitle || "OFERTA COMPRA DIRECTA:").split(':')[0]}</p>
                  <p className="text-5xl font-black mb-2 tracking-tight">{(tp.card3OfferTitle || "13.000 €").split(':')[1] || '13.000 €'}</p>
                  <p className="text-xs font-semibold leading-normal opacity-95">{tp.card3OfferDesc}</p>
                </div>
              </div>

              <div className="flex-grow relative z-10 mt-2">
                <ul className="space-y-4 mb-4">
                  {[tp.card3Feat1, tp.card3Feat2, tp.card3Feat3, tp.card3Feat4].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-brand-emerald/20 p-0.5 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-white font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transición Garantizada */}
              <div className="mt-4 mb-6 pt-5 border-t border-brand-emerald/30 relative z-10 text-center bg-brand-emerald/5 rounded-2xl pb-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-800 px-3 py-0.5 rounded-full font-bold text-[10px] text-brand-emerald tracking-widest uppercase whitespace-nowrap shadow-sm border border-brand-emerald/20">
                  {tp.card3TransitionTitle || 'Transición Garantizada'}
                </div>
                <div className="pt-2">
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium px-4">
                    {(tp.card3TransitionText || 'Si ya contrataste el Plan Piloto, solo abonas la diferencia:').split(':')[0]}:
                  </p>
                  <span className="block text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {(tp.card3TransitionText || ': 11.500 €').split(':')[1] || ' 11.500 €'}
                  </span>
                </div>
              </div>

              <button 
                onClick={onBookDemo}
                className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-brand-emerald to-[#059669] shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 group relative z-10"
              >
                {tp.card3CTA} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          
          {/* Tax Note */}
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
              {tp.taxNote}
            </p>
          </div>
        </div>

        {/* Comparison Section: Why PliegoFácil.ai? */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              {tp.comparison.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {tp.comparison.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Option 1: Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-brand rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/5 flex flex-col relative group"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{tp.comparison.traditional.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{tp.comparison.traditional.sub}</p>
              </div>

              <div className="space-y-8 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-red-500/10 p-1.5 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{tp.comparison.criteria.speed}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{tp.comparison.traditional.speed}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-red-500/10 p-1.5 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{tp.comparison.criteria.legal}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{tp.comparison.traditional.legal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-red-500/10 p-1.5 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{tp.comparison.criteria.coherence}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{tp.comparison.traditional.coherence}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-slate-500/10 p-1.5 rounded-lg">
                    <MinusCircle className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{tp.comparison.criteria.cost}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{tp.comparison.traditional.cost}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Option 2: Consultancy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-brand rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/5 flex flex-col relative group"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{tp.comparison.consultancy.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{tp.comparison.consultancy.sub}</p>
              </div>

              <div className="space-y-8 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-orange-500/10 p-1.5 rounded-lg">
                    <MinusCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{tp.comparison.criteria.speed}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{tp.comparison.consultancy.speed}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-500/10 p-1.5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{tp.comparison.criteria.legal}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{tp.comparison.consultancy.legal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-orange-500/10 p-1.5 rounded-lg">
                    <MinusCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{tp.comparison.criteria.coherence}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{tp.comparison.consultancy.coherence}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-red-500/10 p-1.5 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{tp.comparison.criteria.cost}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{tp.comparison.consultancy.cost}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Option 3: PliegoFácil.ai (Highlighted) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-brand rounded-[2.5rem] p-8 border-2 border-brand-emerald/40 flex flex-col relative group lg:scale-105 z-20 shadow-[0_0_50px_rgba(0,223,129,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald/10 to-transparent rounded-[2.5rem] pointer-events-none" />
              
              <div className="mb-8 relative">
                <div className="absolute -top-12 left-0 bg-brand-emerald text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                  {tp.bestOption}
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-emerald">
                  {tp.comparison.pliegoFacil.name}
                </h3>
                <p className="text-sm text-brand-blue font-bold">{tp.comparison.pliegoFacil.sub}</p>
              </div>

              <div className="space-y-8 flex-grow relative">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-emerald/20 p-1.5 rounded-lg shadow-[0_0_15px_rgba(0,223,129,0.3)]">
                    <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue/60 uppercase tracking-wider mb-1">{tp.comparison.criteria.speed}</p>
                    <p className="text-sm text-slate-900 dark:text-white font-bold">{tp.comparison.pliegoFacil.speed}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-emerald/20 p-1.5 rounded-lg shadow-[0_0_15px_rgba(0,223,129,0.3)]">
                    <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue/60 uppercase tracking-wider mb-1">{tp.comparison.criteria.legal}</p>
                    <p className="text-sm text-slate-900 dark:text-white font-bold">{tp.comparison.pliegoFacil.legal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-emerald/20 p-1.5 rounded-lg shadow-[0_0_15px_rgba(0,223,129,0.3)]">
                    <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue/60 uppercase tracking-wider mb-1">{tp.comparison.criteria.coherence}</p>
                    <p className="text-sm text-slate-900 dark:text-white font-bold">{tp.comparison.pliegoFacil.coherence}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-emerald/20 p-1.5 rounded-lg shadow-[0_0_15px_rgba(0,223,129,0.3)]">
                    <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue/60 uppercase tracking-wider mb-1">{tp.comparison.criteria.cost}</p>
                    <p className="text-sm text-slate-900 dark:text-white font-bold">{tp.comparison.pliegoFacil.cost}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{tp.faqTitle}</h2>
          </div>
          
          <div className="space-y-12">
            {(tp.faqCategories || [
              {
                title: 'General',
                items: [
                  { q: tp.faq1Q, a: tp.faq1A },
                  { q: tp.faq2Q, a: tp.faq2A },
                  { q: tp.faq3Q, a: tp.faq3A }
                ]
              }
            ]).map((category: any, catIndex: number) => (
              <div key={catIndex} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px bg-brand-emerald/20 flex-grow" />
                  <h3 className="text-sm font-black text-brand-emerald uppercase tracking-[0.3em] px-4">
                    {category.title}
                  </h3>
                  <div className="h-px bg-brand-emerald/20 flex-grow" />
                </div>
                
                <div className="space-y-4">
                  {category.items.map((faq: any, i: number) => {
                    const globalIndex = `${catIndex}-${i}`;
                    return (
                      <div 
                        key={i}
                        className="glass-brand rounded-2xl overflow-hidden border-brand-emerald/10 hover:border-brand-emerald/30 transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-brand-emerald/5 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <HelpCircle className="w-5 h-5 text-brand-emerald shrink-0" />
                            <span className="font-semibold text-slate-900 dark:text-white">{faq.q}</span>
                          </div>
                          {openFaq === globalIndex ? (
                            <ChevronUp className="w-5 h-5 text-brand-emerald" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-brand-emerald" />
                          )}
                        </button>
                        <AnimatePresence>
                          {openFaq === globalIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-brand-emerald/10">
                                <div className="mt-4 text-sm md:text-base">
                                  {faq.a}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Band */}
      <div className="relative py-24 overflow-hidden border-t border-brand-emerald/20">
        <div className="absolute inset-0 bg-white dark:bg-[#020617] transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-emerald/10 to-indigo-900/20 opacity-90" />
        <div className="absolute inset-0 bg-grid-brand opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-black text-gradient-brand mb-6 tracking-tight">
                {tp.ctaText}
              </h3>
              <p className="text-slate-600 dark:text-brand-blue/70 text-lg font-medium">
                {tp.ctaSubtitle}
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,223,129,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="https://calendly.com/eric-martinez-acceleralia/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 rounded-[2rem] font-black text-white bg-gradient-to-r from-brand-blue to-brand-emerald transition-all flex items-center gap-4 shadow-2xl shadow-brand-emerald/20 text-xl uppercase tracking-widest whitespace-nowrap"
            >
              <Calendar className="w-6 h-6" />
              {tp.ctaButtonFinal}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
