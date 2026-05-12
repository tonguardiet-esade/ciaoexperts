import type { LangKey } from './marketingSitePages';

const LANG_ALIASES: Record<string, LangKey> = {
  ES: 'ES',
  EN: 'EN',
  CA: 'CA',
  es: 'ES',
  en: 'EN',
  ca: 'CA',
};

function keyOf(lang: string): LangKey {
  return LANG_ALIASES[lang] ?? 'ES';
}

/** Página Diagnóstico (landing comercial, no el formulario legacy de contact). */
export type DiagnosticoPageCopy = {
  badge: string;
  title1: string;
  title2: string;
  lead: string;
  calendarCardTitle: string;
  calendarCardBody: string;
  calendarCta: string;
  includesTitle: string;
  includes: string[];
  teamTitle: string;
  teamItems: string[];
  sessionTitle: string;
  sessionBlockLabel: string;
  sessionBlocks: { title: string; desc: string }[];
  closingTitle: string;
  closingBody: string;
  closingCta: string;
};

/** Sobre nosotros */
export type SobreNosotrosPageCopy = {
  kicker: string;
  title: string;
  leadParts: {
    before: string;
    e1: string;
    mid1: string;
    e2: string;
    mid2: string;
    e3: string;
    after: string;
  };
  cta: string;
  heroImgAlt: string;
  pillars: { title: string; desc: string }[];
  sidebarTitle: string;
  sidebarLines: string[];
  sidebarCta: string;
  sessionImgAlt: string;
};

/** Cómo trabajamos */
export type ComoTrabajamosPageCopy = {
  heroImgAlt: string;
  title: string;
  subtitle: string;
  stepLabel: (n: string) => string;
  steps: { step: string; title: string; desc: string; image: string }[];
  cta: string;
};

const DIAG_ES: DiagnosticoPageCopy = {
  badge: 'Diagnostico',
  title1: 'En 45 minutos sabras',
  title2: 'donde esta tu mayor retorno en IA.',
  lead: 'Esta es la llamada para ordenar prioridades, eliminar ruido y definir un plan realista de ejecucion.',
  calendarCardTitle: 'CTA a calendario',
  calendarCardBody: 'Sin compromiso. Sesion ejecutiva enfocada a negocio.',
  calendarCta: 'Reservar en calendario',
  includesTitle: 'Que incluye el diagnostico',
  includes: [
    'Revision ejecutiva de situacion actual',
    'Mapa de oportunidades priorizadas',
    'Identificacion de bloqueos criticos',
    'Primer plan de accion 30-60-90',
  ],
  teamTitle: 'Que obtiene tu equipo',
  teamItems: [
    'Claridad sobre que hacer primero',
    'Criterio para decidir que no hacer',
    'Direccion compartida entre negocio y operacion',
    'Siguientes pasos accionables desde el dia 1',
  ],
  sessionTitle: 'Que analizamos en la sesion',
  sessionBlockLabel: 'Bloque',
  sessionBlocks: [
    { title: 'Objetivos', desc: 'Metas de negocio y urgencias de direccion.' },
    { title: 'Procesos', desc: 'Cuellos de botella y puntos de friccion actuales.' },
    { title: 'Capacidad', desc: 'Equipo, herramientas y nivel de adopcion real.' },
    { title: 'Impacto', desc: 'Areas donde el retorno puede ser mas rapido.' },
  ],
  closingTitle: 'Empieza facil: una llamada, un plan claro.',
  closingBody: 'Objetivo de esta pagina: convertir visitas en llamadas cualificadas.',
  closingCta: 'Agendar diagnostico',
};

const DIAG_EN: DiagnosticoPageCopy = {
  badge: 'Diagnostic',
  title1: 'In 45 minutes you will know',
  title2: 'where your biggest AI return is.',
  lead: 'This call is about prioritising, cutting noise and defining a realistic execution plan.',
  calendarCardTitle: 'Book on the calendar',
  calendarCardBody: 'No commitment. Executive session focused on the business.',
  calendarCta: 'Book on Calendly',
  includesTitle: 'What the diagnostic includes',
  includes: [
    'Executive review of the current situation',
    'Map of prioritised opportunities',
    'Identification of critical blockers',
    'First 30-60-90 action plan',
  ],
  teamTitle: 'What your team gets',
  teamItems: [
    'Clarity on what to do first',
    'Criteria to decide what not to do',
    'Shared direction between business and operations',
    'Actionable next steps from day one',
  ],
  sessionTitle: 'What we analyse in the session',
  sessionBlockLabel: 'Block',
  sessionBlocks: [
    { title: 'Goals', desc: 'Business targets and leadership urgencies.' },
    { title: 'Processes', desc: 'Bottlenecks and current friction points.' },
    { title: 'Capability', desc: 'Team, tools and real adoption level.' },
    { title: 'Impact', desc: 'Areas where return can be fastest.' },
  ],
  closingTitle: 'Start simple: one call, one clear plan.',
  closingBody: 'Goal of this page: turn visits into qualified calls.',
  closingCta: 'Book a diagnostic',
};

const DIAG_CA: DiagnosticoPageCopy = {
  badge: 'Diagnòstic',
  title1: 'En 45 minuts sabràs',
  title2: 'on és el teu major retorn en IA.',
  lead: 'Aquesta trucada serveix per ordenar prioritats, eliminar soroll i definir un pla d’execució realista.',
  calendarCardTitle: 'Reserva al calendari',
  calendarCardBody: 'Sense compromís. Sessió executiva centrada en el negoci.',
  calendarCta: 'Reservar al calendari',
  includesTitle: 'Què inclou el diagnòstic',
  includes: [
    'Revisió executiva de la situació actual',
    'Mapa d’oportunitats prioritzades',
    'Identificació de bloquejos crítics',
    'Primer pla d’acció 30-60-90',
  ],
  teamTitle: 'Què obté el teu equip',
  teamItems: [
    'Claredat sobre què fer primer',
    'Criteri per decidir què no fer',
    'Direcció compartida entre negoci i operació',
    'Següents passos accionables des del dia 1',
  ],
  sessionTitle: 'Què analitzem a la sessió',
  sessionBlockLabel: 'Bloc',
  sessionBlocks: [
    { title: 'Objectius', desc: 'Metes de negoci i urgències de direcció.' },
    { title: 'Processos', desc: 'Colls d’ampolla i punts de fricció actuals.' },
    { title: 'Capacitat', desc: 'Equip, eines i nivell d’adopció real.' },
    { title: 'Impacte', desc: 'Àrees on el retorn pot ser més ràpid.' },
  ],
  closingTitle: 'Comença fàcil: una trucada, un pla clar.',
  closingBody: 'Objectiu d’aquesta pàgina: convertir visites en trucades qualificades.',
  closingCta: 'Reservar diagnòstic',
};

const SOBRE_ES: SobreNosotrosPageCopy = {
  kicker: 'CAIOExperts.ai',
  title: 'Sobre nosotros',
  leadParts: {
    before: 'Somos un equipo que combina ',
    e1: 'estrategia',
    mid1: ', ',
    e2: 'operacion',
    mid2: ' y ',
    e3: 'ejecucion de IA',
    after:
      ' para empresas que necesitan resultados, no teoria. Trabajamos mano a mano con direccion para convertir la IA en ventaja competitiva real.',
  },
  cta: 'Agendar diagnostico',
  heroImgAlt: 'Equipo liderando transformacion IA',
  pillars: [
    { title: 'Quienes somos', desc: 'Perfil senior de negocio + tecnologia con enfoque ejecutivo.' },
    { title: 'Experiencia', desc: 'Transformacion en empresas con necesidades reales de velocidad y foco.' },
    { title: 'Enfoque', desc: 'No somos consultores de slides: ejecutamos con tu equipo.' },
    { title: 'Filosofia', desc: 'Claridad, priorizacion y resultados medibles por encima del ruido.' },
  ],
  sidebarTitle: 'Confianza antes de hablar',
  sidebarLines: [
    'Modelo embedded: estamos dentro del dia a dia del negocio.',
    'Direccion semanal con foco en decisiones y avance.',
    'KPIs y trazabilidad para saber que funciona.',
  ],
  sidebarCta: 'Agendar diagnostico',
  sessionImgAlt: 'Sesion ejecutiva',
};

const SOBRE_EN: SobreNosotrosPageCopy = {
  kicker: 'CAIOExperts.ai',
  title: 'About us',
  leadParts: {
    before: 'We are a team that combines ',
    e1: 'strategy',
    mid1: ', ',
    e2: 'operations',
    mid2: ' and ',
    e3: 'AI execution',
    after:
      ' for companies that need results, not theory. We work hand in hand with leadership to turn AI into real competitive advantage.',
  },
  cta: 'Book a diagnostic',
  heroImgAlt: 'Team leading AI transformation',
  pillars: [
    { title: 'Who we are', desc: 'Senior business + technology profile with an executive mindset.' },
    { title: 'Experience', desc: 'Transformation in companies that need real speed and focus.' },
    { title: 'Focus', desc: 'We are not slide consultants: we execute with your team.' },
    { title: 'Philosophy', desc: 'Clarity, prioritisation and measurable results over noise.' },
  ],
  sidebarTitle: 'Trust before we talk',
  sidebarLines: [
    'Embedded model: we are inside the day-to-day of the business.',
    'Weekly leadership touchpoints focused on decisions and progress.',
    'KPIs and traceability to know what works.',
  ],
  sidebarCta: 'Book a diagnostic',
  sessionImgAlt: 'Executive session',
};

const SOBRE_CA: SobreNosotrosPageCopy = {
  kicker: 'CAIOExperts.ai',
  title: 'Sobre nosaltres',
  leadParts: {
    before: 'Som un equip que combina ',
    e1: 'estratègia',
    mid1: ', ',
    e2: 'operació',
    mid2: ' i ',
    e3: 'execució d’IA',
    after:
      ' per a empreses que necessiten resultats, no teoria. Treballem mà a mà amb direcció per convertir la IA en avantatge competitiu real.',
  },
  cta: 'Reservar diagnòstic',
  heroImgAlt: 'Equip liderant transformació IA',
  pillars: [
    { title: 'Qui som', desc: 'Perfil sènior de negoci + tecnologia amb enfoc executiu.' },
    { title: 'Experiència', desc: 'Transformació en empreses amb necessitats reals de velocitat i focus.' },
    { title: 'Enfoc', desc: 'No som consultors de diapositives: executem amb el teu equip.' },
    { title: 'Filosofia', desc: 'Claredat, priorització i resultats mesurables per sobre del soroll.' },
  ],
  sidebarTitle: 'Confiança abans de parlar',
  sidebarLines: [
    'Model incrustat: som dins del dia a dia del negoci.',
    'Direcció setmanal amb focus en decisions i avanç.',
    'KPIs i traçabilitat per saber què funciona.',
  ],
  sidebarCta: 'Reservar diagnòstic',
  sessionImgAlt: 'Sessió executiva',
};

const COMO_ES: ComoTrabajamosPageCopy = {
  heroImgAlt: 'Proceso de implementacion IA',
  title: 'Como trabajamos',
  subtitle: 'Proceso simple para empezar rapido: Diagnostico, Roadmap, Implementacion y Escalado.',
  stepLabel: (n) => `Paso ${n}`,
  steps: [
    { step: '01', title: 'Diagnostico', desc: 'Detectamos oportunidades, bloqueos y prioridades.', image: '/images/Portada2.webp' },
    { step: '02', title: 'Roadmap', desc: 'Definimos plan 30-60-90 con responsables y objetivos.', image: '/images/Portada3.webp' },
    { step: '03', title: 'Implementacion', desc: 'Acompañamos ejecucion para que las iniciativas salgan.', image: '/images/Portada4.jpg' },
    { step: '04', title: 'Escalado', desc: 'Escalamos lo que funciona con KPIs de negocio.', image: '/images/Portada5.jpg' },
  ],
  cta: 'Empezar con diagnostico',
};

const COMO_EN: ComoTrabajamosPageCopy = {
  heroImgAlt: 'AI implementation process',
  title: 'How we work',
  subtitle: 'A simple process to start fast: Diagnostic, Roadmap, Implementation and Scale.',
  stepLabel: (n) => `Step ${n}`,
  steps: [
    { step: '01', title: 'Diagnostic', desc: 'We spot opportunities, blockers and priorities.', image: '/images/Portada2.webp' },
    { step: '02', title: 'Roadmap', desc: 'We define a 30-60-90 plan with owners and goals.', image: '/images/Portada3.webp' },
    { step: '03', title: 'Implementation', desc: 'We support execution so initiatives actually ship.', image: '/images/Portada4.jpg' },
    { step: '04', title: 'Scale', desc: 'We scale what works with business KPIs.', image: '/images/Portada5.jpg' },
  ],
  cta: 'Start with a diagnostic',
};

const COMO_CA: ComoTrabajamosPageCopy = {
  heroImgAlt: 'Procés d’implementació IA',
  title: 'Com treballem',
  subtitle: 'Procés simple per començar ràpid: Diagnòstic, Full de ruta, Implementació i Escalat.',
  stepLabel: (n) => `Pas ${n}`,
  steps: [
    { step: '01', title: 'Diagnòstic', desc: 'Detectem oportunitats, bloquejos i prioritats.', image: '/images/Portada2.webp' },
    { step: '02', title: 'Full de ruta', desc: 'Definim pla 30-60-90 amb responsables i objectius.', image: '/images/Portada3.webp' },
    { step: '03', title: 'Implementació', desc: 'Acompanyem l’execució perquè les iniciatives surtin endavant.', image: '/images/Portada4.jpg' },
    { step: '04', title: 'Escalat', desc: 'Escalem el que funciona amb KPIs de negoci.', image: '/images/Portada5.jpg' },
  ],
  cta: 'Començar amb diagnòstic',
};

const DIAG: Record<LangKey, DiagnosticoPageCopy> = { ES: DIAG_ES, EN: DIAG_EN, CA: DIAG_CA };
const SOBRE: Record<LangKey, SobreNosotrosPageCopy> = { ES: SOBRE_ES, EN: SOBRE_EN, CA: SOBRE_CA };
const COMO: Record<LangKey, ComoTrabajamosPageCopy> = { ES: COMO_ES, EN: COMO_EN, CA: COMO_CA };

export function getDiagnosticoPageCopy(lang: string): DiagnosticoPageCopy {
  return DIAG[keyOf(lang)];
}

export function getSobreNosotrosPageCopy(lang: string): SobreNosotrosPageCopy {
  return SOBRE[keyOf(lang)];
}

export function getComoTrabajamosPageCopy(lang: string): ComoTrabajamosPageCopy {
  return COMO[keyOf(lang)];
}
