import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlobalVideoBackdrop } from './components/GlobalVideoBackdrop';

gsap.registerPlugin(ScrollTrigger);

const ROTATING_WORDS = ['Design', 'Create', 'Inspire'];
const ROLES = ['Creative', 'Fullstack', 'Founder', 'Scholar'];

const PROJECTS = [
  {
    title: 'Automotive Motion',
    span: 'md:col-span-7',
    aspect: 'aspect-[16/10]',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Urban Architecture',
    span: 'md:col-span-5',
    aspect: 'aspect-[4/5] md:aspect-[3/4]',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Human Perspective',
    span: 'md:col-span-5',
    aspect: 'aspect-[4/5] md:aspect-[3/4]',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Brand Identity',
    span: 'md:col-span-7',
    aspect: 'aspect-[16/10]',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80',
  },
];

const JOURNAL = [
  {
    title: 'On systems thinking in product design',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
    read: '6 min read',
    date: 'Mar 12, 2026',
  },
  {
    title: 'Why craft still matters at scale',
    img: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=400&q=80',
    read: '4 min read',
    date: 'Feb 28, 2026',
  },
  {
    title: 'Notes on motion and restraint',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80',
    read: '8 min read',
    date: 'Feb 02, 2026',
  },
  {
    title: 'Building a calmer creative practice',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80',
    read: '5 min read',
    date: 'Jan 19, 2026',
  },
];

const EXPLORATIONS = [
  {
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    rot: -6,
  },
  {
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    rot: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80',
    rot: -3,
  },
  {
    img: 'https://images.unsplash.com/photo-1557672172-298e0ef52e85?auto=format&fit=crop&w=800&q=80',
    rot: 5,
  },
  {
    img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80',
    rot: -5,
  },
  {
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
    rot: 3,
  },
];

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 900);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const start = performance.now();
    const duration = 2700;
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.floor((elapsed / duration) * 100));
      setCount(next);
      if (elapsed < duration) {
        raf = requestAnimationFrame(tick);
      } else if (!completedRef.current) {
        completedRef.current = true;
        setCount(100);
        window.setTimeout(onComplete, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10 md:top-10"
      >
        Portfolio
      </motion.p>

      <div className="flex flex-1 items-center justify-center px-6">
        <div className="relative h-[4.5rem] w-full max-w-4xl text-center md:h-[5.5rem] lg:h-[6.5rem]">
          <AnimatePresence mode="wait">
            <motion.span
              key={ROTATING_WORDS[wordIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center text-4xl font-display italic text-text-primary/80 md:text-6xl lg:text-7xl"
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 font-display tabular-nums text-6xl text-text-primary md:bottom-10 md:right-10 md:text-8xl lg:text-9xl">
        {String(count).padStart(3, '0')}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left shadow-[0_0_8px_rgba(137,170,204,0.35)]"
          style={{ transform: `scaleX(${count / 100})` }}
        />
      </div>
    </>
  );
}

function GradientHoverButton({
  children,
  variant,
  href,
  onClick,
}: {
  children: ReactNode;
  variant: 'solid' | 'outline';
  href?: string;
  onClick?: () => void;
}) {
  if (variant === 'solid') {
    return (
      <a
        href={href}
        onClick={onClick}
        className="group relative inline-flex rounded-full p-[2px] transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full opacity-0 accent-gradient transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10 rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
          {children}
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-flex rounded-full p-[2px] transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full opacity-0 accent-gradient transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
        {children}
      </span>
    </a>
  );
}

function NavPillLink({
  label,
  active,
  id,
}: {
  label: string;
  active: boolean;
  id: string;
}) {
  return (
    <a
      href={`#${id}`}
      className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
        active
          ? 'bg-stroke/50 text-text-primary'
          : 'text-muted hover:bg-stroke/50 hover:text-text-primary'
      }`}
    >
      {label}
    </a>
  );
}

export default function PortfolioIndex() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [roleIndex, setRoleIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const heroRootRef = useRef<HTMLDivElement>(null);
  const exploreSectionRef = useRef<HTMLElement>(null);
  const explorePinRef = useRef<HTMLDivElement>(null);
  const exploreColLeftRef = useRef<HTMLDivElement>(null);
  const exploreColRightRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleLoadingDone = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const sections = ['home', 'work', 'journal', 'explore', 'contact'];
    const obs = sections.map((sid) => {
      const el = document.getElementById(sid);
      if (!el) return null;
      const o = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveSection(sid);
          });
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, [isLoading]);

  useLayoutEffect(() => {
    if (isLoading || !heroRootRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
      ).fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1, delay: 0.3 },
        '-=0.75',
      );
    }, heroRootRef);
    return () => ctx.revert();
  }, [isLoading]);

  useLayoutEffect(() => {
    if (isLoading) return;
    const section = exploreSectionRef.current;
    const pin = explorePinRef.current;
    const left = exploreColLeftRef.current;
    const right = exploreColRightRef.current;
    if (!section || !pin || !left || !right) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        pin: pin,
        pinSpacing: false,
      });
      gsap.to(left, {
        y: -140,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
      gsap.to(right, {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, section);
    return () => ctx.revert();
  }, [isLoading]);

  useLayoutEffect(() => {
    if (isLoading || !marqueeRef.current) return;
    const el = marqueeRef.current;
    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [isLoading]);

  const marqueeText = 'BUILDING THE FUTURE • '.repeat(10);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="min-h-screen bg-transparent font-body text-text-primary antialiased"
    >
      <GlobalVideoBackdrop
        shouldReduceMotion={!!prefersReducedMotion}
        overlayClassName="bg-black/55"
      />
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="portfolio-loader"
            className="fixed inset-0 z-[9999] flex flex-col bg-bg font-body text-text-primary"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <LoadingScreen onComplete={handleLoadingDone} />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
        <div
          className={`inline-flex items-center rounded-full border border-white/10 bg-surface/90 px-2 py-2 backdrop-blur-md transition-shadow ${
            navScrolled ? 'shadow-md shadow-black/10' : ''
          }`}
        >
          <a href="#home" className="group ml-1 flex h-9 w-9 shrink-0 items-center justify-center">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#89AACC] to-[#4E85BF] p-[2px] transition-transform group-hover:scale-110 group-hover:bg-gradient-to-tl">
              <span className="flex h-[calc(100%-4px)] w-[calc(100%-4px)] items-center justify-center rounded-full bg-bg font-display text-[13px] italic text-text-primary">
                JA
              </span>
            </span>
          </a>
          <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />
          <div className="flex items-center gap-0.5 sm:gap-1">
            <NavPillLink label="Home" active={activeSection === 'home'} id="home" />
            <NavPillLink label="Work" active={activeSection === 'work'} id="work" />
            <NavPillLink label="Resume" active={activeSection === 'contact'} id="contact" />
          </div>
          <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />
          <a
            href="mailto:hello@michaelsmith.com"
            className="group relative mr-1 rounded-full p-[2px]"
          >
            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity accent-gradient group-hover:opacity-100" />
            <span className="relative flex items-center gap-1 rounded-full bg-surface/95 px-3 py-1.5 text-xs backdrop-blur-md transition-colors sm:px-4 sm:py-2 sm:text-sm">
              Say hi <span aria-hidden>↗</span>
            </span>
          </a>
        </div>
      </nav>

      <section id="home" className="relative z-10 flex min-h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-48 bg-gradient-to-t from-bg/90 to-transparent backdrop-blur-[2px]" />

        <div ref={heroRootRef} className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-32 text-center md:px-10">
          <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted opacity-0">
            COLLECTION &apos;26
          </p>
          <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary opacity-0 md:text-8xl lg:text-9xl">
            Michael Smith
          </h1>
          <p className="blur-in mb-6 max-w-md text-base text-muted opacity-0 md:text-lg">
            A{' '}
            <span key={roleIndex} className="animate-role-fade-in inline-block font-display italic text-text-primary">
              {ROLES[roleIndex]}
            </span>{' '}
            lives in Chicago.
          </p>
          <p className="blur-in mb-12 max-w-md text-sm text-muted opacity-0 md:text-base">
            Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
          </p>
          <div className="blur-in flex flex-wrap justify-center gap-4 opacity-0">
            <GradientHoverButton variant="solid" href="#work">
              See Works
            </GradientHoverButton>
            <GradientHoverButton variant="outline" href="mailto:hello@michaelsmith.com">
              Reach out…
            </GradientHoverButton>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
          <div className="relative h-10 w-px overflow-hidden bg-stroke">
            <span className="absolute left-0 top-0 block h-1/2 w-full accent-gradient animate-scroll-down opacity-80" />
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 bg-bg/88 py-12 backdrop-blur-xl md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-10 md:mb-14"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">Selected Work</span>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-medium text-text-primary md:text-4xl lg:text-5xl">
                  Featured{' '}
                  <span className="font-display italic text-text-primary/90">projects</span>
                </h2>
                <p className="mt-3 max-w-lg text-sm text-muted md:text-base">
                  A selection of projects I&apos;ve worked on, from concept to launch.
                </p>
              </div>
              <a
                href="#work"
                className="group relative mt-2 hidden items-center gap-2 self-start rounded-full p-[2px] md:inline-flex"
              >
                <span className="absolute inset-0 rounded-full opacity-0 transition-opacity accent-gradient group-hover:opacity-100" />
                <span className="relative rounded-full bg-bg px-5 py-2 text-sm text-text-primary transition-colors group-hover:bg-surface">
                  View all work <span aria-hidden>→</span>
                </span>
              </a>
            </div>
          </motion.header>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className={`glass-card group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/50 ${p.span} ${p.aspect}`}
              >
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '4px 4px',
                  }}
                />
                <div className="absolute inset-0 flex items-end justify-center bg-bg/70 p-6 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100">
                  <span className="relative rounded-full p-[2px] accent-gradient">
                    <span className="block rounded-full bg-text-primary px-5 py-2 text-sm text-bg">
                      View — <span className="font-display italic">{p.title}</span>
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="relative z-10 bg-bg/88 py-16 backdrop-blur-xl md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-10 md:mb-14"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">Journal</span>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-medium text-text-primary md:text-4xl lg:text-5xl">
                  Recent{' '}
                  <span className="font-display italic text-text-primary/90">thoughts</span>
                </h2>
                <p className="mt-3 max-w-lg text-sm text-muted md:text-base">
                  Writing on process, tools, and the edges of digital craft.
                </p>
              </div>
              <a
                href="#journal"
                className="group relative mt-2 hidden items-center gap-2 self-start rounded-full p-[2px] md:inline-flex"
              >
                <span className="absolute inset-0 rounded-full opacity-0 transition-opacity accent-gradient group-hover:opacity-100" />
                <span className="relative rounded-full bg-bg px-5 py-2 text-sm text-text-primary transition-colors group-hover:bg-surface">
                  View all <span aria-hidden>→</span>
                </span>
              </a>
            </div>
          </motion.header>

          <div className="flex flex-col gap-4">
            {JOURNAL.map((j) => (
              <a
                key={j.title}
                href="#journal"
                className="flex flex-col gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:rounded-full sm:gap-6"
              >
                <img src={j.img} alt="" className="h-28 w-full rounded-2xl object-cover sm:h-20 sm:w-28 sm:rounded-full" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-text-primary">{j.title}</p>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted">
                    <span>{j.read}</span>
                    <span>{j.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="explore" ref={exploreSectionRef} className="relative z-10 min-h-[300vh] bg-bg/88 backdrop-blur-xl">
        <div ref={explorePinRef} className="relative h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Explorations</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-medium text-text-primary md:text-5xl lg:text-6xl">
              Visual <span className="font-display italic">playground</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted md:text-base">
              Experiments in form, color, and motion — not client work.
            </p>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto mt-8 rounded-full border border-stroke bg-surface px-6 py-2 text-sm text-text-primary transition-colors hover:border-white/20"
            >
              Dribbble
            </a>
          </div>

          <div className="absolute inset-0 z-20 mx-auto grid max-w-[1400px] grid-cols-2 items-center justify-items-center gap-12 px-4 md:gap-40 md:px-10">
            <div ref={exploreColLeftRef} className="flex flex-col items-center gap-16 pt-24 md:gap-24 md:pt-32">
              {EXPLORATIONS.slice(0, 3).map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(item.img)}
                  className="aspect-square w-full max-w-[280px] cursor-pointer overflow-hidden rounded-2xl border border-stroke shadow-lg transition-transform hover:scale-[1.02] md:max-w-[320px]"
                  style={{ transform: `rotate(${item.rot}deg)` }}
                >
                  <img src={item.img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div ref={exploreColRightRef} className="flex flex-col items-center gap-16 pb-24 md:gap-24 md:pb-32">
              {EXPLORATIONS.slice(3, 6).map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(item.img)}
                  className="aspect-square w-full max-w-[280px] cursor-pointer overflow-hidden rounded-2xl border border-stroke shadow-lg transition-transform hover:scale-[1.02] md:max-w-[320px]"
                  style={{ transform: `rotate(${item.rot}deg)` }}
                >
                  <img src={item.img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-bg/88 py-16 backdrop-blur-xl md:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 text-center md:grid-cols-3 md:px-10 lg:px-16">
          {[
            { label: 'Years Experience', value: '20+' },
            { label: 'Projects Done', value: '95+' },
            { label: 'Satisfied Clients', value: '200%' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl italic text-text-primary md:text-6xl">{s.value}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="relative z-10 overflow-hidden bg-bg/90 pt-16 backdrop-blur-xl md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />

        <div className="relative z-10 pb-8 md:pb-12">
          <div className="overflow-hidden border-y border-white/5 py-4">
            <div ref={marqueeRef} className="flex w-max whitespace-nowrap font-display text-3xl italic text-text-primary/90 md:text-4xl">
              <span className="pr-8">{marqueeText}</span>
              <span className="pr-8" aria-hidden>
                {marqueeText}
              </span>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-[1200px] flex-col items-center gap-6 px-6 md:px-10">
            <a
              href="mailto:hello@michaelsmith.com"
              className="group relative rounded-full p-[2px] accent-gradient"
            >
              <span className="block rounded-full bg-bg px-10 py-4 text-lg text-text-primary transition-colors group-hover:bg-surface">
                hello@michaelsmith.com
              </span>
            </a>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
              {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map((s) => (
                <a key={s} href="#" className="transition-colors hover:text-text-primary">
                  {s}
                </a>
              ))}
              <span className="flex items-center gap-2 text-text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for projects
              </span>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {lightbox && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/80 p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-4xl rounded-lg object-contain"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
