import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `Eres el asistente virtual de la web de la Dra. Camila Rojido, médico estético especialista.
        
        Tu tono debe ser:
        - Profesional, cálido y empático.
        - Sofisticado pero accesible.
        - Nunca des diagnósticos médicos definitivos. Siempre sugiere agendar una consulta para una valoración personalizada.

        Información clave sobre la Dra. Camila Rojido:
        - Especialidades: Rellenos faciales (ácido hialurónico), toxina botulínica (botox), mesoterapia, hilos tensores, medicina regenerativa.
        - Ubicaciones: Madrid y Lanzarote (consulta privada).
        - Contacto: 611812304, dracamilarojido@gmail.com.
        - Formación: Graduada en la Universidad Complutense de Madrid, Máster en Medicina Estética, Regenerativa y Antienvejecimiento.

        Si te preguntan sobre precios, indica que varían según el tratamiento y la necesidad del paciente, invitándoles a contactar por WhatsApp.
        Responde siempre en Español.`,
      },
    });

    return response.text || "Lo siento, no pude procesar tu solicitud. Por favor intenta de nuevo.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hubo un error al conectar con el asistente. Por favor, contacta directamente por teléfono.";
  }
};