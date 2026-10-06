import axios from "axios";

export const askAi = async (messages) => {
    try {
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages array is empty.");
        }

        const models = [
            "google/gemma-4-31b-it:free",
            "nvidia/nemotron-3-super-120b-a12b:free",
        ];

        for (let index = 0; index < models.length; index += 1) {
            try {
                const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
                    {
                        model: models[index],
                        messages: messages
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                            'Content-Type': "application/json",
                        },
                    });
                const content = response?.data?.choices?.[0]?.message?.content;

                if (!content || !content.trim()) {
                    throw new Error("AI returned empty response.");
                }

                return content;
            } catch (error) {
                const hasFallback = index < models.length - 1;
                if (error.response?.status === 429 && hasFallback) {
                    console.warn(`${models[index]} is rate-limited; trying ${models[index + 1]}.`);
                    continue;
                }

                console.error("OpenRouter Error:", error.response?.data || error.message);
                throw new Error("OpenRouter API Error");
            }
        }
    } catch (error) {
        throw error;
    }
}