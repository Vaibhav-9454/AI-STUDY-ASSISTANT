import { GoogleGenAI } from "@google/genai";

export async function generateStudyKit(notes) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const ai = new GoogleGenAI({
    apiKey,
  });

  const prompt = `
You are an AI Study Assistant.

Return ONLY valid JSON.
Do not include markdown.
Do not include \`\`\`json.
Do not include any explanation.

The JSON format must be:

{
  "summary": "",
  "flashcards": [
    {
      "question": "",
      "answer": ""
    }
  ],
  "quiz": [
    {
      "question": "",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "correctAnswer": ""
    }
  ],
  "checklist": [
    ""
  ]
}

Generate:
1. A concise summary.
2. At least 5 flashcards.
3. At least 5 MCQ quiz questions with four options and one correct answer.
4. A revision checklist.

Study Notes:

${notes}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    if (!response.text) {
      throw new Error("Empty response from Gemini");
    }

    return response.text;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw new Error(error.message || "Failed to generate study kit");
  }
}