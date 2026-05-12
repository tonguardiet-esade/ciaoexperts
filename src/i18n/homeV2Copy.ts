import type { LangKey } from './marketingSitePages';

export type HomeV2Copy = {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    lead: string;
    audience: string;
    cta: string;
    subCta: string;
    disclaimer: string;
  };
  timeline: {
    badge: string;
    steps: { day: string; title: string }[];
  };
  urgency: { text: string }[];
  problem: {
    kicker: string;
    title: string;
    bullets: string[];
  };
  solution: {
    kicker: string;
    title: string;
    bullets: string[];
  };
  nextStep: {
    kicker: string;
    title: string;
    body: string;
    highlight: string;
  };
  compare: {
    title: string;
    columns: { label: string; nope: string; yep: string }[];
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  alts: {
    businessContext: string;
    diagnostic: string;
    execution: string;
    kpis: string;
    misalignment: string;
    roadmap: string;
    consulting: string;
    freelancer: string;
    internalTeam: string;
  };
};

const ES: HomeV2Copy = {
  hero: {
    badge: 'CAIOExperts.ai | Chief AI Officer as a Service',
    title1: 'Te ponemos un Chief AI Officer',
    title2: 'dentro de tu empresa, sin contratarlo.',
    lead: 'Ponemos un CAIO dentro de tu empresa para convertir iniciativas sueltas en direccion, velocidad y resultados medibles.',
    audience: 'Para empresas de 50-500 empleados con presion por ejecutar IA.',
    cta: 'Agenda tu diagnostico de IA (30 min)',
    subCta: 'Sin compromiso · Roadmap inicial · Capacidad limitada',
    disclaimer: 'No es para empresas sin presupuesto o en fase de prueba.',
  },
  timeline: {
    badge: 'En 90 dias',
    steps: [
      { day: 'Dia 30', title: 'Diagnostico + prioridades por ROI' },
      { day: 'Dia 60', title: 'Casos de uso en ejecucion' },
      { day: 'Dia 90', title: 'KPIs activos + plan de escalado' },
    ],
  },
  urgency: [
    { text: 'Cada mes sin estrategia de IA es ventaja para tu competencia.' },
    { text: 'La IA sin liderazgo solo multiplica coste y desorden.' },
    { text: 'Si no decides ahora, en 12 meses vas a llegar tarde.' },
  ],
  problem: {
    kicker: 'Problema',
    title: 'El problema no es la IA. Es la falta de liderazgo.',
    bullets: [
      'Iniciativas sin direccion comun',
      'Pilotos que no escalan',
      'Equipos desalineados',
      'Dependencia de proveedores para decidir',
    ],
  },
  solution: {
    kicker: 'Solucion',
    title: 'Actuamos como tu Chief AI Officer',
    bullets: [
      'Definimos estrategia de IA alineada a negocio',
      'Priorizamos por impacto y viabilidad',
      'Lideramos ejecucion con tu equipo',
      'Escalamos lo que funciona con KPIs',
    ],
  },
  nextStep: {
    kicker: 'Categoria next step',
    title: 'CTOaaS fue el paso uno. CAIOaaS embedded es el siguiente.',
    body: 'No es un perfil suelto. Es un modelo de liderazgo de IA integrado en tu empresa para definir estrategia, ejecutar iniciativas y consolidar adopcion cultural.',
    highlight: 'No vendemos IA. Vendemos liderazgo externalizado para convertir IA en resultados.',
  },
  compare: {
    title: 'No somos consultores. Somos parte de tu equipo.',
    columns: [
      { label: 'Consultoras', nope: 'No: Recomendaciones y slides', yep: 'Si: Direccion y ejecucion continua' },
      { label: 'Freelancers', nope: 'No: Soluciones sueltas', yep: 'Si: Prioridades y roadmap de negocio' },
      { label: 'CTO interno', nope: 'No: Foco tecnico', yep: 'Si: Foco en impacto y adopcion' },
    ],
  },
  faq: {
    title: 'FAQ de decision',
    items: [
      {
        q: '¿Por que no contratar un CAIO full-time?',
        a: 'Porque necesitas liderazgo senior inmediato, con menos riesgo y sin coste fijo C-Level.',
      },
      {
        q: '¿Cuanto tarda en verse impacto?',
        a: 'En semanas ves claridad y en 60-90 dias tienes ejecucion y KPIs en marcha.',
      },
      {
        q: '¿Como trabajais con mi equipo?',
        a: 'Nos integramos con direccion y responsables para coordinar negocio, operacion y tecnologia.',
      },
    ],
  },
  alts: {
    businessContext: 'Contexto de negocio e IA',
    diagnostic: 'Diagnostico IA',
    execution: 'Ejecucion de casos IA',
    kpis: 'KPIs y escalado IA',
    misalignment: 'Desalineacion tecnologica',
    roadmap: 'Equipo ejecutando roadmap IA',
    consulting: 'Consultoria tradicional',
    freelancer: 'Freelancer trabajando solo',
    internalTeam: 'Equipo interno tecnico',
  },
};

const EN: HomeV2Copy = {
  hero: {
    badge: 'CAIOExperts.ai | Chief AI Officer as a Service',
    title1: 'We place a Chief AI Officer',
    title2: 'inside your company—without hiring one full-time.',
    lead: 'We embed a CAIO to turn scattered initiatives into direction, speed and measurable business outcomes.',
    audience: 'For 50–500 employee companies under pressure to execute on AI.',
    cta: 'Book your AI diagnostic (30 min)',
    subCta: 'No commitment · Initial roadmap · Limited capacity',
    disclaimer: 'Not for companies with no budget or in pure experimentation mode.',
  },
  timeline: {
    badge: 'In 90 days',
    steps: [
      { day: 'Day 30', title: 'Diagnostic + ROI-prioritised focus' },
      { day: 'Day 60', title: 'Use cases in execution' },
      { day: 'Day 90', title: 'Active KPIs + scale plan' },
    ],
  },
  urgency: [
    { text: 'Every month without an AI strategy is an advantage for your competitors.' },
    { text: 'AI without leadership only multiplies cost and disorder.' },
    { text: 'If you do not decide now, in 12 months you will be late.' },
  ],
  problem: {
    kicker: 'Problem',
    title: 'The problem is not AI. It is the lack of leadership.',
    bullets: [
      'Initiatives with no shared direction',
      'Pilots that do not scale',
      'Misaligned teams',
      'Dependence on vendors to decide',
    ],
  },
  solution: {
    kicker: 'Solution',
    title: 'We operate as your Chief AI Officer',
    bullets: [
      'We define an AI strategy aligned to the business',
      'We prioritise by impact and feasibility',
      'We lead execution with your team',
      'We scale what works with KPIs',
    ],
  },
  nextStep: {
    kicker: 'Next step category',
    title: 'CTOaaS was step one. Embedded CAIOaaS is the next.',
    body: 'It is not a lone profile. It is an integrated AI leadership model to define strategy, run initiatives and consolidate cultural adoption.',
    highlight: 'We do not sell AI. We sell outsourced leadership to turn AI into results.',
  },
  compare: {
    title: 'We are not consultants. We are part of your team.',
    columns: [
      { label: 'Consultancies', nope: 'No: Recommendations and slides', yep: 'Yes: Direction and continuous execution' },
      { label: 'Freelancers', nope: 'No: One-off solutions', yep: 'Yes: Priorities and business roadmap' },
      { label: 'Internal CTO', nope: 'No: Tech-only focus', yep: 'Yes: Impact and adoption focus' },
    ],
  },
  faq: {
    title: 'Decision FAQ',
    items: [
      {
        q: 'Why not hire a full-time CAIO?',
        a: 'Because you need senior leadership now, with less risk and without a fixed C-level cost.',
      },
      {
        q: 'How long until we see impact?',
        a: 'Clarity within weeks; in 60–90 days you have execution and KPIs running.',
      },
      {
        q: 'How do you work with my team?',
        a: 'We integrate with leadership and owners to align business, operations and technology.',
      },
    ],
  },
  alts: {
    businessContext: 'Business context and AI',
    diagnostic: 'AI diagnostic',
    execution: 'AI use case execution',
    kpis: 'KPIs and AI scaling',
    misalignment: 'Technology misalignment',
    roadmap: 'Team executing AI roadmap',
    consulting: 'Traditional consulting',
    freelancer: 'Freelancer working solo',
    internalTeam: 'Internal technical team',
  },
};

const CA: HomeV2Copy = {
  hero: {
    badge: 'CAIOExperts.ai | Chief AI Officer as a Service',
    title1: 'Et posem un Chief AI Officer',
    title2: 'dins la teva empresa, sense contractar-lo.',
    lead: "Posem un CAIO dins la teva empresa per convertir iniciatives disperses en direcció, velocitat i resultats mesurables.",
    audience: "Per a empreses de 50-500 treballadors amb pressió per executar IA.",
    cta: 'Reserva el teu diagnòstic d’IA (30 min)',
    subCta: 'Sense compromís · Full de ruta inicial · Capacitat limitada',
    disclaimer: 'No és per a empreses sense pressupost o en fase de prova.',
  },
  timeline: {
    badge: 'En 90 dies',
    steps: [
      { day: 'Dia 30', title: 'Diagnòstic + prioritats per ROI' },
      { day: 'Dia 60', title: "Casos d'ús en execució" },
      { day: 'Dia 90', title: 'KPIs actius + pla d’escalat' },
    ],
  },
  urgency: [
    { text: 'Cada mes sense estratègia d’IA és avantatge per a la teva competència.' },
    { text: 'La IA sense lideratge només multiplica cost i desordre.' },
    { text: 'Si no decideixes ara, d’aquí a 12 mesos arribaràs tard.' },
  ],
  problem: {
    kicker: 'Problema',
    title: 'El problema no és la IA. És la manca de lideratge.',
    bullets: [
      'Iniciatives sense direcció comuna',
      'Pilots que no escalen',
      'Equips desalineats',
      'Dependència de proveïdors per decidir',
    ],
  },
  solution: {
    kicker: 'Solució',
    title: 'Actuem com el teu Chief AI Officer',
    bullets: [
      'Definim estratègia d’IA alineada al negoci',
      'Prioritzem per impacte i viabilitat',
      'Liderem l’execució amb el teu equip',
      'Escalem el que funciona amb KPIs',
    ],
  },
  nextStep: {
    kicker: 'Categoria següent pas',
    title: 'CTOaaS va ser el pas u. CAIOaaS integrat és el següent.',
    body: 'No és un perfil aïllat. És un model de lideratge d’IA integrat a la teva empresa per definir estratègia, executar iniciatives i consolidar l’adopció cultural.',
    highlight: 'No venem IA. Venem lideratge externalitzat per convertir la IA en resultats.',
  },
  compare: {
    title: 'No som consultors. Som part del teu equip.',
    columns: [
      { label: 'Consultores', nope: 'No: Recomanacions i diapositives', yep: 'Sí: Direcció i execució contínua' },
      { label: 'Freelancers', nope: 'No: Solucions aïllades', yep: 'Sí: Prioritats i full de ruta de negoci' },
      { label: 'CTO intern', nope: 'No: Focus tècnic', yep: 'Sí: Focus en impacte i adopció' },
    ],
  },
  faq: {
    title: 'FAQ de decisió',
    items: [
      {
        q: 'Per què no contractar un CAIO a temps complet?',
        a: 'Perquè necessites lideratge senior immediat, amb menys risc i sense cost fix de C-level.',
      },
      {
        q: 'Quant triga a veure’s impacte?',
        a: 'En setmanes veus claredat i en 60–90 dies tens execució i KPIs en marxa.',
      },
      {
        q: 'Com treballeu amb el meu equip?',
        a: 'Ens integrem amb direcció i responsables per coordinar negoci, operació i tecnologia.',
      },
    ],
  },
  alts: {
    businessContext: 'Context de negoci i IA',
    diagnostic: 'Diagnòstic IA',
    execution: "Execució de casos d'IA",
    kpis: 'KPIs i escalat IA',
    misalignment: 'Desalineació tecnològica',
    roadmap: "Equip executant full de ruta d'IA",
    consulting: 'Consultoria tradicional',
    freelancer: 'Freelancer treballant sol',
    internalTeam: 'Equip intern tècnic',
  },
};

const BY_LANG: Record<LangKey, HomeV2Copy> = {
  ES,
  EN,
  CA,
};

const LANG_ALIASES: Record<string, LangKey> = {
  ES: 'ES',
  EN: 'EN',
  CA: 'CA',
  es: 'ES',
  en: 'EN',
  ca: 'CA',
};

export function getHomeV2Copy(lang: string): HomeV2Copy {
  const key = LANG_ALIASES[lang] ?? 'ES';
  return BY_LANG[key];
}
