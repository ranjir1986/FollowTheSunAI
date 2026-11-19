require('dotenv').config();
const askForTicket = require("./agents/ticket_intake_agent");
const routeTicket = require("./agents/follow_the_sun_router");

async function startAITest() {
    console.log("=================================");
    console.log("🤖 AI TICKET INTAKE TEST");
    console.log("=================================\n");

    // 1. Ask for the ticket
    const userTicket = await askForTicket();
    
    // 2. Fake a region for this test so the router works
    userTicket.region = "EMEA"; 
    userTicket.ticketId = "AI-001";

    // 3. Route the ticket
    const routingResult = routeTicket(userTicket);

    // 4. Print the results
    console.log("\n--- AI ANALYSIS COMPLETE ---");
    console.log(`Ticket: ${userTicket.ticket}`);
    console.log(`Category: ${userTicket.category}`);
    console.log(`Priority: ${userTicket.priority}`);
    console.log(`Assigned Team: ${userTicket.assignedTeam}`);
    console.log(`Routed to Center: ${routingResult.assignedCenter}`);
    console.log(`AI Model Used: ${userTicket.aiModelUsed}`); 
    console.log("----------------------------");
}

startAITest(); // <-- This is the line that actually runs the function!