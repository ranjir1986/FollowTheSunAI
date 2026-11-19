const express = require('express');
const path = require('path');
const app = express(); // <-- This is the missing line that caused the error!
const PORT = 3000;

// Import your agents
const ticketsData = require("./data/tickets.json");
const routeTicket = require("./agents/follow_the_sun_router");
const calculateRisk = require("./agents/escalation_risk_agent");
const estimateStaffing = require("./agents/workforce_planner");
const generateSummary = require("./agents/executive_summary_agent");
const { analyzeTicketWithAI } = require("./agents/ticket_intake_agent"); // We need this for the AI route

// Middleware
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json()); // This allows Express to read JSON from the frontend

// --- 1. The Dashboard API (Loads initial data) ---
app.get('/api/dashboard', (req, res) => {
    let totalTickets = ticketsData.length;
    let escalationCount = 0;
    let processedTickets = [];

    ticketsData.forEach((ticket) => {
        const routingResult = routeTicket(ticket);
        const risk = calculateRisk(ticket);

        if (risk === "CRITICAL" || risk === "HIGH") {
            escalationCount++;
        }

        processedTickets.push({
            ...ticket,
            assignedCenter: routingResult.assignedCenter,
            risk: risk
        });
    });

    const staffingPlan = estimateStaffing(totalTickets);
    
    const summaryText = generateSummary({
        totalTickets: totalTickets,
        escalations: escalationCount,
        csat: 94,
        agentsRequired: staffingPlan.agentsRequired
    });

    res.json({
        tickets: processedTickets,
        metrics: {
            totalTickets: totalTickets,
            escalations: escalationCount,
            agentsRequired: staffingPlan.agentsRequired,
            csat: 94
        },
        summary: summaryText
    });
});

// --- 2. The AI API (Processes new tickets from the form) ---
app.post('/api/analyze-ticket', async (req, res) => {
    const { ticketText, region } = req.body;

    // 1. AI analyzes the text
    const aiResult = await analyzeTicketWithAI(ticketText);
    
    // 2. Fake a ticket object so your other agents can process it
    const newTicket = {
        ticketId: "LIVE-" + Math.floor(Math.random() * 1000), // Random ID
        title: ticketText,
        region: region || "Global",
        customerTier: "Enterprise", 
        ...aiResult
    };

    // 3. Route and calculate risk
    const routingResult = routeTicket(newTicket);
    const risk = calculateRisk(newTicket);

    res.json({
        ticket: newTicket,
        assignedCenter: routingResult.assignedCenter,
        risk: risk
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`\n🚀 Server running! Open your browser to: http://localhost:${PORT}\n`);
});