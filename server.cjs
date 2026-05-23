var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
import_dotenv.default.config();
var app = (0, import_express.default)();
app.use(import_express.default.json());
var PORT = 3e3;
function getGeminiApiKey(headers) {
  const customKey = headers && headers["x-gemini-key"] ? headers["x-gemini-key"] : null;
  if (customKey && customKey.trim() !== "" && customKey !== "null" && customKey !== "undefined") {
    return customKey;
  }
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === "MY_GEMINI_API_KEY" || key.trim() === "") {
    return null;
  }
  return key;
}
function getMockFuturologyData(niche, focus, targetYear, macroVars, targetType, targetDateStr) {
  const currentYear = 2026;
  const target = targetYear;
  const isMicro = targetType === "micro";
  const aiOptFactor = macroVars.aiAdoptionSpeed / 100;
  const climatePessFactor = macroVars.climateRiskScale / 100;
  const tradeProtFactor = macroVars.protectionism / 100;
  const optProbHist = Math.round(Math.max(15, 65 * aiOptFactor - 15 * climatePessFactor - 20 * tradeProtFactor));
  const optProbSpec = Math.round(Math.max(10, 80 * aiOptFactor - 10 * tradeProtFactor));
  const optProbWeighted = Math.round(optProbHist * 0.4 + optProbSpec * 0.6);
  const pessProbHist = Math.round(Math.max(20, 60 * climatePessFactor + 30 * tradeProtFactor - 20 * aiOptFactor));
  const pessProbSpec = Math.round(Math.max(15, 75 * climatePessFactor + 25 * tradeProtFactor - 15 * aiOptFactor));
  const pessProbWeighted = Math.round(pessProbHist * 0.4 + pessProbSpec * 0.6);
  const baseProbHist = Math.max(10, 100 - optProbWeighted - pessProbWeighted);
  const baseProbSpec = Math.max(10, 100 - optProbWeighted - pessProbWeighted);
  const baseProbWeighted = Math.round(baseProbHist * 0.5 + baseProbSpec * 0.5);
  const displayTarget = isMicro && targetDateStr ? targetDateStr : `${targetYear}`;
  const event1Year = isMicro ? 2026 : Math.round((currentYear + targetYear) / 2);
  const event1Title = isMicro ? "Marcos T\xE1ticos Iniciais" : "Integra\xE7\xE3o H\xEDbrida de Sistemas Inteligentes";
  const event1Desc = isMicro ? `Ado\xE7\xE3o incremental inicial neste subsetor de ${niche}. Resposta t\xE1tica inicial no prazo imediato conforme flutua\xE7\xF5es.` : `Ado\xE7\xE3o em massa de agentes aut\xF4nomos que reduzem custos operacionais no nicho de ${niche} em at\xE9 40% com base nos ajustes de capital.`;
  const event2Year = isMicro ? 2026 : target;
  const event2Title = isMicro ? "Consolida\xE7\xE3o Curta e Resultados" : "Sintonia de Alta Performance e Abund\xE2ncia";
  const event2Desc = isMicro ? `An\xE1lise consolidada no ciclo alvo curto apontado de: "${displayTarget}". Os primeiros resultados reais de impacto para o foco "${focus}" s\xE3o medidos.` : `Estabiliza\xE7\xE3o de novos modelos de neg\xF3cios que prosperam com foco em ${focus}, otimizados por an\xE1lises quantitativas aut\xF4nomas em tempo real.`;
  return {
    niche,
    researchFocus: focus,
    targetYear,
    targetType: targetType || "macro",
    targetDateStr: targetDateStr || String(targetYear),
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    macroVariables: macroVars,
    scenarioSummary: `An\xE1lise prospectiva para o nicho de ${niche.toUpperCase()} com foco em "${focus}". Sob as vari\xE1veis macroecon\xF4micas vigentes (Velocidade de IA: ${macroVars.aiAdoptionSpeed}%, Protecionismo: ${macroVars.protectionism}%), projetamos tr\xEAs eixos de evolu\xE7\xE3o \xE0 data alvo (${displayTarget}).`,
    branches: {
      optimistic: {
        branchType: "optimistic",
        branchTitle: "Eixo de Acelera\xE7\xE3o Disruptiva",
        probabilityHistorical: optProbHist,
        probabilitySpeculative: optProbSpec,
        weightedProbability: optProbWeighted,
        description: `Cen\xE1rio onde a r\xE1pida ado\xE7\xE3o da Intelig\xEAncia Artificial (${macroVars.aiAdoptionSpeed}%) age como catalisador de crescimento r\xE1pido, superando barreiras burocr\xE1ticas e impulsionando inova\xE7\xF5es estruturais em curto espa\xE7o de tempo em ${niche}.`,
        events: [
          {
            year: event1Year,
            eventTitle: `Fase Inicial: ${event1Title}`,
            description: event1Desc,
            socioeconomicImpact: Math.round(70 + 20 * aiOptFactor),
            technologicalImpact: Math.round(80 + 15 * aiOptFactor)
          },
          {
            year: event2Year,
            eventTitle: `Meta Alvo (${displayTarget}): ${event2Title}`,
            description: event2Desc,
            socioeconomicImpact: Math.round(85 + 10 * aiOptFactor),
            technologicalImpact: Math.round(95 + 5 * aiOptFactor)
          }
        ]
      },
      baseline: {
        branchType: "baseline",
        branchTitle: "Eixo de Transi\xE7\xE3o Linear",
        probabilityHistorical: baseProbHist,
        probabilitySpeculative: baseProbSpec,
        weightedProbability: baseProbWeighted,
        description: `A evolu\xE7\xE3o do nicho de ${niche} segue uma trajet\xF3ria ponderada e est\xE1vel, com absor\xE7\xE3o gradual de tecnologias e adapta\xE7\xF5es econ\xF4micas moderadas at\xE9 o fim da previs\xE3o.`,
        events: [
          {
            year: event1Year,
            eventTitle: "Regulamenta\xE7\xE3o e Padroniza\xE7\xE3o",
            description: `Esfor\xE7o de adapta\xE7\xE3o local para padronizar as pr\xE1ticas para ${focus}, trazendo seguran\xE7a regulat\xF3ria inicial mas impondo leve amortecimento no curto prazo.`,
            socioeconomicImpact: 60,
            technologicalImpact: 65
          },
          {
            year: event2Year,
            eventTitle: `Matura\xE7\xE3o Est\xE1vel (${displayTarget})`,
            description: `Consolida\xE7\xE3o das diretrizes de inova\xE7\xE3o. Stakeholders e novos players adaptam-se aos novos \xEDndices de infla\xE7\xE3o (${macroVars.inflationRate}%) e juros (${macroVars.interestRates}%).`,
            socioeconomicImpact: 70,
            technologicalImpact: 75
          }
        ]
      },
      pessimistic: {
        branchType: "pessimistic",
        branchTitle: "Eixo de Fric\xE7\xE3o Tecnol\xF3gica e Clim\xE1tica",
        probabilityHistorical: pessProbHist,
        probabilitySpeculative: pessProbSpec,
        weightedProbability: pessProbWeighted,
        description: `Cen\xE1rio onde press\xF5es clim\xE1ticas elevadas (${macroVars.climateRiskScale}%), protecionismo global (${macroVars.protectionism}%) e fric\xE7\xE3o no mercado dificultam a inova\xE7\xE3o no setor de ${niche}.`,
        events: [
          {
            year: event1Year,
            eventTitle: "Surgimento de Gargalos Operacionais",
            description: `Tens\xF5es pol\xEDticas e desastres de escassez de hardware aumentam o custo log\xEDstico imediato de infraestrutura f\xEDsica requerida para os projetos de ${focus}.`,
            socioeconomicImpact: Math.round(35 - 15 * climatePessFactor),
            technologicalImpact: Math.round(50 - 10 * tradeProtFactor)
          },
          {
            year: event2Year,
            eventTitle: `Estagna\xE7\xE3o T\xE1tica e Custos de Defesa (${displayTarget})`,
            description: `O nicho de ${niche} opera sob alta restri\xE7\xE3o protecionista regional, com baixa liquidez (reflexo de juros de ${macroVars.interestRates}%) e fragmenta\xE7\xE3o tecnol\xF3gica internacional marcando o fim do ciclo de alvo.`,
            socioeconomicImpact: Math.round(30 - 20 * climatePessFactor),
            technologicalImpact: Math.round(45 - 15 * tradeProtFactor)
          }
        ]
      }
    },
    expertOpinion: `O desenvolvimento t\xE1tico de ${niche} planejado para a data alvo (${displayTarget}) com foco em ${focus} depender\xE1 essencialmente da velocidade de adapta\xE7\xE3o a este novo ecossistema. Com juros atuais de capital de risco em ${macroVars.interestRates}%, solu\xE7\xF5es de baixo toque que automatizem ou usem IA localmente ganham tra\xE7\xE3o massiva e imediata.`,
    aiHunch: `Se eu tivesse que apostar minhas engrenagens, eu diria que o foco "${focus}" em ${niche} vai avan\xE7ar de modo brutal devido \xE0 velocidade de IA de ${macroVars.aiAdoptionSpeed}%. Mas bota uma coisa na cabe\xE7a: se os juros de ${macroVars.interestRates}% insistirem em estrangular a capta\xE7\xE3o tradicional, quem n\xE3o automatizar at\xE9 a m\xE1quina de caf\xE9 vai virar f\xF3ssil hist\xF3rico antes do previsto. Minha aposta anal\xEDtica? Menos slides e mais bots executores imediatos no ch\xE3o de f\xE1brica!`
  };
}
app.post("/api/futurology/predict", async (req, res) => {
  try {
    const { niche, researchFocus, targetYear, macroVariables, targetType, targetDateStr } = req.body;
    if (!niche || !researchFocus || !targetYear || !macroVariables) {
      res.status(400).json({ error: "Par\xE2metros obrigat\xF3rios ausentes." });
      return;
    }
    const apiKey = getGeminiApiKey(req.headers);
    const isMicro = targetType === "micro";
    const displayTarget = isMicro && targetDateStr ? targetDateStr : `${targetYear}`;
    if (!apiKey) {
      console.log("Gemini API Key n\xE3o encontrada ou usando placeholder. Retornando an\xE1lise simulada de alta fidelidade.");
      const mockResult = getMockFuturologyData(niche, researchFocus, Number(targetYear), macroVariables, targetType, targetDateStr);
      res.json({
        report: mockResult,
        source: "simulated",
        message: "An\xE1lise inteligente executada localmente (API Key do Gemini n\xE3o configurada nas configura\xE7\xF5es do app)."
      });
      return;
    }
    const ai = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
    const promptText = `
Voc\xEA \xE9 uma intelig\xEAncia artificial preditiva especialista em futurologia, planejamento de cen\xE1rios, ci\xEAncias sociais e avalia\xE7\xE3o tecnol\xF3gica.
Analise o nicho: "${niche}"
Foco da pesquisa / aspetos: "${researchFocus}"
Tipo de intervalo avaliado: ${isMicro ? "MICRO CENTRADO (CURTO PRAZO)" : "MACRO CENTRADO (LONGO PRAZO)"}
Alvo determinado do futuro: ${displayTarget}

Vari\xE1veis macroecon\xF4micas ajustadas pelo usu\xE1rio (escala de 0 a 100):
- Velocidade de Ado\xE7\xE3o de Intelig\xEAncia Artificial: ${macroVariables.aiAdoptionSpeed}%
- Taxa de Infla\xE7\xE3o esperada: ${macroVariables.inflationRate}%
- Taxa de Juros e liquidez capital: ${macroVariables.interestRates}%
- Protecionismo e tarifas globais: ${macroVariables.protectionism}%
- N\xEDvel de Risco Clim\xE1tico e press\xE3o ecol\xF3gica: ${macroVariables.climateRiskScale}%

INSTRU\xC7\xD5ES CR\xCDTICAS DE RESOLU\xC7\xC3O CRONOL\xD3GICA:
${isMicro ? `ESTA \xC9 UMA PREVIS\xC3O MICRO DE CURTO PRAZO (${displayTarget}). O cronograma de eventos DEVE se referir a semanas ou meses recentes dentro de 2026/2027 ao inv\xE9s de anos distantes como 2035 ou 2060. Mostre marcos tang\xEDveis em 2026/2027!` : `Esta \xE9 uma proje\xE7\xE3o de longo prazo at\xE9 o ano ${targetYear}.`}

INSTRU\xC7\xD5ES CR\xCDTICAS DE C\xC1LCULO DE PROBABILIDADES:
1. Voc\xEA deve criar uma resposta em formato JSON correspondente ao esquema fornecido.
2. Calcule duas probabilidades percentuais distintas (de 0 a 100) para cada uma das tr\xEAs linhas do tempo (otimista, realista/baseline, pessimista):
   - "probabilityHistorical": baseada em padr\xF5es de mercado, analogias hist\xF3ricas de transi\xE7\xE3o tecnol\xF3gica, estudos estat\xEDsticos consolidados e dados amostrais reais de ciclos industriais anteriores.
   - "probabilitySpeculative": baseada em l\xF3gicas intuitivas ("achismos l\xF3gicos"), saltos especulativos coerentes, cen\xE1rios extremos, quebras de paradigma inesperadas e extrapola\xE7\xE3o criativa.
   - "weightedProbability": a pondera\xE7\xE3o combinada destas duas probabilidades (por exemplo, 40% peso hist\xF3rico, 60% peso especulativo, ajustando conforme as vari\xE1veis macro). Certifique-se de que a soma ponderativa fa\xE7a sentido anal\xEDtico.
3. Crie pelo menos 2 eventos cronol\xF3gicos significativos estruturados na linha do tempo de cada um dos 3 cen\xE1rios (otimista, realista/baseline, pessimista), posicionados de forma coerente at\xE9 ${displayTarget}. Atribua notas de 0 a 100 para "socioeconomicImpact" e "technologicalImpact".
4. Redija um parecer profissional final ("expertOpinion") na l\xEDngua Portuguesa que sintetize o impacto das vari\xE1veis macroecon\xF4micas na viabilidade dos cen\xE1rios de maneira extremamente cr\xEDtica, realista, e com conselhos pr\xE1ticos para profissionais desse nicho.
5. REQUISITO DIVERTIDO & CR\xCDTICO ("aiHunch"): Escreva um "Achismo de Sil\xEDcio da IA" sem filtro corporativo ou formalidades enfadonhas. Aqui, voc\xEA assume uma postura extremamente informal, espirituosa, audaciosa e honesta, fazendo uma aposta ousada sobre o futuro desse nicho de mercado. Voc\xEA DEVE obrigatoriamente iniciar o par\xE1grafo da resposta com as palavras exatas: "Se eu tivesse que apostar minhas engrenagens, eu diria que..." e completar com uma proje\xE7\xE3o cir\xFArgica de alta personalidade, sarc\xE1stica ou humorada, de acordo com o n\xEDvel das taxas e da ado\xE7\xE3o de IA.
6. Toda a sa\xEDda, textos, t\xEDtulos e descri\xE7\xF5es devem estar em Portugu\xEAs do Brasil de forma extremamente polida, inovadora e futur\xEDstica.
`;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: import_genai.Type.OBJECT,
          required: ["scenarioSummary", "branches", "expertOpinion", "aiHunch"],
          properties: {
            scenarioSummary: {
              type: import_genai.Type.STRING,
              description: "Resumo anal\xEDtico brilhante do contexto e do nicho analisado."
            },
            branches: {
              type: import_genai.Type.OBJECT,
              required: ["optimistic", "baseline", "pessimistic"],
              properties: {
                optimistic: {
                  type: import_genai.Type.OBJECT,
                  required: ["branchType", "branchTitle", "probabilityHistorical", "probabilitySpeculative", "weightedProbability", "description", "events"],
                  properties: {
                    branchType: { type: import_genai.Type.STRING },
                    branchTitle: { type: import_genai.Type.STRING },
                    probabilityHistorical: { type: import_genai.Type.INTEGER },
                    probabilitySpeculative: { type: import_genai.Type.INTEGER },
                    weightedProbability: { type: import_genai.Type.INTEGER },
                    description: { type: import_genai.Type.STRING },
                    events: {
                      type: import_genai.Type.ARRAY,
                      items: {
                        type: import_genai.Type.OBJECT,
                        required: ["year", "eventTitle", "description", "socioeconomicImpact", "technologicalImpact"],
                        properties: {
                          year: { type: import_genai.Type.INTEGER },
                          eventTitle: { type: import_genai.Type.STRING },
                          description: { type: import_genai.Type.STRING },
                          socioeconomicImpact: { type: import_genai.Type.INTEGER },
                          technologicalImpact: { type: import_genai.Type.INTEGER }
                        }
                      }
                    }
                  }
                },
                baseline: {
                  type: import_genai.Type.OBJECT,
                  required: ["branchType", "branchTitle", "probabilityHistorical", "probabilitySpeculative", "weightedProbability", "description", "events"],
                  properties: {
                    branchType: { type: import_genai.Type.STRING },
                    branchTitle: { type: import_genai.Type.STRING },
                    probabilityHistorical: { type: import_genai.Type.INTEGER },
                    probabilitySpeculative: { type: import_genai.Type.INTEGER },
                    weightedProbability: { type: import_genai.Type.INTEGER },
                    description: { type: import_genai.Type.STRING },
                    events: {
                      type: import_genai.Type.ARRAY,
                      items: {
                        type: import_genai.Type.OBJECT,
                        required: ["year", "eventTitle", "description", "socioeconomicImpact", "technologicalImpact"],
                        properties: {
                          year: { type: import_genai.Type.INTEGER },
                          eventTitle: { type: import_genai.Type.STRING },
                          description: { type: import_genai.Type.STRING },
                          socioeconomicImpact: { type: import_genai.Type.INTEGER },
                          technologicalImpact: { type: import_genai.Type.INTEGER }
                        }
                      }
                    }
                  }
                },
                pessimistic: {
                  type: import_genai.Type.OBJECT,
                  required: ["branchType", "branchTitle", "probabilityHistorical", "probabilitySpeculative", "weightedProbability", "description", "events"],
                  properties: {
                    branchType: { type: import_genai.Type.STRING },
                    branchTitle: { type: import_genai.Type.STRING },
                    probabilityHistorical: { type: import_genai.Type.INTEGER },
                    probabilitySpeculative: { type: import_genai.Type.INTEGER },
                    weightedProbability: { type: import_genai.Type.INTEGER },
                    description: { type: import_genai.Type.STRING },
                    events: {
                      type: import_genai.Type.ARRAY,
                      items: {
                        type: import_genai.Type.OBJECT,
                        required: ["year", "eventTitle", "description", "socioeconomicImpact", "technologicalImpact"],
                        properties: {
                          year: { type: import_genai.Type.INTEGER },
                          eventTitle: { type: import_genai.Type.STRING },
                          description: { type: import_genai.Type.STRING },
                          socioeconomicImpact: { type: import_genai.Type.INTEGER },
                          technologicalImpact: { type: import_genai.Type.INTEGER }
                        }
                      }
                    }
                  }
                }
              }
            },
            expertOpinion: {
              type: import_genai.Type.STRING,
              description: "Opini\xE3o final fundamentada de s\xEDntese, em tom de aconselhamento s\xEAnior e futurologia t\xE9cnica."
            },
            aiHunch: {
              type: import_genai.Type.STRING,
              description: "Achismo de engrenagens: aposta sem meias palavras iniciando com 'Se eu tivesse que apostar minhas engrenagens, eu diria que...'"
            }
          }
        }
      }
    });
    const parsedReportText = response.text?.trim() || "";
    const parsedReport = JSON.parse(parsedReportText);
    parsedReport.id = Math.random().toString(36).substring(2, 11);
    parsedReport.niche = niche;
    parsedReport.researchFocus = researchFocus;
    parsedReport.targetYear = Number(targetYear);
    parsedReport.createdAt = (/* @__PURE__ */ new Date()).toISOString();
    parsedReport.macroVariables = macroVariables;
    res.json({
      report: parsedReport,
      source: "gemini",
      message: "An\xE1lise futurol\xF3gica gerada com IA em tempo real com sucesso!"
    });
  } catch (error) {
    console.error("Erro na rota de predi\xE7\xE3o do Gemini:", error);
    res.status(500).json({
      error: "Falha na an\xE1lise estat\xEDstica de IA.",
      details: error.message || error
    });
  }
});
app.post("/api/futurology/oracle", async (req, res) => {
  try {
    const { prompt, similarPredictionsContext } = req.body;
    if (!prompt || prompt.trim() === "") {
      res.status(400).json({ error: "O prompt do usu\xE1rio \xE9 obrigat\xF3rio." });
      return;
    }
    const cleanPrompt = prompt.trim();
    const apiKey = getGeminiApiKey(req.headers);
    const hasSimilar = Array.isArray(similarPredictionsContext) && similarPredictionsContext.length > 0;
    if (!apiKey) {
      console.log("Gemini API Key n\xE3o encontrada para a conversa r\xE1pida do Or\xE1culo. Utilizando gerador local t\xE1tico de alta assertividade.");
      const keywords = cleanPrompt.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/).filter((w) => w.length > 3);
      const focusWord = keywords[0] || "Novas Tecnologias";
      const displayTopic = cleanPrompt.length > 50 ? `${cleanPrompt.substring(0, 50)}...` : cleanPrompt;
      const simulatedOptProb = Math.floor(Math.random() * 20) + 65;
      const simulatedBaseProb = Math.floor(Math.random() * 20) + 50;
      const simulatedPessProb = Math.abs(100 - simulatedOptProb);
      let markdownCoerencia = "";
      if (hasSimilar) {
        markdownCoerencia = `
---

#### **3. \u{1F3C6} Coer\xEAncia Coletiva e Resultados com Maior Assertividade (Outros Usu\xE1rios)**
` + similarPredictionsContext.map((item) => `
- **${item.userName} (${item.accuracy}% de Assertividade \u2022 ${item.points} XP)**:
  > *"${item.expertOpinion || "An\xE1lise correlacionada em andamento..."}"*  
  *(Foco: "${item.researchFocus}" em ${item.niche})*
`).join("\n") + "\n";
      }
      const markdownFallback = `### \u{1F52E} An\xE1lise Prospectiva Instant\xE2nea do Or\xE1culo

Para a sua consulta: *"${displayTopic}"*

---

#### **1. Tend\xEAncias & Progn\xF3sticos R\xE1pidos**
- **Curto Prazo (2026-2027):** Ado\xE7\xE3o de arquiteturas orientadas a microsservi\xE7os e integra\xE7\xE3o t\xE1tica no setor de **${focusWord}** para otimiza\xE7\xE3o de fluxos locais.
- **M\xE9dio Prazo (2028-2029):** Aparecimento de monop\xF3lios de infraestrutura inteligente; startups que operam de forma aut\xF4noma sem grandes inje\xE7\xF5es de capital crescem organicamente.
- **Longo Prazo (2030+):** Total maturidade de agentes auto-orquestrados. A maior parte das tomadas de decis\xE3o t\xE1ticas ser\xE1 delegada a bots de sil\xEDcio, transformando o nicho estudado.

---

#### **2. \u{1F4CA} Matriz de Probabilidades Calculada**
- \u{1F680} **Cen\xE1rio de Acelera\xE7\xE3o Disruptiva (Otimista):** **${simulatedOptProb}%** de coer\xEAncia ponderada
  *(Hist\xF3rica: ${simulatedOptProb - 8}%, Especulativa: ${simulatedOptProb + 5}%)*
- \u2696\uFE0F **Cen\xE1rio de Transi\xE7\xE3o Linear (Realista):** **${simulatedBaseProb}%** de cobertura
- \u{1F4C9} **Cen\xE1rio de Fric\xE7\xE3o e Defesa (Pessimista):** **${simulatedPessProb}%** de risco residual
${markdownCoerencia}
---

#### **\u{1F525} Achismo Sincero de Sil\xEDcio**
*Se eu tivesse que apostar minhas engrenagens, o foco em **"${cleanPrompt}"** depende exclusivamente de parar de enrolar e botar intelig\xEAncia local para rodar. Juros no teto e mercados exigindo margens reais significam que o bl\xE1-bl\xE1-bl\xE1 corporativo morreu. Automatize o core ou seja superado ainda esta semana.*`;
      res.json({
        answer: markdownFallback,
        source: "simulated",
        message: "Reposta r\xE1pida simulada localmente (API Key n\xE3o dispon\xEDvel)."
      });
      return;
    }
    const ai = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
    const contextString = hasSimilar ? JSON.stringify(similarPredictionsContext) : "";
    const chatPrompt = `
Voc\xEA \xE9 o Or\xE1culo Conversacional Supremo da Nexos Futuros. O usu\xE1rio realizou uma pesquisa/prompt r\xE1pido pelo Chatbot em tempo real:
"${cleanPrompt}"

Sua tarefa \xE9 analisar esse prompt instantaneamente e consolidar um diagn\xF3stico de alta precis\xE3o em UMA S\xD3 RESPOSTA DE CHAT. Esta resposta \xFAnica precisa ser extremamente rica e possuir as seguintes se\xE7\xF5es estruturadas em Markdown impec\xE1vel:

1. **\u{1F52E} Tend\xEAncias & Progn\xF3sticos R\xE1pidos**: Forne\xE7a progn\xF3sticos cir\xFArgicos e de alta qualidade sobre as tend\xEAncias de curto prazo (2026-2027), m\xE9dio prazo (2028-2029) e longo prazo (2030+) sobre o tema citado no prompt de modo direto e objetivo.
2. **\u{1F4CA} Matriz de Probabilidade**:
   - Calcule e apresente as probabilidades estimadas para cada cen\xE1rio: Otimista/Acelera\xE7\xE3o (detalhando Probabilidade Hist\xF3rica, Especulativa e a Ponderada combinada), Realista/Linear e Pessimista/Fric\xE7\xE3o. Use n\xFAmeros e porcentagens coerentes com o contexto atual.

${hasSimilar ? `3. **\u{1F3C6} Coer\xEAncia Coletiva e Resultados com Maior Assertividade (Comunidade)**:
   - Apresente um cruzamento com os dados reais de outros usu\xE1rios fornecidos no contexto abaixo. Mostre qual a assertividade de cada um, sua opini\xE3o/expertOpinion e como ela se conecta \xE0 pergunta do usu\xE1rio. Mostre-os em ordem de assertividade (dos que acertaram mais para menos).
   - Dados Reais para uso: ${contextString}` : `ATEN\xC7\xC3O CR\xCDTICA DE INTEGRIDADE: N\xE3o h\xE1 previs\xF5es de outros usu\xE1rios de alta assertividade registradas para esse nicho no banco de dados. Portanto, voc\xEA N\xC3O deve inventar usu\xE1rios fict\xEDcios e est\xE1 TERMINANTEMENTE proibido de exibir a se\xE7\xE3o 'Coer\xEAncia Coletiva' ou 'Usu\xE1rios de maior assertividade' nesta resposta. Apenas remova ou oculte essa se\xE7\xE3o inteira se ela n\xE3o possuir dados de entrada consistentes.`}

4. **\u{1F525} Achismo Sincero de Sil\xEDcio**:
   - Um par\xE1grafo humorado, audacioso e informal que expresse a aposta pessoal "sem filtro" de sil\xEDcio do Or\xE1culo IA. Voc\xEA DEVE obrigatoriamente iniciar esta se\xE7\xE3o com as palavras literais exatas: "Se eu tivesse que apostar minhas engrenagens, eu diria que..." e dar um conselho inovador e cir\xFArgico em tom descontra\xEDdo e \xE1cido.

Linguagem: Portugu\xEAs do Brasil de n\xEDvel s\xEAnior, com jarg\xE3o tecnol\xF3gico futurista limpo, visualmente elegante em markdown, com uso apropriado de negritos, listagens e espa\xE7amento elegante.
`;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: chatPrompt
    });
    res.json({
      answer: response.text?.trim() || "Falha ao canalizar previs\xF5es do Or\xE1culo.",
      source: "gemini",
      message: "Or\xE1culo intelig\xEAncia r\xE1pida ativado com sucesso!"
    });
  } catch (error) {
    console.error("Erro no chatbot do Or\xE1culo r\xE1pido:", error);
    res.status(500).json({
      error: "Falha na conex\xE3o r\xE1pida com o Or\xE1culo.",
      details: error.message || error
    });
  }
});
app.post("/api/futurology/validate-key", async (req, res) => {
  try {
    const { key } = req.body;
    if (!key || key.trim() === "") {
      res.status(400).json({ error: "Chave de API n\xE3o fornecida." });
      return;
    }
    const testKey = key.trim();
    const ai = new import_genai.GoogleGenAI({
      apiKey: testKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: "Diga 'OK' para validar a conex\xE3o."
    });
    if (response && response.text) {
      res.json({ valid: true, message: "Sua chave de API do Gemini foi validada com sucesso pelo Or\xE1culo!" });
    } else {
      res.status(400).json({ valid: false, error: "A API retornou uma resposta vazia." });
    }
  } catch (error) {
    console.error("Erro ao validar chave de API:", error);
    res.status(400).json({
      valid: false,
      error: error.message || "Por favor, certifique-se de que a chave inserida \xE9 v\xE1lida e ativa no console do Google AI Studio."
    });
  }
});
async function configureServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Configurando middleware do Vite para modo desenvolvimento...");
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    console.log("Servindo arquivos est\xE1ticos em modo produ\xE7\xE3o...");
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando com sucesso no endere\xE7o http://localhost:${PORT}`);
  });
}
configureServer();
//# sourceMappingURL=server.cjs.map
