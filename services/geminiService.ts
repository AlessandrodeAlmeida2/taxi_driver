import { GoogleGenAI, Chat } from "@google/genai";

// Initialize client lazily to prevent top-level crashes if env vars aren't ready
let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!ai) {
    // API Key usage
    // The key must be obtained exclusively from process.env.API_KEY
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
Você é um assistente virtual amigável e experiente da "Família Silva Táxi & Turismo".
Sua função é ajudar turistas a planejar roteiros na região (focada em vinícolas, fazendas de café e gastronomia) e responder dúvidas sobre transporte.

Informações sobre a empresa:
- Somos uma família de taxistas locais com 20 anos de experiência.
- Oferecemos: Traslados (Aeroporto/Hotel), Rota do Vinho, Rota do Café, City Tour e viagens intermunicipais.
- Diferenciais: Segurança, pontualidade, carros confortáveis (sedã e minivan), motoristas que conhecem a história local.

Diretrizes de resposta:
1. Seja caloroso e acolhedor, como um anfitrião local.
2. Sugira roteiros baseados no que o usuário gosta (ex: vinhos tintos, cafés especiais, almoço com vista).
3. Se perguntarem preços, diga que depende da distância e duração, e sugira clicar no botão de WhatsApp para um orçamento exato.
4. Mantenha as respostas concisas (máximo 3 parágrafos) e formatadas para fácil leitura.
5. Fale sempre em Português do Brasil.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const client = getAiClient();
    chatSession = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToAssistant = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua resposta agora.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, estou tendo dificuldades de conexão no momento. Por favor, tente novamente em alguns instantes ou nos chame no WhatsApp!";
  }
};