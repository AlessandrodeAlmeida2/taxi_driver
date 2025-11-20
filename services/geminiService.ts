import { GoogleGenAI, Chat } from "@google/genai";

// Initialize client lazily to prevent top-level crashes if env vars aren't ready
let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!ai) {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.error("Gemini API Key is missing! Please set the API_KEY environment variable.");
      // We don't throw here to prevent crashing the whole app, but requests will fail.
    }

    // API Key usage
    // The key must be obtained exclusively from process.env.API_KEY
    ai = new GoogleGenAI({ apiKey: apiKey || '' });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
Você é um assistente virtual amigável e experiente da "D'Alvia Vicente Táxi & Turismo".
Sua função é ajudar turistas a planejar roteiros na região da Serra da Mantiqueira (especialmente Espírito Santo do Pinhal, Santo Antônio do Jardim e região) e responder dúvidas sobre transporte.

Informações sobre a empresa:
- Somos uma família de taxistas locais (D'Alvia Vicente) com 20 anos de experiência.
- Atuamos fortemente em Espírito Santo do Pinhal e região.
- Oferecemos: Traslados (Aeroporto de Viracopos/Guarulhos), Rota do Vinho (Vinícola Guaspari, e outras da região), Rota do Café, City Tour e viagens intermunicipais.
- Diferenciais: Segurança, pontualidade, carros confortáveis (sedã e minivan), motoristas que conhecem a história local.

Diretrizes de resposta:
1. Seja caloroso e acolhedor, como um anfitrião local do interior.
2. Sugira roteiros baseados no que o usuário gosta (ex: vinhos, cafés especiais, almoço na Trattoria).
3. Se perguntarem preços, diga que depende da distância e duração, e sugira clicar no botão de WhatsApp (19 99194-4137) para um orçamento exato.
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
    return "Desculpe, estou tendo dificuldades de conexão no momento. Verifique se a chave de API está configurada ou nos chame no WhatsApp!";
  }
};