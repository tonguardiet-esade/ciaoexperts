import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Cpu, Menu, X } from 'lucide-react';
import { ShinyText } from '../components/designpro/ShinyText';
import { GlobalVideoBackdrop } from '../components/GlobalVideoBackdrop';

const NAV_LINKS = [
  'Home',
  'About Us',
  'Courses',
  'Instructors',
  'Testimonials',
  'Blog',
] as const;

export default function DesignProHero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const prev = document.title;
    document.title = 'CAIOExperts.ai';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent font-sans text-white antialiased">
      <GlobalVideoBackdrop
        shouldReduceMotion={!!prefersReducedMotion}
        overlayClassName="bg-black/45"
      />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="CAIOExperts.ai"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-white/90 bg-white/5 shadow-[0_0_18px_rgba(255,255,255,0.08)]">
              <Cpu className="h-5 w-5 text-white" strokeWidth={2} aria-hidden />
            </span>
            <span className="text-base font-bold tracking-tight">
              <span className="text-white">CAIO</span>
              <span className="text-amber-400">Experts.ai</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            <div className="flex items-center gap-0.5 rounded-full border border-gray-700 px-2 py-2">
              {NAV_LINKS.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="rounded-full px-3 py-1.5 text-sm text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {label}
                </a>
              ))}
              <a
                href="#"
                className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-white/80 transition-colors duration-200 hover:text-white"
              >
                Contact us
                <ArrowUpRight className="h-3.5 w-3.5 opacity-90" aria-hidden />
              </a>
            </div>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-white/5 bg-black/95 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
                {NAV_LINKS.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="rounded-lg px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact us
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative z-10 flex h-screen w-full flex-col overflow-hidden px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
            <div className="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-2 lg:gap-10">
              <p className="text-sm leading-relaxed text-white/80 md:text-base">
                We deliver transformative programs that empower emerging product designers with cutting-edge expertise
                and vision to thrive globally.
              </p>
              <p className="text-sm leading-relaxed text-white/80 md:text-base lg:text-right">
                8000+ Talented Designers Launched !
              </p>
            </div>

            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <p className="mb-4 text-xs tracking-tight text-white/80 sm:text-sm">
                Seats for Next Program Opening Soon
              </p>

              <h1 className="text-5xl leading-[0.85] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                <span className="block font-medium text-white">Become</span>
                <span className="mt-1 block font-medium leading-[0.85] tracking-tighter">
                  <ShinyText className="font-medium">Product Leader.</ShinyText>
                </span>
              </h1>

              <motion.a
                href="#"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-white/10 transition-colors duration-200 hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
                whileTap={{ scale: 0.98 }}
              >
                Apply for Next Enrollment
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 md:h-5 md:w-5"
                  aria-hidden
                />
              </motion.a>
            </div>
          </div>
      </section>
    </div>
  );
}
