const ticketsData = require("./data/tickets.json");
const routeTicket = require("./agents/follow_the_sun_router");
const calculateRisk = require("./agents/escalation_risk_agent");
const estimateStaffing = require("./agents/workforce_planner");
const generateSummary = require("./agents/executive_summary_agent");

function runPlatform() {
    console.log("=================================");
    console.log("AI-POWERED SUPPORT PLATFORM");
    console.log("=================================\n");

    let totalTickets = ticketsData.length;
    let escalationCount = 0;

    // Process each ticket
    ticketsData.forEach((ticket) => {
        const routingResult = routeTicket(ticket);
        const risk = calculateRisk(ticket);

        // Count how many are critical or high risk
        if (risk === "CRITICAL" || risk === "HIGH") {
            escalationCount++;
        }

        console.log(`Ticket: ${ticket.ticketId} - ${ticket.title}`);
        console.log(`Priority: ${ticket.priority} | Region: ${ticket.region}`);
        console.log(`Assigned Center: ${routingResult.assignedCenter}`);
        console.log(`Escalation Risk: ${risk}`);
        console.log("---------------------------------\n");
    });

    // Run the Workforce Planner
    const staffingPlan = estimateStaffing(totalTickets);

    // Run the Executive Summary
    const summaryMetrics = {
        totalTickets: totalTickets,
        escalations: escalationCount,
        csat: 94, // We will just pretend CSAT is 94% for this demo
        agentsRequired: staffingPlan.agentsRequired
    };

    const finalSummary = generateSummary(summaryMetrics);
    
    // Print the final summary
    console.log(finalSummary);
}

runPlatform();