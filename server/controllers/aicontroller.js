import { generateStudyKit } from "../services/geminiService.js";

export async function generate(req, res) {
  try {
    const { notes } = req.body;

    if (!notes || notes.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Notes are required",
      });
    }

    const rawData = await generateStudyKit(notes);

    // Remove markdown if Gemini returns it
    const cleaned = rawData
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(cleaned);

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate study kit",
      error: error.message,
    });
  }
}