const fs = require('fs');
const content = fs.readFileSync('src/translations.ts', 'utf8');

// The corrupted pattern
const corruptedPattern = "traceabilityBadge: 'IA Explicável e Rastreabilidade Jur";

// We find the index of the corrupted line start
const startIdx = content.indexOf(corruptedPattern);
if (startIdx === -1) {
    console.error("Pattern not found");
    process.exit(1);
}

// Find the end of the corrupted line (up to methodology: {)
const endIdx = content.indexOf("methodology: {", startIdx);
if (endIdx === -1) {
    console.error("Methodology start not found after pattern");
    process.exit(1);
}

// The part to replace
const partToReplace = content.substring(startIdx, endIdx + "methodology: {".length);

const replacement = `traceabilityBadge: 'IA Explicável e Rastreabilidade Jurídica',
      traceabilityTitle: 'Não somos uma caixa preta. Cada cláusula tem fundamento legal.',
      traceabilityDesc: 'A nossa IA não inventa. Cada parágrafo sugerido nos seus cadernos vem acompanhado da sua justificação jurídica, citando artigos específicos da LCSP e resoluções recentes do TACRC. Você tem sempre o controlo e a última palavra.',
      mockup2Title: 'Gerador de Cadernos (PPT)',
      mockup2Cpv: 'Código CPV detetado: 72200000 - Serviços de programação e consultoria de software',
      mockup2Text: '"O adjudicatário deverá garantir uma disponibilidade do serviço (SLA) de 99,9% mensal. O tempo máximo de resposta para incidentes críticos de Nível 1 não será superior a 2 horas desde a abertura do ticket."',
      mockup2Tooltip: 'Referência: Art. 192 LCSP',
      mockupTooltip: 'Clique para gerar rascunho com IA',
      authoritySecurity: {
        title: 'Não é uma caixa preta: É IA Explicável.',
        subtitle: 'Cada parágrafo gerado conta com a sua base legal. Eliminamos as alucinações para que você mantenha sempre o controlo jurídico.',
        blocks: {
          justification: {
            title: 'Justificação Jurídica',
            desc: 'Cada cláusula sugerida inclui referências diretas a artigos da LCSP e resoluções recentes do TACRC.'
          },
          compliance: {
            title: 'Conformidade Governamental',
            desc: 'Plataforma desenhada sob os padrões do Esquema Nacional de Segurança (ENS) e conformidade estrita com o RGPD.'
          },
          traceability: {
            title: 'Rastreabilidade Total',
            desc: 'Registo auditável de quem, quando e por que se modificou cada secção do caderno, ideal para auditorias e intervenções.'
          },
          antiHallucination: {
            title: 'Cero Alucinações',
            desc: 'O nosso motor está limitado para não inventar normativa. Se a IA não encontra base legal sólida, solicita supervisão humana.'
          }
        },
        verificationTag: 'Verificado: Art. 116 LCSP - Justificação do contrato',
        paragraph: '"O adjudicatário deverá garantir a plena interoperabilidade dos sistemas propostos com o Nodo de Interoperabilidade das Administrações Públicas (SARA), conforme o previsto no Real Decreto 4/2010..."',
        tooltip: 'Ref: Art. 116.4 LCSP - Justificação: Necessiade e idoneidade do contrato'
      },
      calculator: {
        title: "¿Como o PliegoFácil pode potencializar o desempenho da sua Unidade?",
        subtitle: "Elimine os gargalos burocráticos e permita que a sua equipa se foque na análise jurídica e técnica de alto nível.",
        expedientesLabel: "Expedientes/Licitações por ano",
        tiempoLabel: "Inversimento horário atual em tarefas administrativas",
        tiempoDesc: "* Inclui redação de PCAP, PPT e anexos manuais.",
        externalizaLabel: "Externalizam para consultoras?",
        externalizaDesc: "Cálculo baseado em custos médios de mercado.",
        horasRecuperadasTitle: "Capacidade Operativa Ganha",
        horasRecuperadasDesc: "Horas libertadas de tarefas mecânicas para serem alocadas à supervisão estratégica.",
        diasLiberadosTitle: "Jornadas de Alto Desempenho",
        diasLiberadosDesc: "Jornadas anuais reorientadas para a excelência técnica e jurídica.",
        ahorroConsultoriaTitle: "Impacto na Saúde Organizacional",
        ahorroConsultoriaDesc: "Redução drástica de gargalos e erros humanos",
        cta: "Obter relatório de impacto personalizado",
        footer: "O PliegoFácil.ai potencia o critério do técnico eliminando a carga mecânica. Uma IA desenhada para assistir, não para substituir.",
        modal: {
          title: "Seu relatório está quase pronto",
          desc: "Insira seu e-mail institucional para receber o detalhamento de poupanças, ROI e plano de implementação para sua administração.",
          emailLabel: "E-mail Institucional",
          emailPlaceholder: "exemplo@administracao.pt",
          btn: "Enviar relatório agora",
          btnLoading: "Processando...",
          privacyText: "Li e aceito a ",
          privacyLink: "política de privacidad *",
          successTitle: "Relatório enviado!",
          successDesc: "Verifique sua caixa de entrada.",
          rateLimit: "Por favor, aguarde 2 minutos para solicitar outro relatório.",
          error: "Ocorreu um erro ao processar sua solicitação."
        }
      }
    },
    methodology: {`;

const newContent = content.replace(partToReplace, replacement);
fs.writeFileSync('src/translations.ts', newContent);
console.log("Successfully repaired translations.ts");
