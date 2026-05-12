/** Textos de marketing (CAIO as a Service + Resultados) por idioma. */

export type LangKey = 'ES' | 'EN' | 'CA';

export type CaioServiceCopy = {
  badge: string;
  title: string;
  heroLead: string;
  resumenTitle: string;
  resumenBullets: [string, string, string, string];
  operateTitle: string;
  blockLabel: string;
  workModel: { title: string; desc: string }[];
  includesTitle: string;
  includesList: string[];
  excludesTitle: string;
  excludesList: string[];
  monthlyTitle: string;
  deliverables: { title: string; desc: string }[];
  fitTitle: string;
  fitList: string[];
  noFitTitle: string;
  noFitList: string[];
  ninetyTitle: string;
  ninetySteps: { label: string; title: string; desc: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

export type ResultadosCopy = {
  badge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroLead: string;
  measureTitle: string;
  measureBullets: [string, string, string];
  examplesTitle: string;
  examplesSubtitle: string;
  casesTitle: string;
  casePrefix: string;
  caseTypes: { title: string; before: string; intervention: string; impact: string }[];
  labels: { antes: string; intervencion: string; impacto: string };
  metricsTitle: string;
  kpis: string[];
  antesVsTitle: string;
  antesVsAntes: string;
  antesVsAntesBody: string;
  antesVsDespues: string;
  antesVsDespuesBody: string;
  footerTitle: string;
  footerBody: string;
  footerNote: string;
  ctaButton: string;
};

const CAIO_ES: CaioServiceCopy = {
  badge: 'Servicio ejecutivo fractional',
  title: 'CAIO as a Service',
  heroLead:
    'Liderazgo de IA para direccion general: definimos prioridades, gobernamos ejecucion y medimos impacto sin necesidad de contratar un C-Level interno a tiempo completo.',
  resumenTitle: 'Resumen rapido',
  resumenBullets: [
    'Empresas 50-500 empleados',
    'Modelo embedded + fractional',
    'Objetivo: ROI y velocidad de ejecucion',
    'Trabajo junto a CEO/COO y lideres de area'
  ],
  operateTitle: 'Como operamos dentro de tu empresa',
  blockLabel: 'Bloque',
  workModel: [
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
  ],
  includesTitle: 'Incluye',
  includesList: [
    'Comite de decision con direccion',
    'Roadmap 30-60-90 con responsables',
    'Acompanamiento de implementacion',
    'KPIs ejecutivos y seguimiento continuo'
  ],
  excludesTitle: 'No incluye',
  excludesList: [
    'Consultoria de slides sin ejecucion',
    'Automatizaciones aisladas sin estrategia',
    'Sustitucion de tu CTO o estructura tecnica interna'
  ],
  monthlyTitle: 'Que recibe direccion cada mes',
  deliverables: [
    { title: 'Mapa de oportunidades IA', desc: 'Listado priorizado por impacto y viabilidad.' },
    { title: 'Plan 30-60-90', desc: 'Acciones, responsables, hitos y metricas por iniciativa.' },
    { title: 'Ritmo de direccion', desc: 'Cadencia de comite y decisiones de seguimiento.' },
    { title: 'Cuadro de mando ejecutivo', desc: 'KPIs de negocio para evaluar retorno real.' }
  ],
  fitTitle: 'Encaja si...',
  fitList: [
    'Eres CEO/COO y necesitas foco en IA con retorno.',
    'Tienes presion competitiva y poco margen para experimentar.',
    'Tu equipo ya empezo con IA, pero falta direccion ejecutiva.'
  ],
  noFitTitle: 'No encaja si...',
  noFitList: [
    'Buscas solo un proveedor tecnico por horas.',
    'No hay sponsor directivo para ejecutar decisiones.',
    'No existe voluntad de medir impacto en negocio.'
  ],
  ninetyTitle: 'Que pasa en 90 dias',
  ninetySteps: [
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
  ],
  ctaTitle: 'Quieres validar si encaja en tu empresa?',
  ctaBody:
    'En una sesion ejecutiva revisamos situacion actual, prioridades y plan inicial para empezar con foco.',
  ctaButton: 'Reservar diagnostico'
};

const CAIO_EN: CaioServiceCopy = {
  badge: 'Fractional executive service',
  title: 'CAIO as a Service',
  heroLead:
    'AI leadership for the C-suite: we set priorities, govern execution and measure impact—without hiring a full-time internal C-level.',
  resumenTitle: 'Quick summary',
  resumenBullets: [
    'Companies with 50–500 employees',
    'Embedded + fractional model',
    'Goal: ROI and execution speed',
    'Working alongside CEO/COO and functional leaders'
  ],
  operateTitle: 'How we operate inside your company',
  blockLabel: 'Block',
  workModel: [
    {
      title: 'Direction and governance',
      desc: 'We define priorities, owners and decision criteria with an executive committee.'
    },
    {
      title: 'Roadmap and execution',
      desc: 'We turn goals into a 30-60-90 plan and break each initiative into concrete actions.'
    },
    {
      title: 'Team adoption',
      desc: 'We support area leaders to ensure real implementation, not theory.'
    },
    {
      title: 'Impact tracking',
      desc: 'We track progress with business KPIs to keep focus and accountability.'
    }
  ],
  includesTitle: 'Includes',
  includesList: [
    'Executive decision committee',
    '30-60-90 roadmap with owners',
    'Implementation support',
    'Executive KPIs and continuous follow-up'
  ],
  excludesTitle: 'Does not include',
  excludesList: [
    'Slide-only consulting without execution',
    'Isolated automations without strategy',
    'Replacing your CTO or internal tech structure'
  ],
  monthlyTitle: 'What leadership receives every month',
  deliverables: [
    { title: 'AI opportunity map', desc: 'Prioritised list by impact and feasibility.' },
    { title: '30-60-90 plan', desc: 'Actions, owners, milestones and metrics per initiative.' },
    { title: 'Executive cadence', desc: 'Committee rhythm and follow-up decisions.' },
    { title: 'Executive dashboard', desc: 'Business KPIs to assess real return.' }
  ],
  fitTitle: 'Good fit if…',
  fitList: [
    'You are CEO/COO and need AI focus with business return.',
    'You face competitive pressure with little room to experiment.',
    'Your team already started with AI but lacks executive direction.'
  ],
  noFitTitle: 'Not a fit if…',
  noFitList: [
    'You only want an hourly technical vendor.',
    'There is no executive sponsor to drive decisions.',
    'There is no willingness to measure business impact.'
  ],
  ninetyTitle: 'What happens in 90 days',
  ninetySteps: [
    {
      label: 'Weeks 1–2',
      title: 'Diagnostic + focus',
      desc: 'What works, what is blocked and what must be prioritised now.'
    },
    {
      label: 'Weeks 3–6',
      title: 'Execution plan',
      desc: 'Operational roadmap with owners, sequence and measurable goals.'
    },
    {
      label: 'Weeks 7–12',
      title: 'Implementation + metrics',
      desc: 'Execution of priority initiatives with KPI tracking.'
    }
  ],
  ctaTitle: 'Want to validate if it fits your company?',
  ctaBody:
    'In an executive session we review the current situation, priorities and an initial plan to start with focus.',
  ctaButton: 'Book a diagnostic'
};

const RES_ES: ResultadosCopy = {
  badge: 'Resultados',
  heroTitle1: 'Impacto en negocio,',
  heroTitle2: 'no solo actividad en IA.',
  heroLead:
    'Mostramos que cambia cuando hay liderazgo de IA con foco ejecutivo: mas velocidad, menos desperdicio y mejores decisiones.',
  measureTitle: 'Que medimos',
  measureBullets: ['Tiempo y velocidad operativa', 'KPIs de impacto por area', 'Productividad y retorno'],
  examplesTitle: 'Ejemplos de impacto',
  examplesSubtitle:
    'Casos tipo orientativos para visualizar que cambia en negocio cuando hay liderazgo de IA.',
  casesTitle: 'Casos tipo de transformacion',
  casePrefix: 'Caso',
  caseTypes: [
    {
      title: 'Caso tipo: Operaciones',
      before: 'Procesos lentos, decisiones reactivas y baja estandarizacion.',
      intervention: 'Priorizacion de fricciones criticas + plan de automatizacion guiada.',
      impact: 'Reduccion orientativa del 20%-35% en tiempos operativos.'
    },
    {
      title: 'Caso tipo: Comercial y growth',
      before: 'Equipos con baja velocidad de ejecucion y propuestas inconsistentes.',
      intervention: 'Sistema de apoyo IA + protocolos de ejecucion comercial.',
      impact: 'Mejora orientativa del 10%-20% en productividad del equipo.'
    },
    {
      title: 'Caso tipo: Direccion general',
      before: 'Iniciativas IA dispersas sin dueno ni criterios de retorno.',
      intervention: 'Gobierno ejecutivo IA + roadmap de impacto por areas.',
      impact: 'Mas foco estrategico y mejor conversion de ideas en resultados.'
    }
  ],
  labels: { antes: 'Antes', intervencion: 'Intervencion', impacto: 'Impacto' },
  metricsTitle: 'Metricas orientativas',
  kpis: [
    'Tiempo de ciclo operativo antes vs despues',
    'Iniciativas IA lanzadas y adoptadas',
    'Ahorro de costes por proceso priorizado',
    'Incremento de productividad por equipo',
    'Velocidad de decision ejecutiva'
  ],
  antesVsTitle: 'Antes vs Despues',
  antesVsAntes: 'Antes',
  antesVsAntesBody: 'Pruebas aisladas, foco difuso, decisiones lentas y resultados poco medibles.',
  antesVsDespues: 'Despues',
  antesVsDespuesBody:
    'Plan claro, ejecucion coordinada y KPIs activos para escalar lo que funciona.',
  footerTitle: 'Si quieres este tipo de resultados, empecemos por prioridades claras.',
  footerBody:
    'Reserva un diagnostico ejecutivo y definimos que iniciativas deben arrancar primero para maximizar impacto.',
  footerNote: 'Objetivo de esta pagina: demostrar que este modelo funciona con resultados medibles.',
  ctaButton: 'Agendar diagnostico'
};

const RES_EN: ResultadosCopy = {
  badge: 'Results',
  heroTitle1: 'Business impact,',
  heroTitle2: 'not just AI activity.',
  heroLead:
    'We show what changes with executive-focused AI leadership: more speed, less waste and better decisions.',
  measureTitle: 'What we measure',
  measureBullets: ['Operational time and speed', 'Impact KPIs by area', 'Productivity and return'],
  examplesTitle: 'Impact examples',
  examplesSubtitle:
    'Illustrative case types to show what changes in the business when there is AI leadership.',
  casesTitle: 'Transformation case types',
  casePrefix: 'Case',
  caseTypes: [
    {
      title: 'Case type: Operations',
      before: 'Slow processes, reactive decisions and low standardisation.',
      intervention: 'Prioritisation of critical friction + guided automation plan.',
      impact: 'Indicative 20%–35% reduction in operational cycle times.'
    },
    {
      title: 'Case type: Sales and growth',
      before: 'Teams with low execution speed and inconsistent proposals.',
      intervention: 'AI support system + commercial execution protocols.',
      impact: 'Indicative 10%–20% improvement in team productivity.'
    },
    {
      title: 'Case type: General management',
      before: 'Scattered AI initiatives without ownership or return criteria.',
      intervention: 'Executive AI governance + impact roadmap by area.',
      impact: 'More strategic focus and better conversion of ideas into results.'
    }
  ],
  labels: { antes: 'Before', intervencion: 'Intervention', impacto: 'Impact' },
  metricsTitle: 'Indicative metrics',
  kpis: [
    'Operational cycle time before vs after',
    'AI initiatives launched and adopted',
    'Cost savings per prioritised process',
    'Productivity increase by team',
    'Executive decision speed'
  ],
  antesVsTitle: 'Before vs after',
  antesVsAntes: 'Before',
  antesVsAntesBody: 'Isolated pilots, diffuse focus, slow decisions and barely measurable results.',
  antesVsDespues: 'After',
  antesVsDespuesBody: 'Clear plan, coordinated execution and active KPIs to scale what works.',
  footerTitle: 'If you want this kind of results, let’s start with clear priorities.',
  footerBody:
    'Book an executive diagnostic and we define which initiatives should start first to maximise impact.',
  footerNote: 'Goal of this page: show that this model works with measurable results.',
  ctaButton: 'Book a diagnostic'
};

const RES_CA: ResultadosCopy = {
  ...RES_ES,
  badge: 'Resultats',
  heroTitle1: 'Impacte al negoci,',
  heroTitle2: "no només activitat d'IA.",
  heroLead:
    "Mostrem què canvia amb un lideratge d'IA centrat en l'execució: més velocitat, menys malbaratament i millors decisions.",
  measureTitle: 'Què mesurem',
  measureBullets: ['Temps i velocitat operativa', "KPIs d'impacte per àrea", 'Productivitat i retorn'],
  examplesTitle: "Exemples d'impacte",
  examplesSubtitle:
    "Casos tipus orientatius per visualitzar què canvia al negoci amb lideratge d'IA.",
  casesTitle: 'Casos tipus de transformació',
  casePrefix: 'Cas',
  caseTypes: [
    {
      title: 'Cas tipus: Operacions',
      before: 'Processos lents, decisions reactives i baixa estandardització.',
      intervention: 'Priorització de friccions crítiques + pla d’automatització guiada.',
      impact: 'Reducció orientativa del 20%–35% en temps operatius.'
    },
    {
      title: 'Cas tipus: Comercial i creixement',
      before: 'Equips amb baixa velocitat d’execució i propostes inconsistents.',
      intervention: "Sistema de suport IA + protocols d'execució comercial.",
      impact: 'Millora orientativa del 10%–20% en productivitat de l’equip.'
    },
    {
      title: 'Cas tipus: Direcció general',
      before: "Iniciatives d'IA disperses sense propietari ni criteris de retorn.",
      intervention: "Governança executiva d'IA + full de ruta d'impacte per àrees.",
      impact: 'Més focus estratègic i millor conversió d’idees en resultats.'
    }
  ],
  labels: { antes: 'Abans', intervencion: 'Intervenció', impacto: 'Impacte' },
  metricsTitle: 'Mètriques orientatives',
  kpis: [
    'Temps de cicle operatiu abans vs després',
    "Iniciatives d'IA posades en marxa i adoptades",
    'Estalvi de costos per procés prioritzat',
    "Increment de productivitat per equip",
    "Velocitat de decisió executiva"
  ],
  antesVsTitle: 'Abans vs després',
  antesVsAntes: 'Abans',
  antesVsAntesBody:
    'Proves aïllades, focus difús, decisions lentes i resultats poc mesurables.',
  antesVsDespues: 'Després',
  antesVsDespuesBody:
    'Pla clar, execució coordinada i KPIs actius per escalar el que funciona.',
  footerTitle: 'Si vols aquest tipus de resultats, comencem per prioritats clares.',
  footerBody:
    'Reserva un diagnòstic executiu i definim quines iniciatives han d’arrencar primer per maximitzar l’impacte.',
  footerNote:
    "Objectiu d'aquesta pàgina: demostrar que aquest model funciona amb resultats mesurables.",
  ctaButton: 'Reservar diagnòstic'
};

/** Català: mateixes claus que ES amb traducció breu. */
const CAIO_CA: CaioServiceCopy = {
  ...CAIO_ES,
  badge: 'Servei executiu fraccional',
  heroLead:
    "Lideratge d'IA per a direcció general: definim prioritats, governem l'execució i mesurem impacte sense contractar un C-Level intern a temps complet.",
  resumenTitle: 'Resum ràpid',
  resumenBullets: [
    'Empreses 50-500 treballadors',
    'Model incrustat + fraccional',
    "Objectiu: ROI i velocitat d'execució",
    'Treball amb CEO/COO i líders de àrea'
  ],
  operateTitle: 'Com operem dins la teva empresa',
  blockLabel: 'Bloc',
  workModel: [
    {
      title: 'Direcció i govern',
      desc: 'Definim prioritats, responsables i criteris de decisió amb comitè executiu.'
    },
    {
      title: 'Full de ruta i execució',
      desc: 'Convertim objectius en un pla 30-60-90 i baixem cada iniciativa a accions concretes.'
    },
    {
      title: "Adopció d'equip",
      desc: 'Acompanyem els líders de àrea per assegurar implementació real, no teoria.'
    },
    {
      title: "Seguiment d'impacte",
      desc: "Mesurem l'avanç amb KPIs de negoci per mantenir el focus i l'accountability."
    }
  ],
  includesTitle: 'Inclou',
  includesList: [
    'Comitè de decisió amb direcció',
    'Full de ruta 30-60-90 amb responsables',
    "Acompanyament en la implementació",
    "KPIs executius i seguiment continu"
  ],
  excludesTitle: 'No inclou',
  excludesList: [
    'Consultoria de diapositives sense execució',
    'Automatitzacions aïllades sense estratègia',
    'Substitució del teu CTO o estructura tècnica interna'
  ],
  monthlyTitle: 'Què rep direcció cada mes',
  deliverables: CAIO_ES.deliverables,
  fitTitle: 'Encaixa si...',
  fitList: [
    'Ets CEO/COO i necessites focalització en IA amb retorn.',
    'Tens pressió competitiva i poc marge per experimentar.',
    "El teu equip ja ha començat amb IA, però manca direcció executiva."
  ],
  noFitTitle: 'No encaixa si...',
  noFitList: [
    'Només busques un proveïdor tècnic per hores.',
    'No hi ha sponsor directiu per executar decisions.',
    "No hi ha voluntat de mesurar l'impacte al negoci."
  ],
  ninetyTitle: 'Què passa en 90 dies',
  ninetySteps: [
    {
      label: 'Setmanes 1-2',
      title: 'Diagnòstic + focus',
      desc: 'Què funciona, què està bloquejat i què s’ha de prioritzar ja.'
    },
    {
      label: 'Setmanes 3-6',
      title: "Pla d'execució",
      desc: 'Full de ruta operatiu amb responsables, seqüència i objectius mesurables.'
    },
    {
      label: 'Setmanes 7-12',
      title: 'Implementació + mètriques',
      desc: "Execució d'iniciatives prioritàries amb seguiment de KPIs."
    }
  ],
  ctaTitle: 'Vols validar si encaixa a la teva empresa?',
  ctaBody:
    'En una sessió executiva revisem situació actual, prioritats i pla inicial per començar amb focus.',
  ctaButton: 'Reservar diagnòstic'
};

export const marketingSitePages: Record<LangKey, { caio: CaioServiceCopy; resultados: ResultadosCopy }> = {
  ES: { caio: CAIO_ES, resultados: RES_ES },
  EN: { caio: CAIO_EN, resultados: RES_EN },
  CA: { caio: CAIO_CA, resultados: RES_CA },
};

const LANG_ALIASES: Record<string, LangKey> = {
  ES: 'ES',
  EN: 'EN',
  CA: 'CA',
  es: 'ES',
  en: 'EN',
  ca: 'CA',
};

export function getMarketingSiteCopy(lang: string): { caio: CaioServiceCopy; resultados: ResultadosCopy } {
  const key = LANG_ALIASES[lang] ?? 'ES';
  return marketingSitePages[key];
}
