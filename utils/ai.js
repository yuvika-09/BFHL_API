import axios from "axios";

export const askAI = async (question) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Answer the following question in ONE WORD ONLY. 
Do not add explanation, articles, or extra text.

Question: ${question}`
              }
            ]
          }
        ]
      }
    );

    const text =
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) return "Unknown";

    return text.replace(/[^a-zA-Z]/g, "").trim();

  } catch (err) {
    console.error(
      "Gemini Error:",
      err.response?.data || err.message
    );
    throw new Error("AI_FAILED");
  }
};
