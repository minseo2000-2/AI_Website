import { GoogleGenAI, Type } from "@google/genai";
import { AITool } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const suggestAITools = async (query: string): Promise<AITool[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Recommend 3-5 high-quality AI tools relevant to this user request: "${query}". 
      Ensure the URLs are valid and the descriptions are concise. 
      Return the response in strict JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              url: { type: Type.STRING },
              description: { type: Type.STRING },
              category: { type: Type.STRING },
            },
            required: ["name", "url", "description", "category"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];

    const rawTools = JSON.parse(text) as Omit<AITool, 'id'>[];
    
    // Add unique IDs
    return rawTools.map((tool) => ({
      ...tool,
      id: crypto.randomUUID(),
      isCustom: true
    }));

  } catch (error) {
    console.error("Failed to fetch AI suggestions:", error);
    return [];
  }
};