import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Landmark, 
  Globe, 
  Clock, 
  PieChart, 
  Activity,
  FileText,
  CheckCheck,
  MapPin,
  Moon,
  Sun,
  ChevronDown,
  Calendar,
  FileEdit,
  Megaphone,
  Gavel,
  FileCheck,
  Stamp,
  Scale,
  Mail,
  Phone,
  Lock,
  User,
  Briefcase,
  Loader2,
  LogOut,
  ExternalLink,
  X,
  Menu,
  Target,
  Sparkles,
  List,
  ChevronUp,
  Compass,
  Folder,
  Box,
  ThumbsUp,
  Rocket,
  ClipboardCheck,
  Zap,
  Shield,
  CheckCircle,
  RefreshCw,
  Award,
  Settings,
  Files,
  Calculator,
  Filter,
  ListChecks,
  CheckSquare,
  FileSearch,
  Send,
  AlertCircle,
  Hourglass,
  AlertTriangle,
  Cpu,
  BookOpen,
  Fingerprint
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import type { TranslationLocale } from './translations';
import { i18nLngToLegacy, legacyToI18nLng } from './i18n/i18n';
import { getHomeV2Copy } from './i18n/homeV2Copy';
import {
  getComoTrabajamosPageCopy,
  getDiagnosticoPageCopy,
  getSobreNosotrosPageCopy,
} from './i18n/marketingFlowPages';
import { TecnicoContratacion } from './pages/TecnicoContratacion';
import { PricingServices } from './pages/PricingServices';
import { CasosDeUso } from './pages/CasosDeUso';
import EfficiencyCalculator from './components/EfficiencyCalculator';
import { supabase } from './lib/supabase';
import { GlobalVideoBackdrop } from './components/GlobalVideoBackdrop';
import { HomeEntradaSplash } from './components/HomeEntradaSplash';
import { sectionEnter } from './lib/sectionEnter';

/** Persistido: el splash de entrada a la home solo la primera vez (por navegador). */
const HOME_ENTRADA_SPLASH_SEEN_KEY = 'caioexperts_home_entrada_splash_seen';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 26,
    mass: 0.2
  });
  
  const { i18n } = useTranslation();
  const lang = i18nLngToLegacy(i18n.language);
  const t =
    (i18n.getResourceBundle(i18n.language, 'translation') as TranslationLocale | undefined) ??
    (i18n.getResourceBundle('es', 'translation') as TranslationLocale);

  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    if (path === '/caio-as-a-service' || path === '/soluciones/tecnico-contratacion') return 'caio-service';
    if (path === '/como-trabajamos' || path === '/metodologia') return 'como-trabajamos';
    if (path === '/resultados' || path === '/casos-de-uso') return 'resultados';
    if (path === '/sobre-nosotros') return 'sobre-nosotros';
    if (path === '/faq') return 'home';
    if (path === '/diagnostico' || path === '/contacto' || path === '/preus-i-serveis') return 'diagnostico';
    if (path === '/legal') return 'legal';
    if (path === '/privacy') return 'privacy';
    if (path === '/cookies') return 'cookies';
    return 'home';
  });
  const [homeSplashDismissed, setHomeSplashDismissed] = useState(() => {
    try {
      return window.localStorage.getItem(HOME_ENTRADA_SPLASH_SEEN_KEY) === '1';
    } catch {
      return false;
    }
  });
  const [expandedMod, setExpandedMod] = useState<number | null>(null);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [currentPage]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileNavOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileNavOpen]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const mq = window.matchMedia('(min-width: 768px)');
    const closeIfDesktop = () => {
      if (mq.matches) setMobileNavOpen(false);
    };
    mq.addEventListener('change', closeIfDesktop);
    closeIfDesktop();
    return () => mq.removeEventListener('change', closeIfDesktop);
  }, [mobileNavOpen]);

  // Update document title
  useEffect(() => {
    document.title = 'CAIOExperts.ai';
  }, []);

  // Update URL when page changes
  useEffect(() => {
    const path = currentPage === 'home' ? '/' : 
                 currentPage === 'caio-service' ? '/caio-as-a-service' : 
                 currentPage === 'resultados' ? '/resultados' :
                 currentPage === 'como-trabajamos' ? '/como-trabajamos' :
                 currentPage === 'sobre-nosotros' ? '/sobre-nosotros' :
                 currentPage === 'diagnostico' ? '/diagnostico' :
                 `/${currentPage}`;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  }, [currentPage]);

  // Handle popstate for browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/caio-as-a-service' || path === '/soluciones/tecnico-contratacion') setCurrentPage('caio-service');
      else if (path === '/como-trabajamos' || path === '/metodologia') setCurrentPage('como-trabajamos');
      else if (path === '/resultados' || path === '/casos-de-uso' || path === '/administraciones-que-nos-gusta-lo-que-hacen') setCurrentPage('resultados');
      else if (path === '/sobre-nosotros') setCurrentPage('sobre-nosotros');
      else if (path === '/faq') setCurrentPage('home');
      else if (path === '/diagnostico' || path === '/contacto' || path === '/preus-i-serveis') setCurrentPage('diagnostico');
      else if (path === '/legal') setCurrentPage('legal');
      else if (path === '/privacy') setCurrentPage('privacy');
      else if (path === '/cookies') setCurrentPage('cookies');
      else setCurrentPage('home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (expandedMod !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedMod]);

  const [contactName, setContactName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactComment, setContactComment] = useState('');
  const [contactPrivacy, setContactPrivacy] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactErrorMessage, setContactErrorMessage] = useState('');
  const [contactErrorKey, setContactErrorKey] = useState<'limitError' | 'phoneError' | 'error' | null>(null);
  const [contactCountdown, setContactCountdown] = useState(0);

  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoFullName, setDemoFullName] = useState('');
  const [demoOrganization, setDemoOrganization] = useState('');
  const [demoPhoneNumber, setDemoPhoneNumber] = useState('');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoPrivacyAccepted, setDemoPrivacyAccepted] = useState(false);
  const [demoStatus, setDemoStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [demoErrorMessage, setDemoErrorMessage] = useState('');

  const homeSplashBlocking =
    currentPage === 'home' && !homeSplashDismissed && !shouldReduceMotion;
  const showTopNav =
    currentPage !== 'home' ||
    homeSplashDismissed ||
    !!shouldReduceMotion;
  const homeContentHidden = shouldReduceMotion
    ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
    : { opacity: 0, y: 56, scale: 0.99, filter: 'blur(6px)' };
  const homeContentShown = { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' };

  type MarketingNavT = {
    home: string;
    caioService: string;
    resultados: string;
    comoTrabajamos: string;
    sobreNosotros: string;
    diagnostico: string;
    agendarDiagnostico: string;
  };

  type MarketingHeaderT = {
    themeLight: string;
    themeDark: string;
    openMenu: string;
    closeMenu: string;
    navMenuLabel: string;
  };

  const marketingNav = (t as { marketingNav?: MarketingNavT }).marketingNav;
  const marketingHeader = (t as { marketingHeader?: MarketingHeaderT }).marketingHeader;

  const mainNavItems = useMemo(() => {
    const mn = marketingNav;
    if (!mn) {
      return [
        { key: 'home', label: 'Inicio' },
        { key: 'caio-service', label: 'CAIO as a Service' },
        { key: 'resultados', label: 'Resultados' },
        { key: 'como-trabajamos', label: 'Como trabajamos' },
        { key: 'sobre-nosotros', label: 'Sobre nosotros' },
        { key: 'diagnostico', label: 'Diagnostico' }
      ];
    }
    return [
      { key: 'home', label: mn.home },
      { key: 'caio-service', label: mn.caioService },
      { key: 'resultados', label: mn.resultados },
      { key: 'como-trabajamos', label: mn.comoTrabajamos },
      { key: 'sobre-nosotros', label: mn.sobreNosotros },
      { key: 'diagnostico', label: mn.diagnostico }
    ];
  }, [marketingNav]);

  const mobileNavListVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.055,
        delayChildren: shouldReduceMotion ? 0 : 0.04
      }
    }
  };

  const mobileNavItemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const AnimatedMetricValue = ({ value, className }: { value: string; className: string }) => {
    const [display, setDisplay] = useState(value);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const node = elementRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
            observer.disconnect();
          }
        },
        { threshold: 0.45 }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!shouldAnimate) return;

      const normalized = value.replace(',', '.');
      const match = normalized.match(/(\d+(\.\d+)?)/);
      if (!match) {
        setDisplay(value);
        return;
      }

      const rawNumber = Number(match[1]);
      if (Number.isNaN(rawNumber)) {
        setDisplay(value);
        return;
      }

      const prefix = value.slice(0, match.index);
      const suffix = value.slice((match.index || 0) + match[1].length);
      const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0;
      const durationMs = 900;
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = rawNumber * eased;
        const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
        setDisplay(`${prefix}${formatted.replace('.', ',')}${suffix}`);

        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, [shouldAnimate, value]);

    return <div ref={elementRef} className={className}>{display}</div>;
  };

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Rate limit countdown timer
  useEffect(() => {
    if (contactCountdown <= 0) return;
    const timer = setInterval(() => {
      setContactCountdown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [contactCountdown]);

  // Check for existing rate limit on mount
  useEffect(() => {
    const lastSubmit = localStorage.getItem('last_submit_time');
    if (lastSubmit) {
      const elapsed = Math.floor((Date.now() - parseInt(lastSubmit)) / 1000);
      if (elapsed < 120) {
        setContactCountdown(120 - elapsed);
      }
    }
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 4. CONTROL DE FLUJO Y RATE LIMIT LOCAL
    const lastSubmit = localStorage.getItem('last_submit_time');
    if (lastSubmit) {
      const elapsed = Math.floor((Date.now() - parseInt(lastSubmit)) / 1000);
      if (contactCountdown > 0 || elapsed < 120) {
        setContactStatus('error');
        setContactErrorKey('limitError');
        if (contactCountdown <= 0) setContactCountdown(120 - elapsed);
        return;
      }
    }

    // Validación de teléfono (solo números)
    const phoneRegex = /^[0-9+ ]+$/;
    if (contactPhone && !phoneRegex.test(contactPhone)) {
      setContactStatus('error');
      setContactErrorKey('phoneError');
      return;
    }

    // UI/UX EXPECTATIONS: Deshabilitar botón y mostrar loading
    setContactStatus('loading');
    setContactErrorKey(null);
    setContactErrorMessage('');
    
    try {
      // 2. CONSTRUCCIÓN DEL PAYLOAD (JSON)
      const formData = {
        first_name: contactName,
        last_name: contactLastName,
        email: contactEmail,
        phone: contactPhone,
        comment: contactComment
      };

      // 1. AUTENTICACIÓN Y HEADERS (Uso de variable de entorno)
      const secretKey = import.meta.env.VITE_FUNCTION_SECRET_KEY || 'xT9_nP4kL2-vR8mY1_qW6zJ5-bC7hF3';
      
      const invokePromise = supabase.functions.invoke('Funcion-comentarios_pliegafacil', {
        body: formData,
        headers: {
          'x-custom-auth': secretKey
        }
      });

      // 3. RESILIENCIA Y TIMEOUT (Promise.race)
      const timeoutPromise = new Promise<any>((_, reject) => {
        setTimeout(() => reject(new Error('TIMEOUT_ERROR')), 15000);
      });

      const { data, error: invokeError } = await Promise.race([invokePromise, timeoutPromise]);

      if (invokeError) {
        const error: any = new Error(invokeError?.message?.toString() || "Error desconocido");
        error.status = invokeError?.status;
        throw error;
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      if (data && data.success === false) {
        throw new Error(data.message?.toString() || 'La operación no fue exitosa.');
      }

      // UI/UX EXPECTATIONS: Success, reset fields, show confirmation
      localStorage.setItem('last_submit_time', Date.now().toString());
      setContactCountdown(120);
      setContactStatus('success');
      setContactErrorKey(null);
      setContactName('');
      setContactLastName('');
      setContactEmail('');
      setContactPhone('');
      setContactComment('');
      setContactPrivacy(false);
      
      setTimeout(() => setContactStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      setContactStatus('error');
      setContactErrorKey('error');
      
      // 5. MANEJO DE EXCEPCIONES
      const status = error?.status;
      const message = error?.message?.toString() || "Error desconocido";

      if (status === 429) {
        setContactErrorMessage("Límite de envíos alcanzado en el servidor. Reintentar en 2 min");
        localStorage.setItem('last_submit_time', Date.now().toString());
        setContactCountdown(120);
      } else if (status === 401) {
        setContactErrorMessage("Error de autenticación: Verifica la clave de acceso.");
      } else if (message === 'TIMEOUT_ERROR') {
        setContactErrorMessage("Tiempo de espera agotado: La función no respondió en 15 segundos.");
      } else {
        setContactErrorMessage(`Error inesperado: ${message}`);
      }
      
      setTimeout(() => setContactStatus('idle'), 10000);
    }
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoPrivacyAccepted) return;
    setDemoStatus('loading');
    setDemoErrorMessage('');
    try {
      const formData = {
        fullName: demoFullName,
        organization: demoOrganization,
        phoneNumber: demoPhoneNumber,
        email: demoEmail
      };

      // Uso de variable de entorno para la clave secreta
      const secretKey = import.meta.env.VITE_FUNCTION_SECRET_KEY || 'xT9_nP4kL2-vR8mY1_qW6zJ5-bC7hF3';
      
      const invokePromise = supabase.functions.invoke('enviar-demo', {
        body: formData,
        headers: {
          'x-custom-auth': secretKey
        }
      });

      const timeoutPromise = new Promise<any>((_, reject) => {
        setTimeout(() => reject(new Error('TIMEOUT_ERROR')), 15000);
      });

      const { data, error: invokeError } = await Promise.race([invokePromise, timeoutPromise]);

      if (invokeError) {
        const error: any = new Error(invokeError?.message?.toString() || "Error desconocido");
        error.status = invokeError?.status;
        throw error;
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setDemoStatus('success');
      setDemoFullName('');
      setDemoOrganization('');
      setDemoPhoneNumber('');
      setDemoEmail('');
      setDemoPrivacyAccepted(false);
      
      setTimeout(() => {
        setDemoStatus('idle');
        setShowDemoModal(false);
      }, 3000);
    } catch (error: any) {
      console.error('Error submitting demo form:', error);
      setDemoStatus('error');
      
      // Manejo 100% seguro de errores con optional chaining
      const status = error?.status;
      const message = error?.message?.toString() || "Error desconocido";
      
      let errorMessage = t.errors.unexpected;
      
      if (status === 401) {
        errorMessage = t.errors.auth;
      } else if (error?.message === 'TIMEOUT_ERROR') {
        errorMessage = t.errors.timeout;
      } else if (message && message !== "Error desconocido") {
        errorMessage = message;
      }
      
      setDemoErrorMessage(errorMessage);
      setTimeout(() => setDemoStatus('idle'), 8000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const Logo = () => (
    <button onClick={() => setCurrentPage('home')} className="flex items-center gap-1.5 focus:outline-none">
      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-900 bg-slate-100 dark:border-white dark:bg-white/10">
        <Cpu className="h-5 w-5 text-slate-900 dark:text-white" strokeWidth={2} />
      </div>
      <span className="ml-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        <span className="text-slate-950 dark:text-white">CAIO</span>
        <span className="text-amber-400">Experts.ai</span>
      </span>
    </button>
  );

  const InteractiveTiltCard = ({ children, className }: { children: React.ReactNode; className: string }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const hasFinePointer = typeof window !== 'undefined' && window.matchMedia('(pointer:fine)').matches;

    const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !hasFinePointer) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      setTilt({
        x: (0.5 - py) * 8,
        y: (px - 0.5) * 10
      });
    };

    const handleLeave = () => setTilt({ x: 0, y: 0 });

    return (
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        animate={shouldReduceMotion ? {} : { rotateX: tilt.x, rotateY: tilt.y }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  // --- VISTAS (PÁGINAS) ---

  const renderHome = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">
      <motion.div
        style={{ scaleX: smoothScrollProgress }}
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 z-[70]"
      />
      {/* HERO SECTION (Double Funnel) */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-50/50 via-transparent to-indigo-50/50 dark:from-violet-900/20 dark:via-slate-950 dark:to-indigo-900/20 -z-10 transition-colors"></div>
        <motion.div
          aria-hidden="true"
          className="absolute -top-24 -left-20 w-[28rem] h-[28rem] rounded-full bg-violet-400/25 dark:bg-violet-500/20 blur-[110px] pointer-events-none"
          animate={shouldReduceMotion ? {} : { x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-24 right-0 w-[24rem] h-[24rem] rounded-full bg-fuchsia-400/20 dark:bg-indigo-500/25 blur-[100px] pointer-events-none"
          animate={shouldReduceMotion ? {} : { x: [0, -36, 0], y: [0, 24, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold mb-4 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-violet-500" />
                {t.home.badge}
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-sm font-medium">
                  <FileText className="w-4 h-4" />
                  {t.home.platformBadge}
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                {String(t.home.title1).split(' ').map((word: string, idx: number) => (
                  <motion.span
                    key={`title1-${idx}`}
                    initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : idx * 0.05, ease: 'easeOut' }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">
                  {String(t.home.title2).split(' ').map((word: string, idx: number) => (
                    <motion.span
                      key={`title2-${idx}`}
                      initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : 0.2 + idx * 0.05, ease: 'easeOut' }}
                      className="inline-block mr-3"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {t.home.subtitle}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  onMouseMove={(event) => {
                    if (shouldReduceMotion || window.matchMedia('(pointer:coarse)').matches) return;
                    const rect = event.currentTarget.getBoundingClientRect();
                    const x = event.clientX - rect.left - rect.width / 2;
                    const y = event.clientY - rect.top - rect.height / 2;
                    event.currentTarget.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px)`;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = 'translate(0px, 0px)';
                  }}
                  onClick={() => setCurrentPage('diagnostico')}
                  className="bg-violet-600 hover:bg-violet-700 text-white px-7 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                >
                  {t.home.b2gBtn}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  onClick={() => setCurrentPage('como-trabajamos')}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 px-7 py-4 rounded-xl font-semibold hover:border-violet-400 dark:hover:border-violet-500 transition-colors"
                >
                  Ver metodología
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <InteractiveTiltCard className="glass-card relative rounded-[2rem] p-7">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-violet-200/50 dark:bg-violet-500/20 blur-2xl"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-300 rounded-2xl flex items-center justify-center mb-5">
                    <Landmark className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.home.b2gTitle}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{t.home.b2gDesc}</p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="rounded-xl bg-indigo-50 dark:bg-indigo-900/30 p-3 text-center">
                      <p className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300">30'</p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">Diagnóstico</p>
                    </div>
                    <div className="rounded-xl bg-violet-50 dark:bg-violet-900/30 p-3 text-center">
                      <p className="text-2xl font-extrabold text-violet-700 dark:text-violet-300">90d</p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">Plan de acción</p>
                    </div>
                    <div className="rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 p-3 text-center">
                      <p className="text-2xl font-extrabold text-fuchsia-700 dark:text-fuchsia-300">ROI</p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">Priorizado</p>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                      {t.home.complianceTitle}
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-xs font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-violet-500" />
                        <span>{t.home.compliance1}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-xs font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-violet-500" />
                        <span>{t.home.compliance2}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-xs font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-violet-500" />
                        <span>{t.home.compliance3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </InteractiveTiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE TENSION */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-14 bg-slate-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Cada mes sin estrategia de IA es ventaja para tu competencia.',
              'El coste real no es invertir en IA: es invertir sin liderazgo.',
              'Si no defines dirección ahora, dentro de 12 meses llegarás tarde.'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm font-semibold leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROBLEMA */}
      <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.15em] font-bold text-violet-600 dark:text-violet-300 mb-4">Problema real</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
            Tu empresa ya está haciendo cosas con IA. El problema es que no están conectadas.
          </h2>
          <div className="space-y-4">
            {[
              'Iniciativas sin dirección ni prioridad compartida.',
              'Pilotos que no escalan a resultados de negocio.',
              'Desorden interno entre dirección, operación y tecnología.',
              'Dependencia de proveedores para decidir qué hacer.'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xl font-bold text-slate-900 dark:text-white">
            El problema no es la IA. Es la falta de liderazgo.
          </p>
        </div>
      </section>

      {/* BLOQUE EJECUCION */}
      <section className="py-24 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4 transition-colors duration-300">
              {t.home.docTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 transition-colors duration-300">
              {t.home.docDesc}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sm:col-span-2 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-900/20 p-5"
              >
                <p className="text-xs font-bold tracking-wider uppercase text-indigo-700 dark:text-indigo-300 mb-2">Marco de ejecución</p>
                <p className="text-slate-700 dark:text-slate-200 text-sm">
                  Pasamos de ideas sueltas a un sistema operativo de IA: prioridades claras, ownership definido y seguimiento mensual.
                </p>
              </motion.div>

              {[
                { icon: <CheckSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />, title: t.home.docCard1Title, desc: t.home.docCard1Desc },
                { icon: <FileSearch className="w-5 h-5 text-violet-600 dark:text-violet-300" />, title: t.home.docCard2Title, desc: t.home.docCard2Desc },
                { icon: <Send className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-300" />, title: t.home.docCard3Title, desc: t.home.docCard3Desc }
              ].map((card, idx) => (
                <div key={idx}>
                  <InteractiveTiltCard className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3">
                      {card.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                  </InteractiveTiltCard>
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xl dark:shadow-2xl transition-colors duration-300">
                <div className="border-b border-slate-100 dark:border-slate-700 pb-4 mb-6 transition-colors duration-300">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white transition-colors duration-300">{t.home.mockupTitle}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Estado de avance semanal</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500/30 transition-colors cursor-default"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">{t.home.mockupItem1}</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-violet-500/30 transition-colors cursor-default"
                  >
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">{t.home.mockupItem2}</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3 bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg border border-orange-200 dark:border-orange-900/50 hover:border-orange-400 dark:hover:border-orange-500/50 transition-colors cursor-pointer group relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                    </motion.div>
                    <span className="text-sm font-medium text-orange-600 dark:text-orange-400 transition-colors duration-300">{t.home.mockupItem3}</span>
                    
                    {/* Tooltip interactivo */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs px-3 py-1.5 rounded shadow-xl whitespace-nowrap pointer-events-none border border-slate-200 dark:border-slate-700">
                      {t.home.mockupTooltip}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-slate-800 border-b border-r border-slate-200 dark:border-slate-700 transform rotate-45"></div>
                    </div>
                  </motion.div>
                </div>

                <motion.button 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => setCurrentPage('diagnostico')}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <Send className="w-4 h-4" />
                  {t.home.mockupBtn}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CAIOEXPERTS */}
      <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Why CAIOExperts
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              IA con liderazgo, no con experimentos
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Convertimos presión por adoptar IA en ventaja competitiva real, con dirección senior y ejecución continua.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Liderazgo C-Level sin contratar full-time',
              'Priorización por impacto y ROI, no por hype',
              'Implementación en semanas, no en trimestres',
              'Mentoría para tu equipo y adopción real',
              'Decisiones claras en tecnología y datos',
              'KPIs de negocio para medir resultados'
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50/70 dark:bg-slate-900/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIACION */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-4">
              <Scale className="w-3.5 h-3.5" />
              Diferenciación
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              No somos consultores. Somos parte de tu equipo.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <p className="text-xs font-bold text-rose-500 mb-2">CONSULTORAS</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">No: Diagnostico, slides y recomendaciones.</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Si: Nosotros ejecutamos con tu equipo y medimos impacto.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <p className="text-xs font-bold text-rose-500 mb-2">FREELANCERS</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">No: Resuelven tareas sueltas sin direccion global.</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Si: Nosotros dirigimos estrategia, prioridades y ejecucion transversal.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <p className="text-xs font-bold text-rose-500 mb-2">CTO INTERNO</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">No: Suele enfocarse en stack y delivery tecnico.</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Si: Nosotros alineamos IA con objetivos de negocio y adopcion real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAQUETES MENSUALES */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-bold mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Paquetes mensuales
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Elige el nivel de acompañamiento que necesitas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Modelo flexible para empresas de 50 a 500 empleados.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Starter</p>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">5.000€<span className="text-base font-semibold text-slate-500">/mes</span></p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">8h de liderazgo ejecutivo</p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>- Diagnóstico inicial y roadmap</li>
                <li>- Priorización de 2-3 casos de uso</li>
                <li>- Comité quincenal de seguimiento</li>
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-violet-500 bg-white dark:bg-slate-900 p-7 shadow-xl shadow-violet-500/10 relative">
              <p className="absolute -top-3 right-5 text-[11px] bg-violet-600 text-white px-3 py-1 rounded-full font-bold">Más popular</p>
              <p className="text-sm font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wide mb-2">Growth</p>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">9.500€<span className="text-base font-semibold text-slate-500">/mes</span></p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">20h de liderazgo + ejecución</p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>- Roadmap 90 días con KPIs</li>
                <li>- Liderazgo de implementación</li>
                <li>- Formación de equipo interno</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Scale</p>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">15.000€<span className="text-base font-semibold text-slate-500">/mes</span></p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">40h de acompañamiento intensivo</p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>- Gobernanza IA transversal</li>
                <li>- Ejecución multiárea con dirección</li>
                <li>- Escalado y cuadro de mando</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Preguntas clave antes de empezar</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: '¿Por qué no contratar un CAIO full-time?',
                a: 'Porque necesitas liderazgo senior ahora, con menos riesgo y más flexibilidad. El modelo fractional te da dirección ejecutiva inmediata sin coste fijo C-Level.'
              },
              {
                q: '¿Cuánto tiempo tarda en verse impacto?',
                a: 'En semanas obtienes claridad y roadmap. En 60-90 días ya deberías tener casos de uso en ejecución y primeras métricas activas.'
              },
              {
                q: '¿Qué resultados puedo esperar?',
                a: 'Menos fricción operativa, decisiones más rápidas y una cartera de iniciativas priorizadas por retorno de negocio.'
              },
              {
                q: '¿Cómo trabajáis con mi equipo?',
                a: 'Nos integramos con CEO/COO y responsables de área para coordinar dirección, operación y tecnología en una sola hoja de ruta.'
              },
              {
                q: '¿Cuánto esfuerzo interno requiere?',
                a: 'El mínimo necesario para avanzar: acceso a información clave, responsables y capacidad de decisión. Nosotros lideramos la ejecución.'
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                <p className="font-bold text-slate-900 dark:text-white mb-2">{item.q}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-slate-950 text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Tu empresa no necesita más teoría sobre IA.  
            <span className="block text-violet-300">Necesita liderazgo para ejecutar.</span>
          </h2>
          <p className="text-slate-300 mb-8">
            En 30 minutos obtienes diagnóstico inicial, oportunidades priorizadas y roadmap 30/60/90.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            onClick={() => setCurrentPage('diagnostico')}
            className="bg-violet-600 hover:bg-violet-700 text-white px-9 py-4 rounded-xl font-bold transition-colors inline-flex items-center gap-2"
          >
            Agenda tu diagnóstico de IA (30 min)
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="text-xs text-slate-400 mt-4">Sin compromiso · Roadmap incluido · Capacidad limitada cada mes</p>
        </div>
      </section>

      {/* RESULTADOS 30/60/90 */}
      <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-bold mb-4">
              <Clock className="w-3.5 h-3.5" />
              Resultados esperables
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Qué pasa en 30, 60 y 90 días
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-900/50">
              <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-2">Día 30</p>
              <p className="font-semibold text-slate-900 dark:text-white mb-2">Diagnóstico y prioridades</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Mapa de madurez, casos de uso priorizados y plan ejecutivo validado con dirección.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-900/50">
              <p className="text-sm font-bold text-violet-700 dark:text-violet-300 mb-2">Día 60</p>
              <p className="font-semibold text-slate-900 dark:text-white mb-2">Implementación en marcha</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Casos de uso en ejecución, equipo alineado y gobernanza operativa funcionando.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-900/50">
              <p className="text-sm font-bold text-fuchsia-700 dark:text-fuchsia-300 mb-2">Día 90</p>
              <p className="font-semibold text-slate-900 dark:text-white mb-2">Impacto medible</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">KPIs de negocio activos, backlog priorizado y plan de escalado para el siguiente trimestre.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              onClick={() => setCurrentPage('diagnostico')}
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-bold transition-colors inline-flex items-center gap-2"
            >
              Agenda una reunión estratégica
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">Sin compromiso · 30 min · diagnóstico inicial</p>
          </div>
        </div>
      </section>

      {/* DESAFÍO VS SOLUCIÓN */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              {t.home.challengeSolution.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* El Desafío */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
            >
              <div className="absolute top-8 right-8 opacity-10">
                <Hourglass className="w-24 h-24 text-slate-900 dark:text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                {t.home.challengeSolution.challengeTitle}
              </h3>

              <ul className="space-y-6">
                {t.home.challengeSolution.challengeItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* La Solución */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-blue-600 to-emerald-500 text-white shadow-2xl shadow-emerald-500/20"
            >
              <div className="absolute top-8 right-8 opacity-20">
                <Zap className="w-24 h-24 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6" />
                {t.home.challengeSolution.solutionTitle}
              </h3>

              <ul className="space-y-6">
                {t.home.challengeSolution.solutionItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="mt-1.5 bg-white/20 p-1 rounded-full shrink-0">
                      <CheckCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90 font-bold leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTORIDAD Y SEGURIDAD: IA EXPLICABLE */}
      <section className="py-16 bg-white dark:bg-[#0B1120] relative overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] transition-colors duration-300"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px] transition-colors duration-300"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-300">
                {t.home.authoritySecurity.title}
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 transition-colors duration-300">
                {t.home.authoritySecurity.subtitle}
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left side: Value Blocks (3 columns) */}
            <div className="lg:col-span-12 grid md:grid-cols-3 gap-6 mb-10">
              {[
                { 
                  key: 'justification', 
                  icon: <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />,
                  color: 'emerald',
                  glow: 'bg-emerald-500/10 dark:bg-emerald-500/20'
                },
                { 
                  key: 'antiHallucination', 
                  icon: <ShieldCheck className="w-6 h-6 text-cyan-600 dark:text-cyan-400 transition-colors duration-300" />,
                  color: 'cyan',
                  glow: 'bg-cyan-500/10 dark:bg-cyan-500/20'
                },
                { 
                  key: 'traceability', 
                  icon: <Fingerprint className="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />,
                  color: 'emerald',
                  glow: 'bg-emerald-500/10 dark:bg-emerald-500/20'
                }
              ].map((node, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", damping: 20 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-500 glass-card hover:border-white/35"
                >
                  {/* Background Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${node.color}-400/5 dark:from-${node.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon Glow Effect */}
                  <div className={`absolute -top-6 -left-6 w-24 h-24 ${node.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-2xl bg-${node.color}-50 dark:bg-${node.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${node.color}-100 dark:group-hover:bg-${node.color}-500/20 transition-all duration-500 border border-${node.color}-200 dark:border-${node.color}-500/20 shadow-inner`}>
                      {node.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight transition-colors duration-300">
                      {t.home.authoritySecurity.blocks[node.key as keyof typeof t.home.authoritySecurity.blocks].title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                      {t.home.authoritySecurity.blocks[node.key as keyof typeof t.home.authoritySecurity.blocks].desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom/Right side: Interactive Pliego Paragraph */}
            <div className="lg:col-span-8 lg:col-start-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] animate-pulse delay-700"></div>

                <div className="glass-card group relative z-10 overflow-hidden rounded-3xl p-6 transition-colors duration-300">
                  {/* Scanning Line Effect */}
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/50 dark:via-emerald-500/50 to-transparent z-20 pointer-events-none"
                  />

                  {/* Document Header Decor */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-red-500/50 transition-colors"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-amber-500/50 transition-colors"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-emerald-500/50 transition-colors"></div>
                    </div>
                    <div className="h-1.5 w-24 bg-slate-200 dark:bg-slate-800 rounded-full transition-colors"></div>
                  </div>

                  {/* The Paragraph */}
                  <div className="space-y-4">
                    <div className="h-2.5 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-full transition-colors"></div>
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full transition-colors"></div>
                    
                    <div className="relative py-4 px-6 bg-emerald-50 dark:bg-emerald-500/5 border-l-4 border-emerald-500 rounded-r-xl transition-all duration-500 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/10 cursor-default">
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium italic transition-colors">
                        {t.home.authoritySecurity.paragraph}
                      </p>
                      
                      {/* Verification Tag */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="absolute -right-4 -top-6 z-30"
                      >
                        <motion.div 
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="bg-emerald-500 text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg dark:shadow-2xl shadow-emerald-500/20 dark:shadow-emerald-500/40 flex items-center gap-1.5 border border-emerald-400 whitespace-nowrap"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {t.home.authoritySecurity.verificationTag}
                        </motion.div>
                      </motion.div>

                      {/* AI Citation Tooltip Simulation */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                        <div className="bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 text-[10px] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-emerald-500/30 font-mono shadow-xl whitespace-nowrap transition-colors">
                          {t.home.authoritySecurity.tooltip}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-slate-800 border-t border-l border-slate-200 dark:border-emerald-500/30 transform rotate-45 transition-colors"></div>
                        </div>
                      </div>
                    </div>

                    <div className="h-2.5 w-5/6 bg-slate-100 dark:bg-slate-800 rounded-full transition-colors"></div>
                    <div className="h-2.5 w-2/3 bg-slate-100 dark:bg-slate-800 rounded-full transition-colors"></div>
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full transition-colors"></div>
                  </div>

                  {/* Bottom Decor */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center transition-colors">
                    <div className="h-6 w-24 bg-slate-100 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"></div>
                    <div className="flex -space-x-1.5">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 border-2 border-slate-100 dark:border-slate-900 flex items-center justify-center text-[8px] font-bold text-slate-500 dark:text-slate-400 transition-colors shadow-sm dark:shadow-none">
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* UNA PLATAFORMA, TODO TU EQUIPO SINCRONIZADO */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-bold mb-4">
              <Sparkles className="w-3 h-3" />
              {t.home.syncBadge}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-6">
              {t.home.syncTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.home.syncDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1: Jurídico */}
            <div 
              onClick={() => {
                setCurrentPage('caio-service');
                window.scrollTo(0, 0);
              }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-700 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scale className="w-7 h-7 text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                {t.home.card1Title}
                <ArrowRight className="w-5 h-5 text-indigo-700 dark:text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.home.card1Desc}
              </p>
            </div>

            {/* Tarjeta 2: Técnico */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 rounded-xl bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-violet-600 dark:text-violet-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {t.home.card2Title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.home.card2Desc}
              </p>
            </div>

            {/* Tarjeta 3: Administrativo */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 flex items-center justify-center mb-6">
                <Files className="w-7 h-7 text-fuchsia-600 dark:text-fuchsia-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {t.home.card3Title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.home.card3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INGENIERÍA DE PLIEGOS PARA UNIDADES PROMOTORAS */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4">
              {t.home.engineeringTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.home.engineeringDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-violet-500 dark:hover:border-violet-500 transition-colors">
              <Calculator className="w-8 h-8 text-violet-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {t.home.engCard1Title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.home.engCard1Desc}
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
              <Filter className="w-8 h-8 text-indigo-700 dark:text-indigo-300 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {t.home.engCard2Title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.home.engCard2Desc}
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-violet-500 dark:hover:border-violet-500 transition-colors">
              <ListChecks className="w-8 h-8 text-violet-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {t.home.engCard3Title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.home.engCard3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SINCRONIZACIÓN TOTAL DEL EQUIPO */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-slate-50 to-white dark:from-indigo-900/40 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              {t.home.syncSectionTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 transition-colors duration-300">
              {t.home.syncSectionDesc}
            </p>
          </div>

          {/* El "Hilo Dorado" de la Contratación */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
            {/* Línea conectora de fondo (solo visible en desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0 transition-colors duration-300"></div>

            {/* Paso 1 */}
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-violet-500/20 border border-slate-200 dark:border-violet-500/50 flex items-center justify-center mb-6 shadow-sm dark:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-colors duration-300">
                <Settings className="w-10 h-10 text-violet-600 dark:text-violet-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{t.home.step1Title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4 transition-colors duration-300">
                {t.home.step1Desc}
              </p>
            </div>

            {/* Flecha 1 */}
            <div className="hidden md:flex items-center justify-center relative z-10 text-slate-400 dark:text-slate-600 animate-pulse transition-colors duration-300">
              <ArrowRight className="w-8 h-8" />
            </div>
            <div className="md:hidden flex items-center justify-center text-slate-400 dark:text-slate-600 animate-pulse my-2 transition-colors duration-300">
              <ArrowRight className="w-8 h-8 rotate-90" />
            </div>

            {/* Paso 2 */}
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-indigo-500/20 border border-slate-200 dark:border-indigo-500/50 flex items-center justify-center mb-6 shadow-sm dark:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-colors duration-300">
                <Scale className="w-10 h-10 text-indigo-600 dark:text-indigo-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{t.home.step2Title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4 transition-colors duration-300">
                {t.home.step2Desc}
              </p>
            </div>

            {/* Flecha 2 */}
            <div className="hidden md:flex items-center justify-center relative z-10 text-slate-400 dark:text-slate-600 animate-pulse transition-colors duration-300">
              <ArrowRight className="w-8 h-8" />
            </div>
            <div className="md:hidden flex items-center justify-center text-slate-400 dark:text-slate-600 animate-pulse my-2 transition-colors duration-300">
              <ArrowRight className="w-8 h-8 rotate-90" />
            </div>

            {/* Paso 3 */}
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 flex items-center justify-center mb-6 shadow-sm dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-colors duration-300">
                <Files className="w-10 h-10 text-slate-600 dark:text-slate-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{t.home.step3Title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4 transition-colors duration-300">
                {t.home.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACTO MEDIBLE */}
      <section className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50 via-white to-violet-50/50 dark:from-indigo-900/20 dark:via-slate-950 dark:to-violet-900/10 transition-colors duration-300"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-violet-600 dark:text-violet-300 uppercase transition-colors duration-300">{t.home.impactBadge}</h2>
            <p className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white transition-colors duration-300">{t.home.impactTitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 transition-colors duration-300">
            <div className="text-center px-4">
              <AnimatedMetricValue className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-300 dark:to-indigo-400 mb-4 transition-colors duration-300" value={t.home.impact1Val} />
              <div className="text-xl font-medium text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 transition-colors duration-300">
                <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-300" /> {t.home.impact1Title}
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">{t.home.impact1Desc}</p>
            </div>
            <div className="text-center px-4 pt-12 md:pt-0">
              <AnimatedMetricValue className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-violet-700 dark:from-violet-300 dark:to-violet-400 mb-4 transition-colors duration-300" value={t.home.impact2Val} />
              <div className="text-xl font-medium text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 transition-colors duration-300">
                <PieChart className="w-6 h-6 text-violet-600 dark:text-violet-300" /> {t.home.impact2Title}
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">{t.home.impact2Desc}</p>
            </div>
            <div className="text-center px-4 pt-12 md:pt-0">
              <AnimatedMetricValue className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-violet-600 dark:from-indigo-300 dark:to-violet-300 mb-4 transition-colors duration-300" value={t.home.impact3Val} />
              <div className="text-xl font-medium text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 transition-colors duration-300">
                <Activity className="w-6 h-6 text-violet-600 dark:text-violet-300" /> {t.home.impact3Title}
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">{t.home.impact3Desc}</p>
            </div>
          </div>

        </div>
      </section>

      <EfficiencyCalculator t={t} />

      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* 1. BLOQUE DE SEGURIDAD (ALINEACIÓN ENS) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-[4rem] -m-4 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="glass-card relative rounded-[3.5rem] p-8 transition-all duration-500 hover:shadow-emerald-500/10 md:p-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/80 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-full text-[10px] font-black tracking-[0.15em] uppercase mb-8 border border-emerald-200/50 dark:border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t.home.securityEcoSection.label}
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                  {t.home.securityEcoSection.title}
                </h2>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
                  {t.home.securityEcoSection.content}
                </p>

                <div className="flex flex-col sm:flex-row gap-10 items-center pt-10 border-t border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex flex-col items-center sm:items-start gap-4">
                    <div className="relative group/logo">
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-200 dark:bg-slate-800 rounded-[2rem] scale-95 opacity-50 blur-sm group-hover/logo:scale-100 transition-transform duration-500"></div>
                      <div className="relative w-48 h-32 md:w-56 md:h-40 bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 p-6 flex items-center justify-center transform group-hover/logo:-translate-y-2 transition-all duration-500">
                        <img 
                          src="/images/ENS.jpg" 
                          alt="ENS Logo" 
                          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal brightness-100 dark:brightness-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1">
                        {t.home.securityEcoSection.graphicText}
                      </p>
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 italic">
                        {t.home.securityEcoSection.mediaCategory}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="bg-white/50 dark:bg-slate-800/30 p-6 rounded-[2.5rem] border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <Lock className="w-6 h-6 text-emerald-500" />
                      </div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-snug">
                        {t.home.securityEcoSection.securityInfo}
                      </p>
                    </div>
                    
                    <div className="bg-blue-500/5 dark:bg-blue-500/10 p-6 rounded-[2.5rem] border border-blue-500/10 dark:border-blue-500/20 flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Shield className="w-6 h-6 text-blue-500" />
                      </div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-snug">
                        Protección de datos garantizada por redundancia en servidores europeos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. BLOQUE DE REFERENTES (INSPIRACIÓN Y SEGUIMIENTO) */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left mb-12"
              >
                <div className="inline-block px-4 py-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase mb-4">
                  {t.home.securityEcoSection.benchmarking}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-200 tracking-tight leading-tight">
                  {t.home.securityEcoSection.ecoTitle}
                </h3>
              </motion.div>

              <div className="grid gap-6">
                {t.home.securityEcoSection.ecosystems.map((eco: any, i: number) => (
                  <motion.div 
                    key={eco.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="group flex items-center gap-6 p-6 rounded-[2.5rem] bg-slate-50/30 dark:bg-slate-900/20 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-white dark:hover:bg-slate-900/50 hover:shadow-xl transition-all duration-500 cursor-default"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white dark:bg-white/95 border border-slate-100 dark:border-white shadow-sm flex items-center justify-center shrink-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:border-blue-500/40 group-hover:shadow-xl transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-3 p-3 overflow-hidden relative">
                      <img 
                        src={`/images/${eco.id.toUpperCase()}.png`} 
                        alt={eco.name} 
                        className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-all duration-700"></div>
                      
                      {/* Glow effect for dark mode visibility */}
                      <div className="absolute inset-0 bg-white opacity-0 dark:opacity-100 mix-blend-overlay"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {eco.name}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug font-medium">
                        {eco.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS GUSTA SEGUIR (ENTIDADES E INSTITUCIONES) */}
      <section className="bg-slate-950 py-24 md:py-32 relative overflow-hidden transition-colors duration-300">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              {t.home.followSection.title}
            </h2>
            <p className="text-lg text-slate-400 font-medium">
              {t.home.followSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.home.followSection.entities.map((entity: any, i: number) => (
              <motion.div
                key={entity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card group flex flex-col items-center rounded-3xl border border-white/10 p-8 text-center shadow-lg transition-all duration-500 hover:border-white/20"
              >
                <div className="h-20 flex items-center justify-center mb-8 w-full transition-all duration-500">
                  <img 
                    src={`/images/logos-entidades/${
                      entity.id === 'ccn' ? 'ccn-cert' : 
                      entity.id === 'eu' ? 'comision-europea' : 
                      entity.id === 'oirescon' ? 'oriescon' : 
                      entity.id
                    }.png`} 
                    alt={entity.name}
                    className="max-h-full max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 drop-shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-white font-bold text-sm mb-3 tracking-wide uppercase">
                  {entity.name}
                </h4>
                <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-relaxed font-medium transition-colors">
                  {entity.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );

  const renderSecuritySection = () => {
    const securityIcons = [
      <Globe className="w-8 h-8 text-emerald-500" />,
      <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      <Lock className="w-8 h-8 text-emerald-500" />,
      <RefreshCw className="w-8 h-8 text-emerald-500" />
    ];

    return (
      <div className="mt-32 mb-16 transition-colors duration-300">
        <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 rounded-[3rem] border border-slate-200 dark:border-emerald-500/20 shadow-2xl dark:shadow-emerald-500/10 p-12 md:p-16">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors duration-300">
                  {t.methodology.securitySection.title}
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                    {t.methodology.securitySection.subtitle}
                  </p>
                  {t.methodology.securitySection.euComplianceText && (
                    <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center relative shadow-lg shadow-blue-600/20 group">
                        <div className="absolute inset-0">
                          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite] opacity-40">
                            {[...Array(12)].map((_, i) => (
                              <text key={i} x="50" y="50" transform={`rotate(${30 * i}) translate(0, -38)`} className="fill-yellow-400 text-[12px]">★</text>
                            ))}
                          </svg>
                        </div>
                        <Shield className="w-6 h-6 text-white relative z-10" />
                      </div>
                      <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 leading-relaxed">
                        {t.methodology.securitySection.euComplianceText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Sovereign Cloud Seal */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-2xl backdrop-blur-md">
                  <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">
                    {t.methodology.securitySection.sealText}
                  </span>
                </div>
                {t.methodology.securitySection.sovereigntyBadge && (
                  <div className="flex items-center gap-4 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl shadow-blue-600/20 animate-pulse">
                    <Globe className="w-6 h-6" />
                    <span className="text-sm font-black uppercase tracking-wider">
                      {t.methodology.securitySection.sovereigntyBadge}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.methodology.securitySection.points.map((point: any, i: number) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 transition-all duration-500 shadow-xl dark:shadow-none">
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 w-fit group-hover:scale-110 transition-transform duration-500 border border-slate-100 dark:border-transparent">
                    {securityIcons[i]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 tracking-wide uppercase transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMetodologia = () => {
    const icons = [
      <Compass className="w-8 h-8" />, 
      <Folder className="w-8 h-8" />, 
      <Megaphone className="w-8 h-8" />, 
      <Gavel className="w-8 h-8" />, 
      <Box className="w-8 h-8" />, 
      <ThumbsUp className="w-8 h-8" />, 
      <Rocket className="w-8 h-8" />, 
      <ClipboardCheck className="w-8 h-8" />
    ];

    const renderUseCasesSection = () => {
      const useCaseIcons = [
        <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
        <Filter className="w-8 h-8 text-[#10B981] dark:text-green-400" />,
        <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
        <Scale className="w-8 h-8 text-[#10B981] dark:text-green-400" />
      ];

      return (
        <div className="mt-32 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              {t.methodology.useCases.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.methodology.useCases.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {t.methodology.useCases.items.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-700">
                    {useCaseIcons[i]}
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    {item.profile}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Situación:</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{item.situation}"</p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-[#10B981]">Solución PliegoFácil:</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.solution}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-blue-600">Resultado:</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{item.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-full font-bold transition-all border border-slate-200 dark:border-slate-800"
            >
              <ChevronUp className="w-5 h-5" />
              {t.methodology.useCases.cta}
            </button>
          </div>
        </div>
      );
    };

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D4ED8] dark:text-blue-400 mb-6">
              {t.methodology.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.methodology.subtitle}
            </p>
          </div>

          {/* Grid de Módulos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {t.methodology.mods.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -12, scale: 1.02 }}
                onClick={() => mod.details && setExpandedMod(i)}
                className="glass-card group relative flex cursor-pointer flex-col items-center overflow-hidden rounded-[3rem] p-10 text-center shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors"></div>
                
                <div className="relative w-20 h-20 rounded-3xl bg-emerald-500 flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/30 group-hover:rotate-6 transition-transform duration-500">
                  <div className="text-white">
                    {icons[i]}
                  </div>
                </div>
                <h3 className="relative text-xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
                  {mod.name}
                </h3>
                <p className="relative text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                  {mod.desc}
                </p>

                {/* Botón Acceso al Módulo */}
                <div className="mt-8 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a 
                    href={(mod as any).link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-emerald-500/20"
                  >
                    <span>{t.methodology.accessBtn || 'Acceder al módulo'}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal Central Grande (Fuera del loop para evitar bugs de hover/click) */}
          <AnimatePresence>
            {expandedMod !== null && t.methodology.mods[expandedMod] && (
              <div 
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
                onClick={() => setExpandedMod(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative border border-slate-100 dark:border-slate-800"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header del Modal */}
                  <div className="sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-10 px-8 md:px-12 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#10B981] flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                        {icons[expandedMod]}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#1D4ED8] dark:text-blue-400">
                        {t.methodology.mods[expandedMod].name}
                      </h3>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setExpandedMod(null);
                      }}
                      className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1D4ED8] hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 z-50"
                      aria-label="Close modal"
                    >
                      <X className="w-7 h-7" />
                    </button>
                  </div>

                  <div className="p-8 md:p-12 space-y-10">
                    {/* Propósito */}
                    <section>
                      <div className="flex items-center gap-3 text-[#10B981] font-bold mb-4">
                        <Target className="w-6 h-6" />
                        <span className="text-xl">{t.methodology.purposeLabel}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        {t.methodology.mods[expandedMod].details?.purpose}
                      </p>
                    </section>

                    {/* Estadios / Etapas */}
                    <section>
                      <div className="flex items-center gap-3 text-[#1D4ED8] dark:text-blue-400 font-bold mb-6">
                        <List className="w-6 h-6" />
                        <span className="text-xl">
                          {t.methodology.mods[expandedMod].details?.stagesLabel || t.methodology.stagesLabelDefault}
                        </span>
                      </div>
                      <div className="grid gap-4">
                        {t.methodology.mods[expandedMod].details?.stages.map((stage: string, idx: number) => {
                          const [title, ...descParts] = stage.split(' - ');
                          const description = descParts.join(' - ');
                          return (
                            <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold shrink-0 text-sm">
                                {idx + 1}
                              </span>
                              <div className="text-slate-700 dark:text-slate-300">
                                <span className="font-bold text-slate-900 dark:text-white block mb-1">{title}</span>
                                <span className="text-sm leading-relaxed opacity-80">{description}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>

                    {/* Potencia de la IA */}
                    <section>
                      <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-bold mb-6">
                        <Sparkles className="w-6 h-6" />
                        <span className="text-xl">{t.methodology.aiPowerLabel}</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {t.methodology.mods[expandedMod].details?.aiPower.map((ai: string, idx: number) => (
                          <div key={idx} className="bg-purple-50/50 dark:bg-purple-900/10 p-5 rounded-2xl border border-purple-100 dark:border-purple-900/30 text-slate-600 dark:text-slate-400 flex items-start gap-4">
                            <Zap className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                            <span className="text-sm leading-relaxed">{ai}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Seguridad */}
                    <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-[2.5rem] border border-blue-100 dark:border-blue-800/50">
                      <div className="flex items-center gap-3 text-blue-700 dark:text-blue-300 font-bold mb-3">
                        <ShieldCheck className="w-6 h-6" />
                        <span className="text-xl">{t.methodology.securityLabel}</span>
                      </div>
                      <p className="text-blue-600/90 dark:text-blue-300/80 text-lg leading-relaxed">
                        {t.methodology.mods[expandedMod].details?.security}
                      </p>
                    </section>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Sección de Beneficios Inferior */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t.methodology.benefit1Title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t.methodology.benefit1Desc}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t.methodology.benefit2Title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t.methodology.benefit2Desc}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t.methodology.benefit3Title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t.methodology.benefit3Desc}</p>
              </div>
            </div>
          </div>
          {renderSecuritySection()}
          {renderUseCasesSection()}
        </div>
      </motion.div>
    );
  };

  const renderContacto = () => {
    const hm = !!shouldReduceMotion;
    const d = getDiagnosticoPageCopy(lang);
    return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-20">
      <motion.section className="py-16 px-4" {...sectionEnter(hm, 'b', 0, 0.18)}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          <motion.div className="lg:col-span-8 py-2 pr-4" {...sectionEnter(hm, 'l', 0.06, 0.22)}>
            <div className="glass-card mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-slate-900 dark:text-white">
              {d.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[0.95] text-slate-900 dark:text-white mb-6">
              {d.title1}
              <span className="block">{d.title2}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl">
              {d.lead}
            </p>
          </motion.div>
          <motion.div className="glass-card lg:col-span-4 p-8" {...sectionEnter(hm, 'r', 0.1, 0.22)}>
            <h2 className="text-xl font-black mb-5">{d.calendarCardTitle}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-5">
              {d.calendarCardBody}
            </p>
            <a
              href="https://calendly.com/eric-martinez-acceleralia/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              {d.calendarCta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-10 px-4" {...sectionEnter(hm, 'tr', 0, 0.2)}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div className="glass-card p-8" {...sectionEnter(hm, 'l', 0.05)}>
            <h2 className="text-2xl font-black mb-5">{d.includesTitle}</h2>
            <div className="space-y-3">
              {d.includes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-500" />
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="glass-card p-8" {...sectionEnter(hm, 'r', 0.08)}>
            <h2 className="text-2xl font-black mb-5">{d.teamTitle}</h2>
            <div className="space-y-3">
              {d.teamItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-500" />
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-10 px-4" {...sectionEnter(hm, 'bl', 0, 0.18)}>
        <motion.div className="glass-card mx-auto max-w-7xl p-8" {...sectionEnter(hm, 'scale', 0.06)}>
          <h2 className="text-3xl font-black mb-8">{d.sessionTitle}</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {d.sessionBlocks.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card glass-card--sm p-5"
                {...sectionEnter(hm, (['t', 'b', 'l', 'r'] as const)[i], i * 0.06)}
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 mb-2">
                  {d.sessionBlockLabel} {i + 1}
                </p>
                <h3 className="text-xl font-black mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="py-20 px-4" {...sectionEnter(hm, 'b', 0, 0.22)}>
        <motion.div className="glass-card mx-auto max-w-5xl p-10 text-center" {...sectionEnter(hm, 'scale', 0.08)}>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-[0.95]">{d.closingTitle}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            {d.closingBody}
          </p>
          <a
            href="https://calendly.com/eric-martinez-acceleralia/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-bold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            {d.closingCta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.section>
    </motion.div>
    );
  };

  const renderLegal = () => {
    const hm = !!shouldReduceMotion;
    return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-8 flex justify-between items-center" {...sectionEnter(hm, 't', 0, 0.15)}>
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            &larr; {t.legalPage.backToHome}
          </button>
          <span className="glass-card inline-flex rounded-full px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
            {t.legalPage.lastUpdated}
          </span>
        </motion.div>

        <motion.div className="glass-card prose prose-slate max-w-none rounded-3xl p-8 md:p-12 dark:prose-invert" {...sectionEnter(hm, 'scale', 0.05, 0.12)}>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">{t.legalPage.title}</h1>
          
          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.idTitle}</h2>
          <p>{t.legalPage.idText1}</p>
          <p>{t.legalPage.idText2}</p>
          <p>{t.legalPage.idText3}</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t.legalPage.idPhone}</li>
            <li>{t.legalPage.idEmail}</li>
          </ul>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.hostingTitle}</h2>
          <p className="whitespace-pre-line">{t.legalPage.hostingText}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.usersTitle}</h2>
          <p>{t.legalPage.usersText1}</p>
          <p>{t.legalPage.usersText2}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.portalTitle}</h2>
          <p>{t.legalPage.portalText1}</p>
          <p>{t.legalPage.portalText2}</p>
          <p>{t.legalPage.portalText3}</p>
          <ul className="list-disc pl-5 space-y-2">
            {t.legalPage.portalList.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">{t.legalPage.portalText4}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.dataTitle}</h2>
          <p>{t.legalPage.dataText}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.intellectualTitle}</h2>
          <p>{t.legalPage.intellectualText1}</p>
          <p>{t.legalPage.intellectualText2}</p>
          <p>{t.legalPage.intellectualText3}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.exclusionTitle}</h2>
          <p>{t.legalPage.exclusionText1}</p>
          <ul className="list-[lower-alpha] pl-5 space-y-2">
            {t.legalPage.exclusionList.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">{t.legalPage.exclusionText2}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.modificationTitle}</h2>
          <p>{t.legalPage.modificationText1}</p>
          <p>{t.legalPage.modificationText2}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.linksTitle}</h2>
          <p>{t.legalPage.linksText}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.exclusionRightTitle}</h2>
          <p>{t.legalPage.exclusionRightText}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.generalTitle}</h2>
          <p>{t.legalPage.generalText}</p>

          <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{t.legalPage.lawTitle}</h2>
          <p>{t.legalPage.lawText}</p>
        </motion.div>

        <motion.div className="mt-8 flex justify-center" {...sectionEnter(hm, 'b', 0.08, 0.15)}>
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            &larr; {t.legalPage.backToHome}
          </button>
        </motion.div>
      </div>
    </motion.div>
    );
  };

  const renderPrivacy = () => {
    const hm = !!shouldReduceMotion;
    return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-8 flex justify-between items-center" {...sectionEnter(hm, 't', 0, 0.15)}>
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            &larr; {t.privacy.backToHome}
          </button>
          <span className="glass-card inline-flex rounded-full px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
            {t.privacy.lastUpdated}
          </span>
        </motion.div>

        <motion.div className="glass-card prose prose-slate max-w-none rounded-3xl p-8 md:p-12 dark:prose-invert" {...sectionEnter(hm, 'scale', 0.05, 0.12)}>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">{t.privacy.title}</h1>
          
          {t.privacy.content.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4">{section.title}</h2>
              {section.paragraphs && section.paragraphs.map((p, pIndex) => (
                <p key={pIndex}>{p}</p>
              ))}
              {section.list && (
                <ul className="list-disc pl-5 space-y-1">
                  {section.list.map((item, lIndex) => (
                    <li key={lIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              &larr; {t.privacy.backToHome}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
    );
  };

  const renderCookies = () => {
    const hm = !!shouldReduceMotion;
    return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-8 flex justify-between items-center" {...sectionEnter(hm, 't', 0, 0.15)}>
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            &larr; {t.cookies.backToHome}
          </button>
          <span className="glass-card inline-flex rounded-full px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
            {t.cookies.lastUpdated}
          </span>
        </motion.div>

        <motion.div className="glass-card prose prose-slate max-w-none rounded-3xl p-8 md:p-12 dark:prose-invert" {...sectionEnter(hm, 'scale', 0.05, 0.12)}>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8" data-i18n="cookies.title">{t.cookies.title}</h1>
          
          {(t.cookies.sections as any[]).map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-bold text-green-700 dark:text-green-500 mt-8 mb-4" data-i18n={`cookies.sections.${index}.title`}>{section.title}</h2>
              {section.content && <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6" data-i18n={`cookies.sections.${index}.content`}>{section.content}</p>}
              
              {section.list && (
                <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700 dark:text-slate-300">
                  {(section.list as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.extraContent && <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{section.extraContent}</p>}

              {section.types && (
                <div className="space-y-4 mb-6">
                  {(section.types as any[]).map((type, i) => (
                    <p key={i} className="text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white">{type.name}</strong> {type.desc}
                    </p>
                  ))}
                </div>
              )}

              {section.links && (
                <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700 dark:text-slate-300">
                  {(section.links as any[]).map((link, i) => (
                    <li key={i}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {section.googleLinks && (
                <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700 dark:text-slate-300">
                  {(section.googleLinks as string[]).map((link, i) => (
                    <li key={i}>
                      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">{section.footer}</p>}

              {section.cookieGroups && (section.cookieGroups as any[]).map((group, gIndex) => (
                <div key={gIndex} className="mt-8">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">{group.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{group.desc}</p>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse border border-slate-200 dark:border-slate-700">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50">
                          <th className="border border-slate-200 dark:border-slate-700 p-3 text-sm font-semibold text-left text-slate-700 dark:text-slate-300">{t.privacy.cookieTable.name}</th>
                          <th className="border border-slate-200 dark:border-slate-700 p-3 text-sm font-semibold text-left text-slate-700 dark:text-slate-300">{t.privacy.cookieTable.duration}</th>
                          <th className="border border-slate-200 dark:border-slate-700 p-3 text-sm font-semibold text-left text-slate-700 dark:text-slate-300">{t.privacy.cookieTable.desc}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(group.cookies as any[]).map((cookie, cIndex) => (
                          <tr key={cIndex} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="border border-slate-200 dark:border-slate-700 p-3 text-sm font-mono text-blue-600 dark:text-blue-400">{cookie.name}</td>
                            <td className="border border-slate-200 dark:border-slate-700 p-3 text-sm text-slate-600 dark:text-slate-400">{cookie.duration}</td>
                            <td className="border border-slate-200 dark:border-slate-700 p-3 text-sm text-slate-600 dark:text-slate-400">{cookie.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              &larr; {t.cookies.backToHome}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
    );
  };

  const renderSobreNosotros = () => {
    const hm = !!shouldReduceMotion;
    const s = getSobreNosotrosPageCopy(lang);
    return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero tipo editorial: texto izquierda, foto derecha (en movil: texto arriba, foto abajo) */}
        <motion.div
          className="mb-12 grid overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-sm dark:border-slate-700/80 dark:bg-slate-950/50 lg:grid-cols-2 lg:items-stretch"
          {...sectionEnter(hm, 'scale', 0, 0.18)}
        >
          <motion.div
            className="order-2 flex flex-col justify-center px-6 py-10 sm:px-10 lg:order-1 lg:px-12 lg:py-14"
            {...sectionEnter(hm, 'l', 0.06, 0.2)}
          >
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-amber-400">
              {s.kicker}
            </p>
            <h1 className="text-3xl font-black leading-[1.05] text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              {s.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {s.leadParts.before}
              <strong className="font-semibold text-slate-800 dark:text-slate-100">{s.leadParts.e1}</strong>
              {s.leadParts.mid1}
              <strong className="font-semibold text-slate-800 dark:text-slate-100">{s.leadParts.e2}</strong>
              {s.leadParts.mid2}
              <strong className="font-semibold text-slate-800 dark:text-slate-100">{s.leadParts.e3}</strong>
              {s.leadParts.after}
            </p>
            <button
              type="button"
              onClick={() => setCurrentPage('diagnostico')}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-black uppercase tracking-wide text-slate-900 shadow-md ring-1 ring-slate-200/90 transition-colors hover:bg-slate-50 active:scale-[0.99] dark:bg-white dark:text-slate-900 dark:ring-slate-600 dark:hover:bg-slate-100"
            >
              {s.cta}
              <ArrowRight className="h-4 w-4 text-slate-900" />
            </button>
          </motion.div>
          <motion.div
            className="relative order-1 min-h-[260px] lg:order-2 lg:min-h-[min(420px,52vh)]"
            {...sectionEnter(hm, 'r', 0.08, 0.22)}
          >
            <img
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1800&q=80"
              alt={s.heroImgAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent lg:bg-gradient-to-l" aria-hidden />
          </motion.div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="grid gap-4 md:grid-cols-2">
              {s.pillars.map((item, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-5"
                  {...sectionEnter(hm, (['tl', 'tr', 'bl', 'br'] as const)[i], i * 0.05)}
                >
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 mb-2">{item.title}</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div className="glass-card lg:col-span-4 p-8" {...sectionEnter(hm, 'r', 0.12, 0.22)}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt={s.sessionImgAlt} className="w-full h-36 object-cover rounded-md mb-5" loading="lazy" />
            <h2 className="text-xl font-black mb-5">{s.sidebarTitle}</h2>
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              {s.sidebarLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <button onClick={() => setCurrentPage('diagnostico')} className="mt-6 px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
              {s.sidebarCta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
    );
  };

  const renderComoTrabajamos = () => {
    const hm = !!shouldReduceMotion;
    const c = getComoTrabajamosPageCopy(lang);
    const dirs = ['l', 'r', 'bl', 'tr'] as const;
    return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 mb-6" {...sectionEnter(hm, 't', 0, 0.22)}>
          <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=80" alt={c.heroImgAlt} className="w-full h-56 object-cover" loading="lazy" />
        </motion.div>
        <motion.div {...sectionEnter(hm, 'r', 0.06)}>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{c.title}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-3xl">
            {c.subtitle}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {c.steps.map((item, i) => (
            <motion.div key={i} className="glass-card overflow-hidden rounded-xl" {...sectionEnter(hm, dirs[i], i * 0.06)}>
              <img src={item.image} alt={item.title} className="w-full h-44 object-cover" referrerPolicy="no-referrer" />
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 mb-2">{c.stepLabel(item.step)}</p>
                <h2 className="text-2xl font-black mb-2">{item.title}</h2>
                <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-8" {...sectionEnter(hm, 'b', 0.12)}>
          <button onClick={() => setCurrentPage('diagnostico')} className="px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
            {c.cta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </motion.div>
    );
  };

  const renderDemoModal = () => (
    <AnimatePresence>
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDemoModal(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#F3F4F6] w-full max-w-6xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowDemoModal(false);
              }}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#1D4ED8] transition-all shadow-sm active:scale-90"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column: Image */}
            <div className="md:w-[40%] relative min-h-[300px] md:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Representative" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent md:hidden" />
            </div>

            {/* Right Column: Form */}
            <div className="md:w-[60%] p-8 md:p-16 bg-white">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D4ED8] mb-4">
                  {t.demo.title}
                </h2>
                <p className="text-slate-500 mb-10 leading-relaxed">
                  {t.demo.subtitle}
                </p>

                {demoStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-100 p-4 rounded-xl text-center mb-6"
                  >
                    <p className="text-red-800 font-medium">{demoErrorMessage}</p>
                  </motion.div>
                )}

                {demoStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-100 p-8 rounded-3xl text-center"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCheck className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-green-800 font-bold text-xl mb-2">{t.demo.success}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleDemoSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">
                          {t.demo.name}
                        </label>
                        <input 
                          required
                          type="text"
                          value={demoFullName}
                          onChange={(e) => setDemoFullName(e.target.value)}
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">
                          {t.demo.web}
                        </label>
                        <input 
                          required
                          type="text"
                          value={demoOrganization}
                          onChange={(e) => setDemoOrganization(e.target.value)}
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">
                        {t.demo.phone}
                      </label>
                      <input 
                        required
                        type="tel"
                        placeholder="+34 600 000 000"
                        value={demoPhoneNumber}
                        onChange={(e) => setDemoPhoneNumber(e.target.value)}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">
                        {t.demo.email}
                      </label>
                      <input 
                        required
                        type="email"
                        value={demoEmail}
                        onChange={(e) => setDemoEmail(e.target.value)}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900"
                      />
                    </div>

                    <div className="flex items-center gap-3 py-2">
                      <input 
                        type="checkbox" 
                        id="demo-privacy"
                        required
                        checked={demoPrivacyAccepted}
                        onChange={(e) => setDemoPrivacyAccepted(e.target.checked)}
                        className="w-5 h-5 rounded border-slate-300 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                      />
                      <label htmlFor="demo-privacy" className="text-sm text-slate-600">
                        {t.demo.privacyText}
                        <button 
                          type="button"
                          onClick={() => { setShowDemoModal(false); setCurrentPage('privacy'); window.scrollTo(0,0); }}
                          className="text-[#1D4ED8] hover:underline font-medium"
                        >
                          {t.demo.privacyLink}
                        </button>
                      </label>
                    </div>

                    <div className="pt-4">
                      <div className="h-1 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
                        <div className="h-full w-full bg-[#10B981]" />
                      </div>
                      
                      <button 
                        disabled={demoStatus === 'loading' || !demoPrivacyAccepted}
                        type="submit"
                        className="w-full bg-[#10B981] text-white py-5 rounded-full font-bold text-xl hover:bg-[#059669] transition-all duration-300 shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 disabled:opacity-70"
                      >
                        {demoStatus === 'loading' ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            {t.contact.loading}
                          </>
                        ) : (
                          t.demo.submit
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const renderHomeV2 = () => {
    const hm = !!shouldReduceMotion;
    const h = getHomeV2Copy(lang);
    return (
    <motion.div
      initial={{ opacity: hm ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative pb-24 text-slate-900 dark:text-slate-100"
    >
      <motion.section
        initial={hm ? false : { opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 overflow-hidden border-b border-slate-200/70 dark:border-white/10"
      >
        <div
          className={
            theme === 'light'
              ? 'absolute inset-0 bg-transparent'
              : 'absolute inset-0 bg-slate-950/35'
          }
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[
            { left: '8%', top: '18%', size: 'w-1.5 h-1.5', delay: 0, duration: 7.5 },
            { left: '16%', top: '60%', size: 'w-1 h-1', delay: 0.8, duration: 8.2 },
            { left: '27%', top: '35%', size: 'w-1.5 h-1.5', delay: 1.2, duration: 7.1 },
            { left: '38%', top: '74%', size: 'w-1 h-1', delay: 0.4, duration: 8.8 },
            { left: '49%', top: '22%', size: 'w-2 h-2', delay: 1.6, duration: 9.2 },
            { left: '58%', top: '63%', size: 'w-1.5 h-1.5', delay: 0.3, duration: 8.1 },
            { left: '69%', top: '30%', size: 'w-1 h-1', delay: 1.9, duration: 7.8 },
            { left: '78%', top: '54%', size: 'w-1.5 h-1.5', delay: 0.9, duration: 8.6 },
            { left: '88%', top: '20%', size: 'w-2 h-2', delay: 1.1, duration: 9.4 },
            { left: '92%', top: '72%', size: 'w-1 h-1', delay: 0.6, duration: 7.4 },
            { left: '34%', top: '10%', size: 'w-1 h-1', delay: 1.4, duration: 8.7 },
            { left: '63%', top: '82%', size: 'w-1.5 h-1.5', delay: 0.2, duration: 7.9 },
            { left: '11%', top: '42%', size: 'w-2 h-2', delay: 0.7, duration: 8.4 },
            { left: '22%', top: '14%', size: 'w-1.5 h-1.5', delay: 1.8, duration: 9.1 },
            { left: '31%', top: '52%', size: 'w-1 h-1', delay: 0.5, duration: 7.3 },
            { left: '43%', top: '86%', size: 'w-1.5 h-1.5', delay: 1.5, duration: 8.3 },
            { left: '54%', top: '40%', size: 'w-2 h-2', delay: 0.1, duration: 9.6 },
            { left: '66%', top: '16%', size: 'w-1.5 h-1.5', delay: 1.3, duration: 8.9 },
            { left: '74%', top: '68%', size: 'w-2 h-2', delay: 0.4, duration: 7.7 },
            { left: '84%', top: '39%', size: 'w-1 h-1', delay: 1.6, duration: 8.5 },
            { left: '95%', top: '50%', size: 'w-1.5 h-1.5', delay: 0.9, duration: 9.3 }
          ].map((particle, i) => (
            <motion.span
              key={i}
              className={`absolute rounded-full ${
                theme === 'light'
                  ? 'bg-slate-500/25 shadow-[0_0_6px_rgba(71,85,105,0.18)]'
                  : 'bg-white/15 shadow-[0_0_6px_rgba(255,255,255,0.12)]'
              } ${particle.size}`}
              style={{ left: particle.left, top: particle.top }}
              animate={{
                y: [0, -14, 0],
                x: [0, 5, 0],
                opacity: theme === 'light' ? [0.08, 0.32, 0.08] : [0.06, 0.28, 0.06],
                scale: [1, 1.12, 1]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: particle.delay
              }}
            />
          ))}
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <motion.div initial={hm ? false : { opacity: 0, x: -44, y: 8 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.62, ease: 'easeOut', delay: 0.04 }} className="lg:col-span-8">
              <p className="glass-card mb-6 inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {h.hero.badge}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight text-slate-900 dark:text-white">
                {h.hero.title1}
                <span className="block text-amber-300">{h.hero.title2}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-100 max-w-3xl">
                {h.hero.lead}
              </p>
              <p className="mt-3 text-sm font-semibold text-amber-300">
                {h.hero.audience}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  onClick={() => setCurrentPage('diagnostico')}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-8 py-4 font-bold text-white shadow-lg shadow-slate-900/25 ring-1 ring-slate-800/30 transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:shadow-black/25 dark:ring-white/30 dark:hover:bg-slate-100"
                >
                  {h.hero.cta}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <div className="text-sm text-slate-600 dark:text-slate-200 self-center">{h.hero.subCta}</div>
              </div>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-300">
                {h.hero.disclaimer}
              </p>
            </motion.div>

            <motion.div
              initial={hm ? false : { opacity: 0, x: 48, y: -12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="glass-card p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">{h.timeline.badge}</p>
                <div className="space-y-3">
                  <div className="glass-card glass-card--sm p-3">
                    <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80" alt={h.alts.diagnostic} className="h-24 w-full object-cover rounded mb-3" loading="lazy" />
                    <p className="text-xs text-slate-600 dark:text-slate-300">{h.timeline.steps[0].day}</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{h.timeline.steps[0].title}</p>
                  </div>
                  <div className="glass-card glass-card--sm p-3">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt={h.alts.execution} className="h-24 w-full object-cover rounded mb-3" loading="lazy" />
                    <p className="text-xs text-slate-600 dark:text-slate-300">{h.timeline.steps[1].day}</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{h.timeline.steps[1].title}</p>
                  </div>
                  <div className="glass-card glass-card--sm p-3">
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" alt={h.alts.kpis} className="h-24 w-full object-cover rounded mb-3" loading="lazy" />
                    <p className="text-xs text-slate-600 dark:text-slate-300">{h.timeline.steps[2].day}</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{h.timeline.steps[2].title}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={hm ? false : { opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.58, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      >
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              text: h.urgency[0].text,
              image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
              from: 'l' as const
            },
            {
              text: h.urgency[1].text,
              image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
              from: 'b' as const
            },
            {
              text: h.urgency[2].text,
              image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
              from: 'r' as const
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={
                hm
                  ? false
                  : item.from === 'l'
                    ? { opacity: 0, x: -32, y: 0 }
                    : item.from === 'r'
                      ? { opacity: 0, x: 32, y: 0 }
                      : { opacity: 0, x: 0, y: 36 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.48, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="glass-card p-5"
            >
              <img src={item.image} alt={h.alts.businessContext} className="h-36 w-full object-cover rounded-md mb-4" loading="lazy" />
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={hm ? false : { opacity: 0, y: -28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={hm ? false : { opacity: 0, x: -40, rotate: -1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
            className="glass-card p-7"
          >
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80" alt={h.alts.misalignment} className="h-44 w-full object-cover rounded-md mb-5" loading="lazy" />
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300 font-bold mb-4">{h.problem.kicker}</p>
            <h2 className="mb-5 text-3xl font-black text-slate-900 dark:text-white">{h.problem.title}</h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              {h.problem.bullets.map((line) => (
                <li key={line}>- {line}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={hm ? false : { opacity: 0, x: 44, rotate: 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
            className="rounded-md border border-cyan-300/50 bg-gradient-to-br from-cyan-100/92 to-amber-100/92 p-7 shadow-md backdrop-blur-md dark:border-cyan-400/25 dark:from-cyan-900/45 dark:to-amber-900/35 dark:shadow-lg dark:backdrop-blur-lg"
          >
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80" alt={h.alts.roadmap} className="h-44 w-full object-cover rounded-md mb-5" loading="lazy" />
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300 font-bold mb-4">{h.solution.kicker}</p>
            <h2 className="mb-5 text-3xl font-black text-slate-900 dark:text-white">{h.solution.title}</h2>
            <ul className="space-y-3 text-slate-800 dark:text-slate-200">
              {h.solution.bullets.map((line) => (
                <li key={line}>- {line}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={hm ? false : { opacity: 0, scale: 0.94, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="glass-card p-7 ring-1 ring-cyan-400/25 dark:ring-cyan-400/35">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300 font-bold mb-3">{h.nextStep.kicker}</p>
          <h3 className="mb-3 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
            {h.nextStep.title}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            {h.nextStep.body}
          </p>
          <p className="font-bold text-slate-900 dark:text-white">
            {h.nextStep.highlight}
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={hm ? false : { opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.58, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      >
        <motion.h3
          initial={hm ? false : { opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-6 text-3xl font-black text-slate-900 drop-shadow-sm dark:text-white"
        >
          {h.compare.title}
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-5">
          <motion.div
            initial={hm ? false : { opacity: 0, x: -36, y: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
            className="glass-card p-6"
          >
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt={h.alts.consulting} className="h-32 w-full object-cover rounded-md mb-4" loading="lazy" />
            <p className="text-amber-300 text-xs font-bold mb-2">{h.compare.columns[0].label}</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">{h.compare.columns[0].nope}</p>
            <p className="font-semibold">{h.compare.columns[0].yep}</p>
          </motion.div>
          <motion.div
            initial={hm ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.52, delay: 0.1 }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
            className="glass-card p-6"
          >
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" alt={h.alts.freelancer} className="h-32 w-full object-cover rounded-md mb-4" loading="lazy" />
            <p className="text-amber-300 text-xs font-bold mb-2">{h.compare.columns[1].label}</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">{h.compare.columns[1].nope}</p>
            <p className="font-semibold">{h.compare.columns[1].yep}</p>
          </motion.div>
          <motion.div
            initial={hm ? false : { opacity: 0, x: 36, y: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
            className="glass-card p-6"
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt={h.alts.internalTeam} className="h-32 w-full object-cover rounded-md mb-4" loading="lazy" />
            <p className="text-amber-300 text-xs font-bold mb-2">{h.compare.columns[2].label}</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">{h.compare.columns[2].nope}</p>
            <p className="font-semibold">{h.compare.columns[2].yep}</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={hm ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      >
        <motion.h3
          initial={hm ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.48, ease: 'easeOut' }}
          className="mb-6 text-center text-3xl font-black text-slate-900 drop-shadow-sm dark:text-white"
        >
          {h.faq.title}
        </motion.h3>
        <div className="space-y-4">
          {h.faq.items.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={
                hm
                  ? false
                  : i === 0
                    ? { opacity: 0, x: -28, y: 8 }
                    : i === 1
                      ? { opacity: 0, y: 32 }
                      : { opacity: 0, x: 28, y: 8 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.42, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className="glass-card p-5"
            >
              <p className="mb-2 font-bold text-slate-900 dark:text-white">{q}</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">{a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
    );
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-transparent font-sans text-slate-900 transition-colors duration-300 selection:bg-green-200 dark:text-slate-50 dark:selection:bg-green-900">
      
      {showTopNav && (
        <motion.nav
        key={currentPage === 'home' ? `home-nav-${homeSplashDismissed}` : `nav-${currentPage}`}
        className="sticky top-0 z-50 relative w-full border-b border-slate-200/80 bg-white/92 shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/75"
        initial={
          currentPage === 'home' && homeSplashDismissed && !shouldReduceMotion
            ? { opacity: 0, y: -28 }
            : false
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1],
          delay:
            currentPage === 'home' && homeSplashDismissed && !shouldReduceMotion
              ? 0.08
              : 0,
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <Logo />

          <div className="hidden md:flex flex-1 justify-center items-center gap-6 text-sm font-semibold text-slate-800 dark:text-slate-300 min-w-0">
            {mainNavItems.map((item) => (
              <motion.button
                key={item.key}
                type="button"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                onClick={() => setCurrentPage(item.key)}
                className={`relative shrink-0 pb-1 transition-colors hover:text-amber-300 ${currentPage === item.key ? 'text-amber-300' : ''}`}
              >
                {item.label}
                {currentPage === item.key && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-amber-500"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setShowLangMenu((v) => !v);
                  setMobileNavOpen(false);
                }}
                className="flex items-center gap-1 rounded-md p-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white sm:p-0 sm:hover:bg-transparent sm:dark:hover:bg-transparent transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{lang}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {showLangMenu && (
                <div className="absolute top-full right-0 z-[70] mt-2 w-24 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                  {(['ES', 'EN', 'CA'] as const).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => {
                        void i18n.changeLanguage(legacyToI18nLng(l));
                        setShowLangMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-md p-2.5 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label={theme === 'dark' ? marketingHeader?.themeLight ?? 'Modo claro' : marketingHeader?.themeDark ?? 'Modo oscuro'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              type="button"
              className="hidden min-[420px]:inline-flex shrink-0 rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:px-5 sm:py-2.5 sm:text-sm"
              onClick={() => setCurrentPage('diagnostico')}
            >
              {marketingNav?.agendarDiagnostico ?? 'Agendar diagnostico'}
            </button>

            <button
              type="button"
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-white/80 text-slate-800 shadow-sm transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
              onClick={() => {
                setMobileNavOpen((o) => !o);
                setShowLangMenu(false);
              }}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-main-nav"
              aria-label={mobileNavOpen ? marketingHeader?.closeMenu ?? 'Cerrar menu' : marketingHeader?.openMenu ?? 'Abrir menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileNavOpen ? 'close' : 'open'}
                  initial={shouldReduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.85 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.85 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="flex items-center justify-center"
                >
                  {mobileNavOpen ? <X className="h-5 w-5" strokeWidth={2.25} /> : <Menu className="h-5 w-5" strokeWidth={2.25} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileNavOpen && (
            <>
              <motion.div
                key="mobile-nav-backdrop"
                className="fixed inset-0 top-16 z-[60] bg-slate-950/55 backdrop-blur-[2px] md:hidden"
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.26 }}
                onClick={() => setMobileNavOpen(false)}
                aria-hidden
              />
              <motion.div
                key="mobile-nav-panel"
                id="mobile-main-nav"
                role="dialog"
                aria-modal="true"
                aria-label={marketingHeader?.navMenuLabel ?? 'Menu de navegacion'}
                className="fixed left-0 right-0 top-16 z-[61] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-white/20 bg-white/95 px-3 py-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 md:hidden"
                initial={shouldReduceMotion ? false : { opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.ul
                  className="flex flex-col gap-1"
                  initial="hidden"
                  animate="show"
                  variants={mobileNavListVariants}
                >
                  {mainNavItems.map((item) => (
                    <motion.li key={item.key} variants={mobileNavItemVariants}>
                      <button
                        type="button"
                        onClick={() => setCurrentPage(item.key)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[15px] font-semibold transition-colors active:scale-[0.99] ${
                          currentPage === item.key
                            ? 'bg-amber-500/15 text-amber-300'
                            : 'text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800/80'
                        }`}
                      >
                        <span>{item.label}</span>
                        {currentPage === item.key && (
                          <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
                        )}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: 0.28 }}
                  className="mt-3 border-t border-slate-200/80 pt-3 dark:border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => setCurrentPage('diagnostico')}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white shadow-md dark:bg-white dark:text-slate-900"
                  >
                    {marketingNav?.agendarDiagnostico ?? 'Agendar diagnostico'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        </motion.nav>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="relative flex flex-grow flex-col">
        <GlobalVideoBackdrop
          shouldReduceMotion={!!shouldReduceMotion}
          overlayClassName={
            theme === 'light'
              ? 'bg-gradient-to-b from-white/58 via-slate-100/48 to-white/55'
              : 'bg-slate-950/52'
          }
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative z-10 flex flex-grow flex-col"
          >
            {currentPage === 'home' && (
              <>
                <HomeEntradaSplash
                  open={homeSplashBlocking}
                  onDismiss={() => {
                    setHomeSplashDismissed(true);
                    try {
                      window.localStorage.setItem(HOME_ENTRADA_SPLASH_SEEN_KEY, '1');
                    } catch {
                      /* modo privado / storage deshabilitado */
                    }
                  }}
                  shouldReduceMotion={!!shouldReduceMotion}
                />
                <motion.div
                  initial={false}
                  animate={
                    homeSplashDismissed || shouldReduceMotion ? homeContentShown : homeContentHidden
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.88,
                    delay: shouldReduceMotion ? 0 : homeSplashDismissed ? 0.1 : 0,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: {
                      duration: shouldReduceMotion ? 0 : 0.65,
                      delay: shouldReduceMotion ? 0 : homeSplashDismissed ? 0.06 : 0
                    },
                    filter: {
                      duration: shouldReduceMotion ? 0 : 0.6,
                      delay: shouldReduceMotion ? 0 : homeSplashDismissed ? 0.04 : 0
                    }
                  }}
                  aria-hidden={homeSplashBlocking}
                  className={
                    homeSplashBlocking ? 'pointer-events-none flex flex-grow select-none flex-col' : 'flex flex-grow flex-col'
                  }
                >
                  {renderHomeV2()}
                </motion.div>
              </>
            )}
            {currentPage === 'como-trabajamos' && renderComoTrabajamos()}
            {currentPage === 'resultados' && (
              <CasosDeUso
                lang={lang}
                onContact={() => setCurrentPage('diagnostico')}
              />
            )}
            {currentPage === 'preus-i-serveis' && (
              <PricingServices 
                t={t} 
                onBookDemo={() => setShowDemoModal(true)} 
                onContactClick={() => setCurrentPage('diagnostico')}
              />
            )}
            {currentPage === 'sobre-nosotros' && renderSobreNosotros()}
            {currentPage === 'diagnostico' && renderContacto()}
            {currentPage === 'contacto' && renderContacto()}
            {currentPage === 'legal' && renderLegal()}
            {currentPage === 'privacy' && renderPrivacy()}
            {currentPage === 'cookies' && renderCookies()}
            {currentPage === 'caio-service' && (
              <TecnicoContratacion
                lang={lang}
                onBookDemo={() => setShowDemoModal(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 mt-auto border-t border-white/15 bg-white/75 py-12 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/75">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-1.5 opacity-80">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm border border-slate-900 bg-slate-100 dark:border-white dark:bg-white/10">
              <Cpu className="h-4 w-4 text-slate-900 dark:text-white" strokeWidth={2} />
            </div>
            <span className="ml-1 text-xl font-bold tracking-tight text-slate-800 transition-colors duration-300 dark:text-white">
              <span className="text-slate-950 dark:text-white">CAIO</span>
              <span className="text-amber-400">Experts.ai</span>
            </span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left transition-colors duration-300">
            © {new Date().getFullYear()} CAIOExperts.ai. {t.footer.rights}
          </div>
          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <button 
              onClick={() => {
                setCurrentPage('legal');
                window.scrollTo(0, 0);
              }} 
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.footer.legal}
            </button>
            <button 
              onClick={() => {
                setCurrentPage('privacy');
                window.scrollTo(0, 0);
              }} 
              className="hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </button>
            <button 
              onClick={() => {
                setCurrentPage('cookies');
                window.scrollTo(0, 0);
              }} 
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.footer.cookies}
            </button>
          </div>
        </div>
      </footer>
      {renderDemoModal()}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
