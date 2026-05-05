const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

const CA_ENTITIES = `        entities: [
          {
            name: 'INAP (Espanya)',
            description: 'Referent en formació i modernització dels empleats públics.',
            logo: '/images/logos/inap.png'
          },
          {
            name: 'OCDE (Internacional)',
            description: 'Guies globals per a la innovació i la IA al sector públic.',
            logo: '/images/logos/ocde.png'
          },
          {
            name: 'OIReScon (Espanya)',
            description: 'Garantia de transparència i compliment de la LCSP.',
            logo: '/images/logos/oirescon.png'
          },
          {
            name: 'CCN-CERT (Espanya)',
            description: 'Estàndards de ciberseguretat i sobirania de la dada (ENS).',
            logo: '/images/logos/ccn-cert.png'
          },
          {
            name: 'COMISSIÓ EUROPEA (UE)',
            description: 'Marc de excel·lència i regulació ètica per a l\\'IA (AI Act).',
            logo: '/images/logos/comision-europea.jpg'
          }
        ]`;

const FR_ENTITIES = `        entities: [
          {
            name: 'INAP (Espagne)',
            description: 'Référence en formation et modernisation des employés publics.',
            logo: '/images/logos/inap.png'
          },
          {
            name: 'OCDE (International)',
            description: 'Lignes directrices mondiales pour l\\'innovation et l\\'IA dans le secteur public.',
            logo: '/images/logos/ocde.png'
          },
          {
            name: 'OIReScon (Espagne)',
            description: 'Garantie de transparence et de conformité au LCSP.',
            logo: '/images/logos/oirescon.png'
          },
          {
            name: 'CCN-CERT (Espagne)',
            description: 'Normes de cybersécurité et souveraineté des données (ENS).',
            logo: '/images/logos/ccn-cert.png'
          },
          {
            name: 'COMMISSION EUROPÉENNE (UE)',
            description: 'Cadre d\\'excellence et régulation éthique pour l\\'IA (AI Act).',
            logo: '/images/logos/comision-europea.jpg'
          }
        ]`;

const DE_ENTITIES = `        entities: [
          {
            name: 'INAP (Spanien)',
            description: 'Referenz für Ausbildung und Modernisierung von Beamten.',
            logo: '/images/logos-entidades/inap.png'
          },
          {
            name: 'OECD (International)',
            description: 'Globale Richtlinien für Innovation und KI im öffentlichen Sektor.',
            logo: '/images/logos-entidades/ocde.png'
          },
          {
            name: 'OIReScon (Spanien)',
            description: 'Garantie für Transparenz und Einhaltung der LCSP.',
            logo: '/images/logos-entidades/oriescon.png'
          },
          {
            name: 'CCN-CERT (Spanien)',
            description: 'Cybersicherheitsstandards und Datensouveränität (ENS).',
            logo: '/images/logos-entidades/ccn-cert.png'
          },
          {
            name: 'EUROPÄISCHE KOMMISSION (EU)',
            description: 'Rahmen für Exzellenz und ethische Regulierung für KI (AI Act).',
            logo: '/images/logos-entidades/comision-europea.png'
          }
        ]`;

const PT_ENTITIES = `        entities: [
          {
            name: 'INAP (Espanha)',
            description: 'Referência em formação e modernização de funcionários públicos.',
            logo: '/images/logos/inap.png'
          },
          {
            name: 'OCDE (Internacional)',
            description: 'Diretrizes globais para inovação e IA no setor público.',
            logo: '/images/logos/ocde.png'
          },
          {
            name: 'OIReScon (Espanha)',
            description: 'Garantia de transparência e cumprimento da LCSP.',
            logo: '/images/logos/oirescon.png'
          },
          {
            name: 'CCN-CERT (Espanha)',
            description: 'Padrões de segurança cibernética e soberania de dados (ENS).',
            logo: '/images/logos/ccn-cert.png'
          },
          {
            name: 'COMISSÃO EUROPEIA (UE)',
            description: 'Quadro de excelência e regulação ética para IA (AI Act).',
            logo: '/images/logos/comision-europea.jpg'
          }
        ]`;

const ZH_ENTITIES = `        entities: [
          {
            name: 'INAP (西班牙)',
            description: '公职人员培训和现代化的参考。',
            logo: '/images/logos-entidades/inap.png'
          },
          {
            name: 'OECD (国际)',
            description: '公共部门 innovation 和 AI 的全球指南。',
            logo: '/images/logos-entidades/ocde.png'
          },
          {
            name: 'OIReScon (西班牙)',
            description: '保证 LCSP 的透明度和合规性。',
            logo: '/images/logos-entidades/oriescon.png'
          },
          {
            name: 'CCN-CERT (西班牙)',
            description: '网络安全标准和数据主权 (ENS)。',
            logo: '/images/logos-entidades/ccn-cert.png'
          },
          {
            name: '欧盟委员会 (EU)',
            description: '卓越框架和人工智能伦理监管 (AI Act)。',
            logo: '/images/logos-entidades/comision-europea.png'
          }
        ]`;

content = content.replace(/(CA: \{[\s\S]*?followSection: \{[\s\S]*?subtitle: '.*?')(\n\s+\})/, (match, p1, p2) => {
  return p1 + ',\n' + CA_ENTITIES + p2;
});

content = content.replace(/(FR: \{[\s\S]*?followSection: \{[\s\S]*?subtitle: '.*?')(\n\s+\})/, (match, p1, p2) => {
  return p1 + ',\n' + FR_ENTITIES + p2;
});

content = content.replace(/(DE: \{[\s\S]*?followSection: \{[\s\S]*?subtitle: '.*?')(\n\s+\})/, (match, p1, p2) => {
  return p1 + ',\n' + DE_ENTITIES + p2;
});

content = content.replace(/(PT: \{[\s\S]*?followSection: \{[\s\S]*?subtitle: '.*?')(\n\s+\})/, (match, p1, p2) => {
  return p1 + ',\n' + PT_ENTITIES + p2;
});

content = content.replace(/(ZH: \{[\s\S]*?followSection: \{[\s\S]*?subtitle: '.*?')(\n\s+\})/, (match, p1, p2) => {
  return p1 + ',\n' + ZH_ENTITIES + p2;
});

fs.writeFileSync('src/translations.ts', content);
console.log('Entities added to missing languages.');
