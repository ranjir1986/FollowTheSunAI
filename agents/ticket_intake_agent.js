require('dotenv').config();
const readline = require("readline");
const OpenAI = require("openai");

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const freeModels = [
    "meta-llama/llama-3-8b-instruct:free",
    "mistralai/mistral-7b-instruct:free",
    "google/gemma-7b-it:free",
    "huggingfaceh4/zephyr-7b-beta:free"
];

// --- NEW FUNCTION FOR THE WEB ---
async function analyzeTicketWithAI(ticketText) {
    const prompt = `
        You are an expert support operations assistant.
        Analyze the following support ticket and return ONLY a valid JSON object with these three keys: "category", "priority", and "assignedTeam".
        - Category options: Authentication, Network, Messaging, or General.
        - Priority options: P1, P2, P3, or P4.
        - Team options: Identity Services, Network Operations, Email Services, or General Support.
        
        Ticket: "${ticketText}"
    `;

    for (let i = 0; i < freeModels.length; i++) {
        try {
            const completion = await openai.chat.completions.create({
                model: freeModels[i],
                messages: [{ role: "user", content: prompt }],
            });

            const aiText = completion.choices[0].message.content;
            const cleanedText = aiText.replace(/```json/g, "").replace(/```/g, "").trim();
            const aiResponse = JSON.parse(cleanedText);

            return { ...aiResponse, aiModelUsed: freeModels[i] };
        } catch (error) {
            console.log(`[Web AI] Model ${freeModels[i]} failed. Trying next...`);
        }
    }
    
    // Ultimate fallback
    return {
        category: "General", priority: "P4", assignedTeam: "General Support", aiModelUsed: "Fallback"
    };
}

// --- OLD FUNCTION FOR TERMINAL ---
async function askForTicket() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const ticketText = await new Promise((resolve) => {
        rl.question("Enter support ticket: ", (answer) => { resolve(answer); rl.close(); });
    });
    
    const aiResult = await analyzeTicketWithAI(ticketText);
    return { ticket: ticketText, ...aiResult };
}

// Export both functions
module.exports = { askForTicket, analyzeTicketWithAI };